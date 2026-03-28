export const PERSON = {
  name: "Parash Giri",
  brand: "Parash.dev",
  role: "Full Stack & Mobile Developer",
  location: "Birmingham, UK",
  experienceSince: 2018,
  currentJob: "Faraday Battery Ltd, UK",
  education: "MSc Computer Science with Distinction – Birmingham City University",
  email: "parashtech.dev@gmail.com",
  github: "https://github.com/parashe",
  linkedin: "https://linkedin.com/in/parashgiri",
  portfolioUrl: "https://parash.vercel.app",
  cvPath: "/Parash.pdf",
  profileImage: "/parash-graduation.png",
} as const;

/** Hero stats — no app/web-app counts (per portfolio preference). */
export const HERO_STATS = [
  { kind: "number" as const, value: 5, suffix: "", label: "Years Exp" },
  {
    kind: "text" as const,
    label: "MSc Computer Science",
    display: "Distinction",
    sublabel: "Birmingham City University",
  },
] as const;

/** Shown in the hero code card instead of product counts. */
export const HERO_CODE_CONNECTIVITY = [
  "BLE (Bluetooth Low Energy)",
  "WiFi → BMS",
  "NFC",
] as const;

export const TYPEWRITER_ROLES = [
  "Full Stack Dev",
  "Mobile App Dev",
  "React Native Dev",
  "AWS Developer",
  "WordPress Dev",
] as const;

export const HERO_COPY = {
  badge: "Available for new projects",
  description:
    "5 years shipping mobile, web, and client sites end-to-end. Based in Birmingham, UK — from BLE/NFC and BMS connectivity on iOS & Android to cloud-backed dashboards and AWS.",
} as const;

export const ABOUT_COPY = {
  kicker: "// about me",
  title: "Turning ideas into shipped products",
  p1: "I'm a Full Stack & Mobile Developer with 5 years of experience — from native mobile apps to government systems, restaurant websites to enterprise battery dashboards. I design, develop and deploy the full product.",
  p2Prefix: "Currently at ",
  p2Job: "Faraday Battery Ltd, UK",
  p2Mid:
    " building internal tools and production mobile software (iOS & Android). I hold an ",
  p2Edu: "MSc in Computer Science with Distinction",
  p2Suffix: " from Birmingham City University.",
  tags: [
    "React Native · iOS & Android",
    "Next.js 14",
    "AWS",
    "MSc CS Distinction",
    "Birmingham, UK",
    "WordPress",
    "Open to Work",
  ],
  photoBadge: "BCU · Distinction",
} as const;

export type SkillPillVariant = "default" | "accent" | "orange" | "green";

export type SkillCategory = {
  emoji: string;
  title: string;
  pills: { label: string; variant: SkillPillVariant }[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    emoji: "📱",
    title: "Mobile Development",
    pills: [
      { label: "React Native", variant: "accent" },
      { label: "iOS", variant: "accent" },
      { label: "Android", variant: "accent" },
      { label: "App Store", variant: "default" },
      { label: "Play Store", variant: "default" },
      { label: "TypeScript", variant: "default" },
    ],
  },
  {
    emoji: "🌐",
    title: "Frontend",
    pills: [
      { label: "Next.js 14", variant: "accent" },
      { label: "React.js", variant: "accent" },
      { label: "TypeScript", variant: "default" },
      { label: "Tailwind CSS", variant: "default" },
      { label: "JavaScript", variant: "default" },
      { label: "HTML/CSS", variant: "default" },
      { label: "Redux", variant: "default" },
    ],
  },
  {
    emoji: "⚙️",
    title: "Backend",
    pills: [
      { label: "Node.js", variant: "accent" },
      { label: "Express.js", variant: "accent" },
      { label: "Python", variant: "default" },
      { label: "REST APIs", variant: "default" },
      { label: "JWT Auth", variant: "default" },
      { label: "Microservices", variant: "default" },
    ],
  },
  {
    emoji: "🗄️",
    title: "Databases",
    pills: [
      { label: "MongoDB", variant: "accent" },
      { label: "DynamoDB", variant: "accent" },
      { label: "MySQL", variant: "default" },
      { label: "Prisma ORM", variant: "default" },
      { label: "MongoDB Atlas", variant: "default" },
    ],
  },
  {
    emoji: "☁️",
    title: "AWS Cloud",
    pills: [
      { label: "Lambda", variant: "orange" },
      { label: "S3", variant: "orange" },
      { label: "API Gateway", variant: "orange" },
      { label: "Cognito", variant: "orange" },
      { label: "DynamoDB", variant: "orange" },
      { label: "CloudWatch", variant: "orange" },
      { label: "Amplify", variant: "orange" },
      { label: "Secrets Manager", variant: "orange" },
    ],
  },
  {
    emoji: "🔧",
    title: "DevOps & More",
    pills: [
      { label: "Docker", variant: "green" },
      { label: "Terraform", variant: "green" },
      { label: "Vercel", variant: "green" },
      { label: "Render", variant: "green" },
      { label: "Git", variant: "default" },
      { label: "WordPress", variant: "default" },
      { label: "Python", variant: "default" },
    ],
  },
];

