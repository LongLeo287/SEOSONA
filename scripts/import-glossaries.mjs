import fs from "node:fs";
import path from "node:path";
import TurndownService from "turndown";

const SOURCE_ORIGIN = "https://seosona.com";
const OUTPUT_DIRECTORY = path.join(process.cwd(), "content", "blog");
const writeMode = process.argv.includes("--write");
const forceMode = process.argv.includes("--force");

function decodeEntities(value) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#039;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)));
}

function textContent(value) {
  return decodeEntities(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function extractTag(html, tagName) {
  const match = html.match(new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)</${tagName}>`, "i"));
  return match ? textContent(match[1]) : "";
}

function extractBalancedDiv(html, className) {
  const opening = new RegExp(`<div\\b[^>]*class=(?:"[^"]*\\b${className}\\b[^"]*"|'[^']*\\b${className}\\b[^']*')[^>]*>`, "i");
  const match = opening.exec(html);
  if (!match || match.index === undefined) return "";

  const start = match.index + match[0].length;
  const divTags = /<\/?div\b[^>]*>/gi;
  divTags.lastIndex = start;
  let depth = 1;
  let tag;

  while ((tag = divTags.exec(html))) {
    if (/^<\/div/i.test(tag[0])) depth -= 1;
    else if (!/\/\s*>$/.test(tag[0])) depth += 1;

    if (depth === 0) return html.slice(start, tag.index);
  }

  return "";
}

function sourceDate(articleHtml) {
  const match = articleHtml.match(/Cập nhật lần cuối\s*:\s*(\d{1,2})\/(\d{1,2})\/(\d{4})/i);
  if (!match) return "2025-01-01";

  const [, day, month, year] = match;
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

function sourceDescription(articleHtml, title) {
  const paragraphs = [...articleHtml.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((match) => textContent(match[1]))
    .filter((value) => value && !/^Cập nhật lần cuối/i.test(value));

  const description = paragraphs[0] || `${title} — thuật ngữ SEO được giải thích dễ hiểu và thực hành được.`;
  if (description.length <= 160) return description;
  return description.slice(0, 157).replace(/\s+\S*$/, "").trim() + "…";
}

function sourceCoverImage(html) {
  const markerIndex = html.indexOf('property="og:image"');
  if (markerIndex < 0) return "";
  const match = html.slice(markerIndex, markerIndex + 400).match(/content="([^"]+)"/i);
  return match?.[1] || "";
}

function frontmatterString({ title, slug, date, description, coverImage }) {
  return [
    "---",
    `title: ${JSON.stringify(title)}`,
    `slug: ${slug}`,
    `date: ${date}`,
    "categorySlug: thuat-ngu",
    ...(coverImage ? ["coverImage: " + JSON.stringify(coverImage)] : []),
    `excerpt: ${JSON.stringify(description)}`,
    `meta_description: ${JSON.stringify(description)}`,
    "---",
    ""
  ].join("\n");
}

async function fetchGlossaryUrls() {
  const indexResponse = await fetch(`${SOURCE_ORIGIN}/sitemap_index.xml`);
  if (!indexResponse.ok) throw new Error(`Could not fetch sitemap index: HTTP ${indexResponse.status}`);

  const indexXml = await indexResponse.text();
  const sitemapUrls = [...indexXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const glossarySitemap = sitemapUrls.find((url) => url.endsWith("/glossary-sitemap.xml"));
  if (!glossarySitemap) throw new Error("Glossary sitemap is not present in the production sitemap index");

  const response = await fetch(glossarySitemap);
  if (!response.ok) throw new Error(`Could not fetch glossary sitemap: HTTP ${response.status}`);

  const xml = await response.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

async function main() {
  const urls = await fetchGlossaryUrls();
  const turndown = new TurndownService({ headingStyle: "atx", bulletListMarker: "-" });
  const imported = [];
  const skipped = [];

  for (const url of urls) {
    const parsedUrl = new URL(url);
    if (parsedUrl.pathname === "/seo/thuat-ngu/") {
      skipped.push({ url, reason: "glossary category index" });
      continue;
    }

    const slug = parsedUrl.pathname.split("/").filter(Boolean).at(-1);
    if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      skipped.push({ url, reason: "unsafe slug" });
      continue;
    }

    const outputPath = path.join(OUTPUT_DIRECTORY, `${slug}.mdx`);
    if (fs.existsSync(outputPath) && !forceMode) {
      skipped.push({ url, reason: "existing local file" });
      continue;
    }
    if (fs.existsSync(outputPath) && forceMode && !fs.readFileSync(outputPath, "utf8").includes("categorySlug: thuat-ngu")) {
      skipped.push({ url, reason: "existing non-glossary file" });
      continue;
    }

    const response = await fetch(url);
    if (!response.ok) throw new Error(`Could not fetch ${url}: HTTP ${response.status}`);

    const html = await response.text();
    const articleHtml = extractBalancedDiv(html, "single-post-content");
    if (!articleHtml) throw new Error(`Could not locate glossary article content: ${url}`);

    const title = extractTag(html, "title") || extractTag(articleHtml, "h1") || slug;
    const description = sourceDescription(articleHtml, title);
    const coverImage = sourceCoverImage(html);
    const markdown = turndown.turndown(
      articleHtml
        .replace(/<p\b[^>]*class=("[^"]*\blast-updated\b[^"]*"|'[^']*\blast-updated\b[^']*')[^>]*>[\s\S]*?<\/p>/gi, "")
        .replace(/<script\b[\s\S]*?<\/script>/gi, "")
        .replace(/<style\b[\s\S]*?<\/style>/gi, "")
    ).replace(/\n{3,}/g, "\n\n").trim();

    if (markdown.length < 80) throw new Error(`Extracted glossary content is unexpectedly short: ${url}`);

    imported.push({
      slug,
      url,
      title,
      date: sourceDate(articleHtml),
      description,
      coverImage,
      content: frontmatterString({ title, slug, date: sourceDate(articleHtml), description, coverImage }) + markdown + "\n"
    });
  }

  console.log(JSON.stringify({ sourceUrls: urls.length, imported: imported.length, skipped }, null, 2));
  if (!writeMode) {
    console.log("Dry run only. Re-run with --write to create the MDX files.");
    return;
  }

  fs.mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
  for (const item of imported) fs.writeFileSync(path.join(OUTPUT_DIRECTORY, `${item.slug}.mdx`), item.content, "utf8");
  console.log(`Wrote ${imported.length} glossary MDX files to ${OUTPUT_DIRECTORY}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
