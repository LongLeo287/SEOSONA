# SEOSONA Website — Hero v2 Hybrid 2D Design Spec

**Status:** Hero v2 direction approved by user; implementation is intentionally gated on review of this detailed spec.
**Scope:** Home page Hero card and the Hero → Core Solutions transition in the local SEOSONA Website rebuild/demo.
**Production boundary:** `https://seosona.com` remains the source/reference site. This document changes neither production nor the source site.

## 1. Decision summary

Rebuild the Hero as a semantic HTML/React content layer plus one decorative 2D scene layer. PixiJS owns the visual scene, Anime.js owns the deterministic motion timeline, and a small Morphicons adapter owns the pill-to-icon transition. The canvas is decorative only: all readable copy, links, metrics, and focusable controls remain real HTML.

Three.js and Animate.css are deliberately not runtime dependencies in the first implementation:

- The Hero needs a 2D scene, not a second 3D renderer. Adding Three.js now would duplicate renderer/lifecycle cost without a demonstrated product benefit.
- Animate.css is useful as a reference for one-shot entrance states and reduced-motion handling, but it should not become the scroll engine or add a second animation ownership model. Its current repository license also requires an explicit project decision before packaging it as a dependency.

This keeps the visual ambition high while making scroll, cleanup, fallback, and accessibility testable.

## 2. Current audit context

The existing Hero has already received a focused bug-fix pass. The following are verified baseline facts, not goals for the new implementation:

- The horizontal overflow/sticky interaction was corrected from `overflow-x-hidden` to `overflow-x-clip`.
- Core Solutions exposes a stable data anchor for the transition geometry.
- Hero logo exit and Core Solutions title reveal are staged to reduce overlap.
- Orbit nodes have an ordering map for the handoff to the arc, and mobile labels become icon-only earlier.
- The current targeted checks passed before this redesign decision: build, lint, browser audit, `git diff --check`, and sampled collision checks.

The remaining product concern is architectural and perceptual: the Hero should have one motion owner and one scroll-progress contract, rather than several independent effects competing for transforms, layout, and rendering time. The new design must preserve the fixes above and remove their implicit coupling where practical.

## 3. Goals

1. Make the Hero feel premium and recognisably SEOSONA: precise, calm, technical, and conversion-oriented.
2. Keep the experience smooth during slow scroll, fast scroll, touch momentum, and scroll stop.
3. Keep content discoverable by search engines and assistive technology.
4. Make desktop, tablet, mobile, reduced-motion, save-data, weak-device, and WebGL-failure behavior explicit.
5. Keep the Hero-to-Core-Solutions handoff geometrically stable and free of node collisions.
6. Make animation ownership, cleanup, and performance budgets reviewable in code.
7. Preserve the current local-demo boundary and do not deploy or publish.

## 4. Non-goals

- No production deployment or changes to `https://seosona.com`.
- No redesign of every home-page section.
- No text, CTA, or essential icon semantics inside canvas pixels.
- No full Three.js scene in this first Hero implementation.
- No infinite decorative animation on reduced-motion, lite, or save-data tiers.
- No reusable design-system source of truth in this web repo; reusable tokens and patterns remain owned by the SEOSONA UX/UI project. Local CSS may consume the approved values.
- No dependency addition until the package versions, bundle impact, and license decisions are recorded during implementation.

## 5. Source and library mapping

The supplied repositories are treated as research inputs, not as permission to copy unrelated code.

