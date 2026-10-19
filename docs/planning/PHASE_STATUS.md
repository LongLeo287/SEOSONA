# SEOSONA Website rebuild — phase status

Last verified: 2026-10-19  
Scope: `D:\LongLeo\SEOSONA AI\SEOSONA Website`  
Production/source reference: <https://seosona.com>  
Deployment status: disabled; this is a personal/demo rebuild. No production write or publish was performed.

This is the current evidence ledger for the seven project phases. `PASS` means the
repo or local runtime evidence is complete. `NOT VERIFIED` means the requirement
depends on an external owner, an approved staging origin, or a physical browser/device.

## Summary

| Phase | Scope | Current state |
| --- | --- | --- |
| 0 | Baseline and security | PASS for the demo scope |
| 1 | Production URL inventory | PASS for the bounded source inventory |
| 2 | URL mapping and redirects | PASS locally |
| 3 | Content and route rebuild | PASS locally |
| 4 | Technical SEO | PASS locally |
| 5 | UX, accessibility, motion and performance QA | PASS for local/emulated demo environments |
| 6 | Staging and launch readiness | PASS for the demo scope; production launch gates are optional and out of scope |

## Evidence by phase

### Phase 0 — baseline and security

- `npm run audit:security`: 2,748 Git-visible files scanned, no credential patterns.
- `npm audit --omit=dev`: 0 vulnerabilities after removing unused `axios`/`gray-matter`, replacing frontmatter parsing with `js-yaml`, and applying the patched selector-parser override.
- `npm run seosona:doctor`: project connection, manifest, memory namespace and remote safety checks PASS.
- No deployment, DNS, production mutation, commit or push was performed.
- Production credential revocation is out of scope for this standalone demo because no production access is being used.

### Phase 1 — URL inventory

- Bounded read-only inspection of the production sitemap index found 230 sitemap entries and 229 unique source URLs: 133 posts, 16 pages, 69 glossary articles plus the glossary index, and 11 category entries with one duplicate index URL.
- Production homepage canonical is `https://seosona.com/`; production robots points to the sitemap index and child sitemaps.
- The local rebuild publishes 275 canonical URLs because it includes the rebuilt route taxonomy, 202 blog MDX entries (including the imported glossary articles), and the current page content model.

### Phase 2 — URL mapping and redirects

- SEO audit parses 20 redirect rules without self-loops.
- All 229 unique production source URLs return HTTP 200 locally after the final build; eleven legacy source paths resolve through the intended local redirects.
- Local sitemap URLs return HTTP 200 after the final build; the two SEO hub routes missing from the earlier taxonomy are now canonical local routes.
- Static internal links resolve to known routes or approved legacy aliases.

### Phase 3 — content and route rebuild

- SEO audit scans 202 blog MDX files and 29 page MDX files.
- Production build generates 287/287 routes.
- The 69 glossary articles are imported from the production glossary sitemap into the existing SEO article route, with source dates, descriptions, cover metadata and content preserved as local MDX.
- The MUM cover asset and Academy grid-pattern asset are local and included in the rebuild.
- No content or route was removed as an unverified substitute for an approved mapping.

### Phase 4 — technical SEO

- `npm run audit:seo`: zero warnings and zero blocking issues.
- Metadata, structured data, robots, static sitemap generation, canonical deduplication, noindex filtering and favicon redirect checks PASS.
- `NEXT_PUBLIC_SITE_URL` is validated at build time for approved staging/local origins and safely falls back to `https://seosona.com`.
- Staging-build HTML emitted the staging canonical; the final default build emitted the production canonical.

### Phase 5 — UX, accessibility, motion and performance QA

