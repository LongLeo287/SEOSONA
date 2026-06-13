import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sectionsDir = path.join(__dirname, '../components/sections');

const files = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Pattern 1: <span className="badge-accent..."><Icon /> Text</span>
  // Pattern 2: <span className="badge-accent-light..."><Icon /> Text</span>
  
  // We will do a generic regex replace for badge-accent and badge-accent-light
  const badgeRegex = /<span className="badge-accent(?:-light)?(?:[^"]*)">\s*(?:<([A-Z][a-zA-Z0-9]*)\s*className="[^"]*"\s*\/>\s*)?(.*?)\s*<\/span>/gs;
  
  content = content.replace(badgeRegex, (match, iconName, text) => {
    changed = true;
    const cleanText = text.replace(/<[^>]*>/g, '').trim(); // Remove any inner spans just in case
    
    // Add import if needed
    if (!content.includes('SectionBadge')) {
      content = 'import { SectionBadge } from "@/components/ui/SectionBadge";\n' + content;
    }
    
    if (iconName) {
      // Ensure icon is imported (we assume it is since it was used)
      return `<SectionBadge icon={<${iconName} className="h-3.5 w-3.5" />} live={true}>\n              ${cleanText}\n            </SectionBadge>`;
    } else {
      return `<SectionBadge live={true}>\n              ${cleanText}\n            </SectionBadge>`;
    }
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}
