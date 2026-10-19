# Hero v2 Hybrid 2D Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Replace the current Hero's competing imperative effects with a semantic HTML/React layer, one measured motion controller, and a tiered PixiJS 2D scene while preserving the existing Hero → Core Solutions visual contract.

**Architecture:** HeroContent owns readable HTML and links. useHeroMotion owns one normalized scroll-progress/update path and applies both DOM scene state and Pixi scene state. HeroScene owns a single client-only Pixi application with an imperative render handle and no independent ticker. A resize-aware metrics hook measures named transition anchors once per layout change. WebGL/reduced-motion/save-data failure falls back to static SVG/CSS.

**Tech Stack:** Next.js 16, React 19, TypeScript, PixiJS 8.22.0, Anime.js 4.x already present, Morphicons 2.0.0, existing Lenis/React/CSS/Tailwind, Playwright browser audit.

**Spec:** docs/superpowers/specs/2026-10-18-hero-v2-hybrid-2d-design.md

## Global Constraints

- https://seosona.com remains a read-only production/reference source; do not deploy, publish, or modify it.
- Keep readable copy, metrics, CTA links, labels, focus states, and SEO semantics in HTML; canvas is decorative and aria-hidden.
- Use one Hero motion/progress owner and at most one active Hero renderer/update loop.
- Do not add Three.js or Animate.css to the initial runtime.
- Use PixiJS for the decorative 2D layer and Morphicons only for the controlled icon morph; no generic animation framework.
- Preserve current dirty files and do not reset, clean, stash, or overwrite unrelated user work.
- Respect prefers-reduced-motion, save-data, constrained devices, WebGL failure, route change, visibility loss, and unmount.
- Reusable design-system source of truth stays outside this web repo; use existing tokens and local semantic aliases only.
- Every verification result must be reported as PASS, FAIL, or NOT VERIFIED; real-device iPhone performance is NOT VERIFIED unless measured separately.

## Review Focus

- Scroll ownership and Lenis interaction: scroll must advance without competing native smooth-scroll or duplicate RAF loops. Test in browser audit with wheel input and RAF profile.
- Hydration/client-only rendering: semantic Hero must render even when Pixi is not initialized. Test route reload with console/page-error capture and WebGL fallback.
- Layout geometry drift: Hero-to-arc alignment must update after resize/font/layout changes without per-frame DOM queries. Test 320/390/768/1440 viewports and resize.
- Motion accessibility: reduced-motion must disable continuous effects while preserving content/CTA. Test a Playwright context with reducedMotion: reduce.
- Lifecycle leaks: remount/route navigation must not leave duplicate canvases, RAFs, observers, or Pixi resources. Test canvas count and RAF activity before/after navigation.

---

### Task 1: Establish the Hero motion/device contracts and failing browser invariants

**Files:**
- Create: components/hero/hero-types.ts
- Create: components/hero/hero-motion.ts
- Create: components/hero/hero-device-tier.ts
- Modify: scripts/audit-browser.mjs
- Modify: package.json only if an audit:hero script is needed

**Interfaces:**
- Produces HeroTier, HeroPhase, HeroMotionState, HeroLayoutMetrics, HeroSceneState and pure helpers consumed by Tasks 2–5.
- Produces getHeroDeviceTier(env?: HeroCapabilityInput): HeroTier and getHeroMotionState(progress, options): HeroMotionState.
- getHeroMotionState clamps progress, returns lite for reduced motion, and never returns an out-of-range progress.

- [ ] Step 1: Write the failing browser invariants

  Extend the existing browser audit to require on /:

  - [data-hero-root] exists;
  - a semantic h1 and both Hero CTA links exist;
  - [data-hero-scene] exists and is either a single canvas or a static fallback;
  - document.documentElement.scrollWidth === innerWidth at 1440, 768, 390, and 320 widths;
  - reduced-motion exposes data-hero-tier="lite" and no more than one canvas.

- [ ] Step 2: Run the focused audit and verify it fails against the current Hero

  Run: npm run audit:browser

  Expected: the new Hero contract assertions fail because the new data attributes/scene contract do not exist yet. Preserve the output as the RED baseline; unrelated existing route failures must be distinguished from the new assertions.

- [ ] Step 3: Implement shared types and pure helpers

  Implement clamp, smoothstep, phaseFromProgress, and getHeroMotionState in components/hero/hero-motion.ts. Use only numbers and plain objects so the module is SSR-safe and renderer-agnostic. Add explicit tier capability input types rather than reading window at module scope.

- [ ] Step 4: Implement guarded capability classification

  Implement getHeroDeviceTier in components/hero/hero-device-tier.ts. Guard matchMedia, navigator.connection, deviceMemory, hardwareConcurrency, and WebGL checks. Reduced motion always wins and returns lite; touch/unknown hardware returns balanced; save-data/2g/WebGL failure returns lite.