- `npm run lint`, `npm run typecheck`, `npm run audit:performance` and production build PASS.
- Latest aggregate local release pass: `seosona:doctor`, `audit:security`, lint, typecheck, `audit:seo`, `audit:performance`, `audit:release`, build, `audit:source-parity`, `audit:staging`, `audit:browser`, `npm audit --omit=dev` and `git diff --check` all PASS in one bounded run; the production build generated 287/287 routes and dependency audit reported 0 vulnerabilities.
- The production build script is pinned to the verified `next build --webpack` path because Next 16.4.2's default Turbopack path fails to resolve the documented Tailwind v4 typography plugin; the Webpack build compiles and generates all 287 routes.
- Playwright desktop/mobile matrices report HTTP 200, no console errors/warnings on normal routes, no network 4xx and no horizontal overflow.
- The pre-Hero repeatable browser audit gate passed 10 route/viewport checks against the local production server, including scroll, drawer focus/lock, canonical/H1, console/page errors and RAF idle behavior.
- Post-Hero v2 integration audit passes 20 route/viewport checks against `http://localhost:3014/`, including the Hero contract, reduced-motion tier, WebGL fallback, reload/navigation lifecycle, mobile node collision sampling and continuous-RAF bounds.
- The representative core-route matrix now covers 10 routes across desktop, tablet, mobile and narrow viewports: 40/40 checks pass with HTTP 200, exactly one H1, no console/page errors, no failed requests and no horizontal overflow. The embedded AI Content mockup H1 was corrected to H2 after this audit found the duplicate heading.
- Homepage accessibility regression coverage now checks exactly one H1, accessible names for visible interactive elements and `alt` presence for visible images at desktop and mobile viewports. The audit found and fixed five press-logo links that previously exposed no accessible name.
- Mobile drawer: `aria-hidden`, focus trap, Escape restore, body scroll lock and 44×44px controls verified at 390×844.
- Contact form with no webhook fails closed with HTTP 503, visible error state and no fake success; real lead delivery remains unverified.
- SmoothScroll keeps native scrolling on touch-primary devices and avoids a continuous idle RAF loop; Hero/CoreSolutions use scroll-driven/native motion paths.
- Runtime AFR profiling found infinite Framer loops in the off-screen `TextShimmer` and header badge wave; `TextShimmer` is now viewport/reduced-motion gated and the badge wave uses compositor CSS instead of a JS animation loop. In the latest production browser audit, post-scroll RAF work was 237 frames (24 frames during the active scroll window), within the bounded audit budget.
- Follow-up homepage motion audit found CSS `animate-pulse`/`animate-ping` effects that were not included in the off-screen pause policy. The shared motion gate now pauses those effects under inactive sections, and the browser audit verifies no known off-screen animation remains active.
- Touch-primary devices now start the Hero in the conservative `lite` tier before capability detection, preventing the 932 KiB Pixi runtime from being downloaded during the first mobile effect. Fine-pointer desktop devices promote to `full` after capability detection; reduced-motion keeps the motion region inactive.
- Latest local Lighthouse sample on `http://localhost:3020/`: Performance 55, Accessibility 100, SEO 100, Best Practices 100; FCP 2.1s, LCP 4.8s, TBT 1.17s, CLS 0, Speed Index 3.9s, TTI 5.5s. This is an emulated local mobile measurement with run-to-run variance, not physical-device evidence; the remaining performance opportunity is homepage client-JavaScript/main-thread work, not a route, SEO, accessibility or scroll correctness failure.
- Physical-device/browser evidence and production Core Web Vitals are optional follow-up work if this demo is later prepared for public launch.

### Phase 6 — staging and launch readiness

- `npm run audit:release`: deployment safety and environment contract PASS.
- `npm run audit:staging` against the current production build at `http://localhost:3020/`: 10/10 checks PASS.
- `npm run audit:source-parity` is now a repeatable read-only gate for the production sitemap index; the latest run followed the production sitemap redirect, read 230 entries across 5 sitemap documents, deduplicated to 229 URLs, reached local HTTP 200 for all 229, and followed 11 intentional redirects.
- Fresh source-parity crawl: 230 production sitemap entries / 229 unique URLs, 0 local failures, 11 expected redirects, and 275 local canonical sitemap entries.
- Fresh Playwright smoke on desktop (1440×900) and mobile (390×844) reports scroll advancement, no horizontal overflow, no page errors or console errors, correct mobile drawer focus trap/`aria-hidden`/scroll lock/Escape focus restoration, reduced-motion inactivity, Hero tier selection, contact required-field validation, and visible touch controls at or above 44×44px.
- `vercel.json` keeps Git deployment disabled.
- `docs/planning/LAUNCH_CHECKLIST.md` defines staging, ownership, cutover, rollback and monitoring gates.
- Approved staging, real lead delivery, analytics/consent, GSC, hosting authorization and production cutover are intentionally out of scope for this demo. The local staging smoke is the applicable Phase 6 gate.

## Completion decision

The repository implementation and all seven local/demo verification phases are complete.
Production-only gates remain documented as optional follow-up work and are not blockers
for this personal/demo project.
