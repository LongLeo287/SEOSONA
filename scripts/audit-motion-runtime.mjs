import { chromium } from "playwright";
import { existsSync } from "node:fs";

const baseUrl = (process.env.SEOSONA_BASE_URL || "http://localhost:3045").replace(/\/+$/, "");
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const browser = await chromium.launch({
  headless: true,
  ...(existsSync(chromePath) ? { executablePath: chromePath } : {}),
});
const failures = [];

function assert(condition, message) {
  if (!condition) {
    failures.push(message);
    console.error(`[FAIL] ${message}`);
  }
}

async function readRuntime(page) {
  return page.evaluate(() => ({
    mode: document.documentElement.dataset.adaptiveMotionMode || "",
    fps: Number(document.documentElement.style.getPropertyValue("--adaptive-motion-fps") || 0),
    active: Number(document.documentElement.dataset.adaptiveMotionActive || 0),
    heroTier: document.querySelector("[data-hero-root]")?.getAttribute("data-hero-tier") || "",
  }));
}

async function auditProfile(name, options, reducedMotion) {
  const context = await browser.newContext(options);
  const page = await context.newPage();
  await page.emulateMedia({ reducedMotion: reducedMotion ? "reduce" : "no-preference" });
  const response = await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(900);
  assert(response?.status() === 200, `${name}: homepage returned ${response?.status() ?? 0}`);

  const initial = await readRuntime(page);
  assert(initial.mode !== "", `${name}: adaptive mode was not published`);
  assert(initial.fps >= 0, `${name}: adaptive FPS variable was not published`);
  assert(initial.active >= 0, `${name}: active subscriber count was not published`);

  await page.mouse.wheel(0, 240);
  await page.waitForTimeout(80);
  const duringScroll = await readRuntime(page);
  if (!reducedMotion) {
    assert(duringScroll.active > 0, `${name}: scroll did not activate any motion subscriber`);
  }

  if (reducedMotion) {
    assert(initial.mode === "lite", `${name}: reduced motion must use lite mode, got ${initial.mode}`);
    assert(initial.heroTier === "lite", `${name}: reduced motion must keep Hero in lite tier, got ${initial.heroTier}`);
  }

  if (options.hasTouch) {
    assert(initial.mode === "balanced" || initial.mode === "lite", `${name}: touch profile must not use full mode, got ${initial.mode}`);
  }

  const hidden = await page.evaluate(() => {
    Object.defineProperty(document, "visibilityState", { configurable: true, value: "hidden" });
    document.dispatchEvent(new Event("visibilitychange"));
    return {
      mode: document.documentElement.dataset.adaptiveMotionMode || "",
      fps: Number(document.documentElement.style.getPropertyValue("--adaptive-motion-fps") || 0),
    };
  });
  assert(hidden.mode === "paused", `${name}: hidden document must pause runtime, got ${hidden.mode}`);
  assert(hidden.fps === 0, `${name}: hidden document must publish 0 FPS, got ${hidden.fps}`);

  const visible = await page.evaluate(() => {
    Object.defineProperty(document, "visibilityState", { configurable: true, value: "visible" });
    document.dispatchEvent(new Event("visibilitychange"));
    return document.documentElement.dataset.adaptiveMotionMode || "";
  });
  assert(visible !== "paused", `${name}: runtime did not recover after visibility restored`);
  console.log(JSON.stringify({ name, initial, duringScroll, hidden, recoveredMode: visible }));
  await context.close();
}

await auditProfile("desktop", { viewport: { width: 1440, height: 900 } }, false);
await auditProfile("touch", { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }, false);
await auditProfile("reduced-motion", { viewport: { width: 1440, height: 900 } }, true);
await browser.close();

if (failures.length > 0) process.exit(1);
console.log("[PASS] Adaptive motion audit: 3 profiles, hidden-tab pause/recovery verified.");