- [ ] Step 5: Run typecheck and the focused audit

  Run: npm run typecheck

  Expected: PASS for the new modules; browser contract remains RED until the composition is wired in Task 5.

- [ ] Step 6: Commit only new isolated contract files if safe

  Do not stage dirty existing files. If the new files are the only staged paths, use: git commit --only components/hero/hero-types.ts components/hero/hero-motion.ts components/hero/hero-device-tier.ts -m "feat(hero): add motion and device contracts".

### Task 2: Add the minimal runtime dependencies and fallback scene

**Files:**
- Modify: package.json
- Modify: package-lock.json
- Create: components/hero/HeroFallback.tsx
- Create: components/hero/hero-scene.css only if existing utility classes cannot express the fallback safely

**Interfaces:**
- Consumes HeroTier, HeroLayoutMetrics, and HeroSceneState from Task 1.
- Produces HeroFallback with a stable data-hero-fallback marker and a decorative SVG/CSS composition that does not require JavaScript or WebGL.

- [ ] Step 1: Add only the justified dependencies

  Add pixi.js@8.22.0 and morphicons@2.0.0, and keep the existing Anime.js dependency unless implementation-time compatibility requires a lockfile-only patch. Do not add Three.js, Animate.css, or a second scroll library.

- [ ] Step 2: Install/update the lockfile and inspect the diff

  Run: npm install

  Expected: package and lockfile contain only the intended dependency changes; no unrelated package upgrades are accepted.

- [ ] Step 3: Write the fallback implementation

  Render a centered SEOSONA orbit/arc motif with low-cost SVG paths, aria-hidden="true", and no text. The fallback must occupy the same scene box as the full scene so switching tiers does not shift the Hero content.

- [ ] Step 4: Run typecheck and build

  Run: npm run typecheck and npm run build

  Expected: PASS; no Pixi import should execute during SSR.

### Task 3: Implement the client-only Pixi scene with one imperative render handle

**Files:**
- Create: components/hero/HeroScene.tsx
- Modify: components/hero/hero-types.ts if the scene handle types need to be exported

**Interfaces:**
- Consumes HeroTier, HeroLayoutMetrics, and HeroSceneState.
- Produces HeroSceneHandle with render(state: HeroSceneState): void, pause(): void, and destroy(): void.
- HeroScene props: { tier, reducedMotion, className?, onError? }.

- [ ] Step 1: Write the scene lifecycle invariant

  Extend the browser audit to assert that the Hero has at most one data-hero-scene canvas, that a hidden/offscreen Hero does not keep increasing RAF count, and that route navigation does not duplicate the canvas.

- [ ] Step 2: Implement client-only initialization

  Use useEffect/dynamic import so PixiJS is never constructed during SSR. Create one PIXI.Application, attach one canvas, and create only the decorative layers: low-density particles, orbit/arc guides, glow accents, and handoff energy.

- [ ] Step 3: Implement the imperative render handle

  render updates existing display objects from the passed state; it must not create objects per frame. It must no-op safely before initialization and in lite/reduced-motion tiers. Do not create a Pixi ticker or a second RAF loop.

- [ ] Step 4: Implement resize, visibility, error, and cleanup paths

  Use ResizeObserver only for scene bounds, pause when the scene is outside the viewport or document is hidden, call onError on initialization failure, and destroy app/resources/observers/listeners on unmount.

- [ ] Step 5: Run typecheck and build

  Run: npm run typecheck and npm run build

  Expected: PASS with a client-only Pixi scene and no hydration warning.

### Task 4: Implement the single motion controller and measured transition metrics

**Files:**
- Create: components/hero/useHeroMotion.ts
- Create: components/hero/useHeroTransitionMetrics.ts
- Modify: components/sections/CoreSolutions.tsx

**Interfaces:**
- Consumes HeroMotionState, HeroLayoutMetrics, HeroSceneHandle, and existing sectionRef/node refs.
- Produces useHeroMotion(options) returning { isInView, stateRef } and updating DOM node transforms plus sceneRef.current.render(state) from one scheduled path.
- Produces useHeroTransitionMetrics(heroRef, coreSolutionsRef) returning stable metrics with named anchors: sceneCenter, orbitRadius, arcStart, arcEnd, handoffBaseline.

- [ ] Step 1: Add a stable Core Solutions transition anchor

  Expose a named anchor/ref around the existing arc rather than requiring the Hero controller to query a descendant SVG on every frame. Preserve the current visual markup and data-core-solutions contract.

- [ ] Step 2: Write the metrics tests through browser assertions

  Assert after resize that the named anchor exists, Hero remains horizontally contained, and the measured arc target changes when viewport width changes. The test must not inspect private React state.

