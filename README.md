# Vinta · Work redesign (technical challenge)

Redesign and implementation of Vinta's **/work** (Clients) page and the **/work/quilted-health** case study, for the *Senior Marketing Web Designer (AI-Driven)* challenge.

- **Live:** _Netlify URL coming soon_
- **Design system (Figma):** documented components, tokens and the illustration guide
- **Research board (FigJam):** audit, Lighthouse baseline, hypotheses H1–H9, personas, benchmark

## What changed and why

| Goal | How |
|---|---|
| Healthcare first (H1) | Healthcare hero with one primary CTA, verified proof numbers, “We’ve built for” segment shortcuts |
| Find relevant work (H2) | Compact filter: three multi-select dropdowns (segment, solution, service) with case counts, chips, URL state |
| Scannable cards (H3) | Every card shows segment, solution and service tags, the challenge and verified evidence; missing results are flagged, never invented |
| Readable case (H4) | “At a glance” ruled table, sticky table of contents, fixed story order, before/after screens, timeline |
| Credible evidence (H5) | Healthcare testimonial with photo and the real client video (loaded on click) |
| Relevance beyond the specialty (H6) | “Beyond maternal care”, services involved, Building Blocks band that does not imply the blocks were used in past projects |
| One clear path to contact (H7) | Contextual Netlify form (pre-filled from the case or from the active filters), floating “Let’s talk” |
| Accessible (H8) | WCAG AA tokens, landmarks, skip link, keyboard-operable menus, alt text, captions in HTML |
| Fast on mobile (H9) | Static Astro build, no framework runtime, WebP images at card sizes, lazy YouTube, self-hosted fonts |

## Stack

- [Astro 5](https://astro.build) static output, zero client framework; small vanilla scripts for filters, header, TOC, carousel and video
- Design tokens in `src/styles/tokens.css`, mirroring the Figma variables (primitives → semantic)
- Netlify Forms (`contact`, `newsletter`) with honeypot; `/thanks` success page

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321/work
npm run build    # outputs dist/
```

## Structure

```
src/
  styles/        tokens.css (Figma variables) · global.css (type, buttons, tags, ruled tables)
  data/cases.ts  portfolio data and taxonomy (segments, solutions, services)
  components/    Header, Footer, CaseCard, FilterBar, CtaTile, Testimonial, BuildingBlocks, ContactForm, Newsletter, Tag, Icon
  pages/work/    index.astro (/work) · quilted-health.astro
public/img/      optimized WebP illustrations and screens
```

## Content notes

- Facts come from Vinta’s current case pages. Items not yet confirmed are flagged on the page (“to confirm”): project duration, impact metric, timeline dates.
- Illustrations are original, made with Adobe Firefly from the illustration guide in the DS and retouched; prompts are in the AI conversation logs.
- Typography uses Geist as the licensed fallback for Moderat.
