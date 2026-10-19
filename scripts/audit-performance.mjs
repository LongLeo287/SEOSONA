import fs from "node:fs";
import path from "node:path";

const workspaceDir = process.cwd();
const errors = [];

function read(relativePath) {
  return fs.readFileSync(path.join(workspaceDir, relativePath), "utf8");
}

const serverEligibleSections = [
  "components/sections/academy/AcademyBenefits.tsx",
  "components/sections/academy/AcademyInstructor.tsx",
  "components/sections/Testimonials.tsx"
];

for (const relativePath of serverEligibleSections) {
  if (/^["']use client["'];/m.test(read(relativePath))) {
    errors.push(`${relativePath} still declares use client without local client behavior.`);
  }
}

function scanImages(dir) {
  for (const name of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, name);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) scanImages(fullPath);
    if (!stat.isFile() || !/\.(tsx|jsx)$/.test(name)) continue;

    const source = fs.readFileSync(fullPath, "utf8");
    for (const match of source.matchAll(/<Image\b[\s\S]*?\/>/g)) {
      const tag = match[0];
      if (/\bfill\b/.test(tag) && !/\bsizes\s*=/.test(tag)) {
        errors.push(`${path.relative(workspaceDir, fullPath)} has a fill image without sizes.`);
      }
    }
  }
}

scanImages(path.join(workspaceDir, "app"));
scanImages(path.join(workspaceDir, "components"));

if (errors.length) {
  for (const error of errors) console.error(`[ERROR] ${error}`);
  process.exit(1);
}

console.log("[PASS] Performance static audit: client boundaries and fill-image sizes are clean.");
