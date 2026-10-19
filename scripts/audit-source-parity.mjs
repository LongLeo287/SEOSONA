const sourceOrigin = new URL(process.env.SEOSONA_SOURCE_URL || "https://seosona.com/");
const localOrigin = new URL(process.env.SEOSONA_BASE_URL || "http://localhost:3013/");
const sitemapUrl = new URL("/sitemap.xml", sourceOrigin.origin);
const sitemapTimeoutMs = 30_000;
const failures = [];
const visitedSitemaps = new Set();
const sourceUrlEntries = [];
const sourceUrls = new Set();
const redirects = [];

function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

function extractLocations(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((match) => decodeXml(match[1].trim()));
}

async function request(url, init = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), sitemapTimeoutMs);
  try {
    return await fetch(url, {
      redirect: "manual",
      ...init,
      signal: controller.signal,
      headers: { "user-agent": "seosona-source-parity-audit/1.0", ...(init.headers || {}) },
    });
  } finally {
    clearTimeout(timer);
  }
}

async function collectSitemap(url) {
  if (visitedSitemaps.has(url)) return;
  visitedSitemaps.add(url);

  let response;
  try {
    response = await request(url, { redirect: "follow" });
  } catch (error) {
    failures.push(`sitemap request failed: ${url} (${error.message})`);
    return;
  }

  if (response.status !== 200) {
    failures.push(`sitemap expected 200, received ${response.status}: ${url}`);
    return;
  }

  const xml = await response.text();
  const locations = extractLocations(xml);
  if (xml.includes("<sitemapindex") || locations.some((location) => /sitemap(?:[-_]|\.)/i.test(location))) {
    for (const location of locations) await collectSitemap(location);
    return;
  }

  for (const location of locations) {
    sourceUrlEntries.push(location);
    sourceUrls.add(location);
  }
}

async function followLocal(url) {
  let current = url;
  for (let hop = 0; hop <= 5; hop += 1) {
    let response;
    try {
      response = await request(current);
    } catch (error) {
      return { status: 0, finalUrl: current, error: error.message };
    }

    if (![301, 302, 303, 307, 308].includes(response.status)) {
      return { status: response.status, finalUrl: current };
    }

    const location = response.headers.get("location");
    if (!location) return { status: response.status, finalUrl: current, error: "redirect has no location" };
    current = new URL(location, current).toString();
  }
  return { status: 0, finalUrl: current, error: "redirect chain exceeded 5 hops" };
}

await collectSitemap(sitemapUrl.toString());

for (const sourceUrl of [...sourceUrls].sort()) {
  let parsed;
  try {
    parsed = new URL(sourceUrl);
  } catch {
    failures.push(`invalid source sitemap URL: ${sourceUrl}`);
    continue;
  }

  const localUrl = new URL(`${parsed.pathname}${parsed.search}`, localOrigin).toString();
  const result = await followLocal(localUrl);
  if (result.status !== 200) {
    failures.push(`${parsed.pathname} expected local 200, received ${result.status}${result.error ? ` (${result.error})` : ""}`);
    continue;
  }
  if (result.finalUrl !== localUrl) redirects.push({ source: parsed.pathname, local: localUrl, final: result.finalUrl });
}

console.log(`Source sitemap entries: ${sourceUrlEntries.length}; unique: ${sourceUrls.size}; sitemap documents: ${visitedSitemaps.size}.`);
console.log(`Local parity: ${sourceUrls.size - failures.length}/${sourceUrls.size} source URLs reached HTTP 200; redirects followed: ${redirects.length}.`);
if (redirects.length) {
  console.log(`Redirect samples: ${redirects.slice(0, 12).map(({ source, final }) => `${source} -> ${new URL(final).pathname}`).join(" | ")}`);
}

if (failures.length) {
  for (const failure of failures.slice(0, 20)) console.error(`[ERROR] ${failure}`);
  if (failures.length > 20) console.error(`[ERROR] ${failures.length - 20} more failures omitted.`);
  process.exit(1);
}

console.log(`[PASS] Source parity audit: all ${sourceUrls.size} production sitemap URLs resolve on the local rebuild.`);
