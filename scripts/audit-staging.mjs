const baseUrl = new URL(process.env.SEOSONA_BASE_URL || "http://localhost:3013/");
baseUrl.pathname = baseUrl.pathname.replace(/\/$/, "");

const checks = [
  ["homepage", "/", 200],
  ["contact page", "/lien-he/", 200],
  ["case studies", "/case-study/", 200],
  ["SEO hub", "/seo/", 200],
  ["robots", "/robots.txt", 200],
  ["sitemap", "/sitemap.xml", 200]
];
const failures = [];

function target(pathname) {
  return new URL(pathname, `${baseUrl.origin}${baseUrl.pathname}/`).toString();
}

async function request(pathname, init = {}) {
  return fetch(target(pathname), { redirect: "manual", ...init });
}

for (const [label, pathname, expectedStatus] of checks) {
  try {
    const response = await request(pathname);
    if (response.status !== expectedStatus) {
      failures.push(`${label} expected ${expectedStatus}, received ${response.status}`);
    }
  } catch (error) {
    failures.push(`${label} request failed: ${error.message}`);
  }
}

try {
  const sitemap = await request("/sitemap.xml");
  const body = await sitemap.text();
  if (!body.includes("<urlset") && !body.includes("<sitemapindex")) {
    failures.push("sitemap response is not valid XML sitemap output");
  }
} catch (error) {
  failures.push(`sitemap body check failed: ${error.message}`);
}

try {
  const missing = await request("/__seosona_missing_route__/");
  if (missing.status !== 404) failures.push(`404 route expected 404, received ${missing.status}`);
} catch (error) {
  failures.push(`404 route check failed: ${error.message}`);
}

try {
  const favicon = await request("/favicon.ico");
  const location = favicon.headers.get("location") || "";
  if (![301, 308].includes(favicon.status) || !location.includes("/icon.svg")) {
    failures.push(`favicon redirect expected 301/308 to /icon.svg, received ${favicon.status} ${location}`);
  }
} catch (error) {
  failures.push(`favicon redirect check failed: ${error.message}`);
}

try {
  const contact = await request("/api/contact/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: "{}"
  });
  if (contact.status !== 400) failures.push(`contact validation expected 400 for empty payload, received ${contact.status}`);
} catch (error) {
  failures.push(`contact validation check failed: ${error.message}`);
}

if (failures.length) {
  for (const failure of failures) console.error(`[ERROR] ${failure}`);
  process.exit(1);
}

console.log(`[PASS] Staging smoke audit: ${checks.length + 4} checks passed for ${baseUrl.origin}${baseUrl.pathname || "/"}.`);
