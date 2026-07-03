# SEOSONA Website Audit - 2026-07-03

## Scope

- Audited the `SEOSONA Website` project only.
- Kept OS, autonomous-agent, brain, memory, and reusable UX/UI ownership out of the Website project.
- Did not touch `SEOSONA Video`.

## Issues Fixed

- Fixed ESLint errors from unescaped JSX quotation marks in service and audit pages.
- Removed stale "operating system" wording from the public About page and reframed the Website as a marketing ecosystem surface.
- Hardened `/api/contact` so malformed JSON and non-object payloads return client errors instead of server errors.
- Removed unused imports and explicit `any` types that were creating lint warnings.
- Fixed hook dependency and state update warnings in UI components.
- Replaced the stale Google Maps embed payload on `/lien-he` with a stable address embed URL.
- Updated lockfile dependencies for the high-severity `form-data` advisory and the `gray-matter` nested `js-yaml` advisory.

## Validation

- `npm run seosona:doctor`: pass.
- `npm run lint`: pass with 0 warnings.
- `npm run typecheck`: pass.
- `npm run build`: pass, 216 static pages generated and `/api/contact` dynamic route compiled.
- Browser smoke test on production server `localhost:3010`: `/`, `/lien-he`, `/ve-seosona`, `/dich-vu-thiet-ke-website`, and `/giai-phap/ai-customer-journey` returned 200 with 0 console errors.
- API smoke test: `/api/contact` returned 200 for valid payload and 400 for malformed JSON.
- `npm audit --audit-level=high`: pass.

## Residual Issue

- Full `npm audit` still reports a moderate PostCSS advisory through `next@16.2.7` -> `postcss@8.4.31`.
- `npm audit fix --force` proposes downgrading Next to `9.3.3`, which is a breaking and unsafe remediation path for this project.
- Do not use `--force` here unless the Next upgrade/downgrade path is planned and regression-tested separately.
