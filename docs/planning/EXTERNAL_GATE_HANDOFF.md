# SEOSONA Website — optional production gate handoff

This document covers checks that are unnecessary for the current personal/demo
scope and only matter if the rebuild is later published as a real service. It
does not authorize deployment, DNS changes, analytics changes, credential
rotation, or production writes.

## Current status

| Gate | Evidence required | Current status |
| --- | --- | --- |
| Hosting/domain ownership | Written owner approval for the target hosting, domain and cutover | OUT OF SCOPE FOR DEMO |
| Approved staging | HTTPS staging origin and permission to crawl it | OUT OF SCOPE FOR DEMO |
| Lead delivery | `SEOSONA_LEAD_WEBHOOK_URL` over HTTPS, token in the deployment secret store, and one real staging lead test | OUT OF SCOPE FOR DEMO |
| Analytics and consent | Approved GA4/GTM/Clarity IDs, event plan and cookie/consent decision | OUT OF SCOPE FOR DEMO |
| Search Console | Verified property ownership and authorization to submit the sitemap | OUT OF SCOPE FOR DEMO |
| Legacy access | Confirmation that old WordPress/hosting credentials are revoked or inaccessible | OUT OF SCOPE FOR DEMO |
| Real-device QA | Evidence from iPhone/Safari, Android and representative desktop browsers | OPTIONAL FOLLOW-UP |
| Production performance | Field Core Web Vitals after deployment | OPTIONAL FOLLOW-UP |

## Safe handoff inputs

Provide these through the approved secret/access channel, never by committing
them to this repository:

```text
Approved staging URL:
NEXT_PUBLIC_SITE_URL for staging:
Lead webhook configured in staging: yes/no
Lead webhook end-to-end test owner and timestamp:
Analytics/consent approval reference:
Search Console property and sitemap authorization:
Legacy credential revocation confirmation:
Deployment owner and rollback owner:
```

The repository only needs the public staging origin at runtime. The webhook
token belongs in the hosting provider's secret store. Do not paste the token
into chat, `.env.example`, Git, screenshots or audit logs.

## Execution order after authorization

1. Set `SEOSONA_BASE_URL` to the approved staging origin and run
   `npm run audit:staging`.
2. Run `npm run audit:browser` against the same origin.
3. Run Lighthouse on the approved browser/device matrix and record LCP, CLS,
   INP/TBT, console errors and network failures.
4. Submit one controlled real lead in staging and verify the destination
   system without exposing personal data or the webhook token.
5. Verify analytics consent behavior and event collection with the approved
   IDs.
6. Verify Search Console ownership and submit the production sitemap only
   after explicit cutover approval.
7. Deploy the validated artifact, run the production smoke checks, preserve
   rollback, and monitor 5xx, 404, redirects, leads and Core Web Vitals.

## Local evidence already complete

The local seven-phase evidence ledger is maintained in
`docs/planning/PHASE_STATUS.md`. The repeatable source, browser, staging,
security, SEO, performance and release audits are listed in
`docs/planning/LAUNCH_CHECKLIST.md`.