export type ExperienceCard = {
  tag: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  stack: string[];
  /** Use "current" for green top accent line */
  accent: "current" | "default";
};

export const EXPERIENCE_CARDS: ExperienceCard[] = [
  {
    tag: "● Current Role",
    title: "Full Stack Developer",
    subtitle: "Faraday Battery Ltd, UK",
    period: "Apr 2023 — Present",
    description:
      "Building internal dashboards and production battery-management mobile software for iOS & Android — connectivity, telemetry, and secure cloud integration. Full stack across React, Next.js, TypeScript, DynamoDB and AWS.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "DynamoDB",
      "AWS",
      "React Native",
    ],
    accent: "current",
  },
  {
    tag: "Previous",
    title: "Full Stack Developer",
    subtitle: "Fibonacci Engineering & IT Solutions, Nepal",
    period: "Sep 2020 — Dec 2022",
    description:
      "Developed full-stack applications including Office Management System and Building Permit System for Nepali clients using React, Node.js, Express and MongoDB.",
    stack: ["React", "Node.js", "Express", "MongoDB", "MySQL"],
    accent: "default",
  },
  {
    tag: "Education",
    title: "MSc Computer Science",
    subtitle: "Birmingham City University, UK",
    period: "2023 — 2024 · ⭐ Distinction",
    description:
      "Graduated with Distinction. Specialised in software engineering, database systems and AI.",
    stack: ["AI/ML", "DBMS", "Software Eng", "Distinction"],
    accent: "default",
  },
  {
    tag: "Education",
    title: "Bachelor of Computer Engineering",
    subtitle: "Kathmandu Engineering College, Nepal",
    period: "First Class Degree",
    description:
      "First Class Bachelor's degree covering software development, hardware design, and system architecture.",
    stack: ["Software Dev", "Architecture", "First Class"],
    accent: "default",
  },
];

/**
 * Production mobile work — no product names or store listings.
 * Employer-confidential; describes capabilities only.
 */
export const MOBILE_PRODUCTION = {
  kicker: "// production mobile",
  title: "iOS & Android — shipped in production",
  intro:
    "React Native apps delivered for a UK battery technology employer. App names and listings are omitted here; below is what the software actually does in production on real hardware.",
  connectivityTitle: "Device connectivity",
  connectivity: [
    "Bluetooth Low Energy (BLE) — device discovery, pairing, GATT services, and stable sessions for field use",
    "Classic Bluetooth where required for legacy peripherals and commissioning flows",
    "WiFi — provisioning, secure association, and communication paths to battery management systems (BMS) and gateways",
    "NFC — tag reads, NDEF payloads, and tap-to-pair / quick-config flows alongside BLE/WiFi setup",
  ],
  productTitle: "In-app product experience",
  product: [
    "Live telemetry, state, and health views driven by data from BMS and connected packs",
    "Diagnostics: charge/discharge insight, fault indicators, and operator-facing dashboards",
    "Offline-first patterns with local caching and sync when connectivity returns",
    "Background tasks: keep-alive comms, reconnection logic, and resilient handling of sleep/wake on both OSes",
    "Push notifications (via AWS Lambda) for alerts and async updates",
    "Auth with AWS Cognito; APIs behind API Gateway; persistence and sync patterns with DynamoDB",
    "Released through standard Apple and Google distribution channels (no public naming on this site)",
  ],
  stack: [
    "React Native",
    "BLE / Bluetooth",
    "WiFi + BMS",
    "NFC",
    "TypeScript",
    "AWS Cognito",
    "Lambda",
    "API Gateway",
    "DynamoDB",
  ],
  confidentialNote: "🔒 Employer confidential — no app names or proprietary UI shown",
} as const;

