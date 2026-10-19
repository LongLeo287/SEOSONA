import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const workspaceDir = process.cwd();
const ignoredDirectories = new Set([
  ".git",
  ".next",
  ".playwright-cli",
  ".superpowers",
  "node_modules",
  "out",
  ".vercel"
]);
const textExtensions = new Set([
  ".cjs",
  ".css",
  ".env",
  ".example",
  ".html",
  ".js",
  ".json",
  ".md",
  ".mdx",
  ".mjs",
  ".py",
  ".tsx",
  ".ts",
  ".txt",
  ".yml",
  ".yaml"
]);

const patterns = [
  ["AWS access key", /AKIA[0-9A-Z]{16}/],
  ["OpenAI API key", /\bsk-[A-Za-z0-9]{20,}\b/],
  ["Anthropic API key", /\bsk-ant-api03-[A-Za-z0-9_-]{20,}\b/],
  ["private key", /-----BEGIN (?:RSA|OPENSSH|EC|DSA) PRIVATE KEY-----/],
  ["Supabase service key", /\bsbp_[A-Za-z0-9]{20,}\b/],
  ["Hugging Face token", /\bhf_[A-Za-z0-9]{20,}\b/],
  ["Replicate token", /\br8_[A-Za-z0-9]{20,}\b/],
  [
    "hard-coded credential assignment",
    /\b(?:api[_-]?key|client[_-]?secret|password|passwd|private[_-]?key|secret|token)\b\s*[:=]\s*["'`](?!["'`]|process\.env|import\.meta\.env)[^"'`\r\n]{8,}["'`]/i
  ]
];

function listWorkspaceFiles() {
  const output = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard"], {
    cwd: workspaceDir,
    encoding: "utf8"
  });
  return [...new Set(output.split(/\r?\n/).filter(Boolean))];
}

function isTextFile(relativePath) {
  return textExtensions.has(path.extname(relativePath).toLowerCase()) || path.basename(relativePath).startsWith(".env");
}

const findings = [];
for (const relativePath of listWorkspaceFiles()) {
  const parts = relativePath.split(/[\\/]/);
  if (parts.some((part) => ignoredDirectories.has(part)) || !isTextFile(relativePath)) continue;

  const absolutePath = path.join(workspaceDir, relativePath);
  let source;
  try {
    source = fs.readFileSync(absolutePath, "utf8");
  } catch {
    continue;
  }

  for (const [label, pattern] of patterns) {
    const match = pattern.exec(source);
    if (!match) continue;
    const line = source.slice(0, match.index).split(/\r?\n/).length;
    findings.push(`${label}: ${relativePath}:${line}`);
  }
}

if (findings.length) {
  for (const finding of findings) console.error(`[ERROR] ${finding}`);
  process.exit(1);
}

console.log(`[PASS] Security audit: scanned ${listWorkspaceFiles().length} Git-visible files with no credential patterns found.`);
