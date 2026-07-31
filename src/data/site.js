/**
 * ============================================================================
 *  SITE CONFIG — this is the one file you edit for most content changes.
 *  Anything marked  >>> CUSTOMIZE  is a placeholder I guessed at.
 * ============================================================================
 */

export const site = {
  name: 'Aine Zhang',
  // Shown under the big name in the hero.
  role: 'Student, researcher', // >>> CUSTOMIZE
  // One or two sentences. Appears in the hero and in <meta description>.
  tagline:
    'I build things for the web that are a little more alive than they need to be — research tools, playful interfaces, and the occasional divination engine.', // >>> CUSTOMIZE
  location: 'Chicago, IL / Shanghai, China / Hong Kong SAR', // >>> CUSTOMIZE
  // Rotating words in the hero. Keep them short.
  keywords: ['research', 'social sciences', 'motion', 'data', 'computers'], // >>> CUSTOMIZE
};

export const socials = [
  { label: 'Email', handle: 'ainez@uchicago.edu', href: 'mailto:ainez@uchicago.edu', icon: 'mail' },
  { label: 'GitHub', handle: '@ako-saka', href: 'https://github.com/ako-saka', icon: 'github' },
  { label: 'LinkedIn', handle: 'in/ainezhang', href: 'https://www.linkedin.com/in/ainezhang/', icon: 'linkedin' },
  { label: 'Instagram', handle: '@ainezhang_', href: 'https://instagram.com/ainezhang_', icon: 'instagram' },
];

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Work' },
  { href: '/resume', label: 'Resume' },
  { href: '/interests', label: 'Interests' },
  { href: '/contact', label: 'Contact' },
];

/** Skill groups shown on the home page and About page. */
export const skills = [
  {
    title: 'Research',
    accent: 'b',
    items: ['Real analysis & probability', 'Regression & quantitative modeling', 'Optimization', 'Mixed-methods research', 'Sociological theory'],
  },
  {
    title: 'Build',
    accent: 'a',
    items: ['Python', 'R', 'MATLAB', 'LaTeX', 'Astro / React', 'Introductory C'],
  },
  {
    title: 'Languages',
    accent: 'c',
    items: ['English', 'Mandarin Chinese', 'Japanese (basic)'],
  },
];

/**
 * The Interests page. Each entry becomes a searchable card.
 * `emoji` is used as the card badge, `blurb` is the body copy.
 * >>> CUSTOMIZE: this is the most personal part of the site — make it yours.
 */
export const interests = [
  {
    id: 'food',
    emoji: '🍜',
    title: 'Food',
    tags: ['cooking', 'noodles', 'baking'],
    blurb:
      'I love good food, especially noodles in any shapes or sizes. Always my default meal.',
  },
  {
    id: 'rock climbing',
    emoji: '🧗‍♀️',
    title: 'Sports',
    tags: ['beta-me', 'iloveslab'],
    blurb:
      'V3 enthusiast, loves slab, cannot dyno, cannot do a pull-up...do not ask about it',
  },
  {
    id: 'music',
    emoji: '🎧',
    title: 'Music',
    tags: ['playlists', 'concerts'],
    blurb:
      'R&B, Kpop, Jpop, a lot of different things...',
  },
  {
    id: 'books',
    emoji: '📚',
    title: 'Books',
    tags: ['reading', 'fiction', 'essays'],
    blurb:
      'Trying to get back into the habit of reading... It is not exactly the easiest thing to do when I am drowning in assigned reading and addicted to screens.',
  },
  {
    id: 'iching',
    emoji: '☯',
    title: 'I-Ching',
    tags: ['divination', 'symbols', 'history'],
    blurb:
      'Ancient systems of meaning are basically very old user interfaces. I built one — see the projects page.',
  },
  {
    id: 'games',
    emoji: '🎮',
    title: 'Games',
    tags: ['puzzles', 'indie', 'design'],
    blurb:
      'Anything tagged as casual but is actually stressful... Ask about Animal Crossing, Stardew Valley, and Tomodachi life',
  },
  {
    id: 'soccer',
    emoji: '⚽',
    title: 'Soccer',
    tags: ['team sports', 'fitness', 'competition'],
    blurb:
      'I love playing soccer and watching it on TV. It\'s a great way to stay active and connect with others. Looking to watch Women\'s World Cup 2023 and the 2026 Men\'s World Cup in person!',
  },
];

/**
 * Resume. Sourced from Aine's actual CV — the download button is
 * intentionally disabled, so this is the only place resume content lives.
 */
export const resume = {
  summary:
    'Statistics & Sociology student researching computational social science — from an AI-assisted caregiving tool to a degrowth mod of Stardew Valley.',
  education: [
    {
      school: 'University of Chicago',
      credential: 'B.S. in Statistics, B.A. in Sociology, B.S. in Computational and Applied Mathematics',
      period: '2024 — 2028',
      detail:
        'Coursework: real analysis, mathematical probability, regression, quantitative modeling, optimization, classic political philosophy, sociological theory.',
    },
  ],
  experience: [
    {
      org: 'Data-Informed iSupport for Dementia Carers',
      role: 'Researcher',
      period: 'May 2026 — Present',
      detail:
        'Co-designing and evaluating an AI-powered virtual assistant that adapts the WHO’s iSupport framework for Chinese family caregivers of people living with dementia — Hong Kong, China. Mixed-methods research including interviews and questionnaires on user acceptance and adoption.',
      tags: ['Mixed methods', 'HCI', 'AI'],
    },
    {
      org: 'Degrowth as a Game Design Problem',
      role: 'Researcher',
      period: 'Jun 2025 — Present',
      detail:
        'Co-developing a critical mod of Stardew Valley to study character progression alongside financial degrowth — bridging environmental studies and economics with game design and speculative futures. Leading statistical analysis and impact measurement — Chicago, IL.',
      tags: ['Game design', 'Statistical analysis'],
    },
    {
      org: 'Women’s Business Development Center',
      role: 'Archivist',
      period: 'Sept 2025 — Mar 2026',
      detail:
        'Catalogued archives uncovering key moments in WBDC’s history and co-led an oral history project with UChicago Special Collections, UIC Archives, and the Chicago Women’s History Center — Chicago, IL.',
      tags: ['Archives', 'Oral history'],
    },
    {
      org: 'Structure Therapeutics',
      role: 'Operational Intern',
      period: 'Aug 2024 — Sept 2024',
      detail:
        'Built and maintained centralized databases for scientific publications, doubling search efficiency; digitized HR and finance files — San Francisco, CA.',
      tags: ['Databases', 'Operations'],
    },
  ],
  activities: [
    { org: 'UChicago Mahjong Club', role: 'Social Chair & Co-Founder', period: 'Oct 2024 — Present' },
    { org: 'Doc Films at UChicago', role: 'Volunteer', period: 'Jun 2025 — Present' },
    { org: 'Kappa Theta Pi Professional Technology Fraternity', role: 'Pledge', period: 'Apr 2026 — Present' },
    { org: 'Chicago Journal of Sociology', role: 'Editor', period: 'Sept 2024 — May 2025' },
  ],
  awards: [
    {
      title: 'Quad Undergraduate Research Scholar',
      period: '2025 — 2026',
      detail: 'Competitive research grant supporting interdisciplinary undergraduate research initiatives.',
    },
    {
      title: 'College Summer Institute Scholar',
      period: '2025',
      detail: 'Selected for an advanced humanities & arts research program as 1 of 2 first-years; presented at the Summer Undergraduate Symposium.',
    },
  ],
};
