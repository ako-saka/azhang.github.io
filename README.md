# Aine Zhang — personal site

An Astro static site with a GSAP-driven parallax grid hero (React Bits' `GridMotion`).
Dark theme, motion-forward, deployed to GitHub Pages.

**Live:** https://ako-saka.github.io/azhang/

---

## Editing the content

Almost everything you'd want to change lives in two files. Look for `>>> CUSTOMIZE`
comments — those mark the spots I filled with placeholders.

| What | Where |
|---|---|
| Name, role, tagline, location, socials, nav, skills, interests, resume | [src/data/site.js](src/data/site.js) |
| Projects (cards + their detail pages) | [src/data/projects.js](src/data/projects.js) |
| Colours, type, spacing — the whole design system | [src/styles/global.css](src/styles/global.css) |
| The hero grid tiles | `gridItems` at the top of [src/pages/index.astro](src/pages/index.astro) |
| Photos | [src/images/](src/images/) — imported and resized at build time |

Adding a project is one entry in `src/data/projects.js`; the card on `/projects` and the
page at `/projects/<slug>` are both generated from it. Paragraphs starting with `>>>` render
as a visible "note to self" callout, so unfinished copy never reads as real.

Drop a PDF at `public/aine-zhang-resume.pdf` to activate the resume download button.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321/azhang/
npm run build      # -> dist/
npm run build:docs # -> dist/ then copies to docs/
```

The dev URL includes `/azhang` because of the `base` setting — see below.

## Structure

```
src/
  components/   GridMotion (React + GSAP), ProjectCard, PageHeader
  data/         site.js, projects.js  <- content lives here
  images/       source photos, optimised at build time
  layouts/      BaseLayout.astro (head, nav, footer, scroll-reveal)
  lib/url.js    withBase() — always use this for internal links
  pages/        index, about, interests, resume, contact, 404,
                projects/index + projects/[slug]
  styles/       global.css
public/         favicon.svg, .nojekyll, (put your resume PDF here)
```

## Deployment

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which builds the site, copies it into `docs/`, and publishes that to the `gh-pages` branch.

Three things this setup depends on — worth knowing before you change them:

- **`base: '/azhang'`** in [astro.config.mjs](astro.config.mjs). The repo isn't named
  `ako-saka.github.io`, so Pages serves from a sub-path. Every internal link goes through
  `withBase()` for this reason. Moving to a custom domain? Set `base: '/'`, update `site`,
  and add a `public/CNAME`.
- **`public/.nojekyll`.** Without it GitHub runs Jekyll, which ignores any directory
  starting with an underscore — including `_astro/`, i.e. all the CSS and JS.
- **Redirect targets include the base manually.** Astro doesn't prefix them for you.

## Accessibility & performance notes

- All motion respects `prefers-reduced-motion` — the grid holds still, reveals cut instead
  of sliding, the marquee stops.
- Scroll-reveal styles are scoped under `.js`, so content is visible if JavaScript fails.
- Photos are resized and re-encoded to WebP at build time (~25–50 KB each).
- Only the hero ships React; every other page is static HTML with a small inline script.
