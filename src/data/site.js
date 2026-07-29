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
  { label: 'Email', handle: 'aine2007@live.com', href: 'mailto:aine2007@live.com', icon: 'mail' },
  { label: 'GitHub', handle: '@ako-saka', href: 'https://github.com/ako-saka', icon: 'github' },
  // >>> CUSTOMIZE: replace with your real profile URLs (or delete the line).
  { label: 'LinkedIn', handle: 'in/ainezhang', href: 'https://www.linkedin.com/in/ainezhang', icon: 'linkedin' },
  { label: 'Instagram', handle: '@ainezhang', href: 'https://instagram.com/ainezhang', icon: 'instagram' },
];

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/interests', label: 'Interests' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

/** Skill groups shown on the home page and About page. >>> CUSTOMIZE freely. */
export const skills = [
  {
    title: 'Build',
    accent: 'a',
    items: ['JavaScript / TypeScript', 'React', 'Astro', 'Python', 'Node.js', 'Git'],
  },
  {
    title: 'Design',
    accent: 'b',
    items: ['UI animation', 'Figma', 'Design systems', 'Typography', 'Prototyping'],
  },
  {
    title: 'Think',
    accent: 'c',
    items: ['Data storytelling', 'Machine learning', 'Research methods', 'Collaborative planning'],
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
 * Resume. >>> CUSTOMIZE: everything below is placeholder scaffolding —
 * swap in your real education, experience and awards.
 */
export const resume = {
  // Drop a PDF at `public/aine-zhang-resume.pdf` to turn on the download button. please don't have the download be avaliable
  pdf: '/aine-zhang-resume.pdf',
  summary:
    'Student researcher intrested in computational social sciences and occasional mathematics', // >>> CUSTOMIZE
  education: [
    {
      school: 'University of Chicago', // >>> CUSTOMIZE
      credential: 'B.S. in Statistics, B.A. in Sociology, B.S. in Computational and Applied Mathematics', // >>> CUSTOMIZE
      period: '2024 — 2028',
      detail: 'Relevant coursework: real analysis, classical political theory, sociological theory, machine learning, human–computer interaction.',
    },
  ],
  experience: [
    {
      org: 'University of Hong Kong',
      role: 'Research Intern',
      period: 'Summer 2025',
      detail: 'Developing a RAG multiagent tool for dementia patients and caregivers.',
      tags: ['TODO'],
    },
    {
      org: 'DeGDP: Degrowth as a Game Design Problem', // >>> CUSTOMIZE
      role: 'Project Developer',
      period: '2025 - 2026',
      detail:
        'Built client-facing web projects in a small team, including the deGDP research tool and the I-Ching interactive.',
      tags: [],
    }
  ],
  awards: [
    { title: 'Add an award, scholarship or hackathon placement', period: '2025' }, // >>> CUSTOMIZE
  ],
    experience: [
    {
      org: 'Kappa The', // >>> CUSTOMIZE
      role: 'Project Developer',
      period: '2024 — present',
      detail:
        'Built client-facing web projects in a small team, including the deGDP research tool and the I-Ching interactive.',
      tags: ['React', 'Astro', 'Team of 3'],
    },
    {
      org: 'Your Internship',
      role: 'Software Engineering Intern',
      period: 'Summer 2025',
      detail: 'Describe the work, the stack, and one measurable outcome.',
      tags: ['TODO'],
    },
  ],
  awards: [
    { title: 'Add an award, scholarship or hackathon placement', period: '2025' }, // >>> CUSTOMIZE
  ],
};
