import { chromium } from "playwright";

const baseUrl = (process.env.SEOSONA_BASE_URL || "http://localhost:3013").replace(/\/+$/, "");
const routes = [
  "/",
  "/dich-vu-seo-tong-the/",
  "/giai-phap/ai-content/",
  "/giai-phap/ai-customer-journey/",
  "/chi-quyet-academy/",
  "/tai-nguyen/",
  "/seo/thuat-ngu/",
  "/seo/thuat-ngu/css-la-gi/",
  "/seo/case-study/",
  "/lien-he/"
];

const failures = [];
const results = [];

function recordFailure(message) {
  failures.push(message);
  console.error("[FAIL] " + message);
}

async function auditHeroContract(page, viewportName) {
  const hero = await page.evaluate(() => {
    const root = document.querySelector("[data-hero-root]");
    const scene = document.querySelector("[data-hero-scene]");
    const strategyCore = document.querySelector("[data-strategy-core]");
    const transition = document.querySelector("[data-core-solutions-transition]");
    const transitionAnchor = document.querySelector("[data-core-solutions-transition-anchor]");
    const ctaHrefs = Array.from(document.querySelectorAll("a[href]"), (link) => link.getAttribute("href"));

    return {
      root: Boolean(root),
      scene: Boolean(scene),
      strategyCore: Boolean(strategyCore),
      transition: Boolean(transition),
      transitionAnchor: Boolean(transitionAnchor),
      stageHeight: root?.getBoundingClientRect().height ?? 0,
      motionPhase: root?.getAttribute("data-hero-phase") || "",
      nodeCardCount: document.querySelectorAll("[data-hero-node-card]").length,
      nodeOrbitCount: document.querySelectorAll("[data-hero-node-orbit]").length,
      coreProgressSource: document.querySelector("[data-core-solutions]")?.getAttribute("data-progress-source") || "",
      canvasCount: scene?.querySelectorAll("canvas").length ?? 0,
      fallback: Boolean(scene?.querySelector("[data-hero-fallback]")),
      h1: Boolean(document.querySelector("[data-hero-root] h1")),
      ctas: ["/lien-he/", "/case-study/"].every((href) => ctaHrefs.includes(href)),
      overflow: document.documentElement.scrollWidth !== window.innerWidth,
    };
  });

  const ok = hero.root && hero.scene && hero.strategyCore && hero.transition && hero.transitionAnchor && hero.canvasCount <= 1 && hero.h1 && hero.ctas && !hero.overflow;
  if (!ok) {
    recordFailure(
      viewportName + " / Hero contract: root=" + hero.root +
      ", scene=" + hero.scene +
      ", strategy-core=" + hero.strategyCore +
      ", transition=" + hero.transition +
      ", transition-anchor=" + hero.transitionAnchor +
      ", canvas=" + hero.canvasCount +
      ", fallback=" + hero.fallback +
      ", h1=" + hero.h1 +
      ", ctas=" + hero.ctas +
      ", overflow=" + hero.overflow,
    );
  }

  const heroTier = await page.evaluate(() => document.querySelector("[data-hero-root]")?.getAttribute("data-hero-tier") || "");
  if (heroTier !== "lite" && hero.stageHeight < page.viewportSize().height * 1.5) {
    recordFailure(viewportName + " / Hero choreography stage is too short: " + Math.round(hero.stageHeight) + "px");
  }
  if (hero.nodeCardCount !== 5 || hero.nodeOrbitCount !== 5) {
    recordFailure(viewportName + " / Hero card/icon layers: cards=" + hero.nodeCardCount + ", orbit-icons=" + hero.nodeOrbitCount);
  }
  if (!hero.motionPhase) recordFailure(viewportName + " / Hero phase contract is missing");
  if (hero.coreProgressSource !== "hero") recordFailure(viewportName + " / CoreSolutions is not connected to the Hero progress owner");
}

