import { useEffect, useRef } from 'react';
// Default import, not `{ gsap }` — under Node's strict ESM loader (used by
// Astro's SSR build step in CI), gsap's CJS export shape can't always be
// statically analyzed for a named export, even though it works fine locally.
import gsapPkg from 'gsap';
import './GridMotion.css';

const gsap = gsapPkg.gsap ?? gsapPkg;

/**
 * A GridMotion item can be:
 *   - a string starting with http/ or a path ending in an image extension → image tile
 *   - any other string → text tile
 *   - an object: { image, alt } | { text, kind, tone }
 *       kind: 'solid' | 'outline' | 'glyph' | 'mono' | 'image'
 *       tone: 'a' | 'b' | 'c'
 *
 * @typedef {string | { image?: string, alt?: string, text?: string, kind?: string, tone?: string }} GridMotionItem
 */

const ROWS = 4;
const COLS = 7;
const TOTAL = ROWS * COLS;

const IMAGE_RE = /\.(png|jpe?g|gif|webp|avif|svg)$/i;

/** Normalise any accepted item shape into { kind, tone, text, image, alt }. */
function normalise(item, index) {
  if (item == null) return { kind: 'outline', tone: null, text: '' };

  if (typeof item === 'string') {
    const isImage = /^https?:\/\//.test(item) || item.startsWith('/') || IMAGE_RE.test(item);
    return isImage
      ? { kind: 'image', image: item, alt: '' }
      : { kind: index % 5 === 0 ? 'solid' : 'outline', tone: ['a', 'b', 'c'][index % 3], text: item };
  }

  if (item.image) return { kind: 'image', image: item.image, alt: item.alt ?? '' };

  return {
    kind: item.kind ?? 'outline',
    tone: item.tone ?? null,
    text: item.text ?? '',
  };
}

/**
 * @param {{
 *   items?: GridMotionItem[],
 *   gradientColor?: string,
 *   intensity?: number,
 *   drift?: boolean,
 *   veil?: boolean,
 * }} props
 */
export default function GridMotion({
  items = [],
  gradientColor = '#0e2b3f',
  intensity = 1,
  drift = true,
  veil = true,
}) {
  const rootRef = useRef(null);
  const rowRefs = useRef([]);
  const pointerRef = useRef(0.5); // normalised 0…1 across the viewport

  // Pad/trim to exactly 28 so the grid is always full.
  const cells = Array.from({ length: TOTAL }, (_, i) =>
    normalise(items.length ? items[i % items.length] : `0${i + 1}`.slice(-2), i)
  );

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    gsap.ticker.lagSmoothing(0);

    const handlePointer = (e) => {
      pointerRef.current = e.clientX / window.innerWidth;
    };

    const maxMove = 260 * intensity;
    const inertia = [0.6, 0.4, 0.3, 0.2];
    // Rows further down the grid move a little more — reads as depth.
    const depth = [0.72, 1, 0.86, 1.18];

    const update = (time) => {
      // Idle sway keeps the grid alive on touch devices and before first move.
      const sway = drift ? Math.sin(time * 0.32) * 0.09 : 0;
      const offset = pointerRef.current - 0.5 + sway;

      for (let i = 0; i < rowRefs.current.length; i += 1) {
        const row = rowRefs.current[i];
        if (!row) continue;
        const direction = i % 2 === 0 ? 1 : -1;
        gsap.to(row, {
          x: offset * maxMove * direction * depth[i % depth.length],
          duration: 0.8 + inertia[i % inertia.length],
          ease: 'power3.out',
          overwrite: 'auto',
        });
      }
    };

    gsap.ticker.add(update);
    window.addEventListener('pointermove', handlePointer, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointer);
      gsap.ticker.remove(update);
      gsap.killTweensOf(rowRefs.current.filter(Boolean));
    };
  }, [intensity, drift]);

  return (
    <div className="gm" ref={rootRef} aria-hidden="true">
      <div
        className="gm-glow"
        style={{ background: `radial-gradient(circle at 50% 45%, ${gradientColor} 0%, transparent 62%)` }}
      />
      <div className="gm-container">
        {Array.from({ length: ROWS }, (_, rowIndex) => (
          <div
            key={rowIndex}
            className="gm-row"
            ref={(el) => {
              rowRefs.current[rowIndex] = el;
            }}
          >
            {Array.from({ length: COLS }, (_, colIndex) => {
              const cell = cells[rowIndex * COLS + colIndex];
              return (
                <div key={colIndex} className="gm-cell">
                  <div className="gm-tile" data-kind={cell.kind} data-tone={cell.tone ?? undefined}>
                    {cell.kind === 'image' ? (
                      <div
                        className="gm-tile-img"
                        role="img"
                        aria-label={cell.alt || undefined}
                        style={{ backgroundImage: `url(${cell.image})` }}
                      />
                    ) : (
                      <div className="gm-tile-label">{cell.text}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {veil && <div className="gm-veil" />}
    </div>
  );
}
