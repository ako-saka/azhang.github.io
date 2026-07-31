import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// GitHub only serves Pages from the domain root when the repo name matches
// the OWNER's username exactly (e.g. owner `ako-saka` + repo `ako-saka.github.io`).
// This repo is `ako-saka/azhang.github.io` — the names don't match, so despite
// the `.github.io` name it's an ordinary project repo, served from a sub-path
// at the repo's own name: https://ako-saka.github.io/azhang.github.io/
//
// >>> CUSTOMIZE: if you rename the repo to exactly `ako-saka.github.io`, Pages
// switches to serving from the domain root and this must become `base: '/'`.
const base = '/azhang.github.io';
const prefix = base === '/' ? '' : base;

export default defineConfig({
  site: 'https://ako-saka.github.io',
  base,
  trailingSlash: 'ignore',
  integrations: [react()],
  // Old URLs from the pre-Astro site, kept so shared links don't 404.
  // Astro does NOT prepend `base` to redirect targets — hence the manual prefix.
  redirects: {
    '/iching': `${prefix}/projects/i-ching`,
    '/degdp': `${prefix}/projects/degdp`,
    '/project2': `${prefix}/projects`,
    '/project3': `${prefix}/projects`,
    '/project5': `${prefix}/projects`,
    '/project6': `${prefix}/projects`,
  },
});