async function auditHeroLayout(page, viewportName) {
  await page.evaluate(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }));
  await page.waitForTimeout(180);

  if (viewportName === "desktop" || viewportName === "tablet") {
    const settled = await page.waitForFunction(
      () => document.querySelector("[data-hero-root]")?.getAttribute("data-hero-tier") !== "lite",
      { timeout: 2500 },
    ).catch(() => null);
    if (!settled) recordFailure(viewportName + " / Hero capability tier did not settle before motion audit");
  } else {
    const contentReady = await page.waitForFunction(
      () => {
        const element = document.querySelector("[data-hero-content]");
        const rect = element?.getBoundingClientRect();
        return Boolean(
          rect &&
          rect.width > 0 &&
          rect.height > 0 &&
          Number.parseFloat(getComputedStyle(element).opacity) > 0.8,
        );
      },
      { timeout: 2500 },
    ).catch(() => null);
    if (!contentReady) recordFailure(viewportName + " / Hero content did not settle before layout audit");
  }

  if (viewportName === "desktop") {
    const originalViewport = page.viewportSize();
    if (originalViewport) {
      await page.setViewportSize({ width: originalViewport.width, height: 708 });
      await page.reload({ waitUntil: "networkidle" });
      await page.waitForTimeout(180);
      const shortViewportState = await page.evaluate(() => {
        const header = document.querySelector("header")?.getBoundingClientRect();
        const badge = document.querySelector("[data-hero-content] > div > div:first-child");
        const badgeRect = badge?.getBoundingClientRect();
        const badgeStyles = badge ? getComputedStyle(badge) : null;
        return {
          headerBottom: header?.bottom ?? 0,
          badgeTop: badgeRect?.top ?? -Infinity,
          badgeBottom: badgeRect?.bottom ?? -Infinity,
          badgeVisible: Boolean(
            badgeRect &&
            badgeRect.width > 0 &&
            badgeRect.height > 0 &&
            badgeStyles?.display !== "none" &&
            badgeStyles?.visibility !== "hidden" &&
            Number.parseFloat(badgeStyles?.opacity || "0") > 0.8,
          ),
        };
      });
      if (!shortViewportState.badgeVisible || shortViewportState.badgeTop < shortViewportState.headerBottom - 1) {
        recordFailure(
          viewportName + " / short-height Hero badge is covered: " + JSON.stringify(shortViewportState),
        );
      }
      await page.setViewportSize(originalViewport);
      await page.reload({ waitUntil: "networkidle" });
      await page.waitForTimeout(180);
    }
  }

  const topState = await page.evaluate(() => {
    const nodes = Array.from(document.querySelectorAll("[data-hero-node-label]"));
    const nodeRects = nodes.map((label) => label.closest("a")?.parentElement?.getBoundingClientRect());
    return {
      width: window.innerWidth,
      outOfBounds: nodeRects.filter((rect) => rect && (rect.left < -12 || rect.right > window.innerWidth + 12)).length,
      mobileLabels: nodes.map((label) => ({
        display: getComputedStyle(label).display,
        width: label.getBoundingClientRect().width,
      })),
      visibleNodes: nodeRects.filter((rect) => rect && rect.width > 0 && rect.height > 0).length,
    };
  });

  if (topState.outOfBounds > 0) {
    recordFailure(viewportName + " / Hero node safe-area: " + topState.outOfBounds + " node(s) cross the viewport bounds");
  }
  if ((viewportName === "mobile" || viewportName === "narrow") && topState.mobileLabels.some((label) => label.display !== "none" || label.width > 0.5)) {
    recordFailure(viewportName + " / Hero mobile labels remain visually expanded");
  }
  if ((viewportName === "mobile" || viewportName === "narrow") && topState.visibleNodes > 0) {
    recordFailure(viewportName + " / Hero decorative nodes overlap mobile content: " + topState.visibleNodes);
  }

  if (viewportName === "mobile" || viewportName === "narrow") {
    const staticState = await page.evaluate(() => {
      const root = document.querySelector("[data-hero-root]");
      const content = document.querySelector("[data-hero-content]");
      const core = document.querySelector("[data-strategy-core]");
      const contentRect = content?.getBoundingClientRect();
      return {
        tier: root?.getAttribute("data-hero-tier") || "",
        progress: Number.parseFloat(root?.getAttribute("data-hero-motion-progress") || "NaN"),
        contentVisible: Boolean(contentRect && contentRect.top < window.innerHeight && contentRect.bottom > 0 && Number.parseFloat(getComputedStyle(content).opacity) > 0.8),
        coreVisible: Boolean(core && Number.parseFloat(getComputedStyle(core).opacity) > 0.8),
      };
    });
    if (staticState.tier === "lite" && (!Number.isFinite(staticState.progress) || staticState.progress > 0.05 || !staticState.contentVisible || !staticState.coreVisible)) {
      recordFailure(
        viewportName + " / lite Hero static state is incoherent: progress=" + staticState.progress +
        ", content=" + staticState.contentVisible + ", core=" + staticState.coreVisible,
      );
    }
  }

  if (viewportName === "desktop" || viewportName === "tablet") {
    await page.evaluate(() => window.scrollTo({ top: 320, left: 0, behavior: "instant" }));
    await page.waitForTimeout(160);
    const coreState = await page.evaluate(() => {
      const element = document.querySelector("[data-strategy-core]");
      const rect = element?.getBoundingClientRect();
      return Boolean(rect && rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < window.innerHeight);
    });
    if (!coreState) recordFailure(viewportName + " / StrategyCore loses viewport presence during Hero handoff");

    await page.evaluate(() => {
      const hero = document.querySelector("[data-hero-root]");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const target = rect.top + window.scrollY + Math.max(0, rect.height - window.innerHeight);
      window.scrollTo({ top: target, left: 0, behavior: "instant" });
    });
    await page.waitForTimeout(220);
    const handoffState = await page.evaluate(() => {
      const nodes = Array.from(document.querySelectorAll("[data-hero-node-label]"));
      const isVisible = (element) => {
        const rect = element.getBoundingClientRect();
        const styles = getComputedStyle(element);
        return rect.width > 0 && rect.height > 0 && styles.display !== "none" && styles.visibility !== "hidden" && Number.parseFloat(styles.opacity) > 0.08;
      };
      const dynamicVisibleNodes = nodes.filter((label) => {
        const node = label.closest("a")?.parentElement;
        return Boolean(node && isVisible(node));
      }).length;
      const staticLayer = document.querySelector("[data-core-solutions-ecosystem]");
      const staticVisibleNodes = staticLayer
        ? Array.from(staticLayer.querySelectorAll("a")).filter(isVisible).length
        : 0;
      const visibleNodes = staticVisibleNodes > 0 ? staticVisibleNodes : dynamicVisibleNodes;
      const coreVisible = Array.from(document.querySelectorAll("[data-strategy-core]"))
        .some((core) => isVisible(core));
      return { visibleNodes, coreVisible };
    });
    // The final composition intentionally keeps the five icon nodes visible
    // around the logo. They are no longer orphaned: the node layer is the
    // persistent ecosystem frame while the shared lower arc hands off to the
    // next section. Lite/mobile tiers hide them by design.
    if (handoffState.visibleNodes !== 5) {
      recordFailure(viewportName + " / Hero handoff icon ecosystem: expected 5 visible nodes, got " + handoffState.visibleNodes);
    }
    if (!handoffState.coreVisible) {
      recordFailure(viewportName + " / Hero handoff loses the StrategyCore anchor before CoreSolutions takes over");
    }

    await page.evaluate(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }));
    await page.waitForTimeout(120);
    await page.evaluate(() => {
      const core = document.querySelector("[data-core-solutions]");
      if (!core) return;
      const target = core.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.55;
      window.scrollTo({ top: target, left: 0, behavior: "instant" });
    });
    await page.waitForTimeout(20);
    const earlyMotion = await page.evaluate(() => {
      const value = document.querySelector("[data-hero-root]")?.getAttribute("data-hero-motion-progress");
      return value === null ? null : Number.parseFloat(value);
    });
    await page.waitForTimeout(260);
    const settledMotion = await page.evaluate(() => {
      const value = document.querySelector("[data-hero-root]")?.getAttribute("data-hero-motion-progress");
      return value === null ? null : Number.parseFloat(value);
    });
    if (
      earlyMotion === null ||
      settledMotion === null ||
      !Number.isFinite(earlyMotion) ||
      !Number.isFinite(settledMotion) ||
      settledMotion - earlyMotion < 0.04
    ) {
      recordFailure(
        viewportName + " / Hero motion snaps instead of settling: early=" + earlyMotion + ", settled=" + settledMotion,
      );
    }
  }

  const handoffScroll = await page.evaluate(() => {
    const hero = document.querySelector("[data-hero-root]");
    if (!hero) return 0;
    return Math.max(0, hero.getBoundingClientRect().top + window.scrollY + hero.getBoundingClientRect().height - window.innerHeight);
  });
  await page.evaluate((top) => window.scrollTo({ top, left: 0, behavior: "instant" }), handoffScroll);
  await page.waitForTimeout(260);
  const overlapState = await page.evaluate(() => {
    const root = document.querySelector("[data-hero-root]");
    const sticky = root?.firstElementChild;
    const core = document.querySelector("[data-core-solutions]");
    const handoff = document.querySelector("[data-core-solutions-handoff]");
    const title = core?.querySelector("h2");
    const transition = document.querySelector("[data-core-solutions-transition]");
    const transitionRect = transition?.getBoundingClientRect();
    if (!sticky || !core) return { overlap: 0, viewportHeight: window.innerHeight, handoff: false, transition: false, titleVisible: false };
    const stickyRect = sticky.getBoundingClientRect();
    const coreRect = core.getBoundingClientRect();
    const handoffRect = handoff?.getBoundingClientRect();
    const titleRect = title?.getBoundingClientRect();
    const heroStatic = root?.dataset.heroStatic === "true";
    const overlap = Math.max(0, Math.min(stickyRect.bottom, window.innerHeight) - Math.max(stickyRect.top, coreRect.top));
    const arcApexY = transitionRect ? transitionRect.top + transitionRect.height * (88 / 240) : 0;
    return {
      overlap,
      viewportHeight: window.innerHeight,
      // The handoff layer is intentionally translated upward so the ribbon
      // apex is locked to the viewport centre during the final relay. The
      // old check required the untransformed section edge and rejected the
      // corrected geometry as "disconnected".
      handoff: Boolean(
        handoff &&
        handoffRect &&
        transitionRect &&
        (heroStatic
          ? transitionRect.bottom > 0 && transitionRect.top < window.innerHeight
          : Math.abs(arcApexY - window.innerHeight / 2) <= 8),
      ),
      transition: Boolean(transition && transitionRect && transitionRect.height > 0),
      transitionCount: document.querySelectorAll("[data-core-solutions-transition]").length,
      arcTitleGap: titleRect ? titleRect.top - arcApexY : -Infinity,
      titleVisible: Boolean(titleRect && titleRect.top < window.innerHeight * 0.94 && titleRect.bottom > 0 && Number.parseFloat(getComputedStyle(title).opacity) > 0.2),
    };
  });

  // Regression guard: the final relay must have exactly one visual owner.
  // Sampling just before the settled boundary catches the historical bug
  // where CoreSolutions became visible at 0.96 while Hero stayed visible
  // until 0.999, creating duplicate logo/node/rail layers.
  const relayProbeScroll = await page.evaluate(() => {
    const hero = document.querySelector("[data-hero-root]");
    if (!hero) return 0;
    const rect = hero.getBoundingClientRect();
    return rect.top + window.scrollY + Math.max(0, rect.height - window.innerHeight) * 0.985;
  });
  await page.evaluate((top) => window.scrollTo({ top, left: 0, behavior: "instant" }), relayProbeScroll);
  await page.waitForTimeout(260);
  const relayOwnership = await page.evaluate(() => {
    const visibility = (selector) => {
      const element = document.querySelector(selector);
      if (!element) return 0;
      const styles = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      if (styles.display === "none" || styles.visibility === "hidden" || rect.width === 0 || rect.height === 0) return 0;
      return Number.parseFloat(styles.opacity);
    };
    const root = document.querySelector("[data-hero-root]");
    return {
      progress: Number.parseFloat(root?.getAttribute("data-hero-motion-progress") || "NaN"),
      handoffProgress: Number.parseFloat(root?.getAttribute("data-hero-handoff-progress") || "NaN"),
      dynamicLogo: visibility("[data-hero-root] [data-strategy-core]"),
      dynamicArc: visibility("[data-hero-arc]"),
      staticLayer: visibility("[data-core-solutions-ecosystem]"),
      staticTransition: visibility("[data-core-solutions-transition]"),
    };
  });
  const dynamicOwnerVisible = relayOwnership.dynamicLogo > 0.05 || relayOwnership.dynamicArc > 0.05;
  const staticOwnerVisible = relayOwnership.staticLayer > 0.05 || relayOwnership.staticTransition > 0.05;
  if (dynamicOwnerVisible && staticOwnerVisible) {
    recordFailure(
      viewportName + " / Hero-CoreSolutions relay has two visible owners: " + JSON.stringify(relayOwnership),
    );
  }

  // The CoreSolutions surface intentionally takes over the lower part of the
  // sticky Hero during handoff. Keep a bounded takeover budget while allowing
  // the responsive 30vh composition contract to place the title in-frame.
  if (overlapState.overlap > overlapState.viewportHeight * 0.36) {
    recordFailure(
      viewportName + " / Hero-CoreSolutions overlap: " + Math.round(overlapState.overlap) +
      "px (budget " + Math.round(overlapState.viewportHeight * 0.36) + "px)",
    );
  }
  if (!overlapState.handoff) {
    recordFailure(viewportName + " / Hero-CoreSolutions handoff bridge is missing or disconnected");
  }
  if (!overlapState.transition) {
    recordFailure(viewportName + " / CoreSolutions shared transition visual is missing");
  }
  if (overlapState.transitionCount !== 1) {
    recordFailure(viewportName + " / CoreSolutions transition visual count: " + overlapState.transitionCount);
  }
  if (overlapState.arcTitleGap < 24) {
    recordFailure(viewportName + " / CoreSolutions title is too close to arc apex: " + Math.round(overlapState.arcTitleGap) + "px");
  }
  if (!overlapState.titleVisible) {
    recordFailure(viewportName + " / CoreSolutions title enters too late after Hero handoff");
  }

  await page.evaluate(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }));
}

