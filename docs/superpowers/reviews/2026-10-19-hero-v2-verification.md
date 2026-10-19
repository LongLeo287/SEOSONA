# Hero v2 Hybrid 2D Verification

## Scope

This report covers the local SEOSONA Website Hero v2 implementation only. The production/reference site `https://seosona.com` was not modified, deployed, or published.

## Implemented

- Semantic Hero content remains HTML: H1, Vietnamese supporting copy, CTA anchors, metrics, focus states, and node links.
- PixiJS 8.22.0 provides one client-only decorative 2D scene with particles, orbit guides, arc, glow, and handoff layers.
- Anime.js controls the one-shot intro entrance; the scroll controller remains the single owner of continuous Hero progress.
- Morphicons 2.0.0 controls the five icon morph paths through an imperative, scroll-controlled handle.
- Device tiers cover full, balanced, and lite paths; reduced motion, save-data/constrained signals, and WebGL failure use the static fallback.
- Core Solutions arc geometry is measured through a named anchor and ResizeObserver-backed metrics rather than read through a per-frame descendant query.
- Mobile node labels collapse before the compact orbit and the mobile orbit radius is enlarged to avoid the previous pill collision.
- Pixi ticker is not used for the Hero; the scene renders only when the shared Hero motion path supplies state.

## Changed implementation paths

- `components/hero/hero-types.ts`
- `components/hero/hero-motion.ts`
- `components/hero/hero-device-tier.ts`
- `components/hero/HeroFallback.tsx`
- `components/hero/HeroScene.tsx`
- `components/hero/HeroContent.tsx`
- `components/hero/HeroNode.tsx`
- `components/hero/useHeroMotion.ts`
- `components/hero/useHeroTransitionMetrics.ts`
- `components/sections/Hero.tsx`
- `components/sections/CoreSolutions.tsx`
- `scripts/audit-browser.mjs`
- `package.json`
- `package-lock.json`

The checkout contains many unrelated pre-existing modified/untracked files. They were not reset, cleaned, or staged as part of this implementation.

## Verification

| Check | Result |
| --- | --- |
| `npm run seosona:doctor` | PASS |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS; no errors or warnings after final cleanup |
| `npm run build` | PASS; 287 routes generated |
| `npm run audit:browser` | PASS; 20 route/viewport checks |
| Reduced-motion audit | PASS; lite tier, semantic content retained, no continuous canvas |
| WebGL failure audit | PASS; static fallback, no canvas |
| Continuous RAF profile | PASS; 16–23 active continuous frames and 8–9 post-idle continuous frames in the final runs; finite CountUp frames are excluded from the continuous-loop metric |
| Mobile collision sampling | PASS; 390px and 320px at scroll positions 0/150/300/450/600 had no visible node-pair overlaps |
| Reload/navigation lifecycle | PASS; canvas counts 1 → 1 after reload → 0 on `/case-study/` |
| `git diff --check` | PASS; only existing line-ending warnings |

## Evidence

Local visual evidence is in:

- `output/playwright/hero-v2-desktop-entry-fixed.png`
- `output/playwright/hero-v2-mobile-entry-fixed.png`
- `output/playwright/hero-v2-desktop-mid-fixed.png`
- `output/playwright/hero-v2-mobile-mid-fixed.png`
- `output/playwright/hero-v2-desktop-scroll.png`
- `output/playwright/hero-v2-mobile-scroll.png`

The first visual pass exposed the centered-logo/CTA overlap and the second exposed mobile node collisions. Both were corrected and rechecked.

## Not verified

- Physical iPhone Safari thermal behavior and sustained FPS.
- Screen-reader testing with VoiceOver/NVDA.
- Production deployment or real-domain behavior.
- Completion of unrelated website phases outside this Hero task.
