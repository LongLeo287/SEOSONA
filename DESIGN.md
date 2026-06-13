# SEOSONA Website - Design System & Standard

This document defines the standard UI/UX design principles specifically for the **SEOSONA Website**, derived from the standard "Premium Case Studies" interface block. All components and sections built in this project must strictly adhere to the following rules.

**Note:** This system DOES NOT use the Asymmetric Bento structure or Inline Image Typography from the internal SEOSONA OS. Instead, it emphasizes symmetry, airy spaces, clean colors, and an equal grid structure.

---

## 1. Color Palette

The color system aims for a professional, clean (Clean/Corporate), and reliable aesthetic.

*   **Background:** Pure white (`#FFFFFF` or `bg-white`) for main sections to maximize contrast. Alternatively, use light slate (`#F8FAFC`) to alternate section backgrounds and prevent visual blending.
*   **Card Surface:** Very light blue-gray (`#F8FAFC` or `bg-slate-50`) or solid white (`bg-white`) depending on the section background. Never use white cards on a white background without a clear border.
*   **Text Primary:** Dark Navy/Black (`#04091A`). Applied to Headings and prominent text.
*   **Text Secondary:** Neutral Gray (`#64748B` or `text-slate-500`). Applied to paragraphs and descriptions.
*   **Accent Color:** Electric Blue (`#3BA6F1`). Applied to Icons, Category Tags, emphasized phrases in Headings, and Hover states.
*   **Brand Consistency (Strict):** Do not use random multi-color gradients (e.g., Purple, Orange, Cyan) for primary UI elements like backgrounds, grids, or standard cards. Stick exclusively to the SEOSONA Blue (`#3BA6F1`) for all glows, highlights, and hover effects to maintain a cohesive, professional agency identity. 
*   **Borders:** Extremely subtle borders, typically `border-slate-200/80` to separate areas within a Component.

---

## 2. Typography

Clarity and legibility are the top priorities.

*   **Heading (Section Titles):**
    *   Massive sizing: `text-4xl` to `text-[54px]`.
    *   Weight: As bold as possible (`font-black`), tight letter spacing (`tracking-tight`), tight line height (`leading-tight`).
    *   **Accent:** Only use the accent color (`#3BA6F1`) to highlight 1-2 critical phrases. DO NOT use gradients, DO NOT use masked images within text.
*   **Body Text:**
    *   Weight: Moderate (`font-medium`).
    *   Size: `text-base` to `text-[17px]`.
    *   Line height: Spacious and comfortable for reading (`leading-relaxed`).
*   **Metadata (Tags, Categories):**
    *   Fully capitalized (`uppercase`).
    *   Small sizing (`text-xs` or `text-[11px]`).
    *   Bold (`font-bold`) with very wide letter spacing (`tracking-widest`).

---

## 3. Section Architecture

A standard section (e.g., Services, Core Solutions, Lead Magnets) must always follow this structure:

1.  **Header Section (100% Center Aligned)**:
    *   **Top Badge (SectionBadge):** DO NOT use dark backgrounds. Use a super light blue background (`bg-[#F0F6FF]`), thin border (`border-blue-100`), and blue text (`text-[#3BA6F1]`). Normal case, bold text (`text-[14px] font-bold`).
    *   **Live Effect:** Always integrate a blinking green/blue dot (`animate-ping`) at the beginning of the Badge to create a real-time, "Live" system indicator.
    *   **Title:** Center aligned, massive.
    *   **Subtitle (Description):** Center aligned, constrained width (`max-w-2xl` or `max-w-3xl`) to prevent overly long, eye-straining text lines.
    *   *(Optional) Row 3:* A horizontal row of thin-bordered Filter/Pill buttons.

2.  **Grid System (Symmetric Grid)**:
    *   Always prioritize an **Equal 3-Column Grid** structure: `grid-cols-1 md:grid-cols-3`.
    *   Gap: Spacious (`gap-6` or `gap-8`).
    *   **Banned:** Do not use Bento Boxes (asymmetric 2/1 grids or mixed-size cards) unless explicitly required by a specific graphic design. Equal grids are the standard.

3.  **Footer Action (Conversion Action)**:
    *   Use a **Text Link** format instead of a massive, solid button block.
    *   Format: Bold text (`font-bold text-[#04091A]`), size around `15px`, accompanied by an arrow icon (`<ArrowRight />`).
    *   Effect: On hover, change to the accent color `#3BA6F1` and smoothly translate the arrow to the right (`hover:translate-x-1`).