async function auditHomepageAccessibility(page, viewportName) {
  const state = await page.evaluate(() => {
    const isVisible = (element) => {
      const rect = element.getBoundingClientRect();
      const styles = getComputedStyle(element);
      return rect.width > 0 && rect.height > 0 && styles.visibility !== "hidden" && styles.display !== "none";
    };
    const interactive = Array.from(document.querySelectorAll("a,button,input,textarea,select,[tabindex]:not([tabindex=\"-1\"])"))
      .filter(isVisible);
    const unnamed = interactive.filter((element) => {
      const name = element.getAttribute("aria-label") || element.getAttribute("aria-labelledby") || element.getAttribute("title") || element.textContent?.trim();
      return !name;
    });

    return {
      h1Count: document.querySelectorAll("h1").length,
      unnamedCount: unnamed.length,
      missingAltCount: Array.from(document.images).filter((image) => isVisible(image) && !image.hasAttribute("alt")).length,
    };
  });

  if (state.h1Count !== 1 || state.unnamedCount > 0 || state.missingAltCount > 0) {
    recordFailure(
      viewportName + " / homepage accessibility: h1=" + state.h1Count +
      ", unnamed=" + state.unnamedCount +
      ", missing-alt=" + state.missingAltCount,
    );
  }
}

async function auditOffscreenMotion(page, viewportName) {
  const activeAnimations = await page.evaluate(() => {
    const selectors = [
      ".run-marquee",
      ".animate-pulse",
      ".animate-ping",
      ".tracking-flow",
      ".path-flow",
      ".journey-beam",
      ".motion-cursor",
    ];
    return selectors.flatMap((selector) => Array.from(document.querySelectorAll(selector)))
      .filter((element) => element.closest('[data-motion-active="false"]'))
      .filter((element) => getComputedStyle(element).animationName !== "none")
      .filter((element) => getComputedStyle(element).animationPlayState !== "paused")
      .map((element) => element.className?.toString() || element.tagName);
  });

  if (activeAnimations.length > 0) {
    recordFailure(viewportName + " / offscreen motion still active: " + activeAnimations.slice(0, 5).join(", "));
  }
}

