# Website SEOSONA Design System

This file serves as the strict, single source of truth for all UI/UX Agent tasks in this repository. All generated components MUST adhere to the tokens and patterns defined below, extracted directly from `globals.css` and `BRAND_GUIDE.md`.

## Direction & Theme
- **Theme:** Premium B2B Light Theme.
- **Vibe:** Clean SaaS/agency layout, large whitespace, trustworthy, technical.
- **NEVER** use dark backgrounds for full sections unless explicitly requested.

## Colors

- **Canvas Base:** `#FFFFFF` (Pure white for background)
- **Canvas Surface:** `#F8FAFC` (Elevated surface, cards)
- **Canvas Elevated:** `#F1F5F9` (Higher elevated surface)
- **Text Ink:** `#04091A` (Dark Navy/Black for strong contrast headers)
- **Text Slate:** `#64748B` (Neutral Gray for secondary text)
- **Text Muted:** `#94A3B8` (Lighter gray for tertiary text)
- **Signal Primary:** `#1D4ED8` (Technical, trustworthy Blue)
- **Signal Hover:** `#2B8FD4`
- **Border Pearl:** `rgba(255, 255, 255, 0.12)` (Standard borders often fallback to `border-slate-100` or `border-slate-200`)

## Typography

- **Heading Font:** `var(--font-poppins)` (Poppins). Use negative letter-spacing for confident statements (`tracking-tight`).
- **Sans Font:** `var(--font-inter)` (Inter).
- **Headings:** Very bold and tight (e.g., `text-[32px] font-black leading-tight tracking-tight text-[#04091A]`).
- **Body:** Relaxed and medium (e.g., `text-[15px] font-medium leading-relaxed text-slate-500`).

## Spacing & Layout

- **Container:** `container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`.
- **Vertical Spacing:** Generous. E.g., `py-16 lg:py-24`.
- **Whitespace:** Emphasize padding around cards `p-8 md:p-10`.

## Components & Patterns

- **Border Radius:** Very soft and organic.
  - Large cards: `rounded-[32px]` or `rounded-[40px]`.
  - Buttons/Badges: `rounded-full` / `radius-pill`.
- **Shadows & Hover (Hover elevation):**
  - Use smooth translation and shadow on hover for cards: `transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:bg-white`.
- **Buttons:**
  - **Primary:** `btn-primary` (Dark Ink background, pill radius, hover to Signal Primary).
  - **Secondary:** `btn-secondary` (Surface background, pill radius, border).
- **Badges:** `badge-premium` (pill shape, border, slate text).
- **Animations:**
  - Lightweight only. Use `.reveal` class (fade-up).
  - Glow effects should be extremely subtle and placed behind cards (e.g., `blur-[80px]` with low opacity).

## Guidelines for AI Agents
1. **NO HALLUCINATION:** Do not invent colors. Stick to `#04091A` for text, `#1D4ED8` for accents, and `#F8FAFC` for backgrounds.
2. **RESPONSIVENESS:** Always use Tailwind breakpoints (`md:`, `lg:`).
3. **TEXT WRAPPING:** Use `.text-balance` for headers and `.text-pretty` for paragraphs to ensure perfect typographic rag.
