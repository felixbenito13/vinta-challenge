# Design system · Vinta Work redesign

Basic design system used to build `/work` and `/work/quilted-health`. The full documentation (anatomy, variants, usage, do and don't, tokens and accessibility for each component) lives in the Figma file **“Vinta - Design system”**; this page is the summary that ships with the code. Tokens in `src/styles/tokens.css` mirror the Figma variables 1:1.

## Principles

- **Clean** · fewer, larger decisions per screen; whitespace and thin rules instead of boxes
- **Easy to identify** · one color per *type* of information (segment, solution, service, workflow), always with icon and text
- **Results-first** · evidence before claims; missing evidence is flagged, never invented
- **Accessible by default** · every text token passes WCAG AA; focus rings drawn inside so sizes never change
- **Extend, don’t reinvent** · built on the new Vinta identity (homepage, AI Fast-track, Building Blocks)

Structure follows Material 3 token layers (primitives → semantic → component) and IBM Carbon-style docs. Each item is marked **Inherited** (from vintasoftware.com), **Adapted** or **Created for this challenge**.

## Color

| Role | Token | Value |
|---|---|---|
| Heading | `--text-heading` → navy/950 | `#050842` |
| Body | `--text-primary` → ink/900 | `#172235` |
| Secondary | `--text-secondary` → ink/600 | `#465A78` (AA on white and tint) |
| Link / accent | `--text-link` → blue/700 | `#0050FF` |
| Brand button | `--bg-brand` / hover / pressed | `#0050FF` / `#003DC3` / `#002FDB` |
| Deep surface | `--bg-brand-deep` → blue/900 | `#001B55` |
| Page / subtle / panel | `--bg-page` / `--bg-subtle` / `--bg-panel` | `#FFFFFF` / `#F6F9FF` / `#E5EAFD` |
| Divider / input border | `--border-default` / `--border-input` | `#E2E5EA` / `#657CA1` (4.2:1) |

**Tags (one color per type):** segment `#E5EAFD`/`#003DC3` · solution `#DDF5F0`/`#0C6344` · service `#F4E8F8`/`#7A2A8F` · workflow `#EEF0F3`/`#172235`.

**Illustration palette:** ink `#050842`, deep `#001B55`, mid `#003DC3`, base `#0050FF`, light `#E5EAFD`, haze `#F6F9FF`, accent teal `#1B9E8F`, highlight mint `#76D7C4`. Illustration-only; never used for UI states.

## Typography

Geist (licensed fallback for the brand font Moderat) and Geist Mono for labels. Headings use the Light weight with negative tracking, like the new homepage.

| Style | Desktop | Mobile |
|---|---|---|
| Display H1 | 86 / 0.98, −4.5% | 44 |
| H2 | 56 / 1.06, −3.5% | 36 |
| H3 | 48 / 1.05, −3.5% | 28 |
| H4 | 34 / 1.1, −3% | 26 |
| Card title | 22 / 1.2, −2% | 18 |
| Lede | 20 / 1.5 | 17 |
| Body · Body small | 16 / 1.5 · 14 / 1.5 | same |
| Label mono | Geist Mono Medium 12, uppercase, +10% | same |

## Spacing, radius, elevation

- **Spacing:** 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120 (sections use 96 desktop / 64 mobile; page gutter 120 → 16)
- **Radius:** sm 4 · md 8 · button 10 · lg 12 · xl 16 · 2xl 20 · card 24 · full 999
- **Elevation:** shadow sm (cards on hover), md (menus), brand (primary hover), brand-lift (floating button)
- **Motion:** 150–250 ms ease; disabled with `prefers-reduced-motion`

## Components

| Component | Status | Used in | Code |
|---|---|---|---|
| Header (hide on scroll down, mobile menu) | Adapted | both | `Header.astro` |
| Button (primary, secondary, ghost) | Inherited | both | `global.css .btn` |
| Tag (segment, solution, service, workflow) | Created | both | `Tag.astro` |
| Filter bar · compact (multi-select dropdowns, chips, URL state) | Created | Work | `FilterBar.astro` |
| Case card (grid, featured; evidence or “to confirm”) | Created | both | `CaseCard.astro` |
| CTA tile (“Don’t see your care model?”) | Created | Work | `CtaTile.astro` |
| Ruled table (at a glance, proof, evidence) | Created | both | `global.css .ruled` |
| Side nav (sticky TOC, collapsible on mobile) | Created | Quilted | `quilted-health.astro` |
| Timeline step | Created | Quilted | `quilted-health.astro` |
| Testimonial (photo, lite YouTube) | Adapted | both | `Testimonial.astro` |
| Services involved | Created | Quilted | `quilted-health.astro` |
| Building Blocks band | Created | both | `BuildingBlocks.astro` |
| Contextual contact form (Netlify Forms) | Created | both | `ContactForm.astro` |
| Newsletter sign-up | Created | Quilted | `Newsletter.astro` |
| Footer | Inherited | both | `Footer.astro` |
| Floating “Let’s talk” | Created | both | `Base.astro` |

## Illustration guide (short)

Calm care moments from each client’s segment, editorial flat style. Deep navy fills at least half of the image, one light source that changes per case, skin and clothes in blues, teal only on one object tied to the case, thin mint rim light only on the focal person, square shapes as a detail (quilt, window panes, tiles). No text, logos, UI, outlines or glowing objects. Card images get a short descriptive alt; decorative backgrounds use `alt=""`. Prompt template and per-case scenes are in the Figma “Illustration” page.