async function auditViewport(browser, name, viewport) {
  const page = await browser.newPage({
    viewport,
    ...(name === "mobile" || name === "narrow" ? { hasTouch: true, isMobile: true } : {}),
  });
  const consoleErrors = [];
  const pageErrors = [];
  const failedRequests = [];

  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("requestfailed", (request) => failedRequests.push(request.method() + " " + request.url()));

  for (const route of routes) {
    consoleErrors.length = 0;
    pageErrors.length = 0;
    failedRequests.length = 0;

    const response = await page.goto(baseUrl + route, { waitUntil: "networkidle" });
    const status = response?.status() ?? 0;
    const pageState = await page.evaluate(() => ({
      h1Count: document.querySelectorAll("h1").length,
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "",
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth
    }));

    const ok =
      status === 200 &&
      pageState.h1Count === 1 &&
      pageState.scrollWidth === pageState.innerWidth &&
      consoleErrors.length === 0 &&
      pageErrors.length === 0 &&
      failedRequests.length === 0;

    results.push({ viewport: name, route, status, ...pageState, ok });
    if (!ok) {
      recordFailure(
        name + " " + route +
        ": status=" + status +
        ", h1Count=" + pageState.h1Count +
        ", overflow=" + (pageState.scrollWidth !== pageState.innerWidth) +
        ", console=" + consoleErrors.length +
        ", pageErrors=" + pageErrors.length +
        ", failedRequests=" + failedRequests.length +
        (failedRequests.length > 0 ? " [" + failedRequests.slice(0, 2).join(", ") + "]" : "")
      );
    }

    if (route === "/") {
      await auditHeroContract(page, name);
      await auditHeroLayout(page, name);
      await auditHomepageAccessibility(page, name);
      await auditOffscreenMotion(page, name);
      await page.mouse.wheel(0, 900);
      await page.waitForTimeout(700);
      const scrollY = await page.evaluate(() => window.scrollY);
      if (scrollY <= 0) recordFailure(name + " /: wheel scroll did not advance");
    }
  }

  if (name === "mobile") {
    await page.goto(baseUrl + "/", { waitUntil: "networkidle" });
    const opener = page.getByRole("button", { name: "Mở menu" });
    await opener.click();
    const opened = await page.locator("#mobile-menu").getAttribute("aria-hidden");
    const locked = await page.evaluate(() => getComputedStyle(document.body).overflow === "hidden");
    await page.keyboard.press("Escape");
    await page.waitForTimeout(300);
    const closed = await page.locator("#mobile-menu").getAttribute("aria-hidden");
    const focus = await page.evaluate(() => document.activeElement?.getAttribute("aria-label") || "");

    if (opened !== "false" || !locked || closed !== "true" || focus !== "Mở menu") {
      recordFailure(
        "mobile drawer: opened=" + opened +
        ", locked=" + locked +
        ", closed=" + closed +
        ", focus=" + focus
      );
    }
  }

  await page.close();
}

