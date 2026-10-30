# Vinta · Work redesign (technical challenge)

Redesign and implementation of Vinta's **/work** (Clients) page and the **/work/quilted-health** case study, for the *Senior Marketing Web Designer (AI-Driven)* challenge.

- **Live:** [vinta-work-challenge.netlify.app/work](https://vinta-work-challenge.netlify.app/work) · [Quilted Health case](https://vinta-work-challenge.netlify.app/work/quilted-health)
- **Design system (Figma):** documented components, tokens and the illustration guide
- **Research and presentation board (FigJam):** 14 numbered sections, from brief to AI workflow, validation and a newsletter suggestion
- **Design system summary:** [`docs/design-system.md`](docs/design-system.md)
- **AI conversation logs:** [`docs/ai-logs/`](docs/ai-logs/)
- **Responsive screenshots:** [`docs/screenshots/`](docs/screenshots/) (390 and 768 px)

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

## Images and SEO

- WebP at the sizes they render (480/768 for cards, 640/1120 for heroes, 800/1200 for screens), all under 40 KB, with `width`/`height` set to avoid layout shift; only the hero is preloaded, everything else is lazy-loaded
- Descriptive, kebab-case file names (`rewind-diabetes-care-ehr-migration-illustration-768.webp`)
- Alt text describes each illustration and screen; purely decorative images use `alt=""`
- Open Graph and Twitter cards with 1200×630 images, canonical URLs, `robots` meta, JSON-LD (`CollectionPage`, `Article`, `BreadcrumbList`), `sitemap.xml` with image entries and `robots.txt`

## Content notes

- Facts come from Vinta’s current case pages. Items not yet confirmed are flagged on the page (“to confirm”): project duration, impact metric, timeline dates.
- Illustrations are original, made with Adobe Firefly from the illustration guide in the DS and retouched; prompts are in the AI conversation logs.
- Typography uses Geist as the licensed fallback for Moderat.

## Assumptions

- Geist is used as the licensed fallback for Moderat (brand font license to confirm)
- Links to other case studies point to the current pages on vintasoftware.com
- Segment mapping of some cases is my interpretation (Perci Health, Medplum, Splendid Spoon)
- Patient names in the Quilted screenshots are assumed to be demo data (to confirm)

## Known limitations

- Only the two requested pages are implemented; header and footer links go to the live site
- Mobile layouts were built directly in code, not drawn in Figma
- Unconfirmed facts are flagged on the page: project duration, impact metric, timeline dates
- Before/after numbers: “before” from PageSpeed Insights on vintasoftware.com; “after” from Lighthouse on the production build. Commercial impact (H1–H7) is expected, not measured

## Time spent

About 40 hours over 5 days: research, baseline and audit (10 h) · hypotheses, personas and benchmark (6 h) · design system (8 h) · layouts and illustrations (7 h) · implementation with Claude Code (5 h) · deploy, validation and handoff (4 h).

## Tools

Claude (research, Figma/FigJam through MCP) · Claude Code (implementation) · Adobe Firefly (illustrations) · Figma and FigJam · PageSpeed Insights, Lighthouse, axe · GitHub and Netlify.
