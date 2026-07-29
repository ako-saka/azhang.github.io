const BASE = import.meta.env.BASE_URL || '/';

/**
 * Prefix an internal path with the deploy base path.
 * Use this for EVERY internal link/asset so the site keeps working whether it
 * is served from the domain root or from a GitHub Pages sub-path.
 *
 *   withBase('/about')      -> '/azhang/about'
 *   withBase('/')           -> '/azhang/'
 *   withBase('/#work')      -> '/azhang/#work'
 *   withBase('https://...') -> unchanged
 *
 * @param {string} path
 * @returns {string}
 */
export function withBase(path = '/') {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const rest = path.startsWith('/') ? path : `/${path}`;
  return `${base}${rest}` || '/';
}

/**
 * True when `href` is the page currently being rendered (used for nav state).
 * @param {string} href  an already-based href, e.g. '/azhang/about'
 * @param {string} pathname  Astro.url.pathname
 */
export function isActive(href, pathname) {
  const clean = (s) => (s.split('#')[0].replace(/\/+$/, '') || '/');
  const a = clean(href);
  const b = clean(pathname);
  if (a === clean(withBase('/'))) return b === a;
  return b === a || b.startsWith(`${a}/`);
}
