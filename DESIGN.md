---
type: "WebImplementationNote"
uuid: "website-seosona-design-implementation-note"
version: "1.0"
title: "Website SEOSONA Design Implementation Note"
category: "frontend_implementation"
authority_level: "implementation"
---

# Website SEOSONA Design Implementation Note

This repository implements the SEOSONA Website. It is not the reusable UX/UI design-system authority.

Reusable UX/UI decisions for this website live in the SEOSONA UX-UI project workspace:

- `4_LIBRARY/project-profiles/seosona-website/design-system.md`
- `4_LIBRARY/project-profiles/seosona-website/README.md`

## Web Implementation Rules

- Keep this repository focused on Next.js routes, React components, content, data, SEO metadata, schema, public assets, tests, and deployment config.
- Implement the approved light B2B website design profile from SEOSONA UX-UI.
- Do not introduce reusable OS, agent, workflow, or design-system source-of-truth files here.
- Do not create new website-wide visual tokens here unless they have first been recorded in SEOSONA UX-UI.

## Local Guardrails

- No full-section dark mode.
- No neon green.
- No arbitrary one-off hex colors.
- Prefer existing Tailwind tokens and CSS variables.

TASK COMPLETED
