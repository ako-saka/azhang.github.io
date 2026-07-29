/**
 * ============================================================================
 *  PROJECTS — each entry generates a card on /projects and a page at
 *  /projects/<slug>. Add or remove entries freely.
 *
 *  status: 'live' | 'wip' | 'archived'
 *  group:  'research' | 'build' | 'play'   (controls which section it lands in)
 *  accent: 'a' | 'b' | 'c'                 (card colour)
 *  body:   array of paragraphs
 * ============================================================================
 */

export const projects = [
  {
    slug: 'degdp',
    title: 'deGDP',
    kicker: 'Research · 2024',
    group: 'research',
    accent: 'a',
    status: 'live',
    year: '2024',
    role: 'Developer & designer',
    team: 'With Elaine, guided by Enzo — KTP Project Committee',
    summary:
      'A research collaboration exploring what economic wellbeing looks like when you stop measuring it with GDP alone.',
    tags: ['Research', 'Data viz', 'Collaborative planning'],
    links: [
      // >>> CUSTOMIZE: add the live URL / repo / paper when you have them.
      // { label: 'Live site', href: 'https://…' },
    ],
    body: [
      'deGDP started from a simple frustration: a single aggregate number gets used to describe the health of an entire society, and it quietly leaves out most of what people actually care about.',
      'We built a tool for exploring alternative indicators side by side — the kind of thing you can put in front of a policy team and have an argument over. The focus was on making comparisons legible rather than on producing one authoritative answer.',
      '>>> CUSTOMIZE: describe the methodology, the data sources, and what you personally built. A screenshot or two would land well here.',
    ],
  },
  {
    slug: 'i-ching',
    title: 'I-Ching',
    kicker: 'Interactive · 2024',
    group: 'play',
    accent: 'b',
    status: 'live',
    year: '2024',
    role: 'Developer & designer',
    team: 'With Elaine, guided by Enzo — KTP Project Committee',
    summary:
      'A digital version of the oldest randomness-driven interface in the world: cast the coins, read the hexagram.',
    tags: ['JavaScript', 'Interaction design', 'Typography'],
    links: [{ label: 'Visit the live project', href: 'https://ako-saka.github.io/I-Ching.github.io/' }],
    body: [
      'The I-Ching is three thousand years old and works, structurally, like a lookup table with a very good user experience. You perform a small ritual, you get a deterministic result from a random seed, and you are handed a text ambiguous enough to think against.',
      'I wanted the digital version to keep the ritual instead of collapsing it into a button press — so the casting is animated, unhurried, and slightly resistant to being rushed.',
      '>>> CUSTOMIZE: add a note about how you generated the hexagrams and where the translations came from.',
    ],
  },
  {
    slug: 'this-site',
    title: 'This Website',
    kicker: 'Build · 2026',
    group: 'build',
    accent: 'c',
    status: 'live',
    year: '2026',
    role: 'Everything',
    team: 'Solo',
    summary:
      'An Astro site with a GSAP-driven parallax grid for a front door. Static, fast, and deployed straight from a GitHub Action.',
    tags: ['Astro', 'React', 'GSAP', 'GitHub Pages'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/ako-saka/azhang' }],
    body: [
      'Static-generated with Astro, so the only JavaScript that ships is the interactive parts: the hero grid, the interests explorer, and a handful of scroll effects.',
      'The hero is a 4×7 grid rotated fifteen degrees, with each row tracking the cursor at a different rate. GSAP does the easing; the rows have different inertia so the whole thing lags behind your hand like fabric.',
      'Everything respects `prefers-reduced-motion` — with it enabled the grid holds still and the reveals cut instead of sliding.',
    ],
  },

  // ---------------------------------------------------------------------------
  // >>> CUSTOMIZE: three placeholder slots. Fill them in or delete them.
  // ---------------------------------------------------------------------------
  {
    slug: 'project-four',
    title: 'Untitled Project',
    kicker: 'Coming soon',
    group: 'build',
    accent: 'a',
    status: 'wip',
    year: '2026',
    role: 'TBD',
    team: 'TBD',
    summary: 'A slot waiting for a real project. Tell me what goes here and I will write it up.',
    tags: ['TODO'],
    links: [],
    body: ['This page is a placeholder. Replace this entry in `src/data/projects.js`.'],
  },
  {
    slug: 'project-five',
    title: 'Untitled Project',
    kicker: 'Coming soon',
    group: 'play',
    accent: 'b',
    status: 'wip',
    year: '2026',
    role: 'TBD',
    team: 'TBD',
    summary: 'Another open slot — a good home for a data visualisation or a side experiment.',
    tags: ['TODO'],
    links: [],
    body: ['This page is a placeholder. Replace this entry in `src/data/projects.js`.'],
  },
  {
    slug: 'project-six',
    title: 'Untitled Project',
    kicker: 'Coming soon',
    group: 'research',
    accent: 'c',
    status: 'wip',
    year: '2026',
    role: 'TBD',
    team: 'TBD',
    summary: 'One more slot, reserved for coursework or research you want to show off.',
    tags: ['TODO'],
    links: [],
    body: ['This page is a placeholder. Replace this entry in `src/data/projects.js`.'],
  },
];

export const groups = [
  { id: 'research', title: 'Research', blurb: 'Work where the question mattered more than the artefact.' },
  { id: 'build', title: 'Things I Built', blurb: 'Shipped software, start to finish.' },
  { id: 'play', title: 'Play', blurb: 'Experiments with no deadline and no client.' },
];

export const featured = projects.filter((p) => p.status === 'live').slice(0, 3);

export function projectsIn(groupId) {
  return projects.filter((p) => p.group === groupId);
}
