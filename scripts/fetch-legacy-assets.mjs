import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const manifestPath = path.join(process.cwd(), "data", "legacy-assets.json");
const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
const outputRoot = path.join(process.cwd(), manifest.outputDir);
const results = [];

async function download(asset) {
  const target = path.join(outputRoot, asset.dest);
  await fs.mkdir(path.dirname(target), { recursive: true });

  const response = await fetch(asset.url, {
    headers: {
      "user-agent": "Mozilla/5.0 SEOSONA-Rebuild-Asset-Migration/1.0"
    }
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(target, buffer);

  return {
    ...asset,
    path: `/${manifest.outputDir.replace(/^public\//, "")}/${asset.dest}`,
    bytes: buffer.length,
    contentType: response.headers.get("content-type") || "unknown"
  };
}

for (const asset of manifest.assets) {
  try {
    const result = await download(asset);
    results.push({ status: "ok", ...result });
    console.log(`OK ${asset.dest}`);
  } catch (error) {
    results.push({ status: "error", ...asset, error: error instanceof Error ? error.message : String(error) });
    console.error(`FAIL ${asset.dest}:`, error instanceof Error ? error.message : error);
  }
}

await fs.writeFile(
  path.join(outputRoot, "manifest.generated.json"),
  JSON.stringify({ generatedAt: new Date().toISOString(), source: manifest.source, assets: results }, null, 2)
);

const failed = results.filter((item) => item.status === "error");
if (failed.length) {
  console.error(`${failed.length} asset(s) failed to download.`);
  process.exitCode = 1;
}
