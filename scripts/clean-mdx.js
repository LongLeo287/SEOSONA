const fs = require("fs");
const path = require("path");

const CONTENT_DIRS = [
  path.join(__dirname, "..", "content", "blog"),
  path.join(__dirname, "..", "content", "pages")
];

function cleanContent(content) {
  let cleaned = content;

  // 1. Remove ALL Flatsome Inline CSS injections, including those with child selectors
  // Example: #section\_747287398 .section-bg.bg-loaded { ... }
  // The regex looks for the flatsome ID, then any characters until '{', then anything until '}'
  const cssRegex = /(?:#section\\?_[a-zA-Z0-9_]+|#gap\\?-\d+|#image\\?_[a-zA-Z0-9_]+|#text\\?-\d+|\.cls\\?-\d+)[^\{]*\{[^}]+\}/g;
  cleaned = cleaned.replace(cssRegex, "");

  // 2. Remove broken markdown links and trailing artifacts
  cleaned = cleaned.replace(/^\[\s*$/gm, "");
  cleaned = cleaned.replace(/^\]\(\/\)\s*$/gm, "");
  cleaned = cleaned.replace(/\[\s*\]\(\/\)/g, "");
  // Remove corrupted trailing image markdown from nested syntax e.g., `](/images/...)` or `](/...)`
  cleaned = cleaned.replace(/\]\(\/?(images\/[^)]+)?\)/g, "");
  
  // 3. Remove/Replace useless shortcodes and icon texts
  cleaned = cleaned.replace(/\\?\[telegram\\?\]/g, "");
  cleaned = cleaned.replace(/action \/ 12 - action, favorite, circle, favourite, like, rating, button, star icon/gi, "⭐");
  cleaned = cleaned.replace(/^rocket-launch$/gm, "🚀");
  cleaned = cleaned.replace(/^time-update$/gm, "⏳");
  cleaned = cleaned.replace(/^\s*increase-level\s*$/gm, "📈");

  // 4. Remove leaking colons at the start of paragraphs (e.g., ": Dịch vụ SEO")
  cleaned = cleaned.replace(/^:\s+/gm, "");

  // 5. Clean up multiple consecutive newlines created by deletion
  cleaned = cleaned.replace(/\n{3,}/g, "\n\n");
  // Also clean up stray spaces left by the CSS deletion at the start of lines
  cleaned = cleaned.replace(/^ +/gm, "");

  return cleaned;
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  let updatedCount = 0;

  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updatedCount += processDirectory(fullPath);
    } else if (fullPath.endsWith(".mdx") || fullPath.endsWith(".md")) {
      const content = fs.readFileSync(fullPath, "utf-8");
      const cleanedContent = cleanContent(content);

      if (content !== cleanedContent) {
        fs.writeFileSync(fullPath, cleanedContent, "utf-8");
        updatedCount++;
        console.log(`Cleaned: ${file}`);
      }
    }
  }

  return updatedCount;
}

let totalUpdated = 0;
for (const dir of CONTENT_DIRS) {
  if (fs.existsSync(dir)) {
    console.log(`Scanning directory: ${dir}`);
    totalUpdated += processDirectory(dir);
  }
}

console.log(`\nCleanup Complete! Successfully cleaned ${totalUpdated} files.`);