async function auditRaf(browser) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.addInitScript(() => {
    const nativeRequestAnimationFrame = window.requestAnimationFrame.bind(window);
    let count = 0;
    const callers = new Map();
    window.requestAnimationFrame = (callback) => {
      const caller = callback.name || "anonymous";
      callers.set(caller, (callers.get(caller) || 0) + 1);
      return nativeRequestAnimationFrame((time) => {
        count += 1;
        callback(time);
      });
    };
    window.__seosonaRafCount = () => count;
    window.__seosonaRafCallers = () => Array.from(callers.entries());
  });

  await page.goto(baseUrl + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(4000);
  const heroTier = await page.evaluate(() => document.querySelector("[data-hero-root]")?.getAttribute("data-hero-tier") || "");
  const before = await page.evaluate(() => window.__seosonaRafCount());
  await page.mouse.wheel(0, 1200);
  await page.waitForTimeout(500);
  const afterScroll = await page.evaluate(() => window.__seosonaRafCount());
  await page.waitForTimeout(4000);
  const afterIdle = await page.evaluate(() => window.__seosonaRafCount());
  const activeTotalFrames = afterScroll - before;
  const idleTotalFrames = afterIdle - afterScroll;

  const requiresActiveHeroLoop = heroTier !== "lite";
  if ((requiresActiveHeroLoop && activeTotalFrames <= 0) || (!requiresActiveHeroLoop && idleTotalFrames > 30) || idleTotalFrames > 300) {
    const callers = await page.evaluate(() => window.__seosonaRafCallers?.());
    console.log("[DEBUG] RAF callers: " + JSON.stringify(callers));
    recordFailure(
      "RAF profile: tier=" + heroTier +
      ", active-total=" + activeTotalFrames +
      ", idle-total=" + idleTotalFrames +
      ", total-before=" + before +
      ", total-after-scroll=" + afterScroll +
      ", total-after-idle=" + afterIdle,
    );
  } else {
    console.log(
      "[PASS] RAF profile (tier=" + heroTier + "): " + activeTotalFrames +
      " active frames, " + idleTotalFrames +
      " post-idle frames (idle budget <= 300).",
    );
  }

  await page.close();
}