export type WebAppProject = {
  id: string;
  emoji: string;
  gradient: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  privateLabel?: string;
};

export const WEB_APPLICATIONS: WebAppProject[] = [
  {
    id: "food",
    emoji: "🛵",
    gradient: "linear-gradient(135deg,#1a1440,#2d1060)",
    label: "FOOD DELIVERY",
    badge: "Full Stack",
    title: "Food Delivery App",
    description:
      "End-to-end platform with real-time order tracking, restaurant dashboards, customer menus and driver management.",
    tech: ["Next.js", "Node.js", "MongoDB", "JWT"],
  },
  {
    id: "table",
    emoji: "🍽️",
    gradient: "linear-gradient(135deg,#0d3320,#014421)",
    label: "RESERVE HUB",
    badge: "The Nepal Hub · Live",
    title: "Reserve Hub — Table & restaurant management",
    description:
      "Multi-restaurant table booking platform: super-admin tools to onboard restaurants, per-restaurant dashboards, availability and reservations, plus customer comms through email and WhatsApp.",
    tech: [
      "Next.js",
      "MongoDB",
      "Prisma",
      "Admin dashboards",
      "Email",
      "WhatsApp",
    ],
    liveUrl: "https://reserve-hub.thenepalhub.co.uk/login",
  },
  {
    id: "shop",
    emoji: "🛒",
    gradient: "linear-gradient(135deg,#1a0e35,#2e1a5a)",
    label: "E-COMMERCE",
    badge: "Full Stack",
    title: "Online Shopping Platform",
    description:
      "Full-stack e-commerce with JWT auth, product management, cart and checkout, powered by Node.js and MongoDB.",
    tech: ["Next.js", "Express", "MongoDB"],
    liveUrl: "https://onlineshop-frontend.vercel.app/",
    githubUrl: "https://github.com/parashe/OnlineShop.git",
  },
  {
    id: "office",
    emoji: "🏢",
    gradient: "linear-gradient(135deg,#1a2e0d,#1e3a10)",
    label: "OFFICE MANAGEMENT",
    badge: "Nepal · Private",
    title: "Office Management System",
    description:
      "Enterprise HR and office management solution for Nepali organisations — staff, tasks, leave management and document workflows.",
    tech: ["React", "Node.js", "MySQL"],
    privateLabel: "🔒 Private",
  },
  {
    id: "permit",
    emoji: "🏛️",
    gradient: "linear-gradient(135deg,#2e1a0d,#3a2010)",
    label: "BUILDING PERMITS",
    badge: "Nepal · Gov",
    title: "Building Permit System",
    description:
      "Government permit management system for Nepal — applications, multi-stage approvals, document uploads and real-time status tracking.",
    tech: ["React", "Node.js", "MongoDB"],
    privateLabel: "🔒 Private",
  },
  {
    id: "auth",
    emoji: "🔐",
    gradient: "linear-gradient(135deg,#0d1a2e,#0a2540)",
    label: "AUTH / UI",
    badge: "Open Source",
    title: "Auth UI — Data App",
    description:
      "Polished authentication interface with dark/light mode toggle using React, TypeScript, Tailwind and Context API.",
    tech: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://data-app-seven.vercel.app/",
    githubUrl: "https://github.com/parashe/data-app.git",
  },
];

/** Same spirit as [legacy #projects](https://parash.vercel.app/#projects) — personal builds only. */
export const PERSONAL_PROJECTS_INTRO = {
  kicker: "// projects",
  title: "Personal projects",
  note: "All projects here are personal work. Professional / employer products are not included.",
} as const;

const G = [
  "linear-gradient(135deg,#1a1440,#2d1060)",
  "linear-gradient(135deg,#0d3320,#014421)",
  "linear-gradient(135deg,#1a0e35,#2e1a5a)",
  "linear-gradient(135deg,#1a2e0d,#1e3a10)",
  "linear-gradient(135deg,#2e1a0d,#3a2010)",
  "linear-gradient(135deg,#0d1a2e,#0a2540)",
] as const;

