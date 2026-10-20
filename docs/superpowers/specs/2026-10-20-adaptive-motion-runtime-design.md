# Adaptive Motion Runtime Design

**Status:** Approved for implementation

**Goal:** Make motion and scrolling across every SEOSONA Website route adapt to device capability, network conditions, visibility, user motion preferences, and measured frame budget so weak and strong devices remain responsive without removing the intended visual system.

## Scope

The runtime covers Hero canvas/node/line/logo choreography, animated mockups, repeated canvas or DOM animation loops, reveal/count-up effects, Framer Motion transitions, and smooth-scroll integration. It applies to all routes that consume the shared layout/components; route-specific content remains responsible for its own semantic layout and data.

The implementation controls JavaScript animation workload and scheduling. It does not claim to force a physical display refresh rate such as 60Hz or 120Hz; the browser compositor remains responsible for the device's display refresh.

## Constraints

- Preserve the current visual language and existing motion choreography on capable desktop devices.
- Keep native scrolling on touch-primary devices; do not introduce a second touch scroll loop.
- Respect `prefers-reduced-motion` as a hard reduced-motion policy.
- Respect `Save-Data`, slow connection types, missing WebGL, low hardware concurrency, and low device memory.
- Pause nonessential animation when the document is hidden or a registered section is outside its visibility range.
- Avoid a new dependency; use browser APIs and existing React/Next.js patterns.
- Keep server rendering deterministic; capability detection and runtime state begin after hydration.
- Do not deploy or publish from this work.

## Architecture

### 1. Central runtime

Create a client-only adaptive motion runtime with one scheduler per document. It exposes a React context for components and an imperative subscription API for animation-heavy code. The scheduler owns one `requestAnimationFrame` loop while work is active and dispatches ticks to subscribers according to the current policy.

The runtime state contains:

- `mode`: `full`, `balanced`, `lite`, or `paused`;
- `targetFps` and the corresponding minimum frame interval;
- `isVisible`, `isTouchPrimary`, `reducedMotion`, and network/device capability flags;
- measured frame gap history and a monotonic policy revision.

### 2. Capability and budget policy

Initial mode is derived from capability inputs. `reducedMotion`, `Save-Data`, slow network, unavailable WebGL, or touch-primary/low-end hardware select a reduced policy. Full-capability desktop starts in `full` mode.

During active motion, the runtime samples frame gaps using `performance.now()` and changes policy only after a hysteresis window, preventing mode flapping:

- sustained frame pressure demotes `full` to `balanced`, then `balanced` to `lite`;
- a stable recovery window promotes one level at a time;
- `reducedMotion` and document-hidden state always override to reduced/paused;
- the scheduler never increases work merely because a device reports a high refresh rate.

### 3. Visibility and lifecycle

The runtime listens to `visibilitychange`, capability media-query changes, and connection changes where supported. Components register a visibility token or use a shared hook backed by `IntersectionObserver`. A subscriber receives no animation ticks while hidden, paused, or outside its configured visibility margin.

### 4. Integration boundaries

- `Hero` and `useHeroMotion` consume runtime ticks instead of maintaining an independent always-ready loop.
- `SmoothScroll` continues to yield to native touch scrolling and uses the runtime policy for desktop wheel animation.
- Mockups with local RAF loops use the shared subscription/visibility contract.
- Framer Motion components receive a shared reduced-motion policy and avoid repeated loops when offscreen.
- CSS remains the final fallback for `prefers-reduced-motion` and layout responsiveness.

## Public interfaces

The implementation will define focused interfaces rather than exposing scheduler internals:

- `AdaptiveMotionMode = "full" | "balanced" | "lite" | "paused"`;
- `AdaptiveMotionSnapshot` with mode, target FPS, capability flags, and revision;
- `AdaptiveMotionTick` with timestamp, delta, snapshot, and visibility;
- `useAdaptiveMotion(options)` for React consumers;
- `subscribeAdaptiveMotion(listener, options)` for imperative animation consumers;
- `AdaptiveMotionProvider` at the shared app layout boundary.

The exact exported names may follow existing repository naming conventions, but the semantics above are fixed.

## Failure handling

- Unsupported browser APIs fall back to a conservative `lite` policy, not an error state.
- A subscriber throwing must not stop the scheduler or other subscribers; errors are isolated and surfaced through development diagnostics only.
- Capability changes are debounced and cannot create duplicate RAF loops.
- Unmounting a subscriber removes it synchronously and releases the scheduler when no active work remains.

## Verification contract

The implementation is complete only when all of the following are demonstrated:

- TypeScript, lint, and production build pass.
- All sitemap routes pass responsive checks at 320/375/390/768/820/1024/1280/1440/1920 representative widths with no horizontal overflow or console/page errors.
- Runtime audit covers desktop, touch/mobile, low-end, Save-Data/slow-network, reduced-motion, and hidden-document profiles.
- Scroll audits show no scroll long tasks on representative routes and no duplicate scheduler/RAF loop growth after repeated navigation.
- Hero and mockup motion continue to render on full mode, degrade smoothly in balanced/lite, and stop while hidden/offscreen.
- Existing interaction, SEO, security, and release audits remain passing.
- Physical-device behavior is reported separately from automated browser evidence; no unsupported claim of real 120Hz/ProMotion measurement is made.

## Non-goals

- Rewriting all page content or redesigning the visual system.
- Forcing a specific hardware refresh rate.
- Adding a third-party animation/runtime dependency.
- Replacing native touch scrolling with JavaScript smoothing.
