import fs from "node:fs";
import path from "node:path";
import { normalizeFrontmatterDate, parseFrontmatter } from "./frontmatter.mjs";

const workspaceDir = process.env.SEOSONA_WORKSPACE
  ? path.resolve(process.env.SEOSONA_WORKSPACE)
  : process.cwd();
const appDir = path.join(workspaceDir, "app");
const contentDir = path.join(workspaceDir, "content");
const errors = [];
const warnings = [];

function pass(message) {
  console.log(`[PASS] ${message}`);
}

function info(message) {
  console.log(`[INFO] ${message}`);
}

function warn(message) {
  warnings.push(message);
  console.log(`[WARN] ${message}`);
}

function fail(message) {
  errors.push(message);
  console.log(`[ERROR] ${message}`);
}

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (error) {
    fail(`${path.relative(workspaceDir, filePath)} could not be read: ${error.message}`);
    return "";
  }
}

function extractQuotedField(content, fieldName) {
  const match = content.match(new RegExp(`${fieldName}:\\s*(["'])([\\s\\S]*?)\\1`));
  return match?.[2] ?? null;
}

function auditConfig() {
  const configPath = path.join(workspaceDir, "next.config.ts");
  if (!fs.existsSync(configPath)) {
    fail("next.config.ts not found.");
    return;
  }

  const content = readFile(configPath);
  const redirectMatches = [
    ...content.matchAll(/source:\s*["']([^"']+)["'],\s*destination:\s*["']([^"']+)["']/g)
  ];

  if (redirectMatches.length === 0) {
    warn("No redirect rules parsed in next.config.ts.");
    return;
  }

  for (const match of redirectMatches) {
    const [, source, destination] = match;
    if (source === destination) fail(`Redirect self-loop detected: ${source}`);
  }

  const requiredProductionRedirects = [
    ["/ranking-factors/:post/", "/seo/ranking-factors/:post/"],
    ["/dich-vu-tu-van-chien-luoc-seo/", "/tu-van-seo-chuyen-sau/"],
    ["/bootcamp-2026-google-marketing-trong-ki-nguyen-ai/", "/chi-quyet-academy/"],
    ["/bao-cao-thu-thap-du-lieu-tu-100k-tu-khoa-ve-ai-overview/", "/p/bao-cao-thu-thap-du-lieu-tu-100k-tu-khoa-ve-ai-overview/"],
    ["/dao-tao-seo/", "/khoa-hoc-seo/"],
    ["/dich-vu-cham-soc-website/", "/p/dich-vu-cham-soc-website/"],
    ["/tuyen-dung-ctv-content-seo/", "/p/tuyen-dung-ctv-content-seo/"]
  ];
  const redirectPairs = new Set(redirectMatches.map(([, source, destination]) => `${source}=>${destination}`));
  for (const [source, destination] of requiredProductionRedirects) {
    if (!redirectPairs.has(`${source}=>${destination}`)) {
      fail(`Production URL mapping is missing: ${source} -> ${destination}`);
    }
  }

  pass(`${redirectMatches.length} redirect rules parsed without self-loops.`);
}

function auditMetadataRoutes() {
  for (const file of ["robots.ts", "sitemap.ts"]) {
    const filePath = path.join(appDir, file);
    if (!fs.existsSync(filePath)) {
      fail(`${file} not found.`);
      continue;
    }

    const content = readFile(filePath);
    if (content.includes('export const dynamic = "force-static"')) {
      pass(`${file} is configured as force-static.`);
    } else {
      warn(`${file} is missing the force-static export flag.`);
    }
  }

  const sitemap = readFile(path.join(appDir, "sitemap.ts"));
  if (sitemap.includes("new Map(entries.map")) {
    pass("sitemap.ts deduplicates canonical URLs before returning entries.");
  } else {
    warn("sitemap.ts has no explicit canonical URL deduplication guard.");
  }

  if (sitemap.includes("!page.noIndex")) {
    pass("sitemap.ts excludes MDX pages marked noindex.");
  } else {
    warn("sitemap.ts does not visibly exclude MDX pages marked noindex.");
  }
}

function scanPages(dir, routePath = "") {
  if (!fs.existsSync(dir)) {
    fail(`App directory not found: ${path.relative(workspaceDir, dir)}`);
    return;
  }

  for (const file of fs.readdirSync(dir).sort()) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!["api", "node_modules", ".git", ".next"].includes(file)) {
        const nextRoute = routePath === "" ? `/${file}` : `${routePath}/${file}`;
        scanPages(fullPath, nextRoute);
      }
      continue;
    }

    if (file !== "page.tsx") continue;

    const pageRoute = routePath === "" ? "/" : routePath;
    const content = readFile(fullPath);
    const title = extractQuotedField(content, "title");
    const description = extractQuotedField(content, "description");

    if (!title && !content.includes("generateMetadata")) {
      fail(`${pageRoute} has no static title and no generateMetadata.`);
    }

    if (!description && !content.includes("generateMetadata")) {
      warn(`${pageRoute} has no statically detectable description.`);
    }

    if (content.includes("generateMetadata") || content.includes("export const metadata")) {
      pass(`${pageRoute} exposes metadata through static or dynamic metadata.`);
    }

    if (content.includes("JsonLd") || content.includes("@context")) {
      pass(`${pageRoute} includes structured data.`);
    } else {
      warn(`${pageRoute} has no statically detectable JSON-LD schema.`);
    }
  }
}

