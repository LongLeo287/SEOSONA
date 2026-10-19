import { chromium } from "playwright";
import { existsSync } from "node:fs";

const baseUrl = (process.env.SEOSONA_BASE_URL || "http://localhost:3024").replace(/\/+$/, "");
const defaultRoutes = [
  "/",
  "/lien-he/",
  "/chi-quyet-academy/",
  "/giai-phap/power-bi/",
  "/giai-phap/tracking-automation/",
  "/dich-vu/",
  "/dich-vu-seo-tong-the/",
  "/quy-trinh-seo/",
  "/dich-vu-backlink/",
];
const routes = process.env.SEOSONA_RUNTIME_ROUTES
  ? process.env.SEOSONA_RUNTIME_ROUTES.split(",").map((route) => route.trim()).filter(Boolean)
  : defaultRoutes;

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const browser = await chromium.launch({
  headless: true,
  ...(existsSync(chromePath) ? { executablePath: chromePath } : {}),
});

async function measure(page, route, viewport, reducedMotion = false) {
  const consoleErrors = [];
  const pageErrors = [];
  const failedRequests = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("requestfailed", (request) => failedRequests.push(request.url()));

  await page.setViewportSize(viewport);
  await page.emulateMedia({ reducedMotion: reducedMotion ? "reduce" : "no-preference" });
  const started = Date.now();
  const response = await page.goto(baseUrl + route, { waitUntil: "networkidle" });
  await page.waitForTimeout(route === "/" && !reducedMotion ? 3000 : 1200);
  await page.evaluate(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }));
  const initialLongTasks = await page.evaluate(() => ({
    count: window.__seosonaLongTasks || 0,
    total: window.__seosonaLongTaskTotal || 0,
  }));
  const frameSample = page.evaluate(() => new Promise((resolve) => {
    const frames = [];
    const startedAt = performance.now();
    const sample = (time) => {
      frames.push(time);
      if (time - startedAt < 1700) requestAnimationFrame(sample);
      else resolve(frames);
    };
    requestAnimationFrame(sample);
  }));
  await page.mouse.wheel(0, route === "/" ? 1200 : 700);
  const frames = await frameSample;
  const result = await page.evaluate((frameTimes) => {
    const gaps = frameTimes.slice(1).map((time, index) => time - frameTimes[index]);
    const sorted = [...gaps].sort((a, b) => a - b);
    const percentile = (p) => sorted.length ? sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * p))] : 0;
    return {
      frames: frameTimes.length,
      maxFrameGap: Math.max(0, ...gaps),
      p95FrameGap: percentile(0.95),
      over24ms: gaps.filter((gap) => gap > 24).length,
      over50ms: gaps.filter((gap) => gap > 50).length,
      longTasks: window.__seosonaLongTasks || 0,
      longTaskTotal: window.__seosonaLongTaskTotal || 0,
      dom: document.querySelectorAll("*").length,
      images: document.images.length,
      canvas: document.querySelectorAll("canvas").length,
      activeAnimations: Array.from(document.querySelectorAll("*"))
        .filter((element) => getComputedStyle(element).animationName !== "none").length,
      filters: Array.from(document.querySelectorAll("*"))
        .filter((element) => getComputedStyle(element).filter !== "none" || getComputedStyle(element).backdropFilter !== "none").length,
      heroTier: document.querySelector("[data-hero-root]")?.getAttribute("data-hero-tier") || "none",
    };
  }, frames);

  return {
    route,
    viewport: `${viewport.width}x${viewport.height}`,
    reducedMotion,
    status: response?.status() ?? 0,
    elapsedMs: Date.now() - started,
    ...result,
    initialLongTasks: initialLongTasks.count,
    initialLongTaskTotal: initialLongTasks.total,
    scrollLongTasks: Math.max(0, result.longTasks - initialLongTasks.count),
    scrollLongTaskTotal: Math.max(0, result.longTaskTotal - initialLongTasks.total),
    consoleErrors: consoleErrors.length,
    pageErrors: pageErrors.length,
    failedRequests: failedRequests.length,
  };
}

for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
  const context = await browser.newContext({
    viewport,
    isMobile: viewport.width < 768,
    hasTouch: viewport.width < 768,
  });
  const page = await context.newPage();
  await page.addInitScript(() => {
    window.__seosonaLongTasks = 0;
    window.__seosonaLongTaskTotal = 0;
    if ("PerformanceObserver" in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            window.__seosonaLongTasks += 1;
            window.__seosonaLongTaskTotal += entry.duration;
          }
        });
        observer.observe({ type: "longtask", buffered: true });
      } catch {}
    }
  });
  for (const route of routes) {
    console.log(JSON.stringify(await measure(page, route, viewport)));
  }
  if (viewport.width === 1440) console.log(JSON.stringify(await measure(page, "/", viewport, true)));
  await context.close();
}

await browser.close();
