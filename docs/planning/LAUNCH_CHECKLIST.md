# SEOSONA Website launch checklist

This checklist is for the rebuild at `D:\LongLeo\SEOSONA AI\SEOSONA Website`. The current target is a personal/demo website; deployment, DNS changes, domain attachment, analytics changes, lead delivery and production writes are optional future work, not requirements for the demo.

The external handoff matrix and required owner evidence are maintained in
`docs/planning/EXTERNAL_GATE_HANDOFF.md`.

## 1. Local release gate

Run from a clean dependency install or the approved build environment:

```powershell
npm ci
npm run audit:security
npm run lint
npm run typecheck
npm run audit:seo
npm run audit:performance
npm run audit:release
npm run build
npm run audit:source-parity
npm run audit:browser
```

Expected results:

- Security audit finds no credential patterns.
- SEO audit reports zero blocking issues and zero warnings.
- Build generates all routes successfully.
- Source parity resolves every URL currently published by the production sitemap against the local rebuild, following intentional redirects.
- `vercel.json` keeps Git deployment disabled until launch approval.

## 2. Optional public/staging gate

Use this section only if the demo is later published to an approved staging or public origin:

```powershell
$env:SEOSONA_BASE_URL = "https://staging.example.com"
npm run audit:staging
```

The smoke audit checks core routes, robots, sitemap XML, 404 behavior, favicon redirect, and fail-closed contact validation. It does not submit a valid lead or mutate production data.

Then repeat the browser matrix and Lighthouse checks against the same staging origin. Record viewport, browser, reduced-motion mode, console/network errors, horizontal overflow, LCP, CLS and TBT.

For the repeatable browser gate, set SEOSONA_BASE_URL to the approved staging origin and run npm run audit:browser.

## 3. Optional production ownership gates

These are not required for the current demo. They become required only before a real production launch:

- Hosting and domain owner explicitly authorizes deployment.
- Staging URL and environment variables are available.
- `NEXT_PUBLIC_SITE_URL` points to the intended canonical origin.
- `SEOSONA_LEAD_WEBHOOK_URL` is an HTTPS endpoint and `SEOSONA_LEAD_WEBHOOK_TOKEN` is stored as a secret.
- A real lead submission is verified end-to-end in staging without exposing the token.
- GA4/GTM/Clarity identifiers and consent/privacy decisions are approved.
- Google Search Console property ownership is verified and sitemap submission is authorized.
- Legacy WordPress/hosting credentials are revoked or the owner confirms no access remains.
- Real iPhone/Safari and representative desktop browser checks are recorded.

## 4. Production cutover

Only after all gates pass and explicit approval is recorded:

1. Preserve the current production rollback path and export DNS/hosting settings.
2. Enable the chosen deployment integration deliberately; do not remove the repository safety flag by accident.
3. Deploy the exact validated build artifact.
4. Verify homepage, core routes, redirects, robots, sitemap, favicon, forms and canonical URLs.
5. Submit the sitemap in GSC and confirm the production property.

## 5. Rollback and monitoring

- Roll back to the previous deployment if 5xx responses, form failures, redirect loops, unexpected noindex, or material layout/scroll regressions appear.
- Monitor 5xx, 404, redirect errors, lead delivery, Core Web Vitals, indexing and coverage daily for the first week.
- Review ranking, crawl and conversion signals at 7, 14 and 28 days.

No production action is implied by this document.