function getCoreRoutes() {
  const siteSource = readFile(path.join(workspaceDir, "lib", "site.ts"));
  const coreBlock = siteSource.match(/export const coreRoutes = \[(.*?)\n\];/s)?.[1] ?? "";
  return [...coreBlock.matchAll(/(["'])(\/[^"']*)\1/g)].map((match) => match[2]);
}

function getGeneratedRoutes() {
  const routes = new Set(getCoreRoutes());
  for (const kind of ["blog", "pages"]) {
    const dir = path.join(contentDir, kind);
    if (!fs.existsSync(dir)) continue;

    for (const file of fs.readdirSync(dir).filter((name) => name.endsWith(".mdx"))) {
      const parsed = parseFrontmatter(readFile(path.join(dir, file)));
      if (parsed.data.draft === true) continue;
      const slug = typeof parsed.data.slug === "string" && parsed.data.slug.trim()
        ? parsed.data.slug.trim()
        : file.replace(/\.mdx$/, "");
      routes.add(kind === "blog"
        ? `/seo/${parsed.data.categorySlug}/${slug}/`
        : `/p/${slug}/`);
    }
  }

  return routes;
}

function auditInternalLinks() {
  const siteSource = readFile(path.join(workspaceDir, "lib", "site.ts"));
  const aliasBlock = siteSource.match(/const legacyAliases: Record<string, string> = \{(.*?)\n\s*\};/s)?.[1] ?? "";
  const aliases = Object.fromEntries(
    [...aliasBlock.matchAll(/["']([^"']+)["']:\s*["']([^"']+)["']/g)].map((match) => [match[1], match[2]])
  );
  const routes = getGeneratedRoutes();
  const roots = ["app", "components", "lib", "content", "data"];
  const unknown = new Map();

  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const name of fs.readdirSync(dir)) {
      if (["node_modules", ".next", ".git"].includes(name)) continue;
      const filePath = path.join(dir, name);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walk(filePath);
        continue;
      }
      if (!/\.(tsx|ts|mdx)$/.test(name)) continue;

      const content = readFile(filePath);
      const references = [
        ...content.matchAll(/(?:href|src)\s*=\s*["'](\/[^"']*)["']/g),
        ...content.matchAll(/!?\[[^\]]*\]\((\/[^)\s]+)/g)
      ];

      for (const reference of references) {
        const raw = reference[1];
        const route = raw.split("#")[0].split("?")[0];
        if (!route || route.startsWith("/_next") || route.startsWith("/images") || route.startsWith("/favicon") || /\.(png|jpg|jpeg|gif|svg|webp|ico|mp4|webm|pdf|zip)$/i.test(route)) continue;
        const normalized = route.endsWith("/") ? route : `${route}/`;
        const target = aliases[normalized] ?? normalized;
        if (!routes.has(target) && !unknown.has(normalized)) unknown.set(normalized, path.relative(workspaceDir, filePath));
      }
    }
  }

  for (const root of roots) walk(path.join(workspaceDir, root));
  if (unknown.size === 0) pass("All static internal links resolve to known routes or approved legacy aliases.");
  else for (const [route, source] of unknown) fail(`Unresolved internal link ${route} in ${source}`);
}

