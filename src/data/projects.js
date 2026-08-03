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
    title: 'DeGDP',
    subtitle: 'Degrowth as a Game Design Project',
    // Renders the title as a mouse-reactive ASCII-art plane (ASCIIText)
    // instead of plain text — see projects/[slug].astro.
    titleEffect: 'ascii',
    kicker: 'Research · 2025–2026',
    group: 'research',
    accent: 'a',
    status: 'live',
    year: '2025 — 2026',
    role: 'Game designer & researcher',
    team: 'Under the guidance of UChicago professor Katherine Buse',
    summary:
      'A critical mod of Stardew Valley that rebuilds the game’s economy around degrowth instead of endless growth.',
    tags: ['Game design', 'Narrative design', 'Statistical analysis'],
    links: [
      { label: 'Project site', href: 'https://www.katherinebuse.com/stardew-valley-big-ag-mod.html' },
      { label: 'Watch the reel', href: 'https://www.instagram.com/reel/DY0NH8qvEYO/?igsh=OWJiMjhpd2x0eHds' },
    ],
    body: [
      'Degrowth questions economic growth as the measure of a healthy society — but one of the biggest obstacles to it is that almost nobody can picture what a degrowth future actually looks like. DeGDP tackles that by modding Stardew Valley: instead of the game’s usual arc of endless expansion and profit, we rebuilt its economic systems around degrowth logics, using the game as a testbed for what a smaller, more mutual economy could feel like to live inside.',
      'My focus has been wealth inequality — how a shift away from growth could hurt the people who rely on cheap mass production and corporate employment if it isn’t designed carefully. I analyzed how the game’s working-class characters depend on its version of big-box retail, then wrote cinematic scenes from their perspective on growth and degrowth. That research became the community swap mechanic I lead-designed: a system where players and characters trade goods to meet each other’s needs directly, instead of buying and selling through the market.',
      'The mod is in active development. Alongside finishing and testing the community swap mechanic, I’m building the Joja Factory — a new physical space depicting large-scale corporate agriculture — and will help run player surveys and interviews once a playable draft exists.',
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
    links: [{ label: 'Source on GitHub', href: 'https://github.com/ako-saka/azhang.github.io' }],
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
