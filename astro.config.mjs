import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// The repo is `ako-saka/azhang`, so GitHub Pages serves the site from a
// sub-path: https://ako-saka.github.io/azhang/
//
// >>> CUSTOMIZE: if you ever move to a custom domain (e.g. ainezhang.com) or
// rename the repo to `ako-saka.github.io`, set `base: '/'` and update `site`.
const base = '/azhang';

export default defineConfig({
  site: 'https://ako-saka.github.io',
  base,
  trailingSlash: 'ignore',
  integrations: [react()],
  // Old URLs from the pre-Astro site, kept so shared links don't 404.
  // Astro does NOT prepend `base` to redirect targets — hence the template strings.
  redirects: {
    '/iching': `${base}/projects/i-ching`,
    '/degdp': `${base}/projects/degdp`,
    '/project2': `${base}/projects`,
    '/project3': `${base}/projects`,
    '/project5': `${base}/projects`,
    '/project6': `${base}/projects`,
  },
});