| Source | Intended use | Explicit boundary |
| --- | --- | --- |
| [PixiJS](https://github.com/pixijs/pixijs) | One decorative 2D renderer for particles, orbit lines, glow, and depth layers | One canvas/app instance; no text content; no renderer work outside the scene controller |
| [Anime.js](https://github.com/juliangarnier/anime) | Intro, stagger, interpolation, easing, and deterministic morph timeline | One motion controller; it must not create competing scroll loops |
| [Morphicons](https://github.com/guillermolg00/morphicons) | Small set of SVG icon morphs for pill → icon states | Use an adapter/raw icon data; preserve semantic HTML hit areas and focus rings |
| [Animate.css](https://github.com/animate-css/animate.css) and [docs](https://animate.style/) | Reference for one-shot entrance classes and reduced-motion behavior | Do not use it as the scroll engine; confirm licensing before adding it as a dependency |
| [Three.js](https://github.com/mrdoob/three.js/) | Future option for a verified true-3D requirement | Not included in Hero v2 initial runtime |
| [Anime.js docs](https://animejs.com/) | Timing/easing API reference | Version-specific API must be checked at implementation time |
| [Google Sheet inventory](https://docs.google.com/spreadsheets/d/1IgJ_RvV9FfBkeFmXJpYUWfBJ6nkww1j1yjC9F0WMyo0/edit?usp=sharing) | Source governance, reuse classification, and audit trail | Read-only input; do not modify workbook from this repo task |

## 6. Design system contract

The Hero consumes existing SEOSONA tokens and should not introduce a second visual language. If a value is not already tokenised, add a local semantic alias only when needed by the Hero and document the mapping.

### 6.1 Visual language

- Base: deep navy/ink background with a restrained blue spectrum.
- Accent: SEOSONA blue for active nodes, CTA emphasis, and transition energy.
- Depth: opacity, scale, blur, and low-contrast lines before adding heavy filters.
- Surfaces: rounded cards with consistent border alpha, shadow softness, and focus-visible treatment.
- Typography: use the existing project font stack; avoid a new display font until font loading, Vietnamese glyph coverage, and layout stability are verified.
- Density: fewer, clearer objects on mobile; visual complexity must not be used to compensate for unclear content.

### 6.2 Required semantic tokens

Use CSS custom properties or existing Tailwind/theme tokens for:

- ink/background and elevated surface colors;
- primary, secondary, muted, and focus colors;
- Hero max width, content gutter, scene height, and transition spacing;
- card radius, node radius, line width, shadow, and blur limits;
- motion durations for intro, gather, morph, and handoff;
- z-index layers for content, scene, controls, and fallback.

The implementation must avoid hard-coded viewport-specific coordinates scattered across components. Geometry belongs in a scene layout model and is derived from measured container bounds.

## 7. Component and data architecture

### 7.1 Proposed files

- `components/sections/Hero.tsx`: page-level composition and semantic section boundary.
- `components/hero/HeroContent.tsx`: H1, supporting copy, metrics, CTA links, and accessible labels.
- `components/hero/HeroScene.tsx`: client-only PixiJS mount, scene layers, and renderer lifecycle.
- `components/hero/useHeroMotion.ts`: one normalized progress source, phase calculation, and timeline state.
- `components/hero/hero-device-tier.ts`: capability detection and explicit tier selection.
- `components/hero/hero-fallback.tsx`: static SVG/CSS visual fallback with no WebGL dependency.
- `components/hero/hero-types.ts`: shared geometry, tier, phase, and scene-state types if existing local conventions do not cover them.
- `scripts/audit-browser.mjs`: extend existing checks only when the new invariants can be tested reliably.

Do not move reusable design-system rules into this repo. Do not create a generic animation framework for one Hero.

### 7.2 Ownership rules

| Concern | Single owner |
| --- | --- |
| Semantic content and CTA layout | `HeroContent` / CSS |
| Canvas creation and destruction | `HeroScene` |
| Scroll progress and phase transitions | `useHeroMotion` |
| Device/reduced-motion policy | `hero-device-tier` |
| Static fallback | `HeroFallback` |
| Core Solutions geometry measurement | a resize-aware transition metrics hook or wrapper |
| Focus, keyboard, and link semantics | HTML elements, never canvas |

No other component may imperatively mutate Hero node transforms or attach an independent Hero `requestAnimationFrame` loop.

### 7.3 Data flow

```text
HeroContent (HTML) ───────────────┐
                                 ├─ Hero layout ── HeroScene (canvas)
viewport/scroll ─ useHeroMotion ─┘          │
                                            └─ scene state only
CoreSolutions anchor ─ ResizeObserver ─ transition metrics
```

`useHeroMotion` emits a stable, normalized state such as:

```ts
type HeroMotionState = {
  progress: number;       // clamped 0..1 across the Hero transition range
  phase: 'intro' | 'orbit' | 'morph' | 'handoff' | 'complete';
  velocity: number;       // bounded, sign-preserving scroll intent
  isScrolling: boolean;
  tier: 'full' | 'balanced' | 'lite';
  reducedMotion: boolean;
};
```

The exact type may follow project conventions, but the contract must remain serialisable and renderer-agnostic. PixiJS should consume scene state; it should not calculate page layout or read DOM selectors every frame.

### 7.4 Transition geometry

The current Hero/Core Solutions relationship must be kept, but the new implementation should avoid an imperative `querySelector` in a render loop. A resize-aware metrics boundary should:

1. Measure the Hero scene box and Core Solutions transition anchor after layout.
2. Recompute only on `ResizeObserver`, orientation change, font/layout readiness, or an explicit route/layout update.
3. Store the measured geometry in React state/ref used by the motion controller.
4. Invalidate stale measurements on unmount.

The geometry model should expose named anchors (scene center, orbit radius, arc start, arc end, handoff baseline) instead of raw selectors or magic offsets.

## 8. Motion design

All progress values are clamped. Each phase owns a distinct visual responsibility; no phase should fight another phase over the same property.

### 8.1 Timeline

| Progress | Phase | Visual responsibility |
| --- | --- | --- |
| `0.00–0.18` | Intro | Content settles, scene fades/appears once, nodes enter with a short stagger |
| `0.10–0.45` | Gather | Nodes approach their orbit slots; light parallax responds to bounded scroll velocity |
| `0.25–0.60` | Orbit | Orbit arrangement is legible; decorative glow and line energy remain subtle |
| `0.55–0.82` | Morph | Nodes map to ordered arc slots; pills reduce to icons without crossing |
| `0.82–1.00` | Handoff | Hero scene fades/settles, Core Solutions title and content become primary |

The overlaps above are intentional crossfades, but each property still has one owner. For example, the orbit layer owns line opacity, while the handoff layer owns scene opacity; no separate component may also animate those properties.

### 8.2 Easing and scroll behavior

- Use smooth easing for intro and settle; use bounded interpolation for scroll-driven progress.
- Do not map raw wheel delta directly to pixel positions.
- Use a single passive scroll listener or an equivalent observer, write the latest scroll intent to a ref, and sample it from one scheduled update path.
- Coalesce scroll events; never do layout reads and heavy renderer updates for every event.
- On scroll stop, settle to the current deterministic state rather than starting a second autonomous animation.
- Respect direction reversal without letting velocity overshoot geometry bounds.

### 8.3 Accessibility motion policy

When `prefers-reduced-motion: reduce` is active:

- render the final useful scene or a static fallback;
- skip orbiting, particle drift, spring motion, and autoplay timelines;
- keep opacity changes short and functional only;
- preserve content order and CTA focus behavior;
- do not rely on motion to communicate meaning.

Animate.css's reduced-motion guidance is a reference, not a reason to add a second runtime.

## 9. Renderer and effect budget

### 9.1 PixiJS scene layers

The full tier may contain, in order:

1. ambient background field;
2. low-density particle/noise layer;
3. orbit/arc guide lines;
4. node glow and depth accents;
5. handoff emphasis layer.

All layers are decorative and `aria-hidden`. Text remains in HTML. Avoid post-processing filters that create large offscreen surfaces unless measured and justified.

### 9.2 One renderer loop

There must be at most one active Hero renderer loop. It should:

- stop when the Hero is outside the viewport;
- stop or render only state changes while idle when no continuous effect is needed;
- use a measured adaptive frame budget while scrolling;
- cleanly destroy the Pixi application, ticker callback, textures, listeners, and observers;
- never keep a hidden canvas rendering after route change or unmount.

The implementation may use Pixi's ticker or a single `requestAnimationFrame`, but not both for the same scene.

### 9.3 Adaptive frame rate (AFR)

AFR is a policy, not a promise of a specific physical-device FPS. The controller should classify the current frame budget:

- `active-high`: render at the display cadence when recent frame work stays within budget;
- `active-reduced`: cap scene updates around 30fps when long frames or thermal/visibility signals indicate pressure;
- `idle`: pause continuous scene updates and render the last stable state;
- `lite`: no continuous renderer; CSS/SVG fallback only.

The policy must not make scroll itself lag. Scroll progress remains lightweight; only decorative scene fidelity is reduced.

## 10. Device and capability tiers

Tier detection must be conservative and resilient when browser APIs are missing.

### `full`

Desktop/fine-pointer or confidently capable device, WebGL available, no save-data signal, no reduced-motion preference, and sufficient measured frame budget. Use full 2D layers with bounded particles and blur.

### `balanced`

Touch/mobile, unknown hardware, or uncertain capability. Use fewer particles, thinner effects, no unnecessary idle loop, and earlier icon-only node labels during morph. Keep the same semantic content and transition contract.

### `lite`

Any of: reduced motion, save-data, constrained connection, WebGL initialization failure, visibility/background state, or repeated long-frame pressure. Use static SVG/CSS composition, no autoplay particle loop, and a stable handoff.

Do not assume `deviceMemory`, `hardwareConcurrency`, WebGL, or connection APIs exist. Feature detection must be guarded and must never block hydration.

## 11. UX, content, and accessibility

- Preserve one H1 and the existing meaningful Vietnamese content unless content audit identifies a concrete issue.
- Keep CTA links as real anchors with visible `:focus-visible` states and keyboard order matching visual order.
- Keep metrics as readable HTML, not canvas text.
- Give the canvas `aria-hidden="true"` and ensure it does not intercept pointer or keyboard input.
- Avoid layout shift from typewriter/text effects: reserve the content width, pause nonessential text mutation during scroll, or replace it with a stable final phrase on constrained tiers.
- Provide a useful static Hero if JavaScript, WebGL, or animation initialization fails.
- Maintain adequate contrast for text, inactive nodes, focus rings, and fallback lines.
- Ensure mobile at 320px width remains readable without horizontal overflow.
- Do not make the user wait for decorative assets before reading or activating the CTA.

## 12. Failure handling and lifecycle

Initialization must be defensive:

1. Render semantic content immediately.
2. Detect reduced motion/capability tier without throwing during SSR.
3. Dynamically initialize PixiJS only on the client and only when the tier permits.
4. If import, WebGL, texture, or renderer initialization fails, switch to `HeroFallback` and record a development diagnostic.
5. Register observers/listeners after mount and remove all of them on cleanup.
6. On visibility loss, route change, or unmount, pause/destroy renderer resources.
7. Never leave a partially initialized canvas above the fallback or content.

No external runtime asset fetch should be introduced for the first implementation; use local/inline geometry where possible.

## 13. Dependency and licensing gate

Before implementation changes `package.json`:

- inspect the current package manager and lockfile;
- choose compatible, current versions at implementation time;
- record why each dependency is needed and its approximate bundle impact;
- verify repository/package licenses and compatibility with this personal demo;
- avoid adding Three.js and Animate.css unless a later decision explicitly justifies them;
- run the existing package audit/build checks after lockfile changes.

The initial expected runtime dependency set is PixiJS, Anime.js, and Morphicons only if the existing code cannot provide equivalent local behavior. A small local adapter is preferred over importing unused icon families.

## 14. Validation plan

### Static and build checks

- `npm run seosona:doctor` when available.
- `npm run lint`.
- `npm run typecheck` when available, or verify the equivalent check used by the project.
- `npm run build`.
- `git diff --check`.

### Browser checks

Extend `npm run audit:browser` or add focused Playwright checks for:

- desktop 1440px;
- tablet 768px;
- mobile 390px;
- narrow mobile 320px;
- `prefers-reduced-motion: reduce`;
- WebGL unavailable or scene initialization rejected;
- route load and reload with no console/page errors;
- no horizontal overflow;
- one Hero canvas maximum and no duplicate renderer after remount;
- content and CTA are visible before scene initialization completes;
- no sampled node/label collision during orbit and morph;
- renderer stops outside viewport and after unmount;
- stable layout after font readiness and orientation/viewport changes.

### Performance evidence

Capture, where tooling permits:

- active-scroll frame count and long-frame count;
- post-idle frame activity;
- canvas count and approximate scene object count by tier;
- reduced-motion and lite-tier proof that continuous rendering is disabled.

Local Chromium evidence does not prove real iPhone thermal behavior. Real-device verification remains `NOT VERIFIED` unless performed separately.

## 15. Acceptance criteria

The implementation is ready for a final review only when all of the following are true:

1. Hero content and CTAs remain semantic HTML and work with keyboard/focus.
2. There is one motion/progress owner and at most one active Hero renderer loop.
3. Hero → Core Solutions transition uses measured named geometry, not scattered viewport magic numbers.
4. Desktop, tablet, 390px, and 320px layouts have no horizontal overflow or sampled collisions.
5. Fast scroll, slow scroll, direction reversal, and scroll stop settle deterministically.
6. Reduced-motion, save-data/lite, WebGL failure, and JavaScript/renderer initialization failure have a usable static path.
7. Scene teardown leaves no ticker, RAF, observer, listener, or stale canvas.
8. `npm run lint`, `npm run typecheck`/equivalent, `npm run build`, browser audit, and `git diff --check` results are reported accurately.
9. No production URL, deployment, or external spreadsheet is modified.
10. Any unverified real-device claim is explicitly labelled `NOT VERIFIED`.

## 16. Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Renderer cost hurts scroll | One loop, tiered scene, viewport pause, measured frame budget, no raw wheel-to-layout mapping |
| Hydration mismatch | Client-only scene; semantic content renders independently |
| WebGL unavailable | Static SVG/CSS fallback and initialization error boundary |
| Motion overlap returns | Explicit property ownership and phase table; browser collision checks |
| Package bloat | Add only justified dependencies; defer Three.js and Animate.css |
| Font/typewriter layout shift | Reserved width and stable constrained-tier copy |
| Accessibility regression | Canvas decorative only; real HTML controls; reduced-motion path |
| License ambiguity | Verify package/repository license before dependency addition |
| DOM/scene geometry drift | ResizeObserver-backed named anchor metrics and invalidation on layout changes |

## 17. Open decisions for implementation review

These are implementation choices, not blockers to this design, but they must be resolved before code changes:

- Exact compatible versions of PixiJS, Anime.js, and Morphicons.
- Whether the existing icon source can provide raw SVG node data or needs a tiny adapter.
- Exact names of existing SEOSONA CSS tokens after inspecting the current theme.
- Whether the existing Core Solutions SVG can expose named geometry without changing its visual contract.
- Which browser automation signal is reliable enough to emulate WebGL failure in CI/local audit.

No choice above authorizes adding unrelated libraries or changing other homepage sections.

## 18. Self-review checklist

- [x] Semantic content is separated from decorative rendering.
- [x] One scroll-progress/motion ownership model is defined.
- [x] Current Hero/Core Solutions bug-fix constraints are preserved.
- [x] Desktop, mobile, reduced-motion, save-data, and fallback behavior are specified.
- [x] AFR is framed as measured adaptive policy, not an unsupported device guarantee.
- [x] PixiJS, Anime.js, Morphicons, Animate.css, Three.js, and the inventory sheet each have an explicit role/boundary.
- [x] Accessibility, SEO, content stability, lifecycle cleanup, and license risk are included.
- [x] Acceptance criteria and verification commands are concrete.
- [x] Production/deployment scope is explicitly excluded.

**Next gate:** user reviews and approves this spec. Only then should an implementation plan be written and product code/dependencies changed.