export const PERSONAL_PROJECTS: WebAppProject[] = [
  {
    id: "p-login",
    emoji: "🔑",
    gradient: G[5],
    label: "AUTH / UI",
    badge: "Personal",
    title: "Login Page",
    description:
      "React, Tailwind CSS, and TypeScript with dark/light mode toggle and Context API.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Context API"],
    githubUrl: "https://github.com/parashe/data-app.git",
    liveUrl: "https://data-app-seven.vercel.app/",
  },
  {
    id: "p-ecom",
    emoji: "🛒",
    gradient: G[2],
    label: "E-COMMERCE",
    badge: "Personal",
    title: "E-commerce Website",
    description:
      "Next.js storefront with JWT auth and REST API; Node.js, Express, and MongoDB backend.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "JWT", "TypeScript"],
    githubUrl: "https://github.com/parashe/OnlineShop.git",
    liveUrl: "https://onlineshop-frontend.vercel.app/",
  },
  {
    id: "p-travel",
    emoji: "🏔️",
    gradient: G[1],
    label: "TRAVEL UI",
    badge: "Personal",
    title: "Travel Website",
    description:
      "Amazing Nepal travel experience built with Next.js — structured for content and APIs (TypeScript, Tailwind).",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://www.visitamazingnepal.com/",
  },
  {
    id: "p-admin",
    emoji: "⚙️",
    gradient: G[2],
    label: "ADMIN",
    badge: "Personal",
    title: "E-commerce Admin Panel",
    description:
      "Admin dashboard with roles via Context API and JWT; same stack as the storefront.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/parashe/OnlineShop.git",
    liveUrl: "https://onlineshop-admin.vercel.app/",
  },
  {
    id: "p-ecom-ui",
    emoji: "🖼️",
    gradient: G[3],
    label: "UI ONLY",
    badge: "Personal",
    title: "E-commerce Website UI",
    description:
      "Clean shopping UI in HTML, CSS, and JavaScript — foundation for later Next.js work.",
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/parashe/Ecommerce_UI",
    liveUrl: "https://parashe.github.io/Ecommerce_UI/html/index.html",
  },
  {
    id: "p-transpiler",
    emoji: "🔄",
    gradient: G[4],
    label: "TOOLING",
    badge: "Personal",
    title: "RN → React Transpiler",
    description:
      "Babel-based AST transforms to convert React Native-style JSX for web without RN-for-Web.",
    tech: ["React", "React Native", "Babel", "Parcel", "AST"],
    githubUrl: "https://github.com/parashe/code-shared-app.git",
  },
  {
    id: "p-subedi",
    emoji: "🎓",
    gradient: G[0],
    label: "CONSULTANCY",
    badge: "Personal",
    title: "Educational Consultancy Website",
    description:
      "Consultancy site for study-abroad guidance — React, Material-UI, and Bootstrap.",
    tech: ["React", "Material-UI", "Bootstrap"],
    githubUrl: "https://github.com/parashe/Subdei.git",
    liveUrl: "https://subdei.vercel.app/",
  },
  {
    id: "p-rotaract",
    emoji: "🤝",
    gradient: G[1],
    label: "COMMUNITY",
    badge: "Personal",
    title: "Rotaract Club Website",
    description:
      "Club site for projects and membership — React, Material-UI, and Font Awesome.",
    tech: ["React", "Material-UI", "Font Awesome", "Bootstrap"],
    githubUrl: "https://github.com/parashe/RotractNewWebsiteCode.git",
    liveUrl: "https://rotaractitabhatta.vercel.app",
  },
  {
    id: "p-datepicker",
    emoji: "📅",
    gradient: G[5],
    label: "COMPONENT",
    badge: "Personal",
    title: "Reusable Date Time Picker",
    description:
      "MUI DateTimePicker with filtering UX and loading states — Next.js and Tailwind.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Material-UI"],
    githubUrl: "https://github.com/parashe/DateTimePicker.git",
    liveUrl: "https://date-time-picker-blush.vercel.app/",
  },
  {
    id: "p-chatbot",
    emoji: "💬",
    gradient: G[2],
    label: "COMPONENT",
    badge: "Personal",
    title: "Simple Chatbot",
    description: "Reusable chatbot UI with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/parashe/chatbot",
    liveUrl: "https://chatbot-parash.vercel.app/",
  },
  {
    id: "p-dropdown",
    emoji: "📋",
    gradient: G[5],
    label: "COMPONENT",
    badge: "Personal",
    title: "Multi & Single Select Dropdown",
    description:
      "Next.js dropdown component supporting single and multi-select patterns.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/parashe/dropdown-selector.git",
    liveUrl: "https://dropdown-selector-orpin.vercel.app/",
  },
];