async function auditReducedMotion(browser) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(baseUrl + "/", { waitUntil: "networkidle" });
  await page.waitForFunction(
    () => document.querySelector("[data-hero-root]")?.getAttribute("data-hero-tier") === "lite",
    { timeout: 5000 },
  );
  const state = await page.evaluate(() => {
    const root = document.querySelector("[data-hero-root]");
    const scene = document.querySelector("[data-hero-scene]");
    return {
      tier: root?.getAttribute("data-hero-tier") || "",
      sceneTier: scene?.getAttribute("data-hero-tier") || "",
      canvasCount: scene?.querySelectorAll("canvas").length ?? 0,
      h1: Boolean(root?.querySelector("h1")),
      ctaCount: root?.querySelectorAll("a[href]").length ?? 0,
    };
  });

  if (state.tier !== "lite" || state.sceneTier !== "lite" || state.canvasCount > 1 || !state.h1 || state.ctaCount < 2) {
    recordFailure(
      "reduced-motion Hero: tier=" + state.tier +
      ", sceneTier=" + state.sceneTier +
      ", canvas=" + state.canvasCount +
      ", h1=" + state.h1 +
      ", ctas=" + state.ctaCount,
    );
  }

  await page.close();
}

async function auditWebglFallback(browser) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.addInitScript(() => {
    const nativeGetContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function getContext(kind, ...args) {
      if (typeof kind === "string" && kind.toLowerCase().includes("webgl")) return null;
      return nativeGetContext.call(this, kind, ...args);
    };
  });
  await page.goto(baseUrl + "/", { waitUntil: "networkidle" });
  await page.waitForFunction(
    () => document.querySelector("[data-hero-root]")?.getAttribute("data-hero-tier") === "lite",
    { timeout: 5000 },
  );
  const state = await page.evaluate(() => ({
    tier: document.querySelector("[data-hero-root]")?.getAttribute("data-hero-tier") || "",
    fallback: Boolean(document.querySelector("[data-hero-fallback]")),
    canvasCount: document.querySelectorAll("[data-hero-scene] canvas").length,
  }));

  if (state.tier !== "lite" || !state.fallback || state.canvasCount !== 0) {
    recordFailure(
      "WebGL fallback: tier=" + state.tier +
      ", fallback=" + state.fallback +
      ", canvas=" + state.canvasCount,
    );
  }

  await page.close();
}

const browser = await chromium.launch({ headless: true });
try {
  await auditViewport(browser, "desktop", { width: 1440, height: 900 });
  await auditViewport(browser, "tablet", { width: 768, height: 900 });
  await auditViewport(browser, "mobile", { width: 390, height: 844 });
  await auditViewport(browser, "narrow", { width: 320, height: 740 });
  await auditReducedMotion(browser);
  await auditWebglFallback(browser);
  await auditRaf(browser);
} finally {
  await browser.close();
}

if (failures.length === 0) {
  console.log("[PASS] Browser audit: " + results.length + " route/viewport checks passed against " + baseUrl + ".");
} else {
  console.error("[FAIL] Browser audit: " + failures.length + " issue(s) found against " + baseUrl + ".");
  process.exitCode = 1;
}
