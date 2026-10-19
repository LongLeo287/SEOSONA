import fs from "node:fs";

const errors = [];
const vercelConfig = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
const envExample = fs.readFileSync(".env.example", "utf8");
const siteSource = fs.readFileSync("lib/site.ts", "utf8");

if (vercelConfig.git?.deploymentEnabled !== false) {
  errors.push("vercel.json must keep automatic Git deployments disabled until explicit launch authorization.");
}

if (!envExample.includes("SEOSONA_LEAD_WEBHOOK_URL=") || !envExample.includes("SEOSONA_LEAD_WEBHOOK_TOKEN=")) {
  errors.push(".env.example must document the lead webhook variables.");
}

if (!envExample.includes("NEXT_PUBLIC_SITE_URL=")) {
  errors.push(".env.example must document the canonical site origin variable.");
}

if (!siteSource.includes("process.env.NEXT_PUBLIC_SITE_URL")) {
  errors.push("lib/site.ts must resolve the canonical site origin from NEXT_PUBLIC_SITE_URL with a safe production fallback.");
}

if (!fs.existsSync(".env.example")) {
  errors.push("The checked-in environment template is missing.");
}

if (errors.length) {
  for (const error of errors) console.error(`[ERROR] ${error}`);
  process.exit(1);
}

console.log("[PASS] Release audit: deployment safety and environment contract are explicit.");
