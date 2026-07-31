import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// The repo is `ako-saka/azhang.github.io` — GitHub's special "user site" name,
// which serves at the domain root: https://ako-saka.github.io/
//
// >>> CUSTOMIZE: if you ever rename the repo back to something like `azhang`
// (a regular project repo), Pages instead serves from a sub-path and this
// needs to go back to `base: '/azhang'`.
const base = '/';
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
