# Adaptive Motion Runtime Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add one adaptive motion scheduler and integrate it across the shared SEOSONA Website animation surfaces so the site reduces work under frame pressure, device/network constraints, hidden tabs, and offscreen sections.

**Architecture:** A client-only `AdaptiveMotionProvider` owns a single document scheduler and publishes capability, visibility, mode, target FPS, and frame-budget snapshots. Existing Hero, smooth-scroll, mockup, count-up, and repeated animation consumers subscribe through focused hooks; CSS and Framer Motion remain the presentation layers.

**Tech Stack:** Next.js 16, React 19, TypeScript, browser `requestAnimationFrame`, `IntersectionObserver`, `ResizeObserver`, Framer Motion, Lenis, Pixi.js.

**Spec:** `docs/superpowers/specs/2026-10-20-adaptive-motion-runtime-design.md`

## Global Constraints

- Preserve the current visual language and existing motion choreography on capable desktop devices.
- Keep native scrolling on touch-primary devices; do not introduce a second touch scroll loop.
- Respect `prefers-reduced-motion` as a hard reduced-motion policy.
- Respect `Save-Data`, slow connection types, missing WebGL, low hardware concurrency, and low device memory.
- Pause nonessential animation when the document is hidden or a registered section is outside its visibility range.
- Avoid a new dependency; use browser APIs and existing React/Next.js patterns.
- Do not deploy or publish from this work.

## Review Focus

- Multiple consumers must never create duplicate scheduler loops; runtime audit must measure stable RAF ownership after navigation and remounts.
- Hidden tabs and offscreen sections must stop nonessential work; tests must cover `visibilitychange` and intersection transitions.
- A frame-pressure demotion must not flap between modes; tests must cover sustained pressure and recovery hysteresis.
- SSR/hydration must remain deterministic; route crawl must cover all supported widths and report no page/console errors.
- Touch-primary and reduced-motion users must not receive Lenis or decorative full-motion work; runtime profiles must verify this.

### Task 1: Implement the adaptive runtime core

**Files:**
- Create: `lib/adaptive-motion.ts`
- Create: `components/motion/AdaptiveMotionProvider.tsx`
- Create: `components/motion/use-adaptive-motion.ts`
- Modify: `app/layout.tsx`

**Interfaces:**
- Produces `AdaptiveMotionMode`, `AdaptiveMotionSnapshot`, `AdaptiveMotionTick`, `AdaptiveMotionProvider`, `useAdaptiveMotion`, and `subscribeAdaptiveMotion`.
- Consumers receive a stable snapshot, a visibility registration helper, and a scheduler tick without owning the document RAF.

- [x] Define capability normalization, mode policy, frame-budget hysteresis, visibility lifecycle, and isolated subscriber dispatch.
- [x] Add the provider at the shared app layout boundary without changing server-rendered markup.
- [x] Verify `npm run lint` and `npx tsc --noEmit --incremental false`.

### Task 2: Move Hero and smooth scrolling onto the runtime

**Files:**
- Modify: `components/hero/hero-device-tier.ts`
- Modify: `components/hero/useHeroMotion.ts`
- Modify: `components/hero/HeroScene.tsx`
- Modify: `components/sections/Hero.tsx`
- Modify: `components/layout/SmoothScroll.tsx`

**Interfaces:**
- Hero consumes the shared snapshot/tick and retains its existing handoff geometry.
- SmoothScroll uses native touch scrolling and schedules desktop Lenis only while active under the runtime policy.

- [x] Replace Hero-owned scroll RAF scheduling with adaptive ticks while preserving damped progress and handoff completion.
- [x] Make Pixi rendering honor `full/balanced/lite/paused` and stop when hidden or outside the Hero viewport.
- [x] Keep the existing capability tier as an input to the runtime, not a second scheduler.
- [x] Verify Hero full/balanced/lite/reduced-motion profiles with `npm run audit:runtime` and `npm run audit:browser`.

### Task 3: Integrate repeated mockup and utility animation loops

**Files:**
- Modify: `components/mockups/GoogleAdsDashboard.tsx`
- Modify: `components/mockups/PowerBiDashboardMockup.tsx`
- Modify: `components/mockups/AiContentGeneratorMockup.tsx`
- Modify: `components/mockups/SonaToolMockup.tsx`
- Modify: `components/mockups/YoutubePlayerMockup.tsx`
- Modify: `components/sections/AiIntegration.tsx`
- Modify: `components/sections/HighTicketCaseStudies.tsx`
- Modify: `components/ui/chat-preview.tsx`
- Modify: `components/ui/hover-border-gradient.tsx`
- Modify: `components/ui/CountUp.tsx`

**Interfaces:**
- Repeated timers and RAF loops use `useAdaptiveMotion` or the imperative subscription API and clean up on unmount/offscreen.

- [x] Replace interval-driven visual loops with visibility-aware runtime ticks or pause their timers when inactive.
- [x] Preserve content sequencing and timing while allowing balanced/lite modes to reduce update frequency.
- [x] Ensure CountUp and chat sequencing remain accessible and deterministic under reduced motion.
- [x] Run route interaction and runtime audits after integration.

### Task 4: Make Framer Motion and CSS motion policy-aware

**Files:**
- Modify: `app/layout.tsx`
- Modify: `components/ui/use-stable-reduced-motion.ts`
- Modify: motion-heavy shared sections/components identified by the runtime audit.
- Modify: `app/globals.css`

**Interfaces:**
- Shared motion policy controls reduced motion and avoids repeating infinite work for hidden/offscreen consumers without changing semantic content.

- [x] Provide a stable reduced-motion/runtime policy to Framer Motion consumers.
- [x] Add only targeted CSS fallbacks for `balanced/lite/paused`; do not blanket-disable intended transitions.
- [x] Verify no animation policy causes hydration mismatch or accessibility regression.

### Task 5: Expand responsive/runtime verification and ship

**Files:**
- Modify: `scripts/audit-runtime.mjs`
- Modify: `scripts/audit-browser.mjs`
- Create: `scripts/audit-motion-runtime.mjs`
- Modify: `package.json`
- Modify: `docs/planning/PHASE_STATUS.md`

**Interfaces:**
- Audits expose reproducible profiles for desktop, mobile/touch, low-end, Save-Data/slow-network, reduced-motion, and hidden-document conditions.

- [x] Add representative desktop/mobile browser and runtime profiles.
- [x] Add runtime mode publication, hidden-tab pause/recovery, and active-subscriber checks.
- [x] Run lint, non-incremental typecheck, build, SEO/security/performance/release/source-parity/staging audits, browser audit, runtime audit, and full route crawl.
- [x] Review the complete diff, commit with Conventional Commit syntax, and push only after all checks and the working tree are clean.
