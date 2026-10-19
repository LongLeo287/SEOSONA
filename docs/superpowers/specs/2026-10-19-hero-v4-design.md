# Hero v4 design: strategy core and section handoff

## Goal

Make the homepage Hero-to-CoreSolutions transition feel like one intentional product story rather than three independent decorative layers. The user must understand SEOSONA's value proposition before scrolling, then see one continuous strategy constellation hand off into the solution cards.

## Constraints

- Keep the production site `https://seosona.com` separate from this local rebuild.
- Preserve the existing dirty worktree and unrelated routes/content.
- Keep semantic content in DOM; canvas/SVG layers remain decorative.
- Do not add Three.js in the first implementation. Use the existing PixiJS renderer on capable desktop tiers and SVG/CSS fallback on lite/reduced-motion tiers.
- Do not deploy or publish.

## Design

1. `Hero` becomes a shorter scroll stage (`160vh`) so the next section enters the story earlier.
2. `StrategyCore` becomes the single visual focal point: brand mark, depth rings and restrained glow. It is forwarded through the existing logo ref so the motion contract remains small.
3. `HeroScene` keeps PixiJS for orbit/particle decoration only. The main Hero arc fades completely during handoff.
4. `CoreSolutions` owns one transition ribbon at its top. The previous independent bridge and inner parabola are consolidated into this single handoff visual.
5. The Hero transition metric measures the section-top handoff anchor, not a lower card/arc anchor. This prevents logo travel from overshooting and removes the false vertical gap.
6. Section reveal ranges start earlier and use one bounded rAF per section. The CoreSolutions title and grid are readable shortly after the handoff.
7. Labels remain semantic and visible until the morph phase; mobile still removes decorative nodes to protect layout and touch scrolling.

## Motion contract

- One normalized Hero progress value drives content, StrategyCore, nodes, Pixi and Morphicons.
- Pixi renders only while Hero is intersecting and scroll is active.
- `prefers-reduced-motion`, lite tier and Pixi failure use static fallback.
- No endless decorative animation is introduced.

## Acceptance criteria

- Hero headline and CTA are visible and legible at the first viewport.
- CoreSolutions title enters within roughly 0.5 viewport after the Hero handoff.
- Only one visible connector/ribbon exists across the handoff.
- No horizontal overflow at 320, 390, 768, 1440 and 1808px.
- Canvas count is at most one and mobile/reduced-motion does not require WebGL.
- Existing build, lint, typecheck, browser and performance audits pass.
- No unrelated files are changed.
