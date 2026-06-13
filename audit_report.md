# SEOSONA Website Audit Report

Date: 2026-06-13
Scope: Technical SEO, frontend architecture, MDX content architecture, homepage refactor cleanup
Status: Audit only. No source code changes executed.

## 1. SEOSONA OS Bootstrap

- SEOSONA root resolved through `~/.seosona`.
- Read `~/.seosona/1_CORE/SOUL.md`.
- Read `~/.seosona/2_KNOWLEDGE/MASTER_INDEX.md`.
- Checked `~/.seosona/3_MEMORY/knowledge_items/` before repository research.
- Checked project memory namespace `~/.seosona/3_MEMORY/projects/website-seosona/`.
- Ran capability bridge route:
  - Command: `node ~/.seosona/1_CORE/scripts/seosona_capability_bridge.js route "website_audit"`
  - Result: `{ "query": "website_audit", "matches": [] }`
  - Interpretation: explicit route key is not mapped, so this audit used the indexed SEO, frontend engineering, sitemap, schema, and project-memory guidance.
- Ran project doctor:
  - Command: `npm run seosona:doctor`
  - Result: connected. Capability bridge valid with 340 resources and 255 skills. Project manifest and memory namespace valid.

## 2. High Severity Issues

### H1. `sitemap.xml` does not inject MDX posts or MDX pages

Evidence:

- `app/sitemap.ts` maps only `coreRoutes` from `lib/site.ts`.
- `content/blog/` contains 133 MDX posts.
- `content/pages/` contains 29 MDX pages.
- None of those 162 MDX URLs are automatically included in the sitemap.

Impact:

- Large portions of the Knowledge Hub and migrated pages depend on internal linking or discovery rather than sitemap submission.
- This fails the requested 2026 AI-SEO standard for automated content inventory surfacing.

Recommended fix after approval:

- Add `getAllPosts()` and a new `getAllPages()` or `getAllPageSlugs()` helper.
- Generate sitemap entries for:
  - `/seo/{categorySlug}/{slug}/`
  - `/p/{slug}/`
  - all canonical service routes
- Use stable `lastModified` from frontmatter where available; avoid `new Date()` for every request/build unless intentional.

### H2. MDX metadata architecture has no validation layer and no `meta_description` field

Evidence:

- `lib/mdx.ts` casts frontmatter directly as `PostMeta`.
- No schema validation exists for required fields.
- Content parse results:
  - Total MDX files scanned: 162
  - Parse errors: 0
  - Missing `title`: 0
  - Missing `meta_description`: 162
  - Blog files missing `date`: 0
  - Blog files missing `categorySlug`: 0

Impact:

- Metadata quality is not enforceable at build time.
- Dynamic pages currently use `excerpt || title` for descriptions in blog posts and no description for `/p/[slug]`.
- This blocks reliable AI-search snippets, consistent Open Graph descriptions, and automated schema generation.

Recommended fix after approval:

- Add a frontmatter validator, preferably with a typed schema:
  - `title`
  - `slug`
  - `meta_description`
  - `date` for posts
  - `categorySlug` for posts
  - `coverImage`
  - optional `excerpt`, `author`, `updatedAt`, `faq`, `entities`, `serviceType`
- Backfill `meta_description` from `excerpt` as a migration step only after review.

### H3. Typecheck currently fails

Command:

```bash
npm run typecheck
```

Failure:

- `components/ui/animated-loading-skeleton.tsx:142`
- `glowVariants` is not assignable to Framer Motion `Variants` because `transition.ease` is typed as a generic string instead of an accepted easing type.

Impact:

- The project is not in a type-clean release state.
- Any future SEO or content refactor has a lower-confidence verification baseline until this is fixed.

### H4. Lint currently fails in a homepage section

Command:

```bash
npm run lint
```

Blocking errors:

