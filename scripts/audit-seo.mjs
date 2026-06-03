import fs from 'fs';
import path from 'path';

const workspaceDir = 'd:\\Website SEOSONA';
const appDir = path.join(workspaceDir, 'app');

console.log('=== SEOSONA Automated SEO Migration Audit ===\n');

// 1. Audit next.config.ts redirects
function auditConfig() {
  const configPath = path.join(workspaceDir, 'next.config.ts');
  if (!fs.existsSync(configPath)) {
    console.log('[ERROR] next.config.ts not found.');
    return;
  }
  const content = fs.readFileSync(configPath, 'utf-8');
  console.log('[INFO] next.config.ts loaded.');
  
  // Find redirect blocks
  const redirectMatches = [...content.matchAll(/source:\s*["']([^"']+)["'],\s*destination:\s*["']([^"']+)["']/g)];
  if (redirectMatches.length > 0) {
    console.log(`[PASS] Found ${redirectMatches.length} redirect rules defined:`);
    for (const match of redirectMatches) {
      console.log(`  - Redirect: ${match[1]} -> ${match[2]}`);
    }
  } else {
    console.log('[WARN] No redirect rules parsed in next.config.ts (or they are structured dynamically).');
  }
}

// 2. Audit robots.ts and sitemap.ts
function auditMetadataRoutes() {
  const robotsPath = path.join(appDir, 'robots.ts');
  if (fs.existsSync(robotsPath)) {
    const content = fs.readFileSync(robotsPath, 'utf-8');
    if (content.includes('force-static')) {
      console.log('[PASS] robots.ts is configured as force-static for Static Export.');
    } else {
      console.log('[WARN] robots.ts is missing force-static export flag.');
    }
  } else {
    console.log('[ERROR] robots.ts not found.');
  }

  const sitemapPath = path.join(appDir, 'sitemap.ts');
  if (fs.existsSync(sitemapPath)) {
    const content = fs.readFileSync(sitemapPath, 'utf-8');
    if (content.includes('force-static')) {
      console.log('[PASS] sitemap.ts is configured as force-static for Static Export.');
    } else {
      console.log('[WARN] sitemap.ts is missing force-static export flag.');
    }
  } else {
    console.log('[ERROR] sitemap.ts not found.');
  }
}

// 3. Scan page.tsx files for metadata and Zod schema validation
function scanPages(dir, routePath = '') {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'api' && file !== 'node_modules' && file !== '.git' && file !== '.next') {
        const nextRoute = routePath === '' ? `/${file}` : `${routePath}/${file}`;
        scanPages(fullPath, nextRoute);
      }
    } else if (file === 'page.tsx') {
      const pageRoute = routePath === '' ? '/' : routePath;
      try {
        const content = fs.readFileSync(fullPath, 'utf-8');
        console.log(`\nAuditing route: ${pageRoute} (${path.relative(workspaceDir, fullPath)})`);
        
        // Audit title
        const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
        if (titleMatch) {
          const title = titleMatch[1];
          const len = title.length;
          if (len >= 40 && len <= 60) {
            console.log(`  [PASS] Title: "${title}" (${len} chars)`);
          } else {
            console.log(`  [WARN] Title length is out of range [40-60]: "${title}" (${len} chars)`);
          }
        } else {
          console.log('  [WARN] Title tag metadata not found or dynamic.');
        }

        // Audit description
        const descMatch = content.match(/description:\s*["']([^"']+)["']/);
        if (descMatch) {
          const desc = descMatch[1];
          const len = desc.length;
          if (len >= 110 && len <= 160) {
            console.log(`  [PASS] Description: "${desc.slice(0, 50)}..." (${len} chars)`);
          } else {
            console.log(`  [WARN] Description length is out of range [110-160]: "${desc.slice(0, 50)}..." (${len} chars)`);
          }
        } else {
          console.log('  [WARN] Description metadata not found or dynamic.');
        }

        // Audit JSON-LD Schemas
        if (content.includes('JsonLd') || content.includes('Schema') || content.includes('@context')) {
          console.log('  [PASS] Structured JSON-LD schemas detected.');
        } else {
          console.log('  [INFO] No JSON-LD schema detected on this page.');
        }
      } catch (err) {
        console.log(`  [ERROR] Failed to read ${fullPath}: ${err.message}`);
      }
    }
  }
}

auditConfig();
console.log('');
auditMetadataRoutes();
console.log('\n--- Scanning Page Routes for Meta & Schemas ---');
scanPages(appDir);
console.log('\n=== Audit Complete ===');
