/* ---------------------------------- data --------------------------------- */

export const TICKER = [
  "REACT",
  "NEXT.JS",
  "ANGULAR",
  "REACT NATIVE",
  "TYPESCRIPT",
  "NODE.JS",
  "GRAPHQL",
  "POSTGRESQL",
  "TECH LEAD",
  "MENTOR",
];

export const EXPERIENCE = [
  {
    n: "01",
    role: "Software Engineer",
    org: "Selise Digital Platforms",
    span: "2024 — NOW",
    tag: "PROJECT TECH LEAD",
    points: [
      "Direct a frontend engineering team — high-quality code through mentorship and rigorous reviews.",
      "Engineer large-scale enterprise apps with React, Next.js & Angular across diverse business units.",
      "Spearhead cross-platform mobile strategy with React Native — high-fidelity iOS & Android delivery.",
      "Translate complex business requirements into scalable technical roadmaps with stakeholders.",
    ],
  },
  {
    n: "02",
    role: "Intern Software Engineer",
    org: "Beyul Labs",
    span: "2023 — 2024",
    tag: "FULL STACK",
    points: [
      "Engineered software products end-to-end with full-stack responsibility.",
      "Converted stakeholder requirements into working software with modern web technologies.",
    ],
  },
  {
    n: "03",
    role: "Graduate Teaching Assistant",
    org: "College of Science and Technology",
    span: "2023",
    tag: "TEACHING",
    points: [
      "Semester-long role — conducted lectures on server-side engineering.",
    ],
  },
  {
    n: "04",
    role: "Volunteer Tutor",
    org: "Little Coders, Bhutan",
    span: "2021 — 2022",
    tag: "COMMUNITY",
    points: [
      "Introduced children to programming — Code Monkey, HTML, CSS and basic web technology.",
    ],
  },
  {
    n: "05",
    role: "Intern Software Engineer",
    org: "Druk Holdings and Investment",
    span: "2021",
    tag: "FULL STACK",
    points: [
      "Built the Water Management System for Bhutan with full-stack engineering responsibilities.",
    ],
  },
];

export const PROJECTS = [
  {
    n: "01",
    name: "JobTally",
    tagline: "A quiet ledger for your job hunt.",
    tag: "CHROME EXTENSION",
    span: "2026",
    desc: "A Manifest V3 browser extension that automatically tallies job applications submitted on LinkedIn, Seek, Indeed and Glassdoor — with a hand-drawn tally-mark dashboard, per-site breakdown, manual logging and CSV export.",
    points: [
      "Automatic detection — content scripts watch each site's 'application submitted' signal and log title, company, site and link. No clicking required.",
      "Cross-origin attribution — handles Indeed's smartapply hop and Glassdoor Easy Apply riding on Indeed's flow, so applications land on the right site.",
      "Deduplication keyed on canonical URL and site+company+title — revisiting a confirmation page never double-counts.",
      "Local-only by design — everything lives in chrome.storage.local. Nothing leaves your machine.",
    ],
    stack: ["JavaScript", "Manifest V3", "MutationObserver", "chrome.storage"],
    repo: "https://github.com/bhuwan-1/job-tally",
    img: "/jobtally.png",
    imgAlt:
      "JobTally popup — tally-mark dashboard with per-site breakdown and recent applications",
  },
];

export const SKILLS = [
  {
    label: "LANGUAGES",
    items: ["TypeScript", "JavaScript (ES6+)", "Python", "C"],
  },
  {
    label: "FRONTEND",
    items: [
      "React / Next.js",
      "Angular (v1 & v2+)",
      "React Native",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "BACKEND & DATA",
    items: [
      "Node.js",
      "Express.js",
      "REST API",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    label: "PRACTICE",
    items: [
      "Git / GitHub / Bitbucket",
      "Agile / Scrum",
      "Mentorship",
      "Stakeholder Management",
    ],
  },
];

export const EDUCATION = [
  {
    school: "Royal University of Bhutan",
    deg: "B.E. Information Technology",
    span: "2019 — 2024",
  },
  {
    school: "Uppsala University, Sweden",
    deg: "Exchange Studies — Information Technology",
    span: "2022 — 2023",
  },
  {
    school: "Yangchenphug HSS",
    deg: "High School Diploma in Science",
    span: "2017 — 2018",
  },
];

export const AWARDS = [
  "Selise Rising Star",
  "His Majesty's Academic Excellence Award",
  "Engineering Academic Excellence",
  "World Skills Asia Competitor",
  "Erasmus+ ICM Scholarship",
];

export const SPOKEN = ["English", "Nepali", "Hindi", "Dzongkha"];

export const EMAIL = "bhuws.dev@gmail.com";
export const GITHUB = "https://github.com/bhuwan-1";
export const GITHUB_USER = "bhuwan-1";
export const LINKEDIN = "https://www.linkedin.com/in/bhuwan-sharma-37b5bb187/";