- `components/sections/AiIntegration.tsx:63`
- `components/sections/AiIntegration.tsx:64`
- `components/sections/AiIntegration.tsx:66`
- `components/sections/AiIntegration.tsx:68`
- `components/sections/AiIntegration.tsx:70`
- `components/sections/AiIntegration.tsx:74`

Main causes:

- JSX text contains unescaped apostrophes.
- Code-comment text is rendered inside JSX children instead of being escaped or wrapped safely.

Impact:

- CI/build workflows that enforce lint will fail.
- The homepage refactor is not cleanly shippable.

## 3. Medium Severity Issues

### M1. Confirmed `next/image` `fill` images missing `sizes`

Confirmed runtime-warning candidates:

- `components/sections/Hero.tsx:110`
  - Source: `/images/legacy/hero/home-begin.png`
  - Issue: `fill` image has no `sizes`.
- `components/sections/academy/AcademyHero.tsx:41`
  - Source: `/images/brand/Seosona_Logo.png`
  - Issue: `fill` image has no `sizes`.
- `components/sections/academy/AcademyHero.tsx:45`
  - Source: `/images/brand/Chi Quyet Academy Mascot Logo.png`
  - Issue: `fill` image has no `sizes`.

Recommended fix after approval:

- For `home-begin.png`, add a responsive `sizes` value matching the hidden-lg dashboard preview, for example `(min-width: 1024px) 1024px, 0px`.
- For academy logo images, use fixed small container sizing, for example `sizes="128px"`, or replace `fill` with explicit `width` and `height`.

### M2. Homepage client boundary is heavier than needed

Components that currently start with `"use client"` but show no local hook, browser API, event-handler, timer, or Framer Motion requirement:

- `components/sections/academy/AcademyBenefits.tsx`
- `components/sections/academy/AcademyInstructor.tsx`
- `components/sections/AiIntegration.tsx`
- `components/sections/CommunityLeadMagnets.tsx`
- `components/sections/ConsultingCta.tsx`
- `components/sections/CustomerJourney.tsx`
- `components/sections/EcosystemProof.tsx`
- `components/sections/Hero.tsx`
- `components/sections/HighTicketCaseStudies.tsx`
- `components/sections/PressLogoGrid.tsx`

Interpretation:

- These can likely become Server Components while keeping `RevealOnScroll` as a nested Client Component.
- This reduces shipped JavaScript and improves Core Web Vitals potential.

Components that should remain client-side unless refactored more deeply:

- `components/layout/Header.tsx`
- `components/layout/FloatingActions.tsx`
- `components/layout/Footer.tsx`
- `components/sections/academy/AcademyHero.tsx`
- `components/sections/ContactForm.tsx`
- `components/sections/CoreSolutions.tsx`
- `components/sections/HomeFinalCta.tsx`
- `components/sections/Testimonials.tsx`
- `components/ui/RevealOnScroll.tsx`
- `components/ui/CountUp.tsx`
- `components/ui/animated-loading-skeleton.tsx`

### M3. MDX JSON-LD support is partial, not architectural

Current state:

- Global layout injects `Organization` and `WebSite` schema through `components/seo/JsonLd.tsx` and `lib/schema.ts`.
- Blog post route creates an inline `Article` JSON-LD object in `app/seo/[slug]/[post]/page.tsx`.
- Several static service pages define route-local JSON-LD manually.
- MDX pages under `/p/[slug]` have no dynamic JSON-LD.
- Hub pages under `/seo/[slug]` have no dynamic collection schema.

Gap:

- There is no central schema factory for `Article`, `BlogPosting`, `BreadcrumbList`, `CollectionPage`, `WebPage`, `FAQPage`, `Service`, or `Course`.
- Frontmatter does not carry enough structured fields to generate those schemas consistently.

Recommended fix after approval:

- Extend `lib/schema.ts` into reusable schema builders.
- Add frontmatter schema fields that drive JSON-LD.
- Add route-level dynamic JSON-LD for MDX post, hub, and page templates.