4.  **Safe Spacing (Padding & Margins)**:
    *   **Vertical Padding (Top/Bottom):** Standard sections MUST use `py-12 lg:py-16` (approx. 48px - 64px) to ensure content remains cohesive and prevents visual disconnection. DO NOT use excessive padding like `py-20`, `py-24`, or `py-28` for standard content blocks.
    *   **Header to Content Gap:** Use `mb-10` or `mb-12` (40px - 48px) rather than massive margins like `mb-16`, pulling the grid closer to its context.
    *   **Footer Action Gap:** Use `mt-10` or `mt-12` (40px - 48px) rather than `mt-16`.

---

## 4. Card Aesthetic

Cards are the heart of the interface. They should feel light and premium, yet highly structured.

*   **Shape:** Extremely soft rounded corners (`rounded-[32px]`).
*   **Space:** Spacious padding (`p-8`).
*   **Top Left Accent:**
    *   *For Metrics:* Massive blue numerals (`text-[54px] font-black text-[#3BA6F1]`).
    *   *For Icons:* A large icon enclosed in a soft-rounded square box (`h-16 w-16 bg-white rounded-2xl text-[#3BA6F1] shadow-sm`).
*   **Tags & Classification:** Placed above the card title, uppercase, blue color. Or placed below as a thin-bordered pill (`bg-white border border-slate-200 px-4 py-1.5`).
*   **Divider:** The footer of the card is always separated by a faint horizontal border line above it (`border-t border-slate-200/80 pt-6`).
*   **Standard Hover Effects:**
    *   *Hover Glow (Glowing Sweep):* Standard cards should feature a subtle horizontal gradient line that sweeps across the top border on hover: `absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#3BA6F1] to-transparent transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100`.
    *   *Elevation & Shadow:* On hover, cards should translate up slightly (`hover:-translate-y-1.5`), cast a deep blue-tinted shadow (`hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)]`), and lightly tint the border (`hover:border-[#3BA6F1]/30`).
*   **Card Action (Footer):**
    *   Left: A text-based call to action (e.g., `View Project Report` / `Download Now`).
    *   Right: A circular button (`h-10 w-10 rounded-full border border-slate-200 bg-white`) containing an arrow.
    *   *Effect:* On Group Hover, both the Text and the Circular Button simultaneously change to the accent color `#3BA6F1`. The card itself elevates slightly (`-translate-y-1`) with a deep drop shadow (`shadow-xl`).

---

## 5. Content Presentation & Formatting (Text Flow)

Preventing text orphans, widows, and ragged paragraph edges is critical for a premium, agency-level reading experience.

*   **Headings (h1, h2, h3):** Always apply the `text-balance` utility. This ensures the browser automatically balances the number of words on each line symmetrically, preventing awkward short lines at the end of a title. Avoid hard-coded `<br />` tags as they break on mobile layouts.
*   **Paragraphs (p):** Always apply the `text-pretty` utility. This smart formatting prevents "orphans" (a single word dangling alone on the final line of a paragraph).
*   **Width Constraining:** Any center-aligned text block MUST be constrained by a max-width (e.g., `max-w-2xl` or `max-w-3xl`) to maintain the optimal reading length of 60-80 characters per line.
*   **Non-breaking Entities:** Use non-breaking spaces or `whitespace-nowrap` for terms that should never be separated across lines (e.g., brand names, numbers with their units).

---

## 6. SEO & Core Web Vitals Standards

As an SEO Agency, every UI component must be inherently optimized for search engines and performance (Core Web Vitals).

*   **Semantic HTML:** Strictly use semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) instead of generic `<div>` wrappers where applicable.
*   **Heading Hierarchy:**
    *   Strictly one `<h1>` per page.
    *   Headings must follow a logical descending order (`<h2>` -> `<h3>` -> `<h4>`) without skipping levels.
    *   Do not use heading tags purely for styling; use utility classes (e.g., `text-2xl font-bold`) on `<span>` or `<div>` if it's not a structural heading.
*   **Cumulative Layout Shift (CLS) Prevention:**
    *   All images must use `next/image` with explicit `width` and `height`, or if using `fill`, must include proper `sizes` attribute.
    *   Reserve space for dynamic elements or text to prevent layout jumping upon load.
*   **Accessibility (A11y) for SEO:**
    *   Ensure sufficient color contrast (e.g., `#64748B` on `#FFFFFF` is acceptable, avoid lighter grays for main text).
    *   All icon-only buttons or links must have an `aria-label`.
    *   All images must have descriptive `alt` attributes.
*   **Internal Linking:** Use `next/link` for all internal navigation to utilize Next.js prefetching, reducing perceived page load time. Ensure anchor text is descriptive (e.g., "Xem báo cáo dự án SEO" instead of just "Xem thêm").
