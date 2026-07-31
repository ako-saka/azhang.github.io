# Aine Zhang — personal site

An Astro static site with a GSAP-driven parallax grid hero (React Bits' `GridMotion`).
Dark theme, motion-forward, deployed to GitHub Pages.

**Live:** https://ako-saka.github.io/

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

## Local development

```bash
npm install
npm run dev        # http://localhost:4321/
npm run build      # -> dist/
npm run build:docs # -> dist/ then copies to docs/
```

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
**That publish is not the same as the site being live** — GitHub Pages has to be separately
configured, in the repo's own Settings, to actually serve from that branch:

> Settings → Pages → Build and deployment → Source: **Deploy from a branch** →
> Branch: **`gh-pages`** / **`(root)`** → Save.

This is easy to lose after renaming a repo (renaming to `ako-saka.github.io` in particular
can silently drop the Pages source setting) — if the Actions tab shows green but the site
shows GitHub's own "Site not found" page, check this first.

Four things this setup depends on — worth knowing before you change them:

- **`base: '/'`** in [astro.config.mjs](astro.config.mjs). The repo is named
  `ako-saka.github.io` — GitHub's special "user site" name — so Pages serves from the
  domain root, not a sub-path. Every internal link goes through `withBase()` for this
  reason, so if you ever rename the repo to something ordinary (e.g. back to `azhang`),
  Pages goes back to serving from `/azhang/` and this needs to become `base: '/azhang'` again.
- **`public/.nojekyll`.** Without it GitHub runs Jekyll, which ignores any directory
  starting with an underscore — including `_astro/`, i.e. all the CSS and JS.
- **`permissions: contents: write`** in the workflow. Newer repos default `GITHUB_TOKEN`
  to read-only, which makes the push to `gh-pages` fail with a 403.
- **Redirect targets include the base manually.** Astro doesn't prefix them for you.

## Accessibility & performance notes

- All motion respects `prefers-reduced-motion` — the grid holds still, reveals cut instead
  of sliding, the marquee stops.
- Scroll-reveal styles are scoped under `.js`, so content is visible if JavaScript fails.
- Photos are resized and re-encoded to WebP at build time (~25–50 KB each).
- Only the hero ships React; every other page is static HTML with a small inline script.