export type ClientWebsite = {
  id: string;
  emoji: string;
  name: string;
  urlLabel: string;
  description: string;
  tech: string;
  visitUrl?: string;
  visitText?: string;
};

export const CLIENT_WEBSITES: ClientWebsite[] = [
  {
    id: "hamstead",
    emoji: "🍖",
    name: "The Hamstead Hill",
    urlLabel: "thehamsteadhill.uk",
    description:
      "Bar & Grill restaurant in Birmingham. WordPress build with menu, online reservation, Uber Eats integration and contact pages.",
    tech: "WordPress",
    visitUrl: "https://thehamsteadhill.uk",
  },
  {
    id: "desi",
    emoji: "🌶️",
    name: "Desi Junction",
    urlLabel: "desijunction",
    description:
      "South Asian restaurant site built with Next.js — menu showcase, online ordering integration, gallery and reservation flows.",
    tech: "Next.js",
    visitText: "Built",
  },
  {
    id: "faraday",
    emoji: "🔋",
    name: "Faraday Battery Ltd",
    urlLabel:
      "faradaybattery.com · faradaybattery.in · faradaybattery.co.uk",
    description:
      "Three separate corporate websites for a UK battery technology company — global (.com), India (.in), and UK (.co.uk). Each domain is its own site: designed, developed, and maintained end-to-end.",
    tech: "Next.js / WP",
    visitUrl: "https://faradaybattery.com",
  },
  {
    id: "nepal",
    emoji: "🏔️",
    name: "The Amazing Nepal",
    urlLabel: "theamazingnepal.com",
    description:
      "Travel and tourism platform built with Next.js — trekking packages, destinations, cultural highlights and enquiry forms.",
    tech: "Next.js",
    visitUrl: "https://theamazingnepal.com",
  },
  {
    id: "subedi",
    emoji: "🎓",
    name: "Subedi Education",
    urlLabel: "subedieducation.com",
    description:
      "Education consultancy website for students studying abroad. Course listings, university partnerships and application forms.",
    tech: "Next.js",
    visitUrl: "https://subdei.vercel.app",
  },
  {
    id: "portfolio",
    emoji: "🌐",
    name: "Parash.dev",
    urlLabel: "parash.vercel.app",
    description:
      "My own developer portfolio — designed and built from scratch with Next.js, TypeScript and Tailwind CSS.",
    tech: "Next.js",
    visitUrl: "https://parash.vercel.app",
  },
];

export const TOOLS_MARQUEE = [
  { emoji: "⚛️", label: "React Native" },
  { emoji: "▲", label: "Next.js 14" },
  { emoji: "☁️", label: "AWS" },
  { emoji: "🐳", label: "Docker" },
  { emoji: "🔷", label: "TypeScript" },
  { emoji: "🍃", label: "MongoDB" },
  { emoji: "🌿", label: "Node.js" },
  { emoji: "🐍", label: "Python" },
  { emoji: "🏗️", label: "Terraform" },
  { emoji: "▶️", label: "Vercel" },
  { emoji: "📦", label: "Prisma ORM" },
  { emoji: "🅆", label: "WordPress" },
] as const;

export const AI_WORKFLOW_TOOLS = [
  { emoji: "⚡", name: "Cursor", sub: "AI code editor" },
  { emoji: "🤖", name: "Claude", sub: "Anthropic AI" },
  { emoji: "▲", name: "Vercel AI SDK", sub: "Deploy + AI" },
  { emoji: "☁️", name: "AWS Bedrock", sub: "Cloud AI" },
] as const;

export const CONTACT_COPY = {
  kicker: "// contact",
  title: "Let's build something together",
  description:
    "Open to freelance projects, full-time roles, and interesting builds. Based in Birmingham — working globally.",
} as const;