function auditMdxContent() {
  const safeSlugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  const hubSource = readFile(path.join(workspaceDir, "data", "seo-hubs.ts"));
  const knownHubs = new Set(
    [...hubSource.matchAll(/^\s*["']([^"']+)["']:\s*\{/gm)].map((match) => match[1])
  );
  const routeSet = new Set(getCoreRoutes());
  const stats = {
    blog: 0,
    pages: 0,
    publishedBlog: 0,
    publishedPages: 0,
    explicitDescriptions: 0,
    fallbackDescriptions: 0,
    missingBlogCovers: 0,
    missingIndexablePageCovers: 0,
    missingNoIndexCovers: 0,
    noIndexPages: 0
  };

  for (const kind of ["blog", "pages"]) {
    const dir = path.join(contentDir, kind);
    if (!fs.existsSync(dir)) {
      fail(`Missing MDX directory: ${path.relative(workspaceDir, dir)}`);
      continue;
    }

    const seenSlugs = new Set();
    for (const file of fs.readdirSync(dir).filter((name) => name.endsWith(".mdx")).sort()) {
      const filePath = path.join(dir, file);
      const relativePath = path.relative(workspaceDir, filePath);
      const raw = readFile(filePath);
      let data;
      let content = "";

      try {
        const parsed = parseFrontmatter(raw);
        data = parsed.data;
        content = parsed.content.trim();
      } catch (error) {
        fail(`${relativePath} has invalid frontmatter: ${error.message}`);
        continue;
      }

      const slug = typeof data.slug === "string" && data.slug.trim()
        ? data.slug.trim()
        : file.replace(/\.mdx$/, "");
      const title = typeof data.title === "string" ? data.title.trim() : "";
      const date = normalizeFrontmatterDate(data.date);
      const categorySlug = typeof data.categorySlug === "string" ? data.categorySlug.trim() : "";
      const hasExplicitDescription = Boolean(
        (typeof data.meta_description === "string" && data.meta_description.trim()) ||
        (typeof data.description === "string" && data.description.trim())
      );
      const isDraft = data.draft === true;
      const isNoIndex = data.noindex === true || data.noIndex === true;

      stats[kind] += 1;
      if (!title) fail(`${relativePath} is missing title.`);
      if (!date) fail(`${relativePath} is missing date.`);
      if (date && Number.isNaN(new Date(date).getTime())) fail(`${relativePath} has an invalid date: ${date}`);
      if (!safeSlugPattern.test(slug)) fail(`${relativePath} has an unsafe slug: ${slug}`);
      if (seenSlugs.has(slug)) fail(`${kind} contains duplicate slug: ${slug}`);
      seenSlugs.add(slug);

      if (kind === "blog") {
        if (!categorySlug) fail(`${relativePath} is missing categorySlug.`);
        if (categorySlug && !knownHubs.has(categorySlug)) fail(`${relativePath} references unknown categorySlug: ${categorySlug}`);
      }

      if (isDraft) continue;
      if (!content) warn(`${relativePath} is published but has no body content; review it or mark it as draft.`);
      stats[kind === "blog" ? "publishedBlog" : "publishedPages"] += 1;
      if (isNoIndex) stats.noIndexPages += 1;
      if (hasExplicitDescription) stats.explicitDescriptions += 1;
      else stats.fallbackDescriptions += 1;
      if (typeof data.coverImage !== "string" || !data.coverImage.trim()) {
        if (kind === "blog") stats.missingBlogCovers += 1;
        else if (isNoIndex) stats.missingNoIndexCovers += 1;
        else stats.missingIndexablePageCovers += 1;
      }

      const route = kind === "blog"
        ? `/seo/${categorySlug}/${slug}/`
        : `/p/${slug}/`;
      if (routeSet.has(route)) fail(`Generated MDX route collides with another route: ${route}`);
      routeSet.add(route);
    }
  }

  const coreRoutes = getCoreRoutes();
  const duplicateCoreRoutes = coreRoutes.filter((route, index) => coreRoutes.indexOf(route) !== index);
  if (duplicateCoreRoutes.length) fail(`coreRoutes contains duplicates: ${duplicateCoreRoutes.join(", ")}`);
  else pass(`${coreRoutes.length} core routes are unique.`);

  pass(`${stats.blog} blog MDX files and ${stats.pages} page MDX files have been scanned.`);
  info(`${stats.publishedBlog} published posts, ${stats.publishedPages} published pages, ${stats.noIndexPages} noindex pages, ${stats.explicitDescriptions} explicit descriptions, ${stats.fallbackDescriptions} safe metadata fallbacks.`);
  if (stats.missingBlogCovers > 0) warn(`${stats.missingBlogCovers} published blog posts have no coverImage; add a representative local asset or verify that this is intentional.`);
  if (stats.missingIndexablePageCovers > 0) info(`${stats.missingIndexablePageCovers} indexable landing/content pages omit coverImage by design.`);
  if (stats.missingNoIndexCovers > 0) info(`${stats.missingNoIndexCovers} noindex conversion pages omit coverImage by design.`);
}

console.log("=== SEOSONA Automated SEO & Content Integrity Audit ===\n");
auditConfig();
auditMetadataRoutes();
console.log("\n--- Scanning App Routes ---");
scanPages(appDir);
console.log("\n--- Scanning MDX Frontmatter & Generated Routes ---");
auditMdxContent();
console.log("\n--- Scanning Internal Links ---");
auditInternalLinks();

console.log("\n=== Audit Summary ===");
if (errors.length === 0) pass(`No blocking issues found (${warnings.length} warnings).`);
else fail(`${errors.length} blocking issue(s) found (${warnings.length} warnings).`);

process.exitCode = errors.length > 0 ? 1 : 0;