### M4. Three blog category slugs are not represented in `seoHubs`

Unmatched categories:

- `ranking-factors`
- `case-study`

Affected posts:

- `content/blog/301-redirects-co-phai-la-yeu-to-xep-hang-cua-google.mdx`
- `content/blog/mum-cua-google-co-phai-la-yeu-to-xep-hang-tim-kiem-khong.mdx`
- `content/blog/nganh-thiet-ke-thi-cong-noi-that.mdx`

Impact:

- Post detail routes can be generated with those category slugs, but category hub pages are not defined for them.
- This creates weak hub navigation and likely orphaned Knowledge Hub content.

### M5. Four blog posts have empty or missing `coverImage`

Affected posts:

- `content/blog/301-redirects-co-phai-la-yeu-to-xep-hang-cua-google.mdx`
- `content/blog/cong-cu-tim-kiem-hoat-dong-nhu-the-nao.mdx`
- `content/blog/mum-cua-google-co-phai-la-yeu-to-xep-hang-tim-kiem-khong.mdx`
- `content/blog/nganh-thiet-ke-thi-cong-noi-that.mdx`

Impact:

- Hub cards and Article schema image arrays may degrade.
- Social previews may be inconsistent once OG image generation is added.

## 4. Low Severity Issues

### L1. Existing SEO audit script reports dynamic metadata as warnings

Command:

```bash
node scripts/audit-seo.mjs
```

Relevant output:

- `/p/[slug]`: dynamic title and description not detected by static regex audit.
- `/seo/[slug]`: dynamic title and description not detected by static regex audit.
- `/seo/[slug]/[post]`: dynamic title and description not detected by static regex audit.

Interpretation:

- Some warnings are scanner limitations, but `/p/[slug]` genuinely lacks `description` in `generateMetadata`.

### L2. Some routes lack page-specific JSON-LD

Existing audit script reported no JSON-LD on:

- `/chi-quyet-academy`
- `/doi-ngu-nhan-su`
- `/`
- `/seo`
- `/p/[slug]`
- `/seo/[slug]`
- `/tuyen-dung`

Recommendation:

- Add schema by page intent, not blindly:
  - Homepage: `WebPage` plus `Organization` already global.
  - SEO hub: `CollectionPage`.
  - Academy/course routes: `Course`.
  - Team page: `AboutPage`.
  - Recruitment: `JobPosting` only when real job data exists.

### L3. Lint warnings worth addressing during cleanup

Examples:

- `app/case-study/page.tsx`: unused `Link` import.
- `components/sections/CustomerJourney.tsx`: unused `ArrowRight`, `UserCheck`.
- `components/sections/PressLogoGrid.tsx`: unused `index`.
- `components/sections/academy/AcademyBenefits.tsx`: unused `DollarSign`.
- MDX renderer uses raw `<img>` in `app/p/[slug]/page.tsx` and `app/seo/[slug]/[post]/page.tsx`.

## 5. Orphan Legacy Components

Import-graph scan found these `components/sections/` files are not imported by `app/` or other components:

- `components/sections/AboutPreview.tsx`
- `components/sections/CaseStudyPreview.tsx`
- `components/sections/ClientLogoGrid.tsx`
- `components/sections/Curriculum.tsx`
- `components/sections/FeaturedPosts.tsx`
- `components/sections/HomeFinalCta.tsx`
- `components/sections/KnowledgeHubPreview.tsx`
- `components/sections/PressLogoGrid.tsx`
- `components/sections/PricingTable.tsx`
- `components/sections/Services.tsx`
- `components/sections/WhyChoose.tsx`

Deletion recommendation:

- Safe to delete after approval if no near-term page reuse is planned.
- `PressLogoGrid.tsx`, `ClientLogoGrid.tsx`, `FeaturedPosts.tsx`, `Services.tsx`, `WhyChoose.tsx`, `AboutPreview.tsx`, and `CaseStudyPreview.tsx` look like old homepage-era blocks replaced by the new B2B SaaS funnel.
- `Curriculum.tsx`, `PricingTable.tsx`, and `HomeFinalCta.tsx` may be reusable for academy or pricing flows, so confirm product intent before deletion.

## 6. Proposed Structural Blueprint

### Service Pages Refactor

Recommended structure:

```text
app/(services)/
  dich-vu-seo/page.tsx
  tu-van-seo-chuyen-sau/page.tsx
  google-ads/page.tsx
  khoa-hoc-seo/page.tsx
  khoa-hoc-content-seo/page.tsx
content/services/
  dich-vu-seo.mdx
  tu-van-seo-chuyen-sau.mdx
  google-ads.mdx
  khoa-hoc-seo.mdx
  khoa-hoc-content-seo.mdx
lib/content/
  frontmatter.ts
  services.ts
  posts.ts
  pages.ts
lib/schema.ts
```

Service frontmatter target:

```yaml
title:
slug:
meta_description:
service_type:
canonical:
hero:
primary_cta:
secondary_cta:
audience:
offers:
faqs:
lastUpdated:
```

Rendering pattern:

- Keep route files thin.
- Load validated content from `lib/content/services.ts`.
- Generate `Metadata`, `Service` schema, `FAQPage` schema, and `BreadcrumbList` schema from the same validated source.
- Share section components for proof, process, FAQ, CTA, and case-study blocks.

### Knowledge Hub / MDX Blog Refactor

Recommended structure:

```text
app/seo/page.tsx
app/seo/[slug]/page.tsx
app/seo/[slug]/[post]/page.tsx
content/blog/
content/pages/
data/seo-hubs.ts
lib/content/posts.ts
lib/content/pages.ts
lib/content/hubs.ts
lib/schema.ts
```

Post frontmatter target:

```yaml
title:
slug:
categorySlug:
meta_description:
excerpt:
date:
updatedAt:
coverImage:
author:
reviewedBy:
entities:
faqs:
canonical:
```

Hub behavior:

- `data/seo-hubs.ts` should be the canonical category map.
- Add every post category or migrate unmatched posts to existing hubs.
- Generate hub metadata, `CollectionPage` JSON-LD, and sitemap entries from the hub registry.

Sitemap behavior:

- Static routes from `coreRoutes`.
- Service routes from validated service content.
- Hub routes from `seoHubs`.
- Blog post routes from `content/blog`.
- Static MDX page routes from `content/pages`.

Schema behavior:

- Global: `Organization`, `WebSite`.
- Homepage: `WebPage`.
- Service pages: `Service`, optional `FAQPage`, `BreadcrumbList`.
- Hub pages: `CollectionPage`, `BreadcrumbList`.
- Blog posts: `BlogPosting` or `Article`, `BreadcrumbList`, optional `FAQPage`.
- MDX pages: `WebPage` or page-specific schema based on frontmatter type.

## 7. Verification Commands Run

```bash
npm run seosona:doctor
node ~/.seosona/1_CORE/scripts/seosona_capability_bridge.js route "website_audit"
npm run typecheck
npm run lint
node scripts/audit-seo.mjs
```

Results:

- SEOSONA doctor: passed.
- Capability route: no explicit `website_audit` route match.
- Typecheck: failed.
- Lint: failed.
- SEO audit script: completed with warnings.

## 8. Approval Gate

No code changes have been made.

Recommended next implementation order after approval:

1. Fix compiler and lint blockers.
2. Add missing `sizes` props for confirmed `next/image` warnings.
3. Convert safe homepage sections from Client Components to Server Components.
4. Add typed MDX frontmatter validation and `meta_description` support.
5. Expand sitemap generation to include MDX posts and pages.
6. Centralize JSON-LD schema builders.
7. Delete approved orphan legacy components.

Please review and approve this report before implementation begins.

TASK COMPLETED
