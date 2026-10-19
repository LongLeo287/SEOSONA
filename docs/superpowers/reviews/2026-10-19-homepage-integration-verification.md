# SEOSONA Website — Homepage integration verification

Date: 2026-10-19  
Scope: local SEOSONA Website rebuild/demo only  
Production boundary: `https://seosona.com` was used as the source/reference site and was not modified, deployed, or published.

## Review focus

- Hero v2 integration with the existing homepage scroll and motion system.
- Runtime lifecycle, responsive behavior, reduced-motion and WebGL fallback.
- Homepage semantic/a11y regression checks.
- Route, SEO, source-parity, performance and release gates after the Hero work.

## Finding fixed

Five press-logo links in `components/sections/TrustEcosystem.tsx` contained only an image. Their images had `alt`, but the links themselves exposed no accessible name to assistive technology. Each link now has the descriptive name `Đọc bài báo trên {publication}`. The browser audit now guards this contract so the regression is caught at desktop and mobile viewports.

The DOM sampling also reports small inline text links and desktop navigation items below a 44px box. These are not automatically changed because inline links and non-touch desktop navigation have WCAG exceptions and forcing every link to 44px would change the established layout. Physical touch testing remains required before a public launch.

The representative route audit also found a duplicate document H1 on `/giai-phap/ai-content/`: the embedded AI Content mockup used an H1 for demo copy. That mockup heading is now H2, and the route browser gate now requires exactly one H1 on every audited route.

## Motion follow-up

The homepage motion audit found that CSS `animate-pulse` and `animate-ping` effects inside inactive sections were not covered by the existing off-screen pause policy. The shared CSS gate now pauses those classes whenever a section exposes `data-motion-active="false"`. The browser audit checks the known marquee, flow, cursor, pulse and ping selectors for active off-screen animation.

## End-to-end fixes

The mobile performance audit found that the Hero initially mounted as `balanced` during the first client effect. That caused the dynamic Pixi chunk to download before touch capability detection switched the Hero to `lite`. The initial tier is now conservatively `lite`; fine-pointer desktop devices promote to `full` after detection, while touch-primary and reduced-motion environments avoid the Pixi runtime. The logo uses local Next Image delivery with responsive `sizes` rather than the production site's remote asset.

The reduced-motion smoke test also found that the Hero root still advertised `data-motion-active="true"` while its visual tier was `lite`. `useHeroMotion` now keeps that state inactive whenever reduced motion is requested.

## Verification

| Check | Result |
| --- | --- |
| `npm run seosona:doctor` | PASS |
| `npm run audit:security` | PASS; 2,748 Git-visible files scanned, no credential patterns |
| `npm run lint` | PASS; no errors or warnings |
| `npm run typecheck` | PASS |
| `npm run audit:seo` | PASS; zero warnings and blocking issues |
| `npm run audit:performance` | PASS |
| `npm run audit:release` | PASS |
| `npm run audit:source-parity` | PASS; 229/229 production sitemap URLs reached local HTTP 200, 11 intentional redirects followed |
| `npm run build` | PASS; 287/287 routes generated with Webpack |
| `SEOSONA_BASE_URL=http://localhost:3020 npm run audit:browser` | PASS; 40 route/viewport checks across 10 representative routes, including the homepage a11y and exact-one-H1 gates |
| Off-screen motion gate | PASS; no known inactive-section CSS animation remained active |
| End-to-end interaction smoke | PASS; drawer focus trap, scroll lock, Escape restore, reduced motion, Hero tiers, desktop/mobile scroll, overflow, requests and contact validation |
| Lighthouse mobile emulation | PASS for accessibility/SEO/best practices (100/100/100); performance sample 55, FCP 2.1s, LCP 4.8s, TBT 1.17s, CLS 0 |

## Not verified

- Real iPhone Safari scrolling, thermal behavior and device-level FPS/INP.
- Screen reader announcements and manual keyboard traversal with VoiceOver/NVDA.
- Exact color-contrast ratios across every state; this report does not replace a full automated axe/contrast scan.
- Production Core Web Vitals, analytics, lead delivery and launch ownership gates.
