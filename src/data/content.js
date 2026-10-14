export const EMAIL = 'mendozashane0820@gmail.com'
export const LINKEDIN = 'https://www.linkedin.com/in/shane-mendoza-70012529b/'
export const GITHUB = 'https://github.com/roki-a'

export const navLinks = [
  ['about', 'About'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['training', 'Training'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
]

export const filters = [
  ['all', 'All'],
  ['ai', 'AI/ML'],
  ['uiux', 'UI/UX'],
  ['db', 'Databases'],
  ['web', 'Web'],
]

export const aboutParagraphs = [
  "I'm a visual learner, which shows in how I work: I like to sketch a problem out, prototype it, then build it. That habit carries across my coursework in software development, data analytics and machine learning, and into design work in Figma.",
  "I'm detail-oriented, adaptable and happiest on a team. Outside of class I run creatives and event coverage for student organizations, so I'm used to switching between writing code, making publication materials and coordinating people.",
  'Photography and creative media are part of how I see things, and they feed back into the interfaces I design.',
]

export const facts = [
  ['Studying', 'BS Computer Science, Holy Angel University (2023 to present)'],
  ['Focus areas', 'AI/ML, data analytics, UI/UX design, front-end'],
  ['Latest win', '2nd place, Hackathon of the Base Build IRL Workshop 2026'],
  ['Languages', 'English, Filipino, Kapampangan'],
]

export const projects = [
  {
    title: 'AniMedika: Rice Leaf Disease Classification System',
    kind: 'Thesis project, 2025 to 2026',
    cats: ['ai'],
    className: 'big',
    body: 'A team thesis on classifying rice leaf diseases from photos using a convolutional neural network built on EfficientNetB0. I worked on model development, image preprocessing, data augmentation, training and performance evaluation, and measured results with precision, recall, F1-score, ROC-AUC and confusion matrices.',
    tags: ['Python', 'CNN', 'EfficientNetB0', 'Image classification'],
  },
  {
    title: 'eLingkod',
    kind: 'School project, 2025',
    cats: ['uiux'],
    className: 'gold',
    body: 'A community service management app. I designed responsive, user-centric wireframes and interactive prototypes in Figma, and tuned user workflows and accessibility.',
    tags: ['Figma', 'Wireframing', 'Prototyping'],
  },
  {
    title: 'Inventory Management System',
    kind: 'School project, 2025',
    cats: ['db'],
    body: 'A database-driven inventory system on a relational database with full CRUD, automated product tracking and structured record management.',
    tags: ['SQL', 'Relational DB', 'CRUD'],
  },
  {
    title: 'thibaud-herem',
    kind: 'On GitHub',
    cats: ['web'],
    body: 'A front-end page build written in HTML.',
    tags: ['HTML'],
    href: `${GITHUB}/thibaud-herem`,
  },
  {
    title: 'fcc-postgres-universedb',
    kind: 'On GitHub, freeCodeCamp',
    cats: ['db'],
    className: 'gold',
    body: "A PostgreSQL database project from freeCodeCamp's Relational Database certification.",
    tags: ['PostgreSQL', 'SQL'],
    href: `${GITHUB}/fcc-postgres-universedb`,
  },
  {
    title: 'fcc-postgres-worldcupdb',
    kind: 'On GitHub, freeCodeCamp',
    cats: ['db'],
    body: 'A PostgreSQL project driven by shell scripts, from the Relational Database certification.',
    tags: ['PostgreSQL', 'Bash'],
    href: `${GITHUB}/fcc-postgres-worldcupdb`,
  },
  {
    title: 'fcc-postgres-salondb',
    kind: 'On GitHub, freeCodeCamp',
    cats: ['db'],
    body: 'A PostgreSQL project driven by shell scripts, from the Relational Database certification.',
    tags: ['PostgreSQL', 'Bash'],
    href: `${GITHUB}/fcc-postgres-salondb`,
  },
  {
    title: 'fcc-BuildingAnSQLReferenceObject',
    kind: 'On GitHub, freeCodeCamp',
    cats: ['db', 'web'],
    className: 'gold',
    body: 'A freeCodeCamp exercise on building an SQL reference object.',
    tags: ['SQL'],
    href: `${GITHUB}/fcc-BuildingAnSQLReferenceObject`,
  },
]

export const experience = [
  {
    title: 'Creative Staff, League of Outstanding Programmers (LOOP)',
    when: '2024 to 2025',
    org: 'Holy Angel University',
    body: 'Made publication materials for organization activities and announcements, focused on event photography and media coverage, and backed up the creatives team when staffing was short.',
  },
  {
    title: 'Internal Relations Staff, Google Developer Groups (GDG)',
    when: '2025 to 2026',
    org: 'Holy Angel University',
    body: 'Helped organize and run the GDG DataCamp event, supporting coordination and communication.',
  },
  {
    title: 'Chairperson Staff & Logistics Staff, College Student Council (CSC)',
    when: '2023 to 2024',
    org: 'Holy Angel University',
    body: 'Handled sponsorship acquisition for School of Computing events, reached out to potential sponsors, managed sponsor communications and helped prepare large-scale creative events.',
  },
]

export const education = [
  {
    title: 'Bachelor of Science in Computer Science',
    when: 'July 2023 to present',
    org: 'Holy Angel University',
  },
  {
    title: 'STEM Track (Science, Technology, Engineering, and Mathematics)',
    when: 'September 2021 to July 2023',
    org: 'Pampanga High School',
    body: 'Graduated with Highest and High Honors, cumulative gross weighted average of 96.50.',
  },
]

export const certGroups = [
  {
    title: 'Data & AI',
    items: ['Data Analytics Essentials', 'Introduction to Data Science', 'AI Fundamentals (IBM SkillsBuild)'],
  },
  {
    title: 'Development & Security',
    items: [
      'JavaScript Essentials 1 & 2',
      'Responsive Web Design',
      'Relational Database Certification',
      'Ethical Hacker',
      'Cyber Threat Management',
      'Endpoint Security',
    ],
  },
  {
    title: 'Professional certifications',
    items: ['CompTIA IT Fundamentals (ITF+)', 'Work with Components in Figma'],
  },
]

export const seminars = [
  'Introduction to Internet of Things Seminar',
  'Heads Up, Sophomores! Webinar',
  'Regional Blockchain Conference 2024',
  '3rd CyberSecurity Conference',
]

export const skillGroups = [
  {
    title: 'Design',
    cls: 't1',
    items: ['UI/UX Design', 'Wireframing & Prototyping', 'Figma', 'Canva', 'Photography & Creative Media'],
  },
  {
    title: 'Code & data',
    cls: 't2',
    items: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'Docker', 'Frontend Development', 'Data Analytics', 'SQL'],
  },
  {
    title: 'How I work',
    cls: 't3',
    items: ['Problem-Solving', 'Team Collaboration', 'Adaptability', 'Microsoft Office Suite'],
  },
]