- [ ] Step 3: Implement resize-aware metrics

  Measure on mount, ResizeObserver, orientation/viewport changes, and font/layout readiness. Store the latest values in a ref; never call getBoundingClientRect from the per-frame update.

- [ ] Step 4: Implement one scroll/update path

  Subscribe to passive scroll and resize signals, coalesce updates, compute normalized progress from the Hero section, derive the phase/state with Task 1 helpers, update semantic node wrappers, and call the Pixi handle. Stop the scheduled path when idle/outside the viewport; do not add a second smooth-scroll engine.

- [ ] Step 5: Implement deterministic phases and mobile geometry

  Use the spec ranges: intro 0.00–0.18, gather 0.10–0.45, orbit 0.25–0.60, morph 0.55–0.82, handoff 0.82–1.00. Use an ordered horizontal slot map for the arc and derive orbit radius from measured scene bounds rather than viewport magic numbers.

- [ ] Step 6: Run the browser audit and RAF profile

  Run: npm run audit:browser

  Expected: wheel scrolling advances, no horizontal overflow is reported, active-scroll updates are observed, and post-idle RAF activity is bounded.

### Task 5: Refactor Hero composition, semantic content, and Morphicons morphs

**Files:**
- Create: components/hero/HeroContent.tsx
- Create: components/hero/HeroNode.tsx
- Modify: components/sections/Hero.tsx
- Modify: app/globals.css only for Hero-specific token aliases/fallback rules

**Interfaces:**
- Consumes device tier, motion controller, metrics, HeroScene, and existing Vietnamese Hero content/links.
- Produces one data-hero-root section, one data-hero-scene decorative layer, semantic HTML H1/CTA/metrics, and five accessible Hero node anchors.

- [ ] Step 1: Extract semantic content without changing copy intent

  Move H1, supporting copy, CTA links, metrics, and scroll cue into HeroContent. Reserve width for the rotating typewriter phrase to prevent layout shift; reduced-motion/lite tiers use a stable phrase.

- [ ] Step 2: Replace direct icon mutation with controlled Morphicons

  Use MorphIcon from/to/progress or the equivalent controlled API for the five node icons. Keep the Link as the focusable hit area, preserve aria-label, and leave text labels as real DOM text that fades/compacts during morph.

- [ ] Step 3: Wire HeroScene, useHeroMotion, metrics, fallback, and tier selection

  Keep the semantic layer usable before scene initialization. Show HeroFallback for lite/reduced-motion/error states. Ensure only one Hero scene and one controller are mounted.

- [ ] Step 4: Remove obsolete competing Hero loops/styles

  Remove old direct querySelector-per-frame geometry reads, independent ring CSS spin loops, unbounded random layout generation, and per-node animation code that conflicts with the new controller. Preserve existing Hero copy and route targets.

- [ ] Step 5: Run typecheck, lint, and browser audit

  Run: npm run typecheck, npm run lint, and npm run audit:browser.

  Expected: PASS for semantic content, no console/page errors, no collisions at audited viewports, reduced-motion static path, and no duplicate canvas.

### Task 6: Whole-feature verification and review package

**Files:**
- Modify: scripts/audit-browser.mjs for final focused assertions only
- Create: docs/superpowers/reviews/2026-10-19-hero-v2-verification.md

- [ ] Step 1: Run the full project checks

  Run: npm run seosona:doctor, npm run typecheck, npm run lint, npm run build, npm run audit:browser, and git diff --check.

- [ ] Step 2: Run focused responsive/accessibility checks

  Verify 1440, 768, 390, and 320 widths; reduced-motion; WebGL initialization failure; reload/remount; wheel scroll; focus-visible CTA/node navigation; and page overflow.

- [ ] Step 3: Inspect visual evidence

  Capture before/after Hero screenshots and inspect for label collision, logo/arc overlap, clipped controls, text wrapping, and visual hierarchy. Mark real-device results NOT VERIFIED unless actually measured.

- [ ] Step 4: Perform final diff review

  Check that only the planned Hero/runtime/audit files changed, existing unrelated user edits remain untouched, and no production/deployment configuration was changed.

- [ ] Step 5: Write the verification report

  Record changed files, exact commands/results, screenshots, known risks, and any NOT VERIFIED items. Do not claim the full project is complete if unrelated phases remain unfinished.

## Execution Notes

- The current checkout has extensive pre-existing dirty changes, including Hero.tsx, CoreSolutions.tsx, package files, content, and audit scripts. The implementation must continue in this authoritative workspace because creating a clean worktree would omit those user changes; this is a deliberate preservation ruling.
- Use apply_patch for source edits. Do not use reset/checkout/clean/stash operations.
- If a planned file overlaps a pre-existing dirty file, inspect its diff first and patch the smallest safe region.
- Keep commits limited to isolated new files when possible; do not stage a dirty shared file merely to create a commit.
