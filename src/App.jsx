import { useEffect, useRef } from "react";

/* ---------------------------------- data --------------------------------- */

const TICKER = [
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
  "FULL WORKING RIGHTS — AUSTRALIA",
];

const EXPERIENCE = [
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

const SKILLS = [
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

const EDUCATION = [
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

const AWARDS = [
  "Selise Rising Star",
  "His Majesty's Academic Excellence Award",
  "Engineering Academic Excellence",
  "World Skills Asia Competitor",
  "Erasmus+ ICM Scholarship",
];

const SPOKEN = ["English", "Nepali", "Hindi", "Dzongkha"];

const EMAIL = "bhuws.dev@gmail.com";
const GITHUB = "https://github.com/bhuwan-1";
const LINKEDIN = "https://www.linkedin.com/in/bhuwan-sharma-37b5bb187/";

/* ------------------------------- components ------------------------------- */

function Ticker() {
  const row = TICKER.map((t, i) => (
    <span className="tick" key={i}>
      {t}
      <i aria-hidden="true">✦</i>
    </span>
  ));
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {row}
        {row}
      </div>
    </div>
  );
}

function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

function SectionHead({ index, title }) {
  return (
    <Reveal className="section-head">
      <span className="section-index">{index}</span>
      <h2 className="section-title">{title}</h2>
      <span className="section-rule" aria-hidden="true" />
    </Reveal>
  );
}

export default function App() {
  return (
    <>
      <Ticker />

      <header className="topbar">
        <a className="logo" href="#top">
          Bhuws<span className="logo-dot">.</span>
        </a>
        <nav className="nav">
          <a href="#work">WORK</a>
          <a href="#skills">SKILLS</a>
          <a href="#education">EDUCATION</a>
        </nav>
        <a className="btn btn-small" href={`mailto:${EMAIL}`}>
          HIRE ME ↗
        </a>
      </header>

      <main id="top">
        {/* ------------------------------- hero ------------------------------- */}
        <section className="hero">
          <p className="hero-kicker boot boot-1">
            <span className="blink">●</span> SOFTWARE ENGINEER — THIMPHU, BHUTAN
          </p>
          <h1 className="hero-name">
            <span className="boot boot-2">BHUWAN</span>
            <span className="boot boot-3 hero-outline">S.KOIRALA</span>
          </h1>
          <div className="hero-bottom boot boot-4">
            <p className="hero-blurb">
              I build <strong>enterprise platforms</strong> with React, Next.js,
              Angular &amp; React Native — and lead the teams that ship them.
              Tech lead at Selise Digital Platforms. Full working rights in
              Australia.
            </p>
            <span className="hero-star" aria-hidden="true">
              ✦
            </span>
          </div>

          <div className="stats boot boot-5">
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">YEARS BUILDING SOFTWARE</span>
            </div>
            <div className="stat">
              <span className="stat-num">3</span>
              <span className="stat-label">
                FRAMEWORKS, ONE STANDARD: SHIPPED
              </span>
            </div>
            <div className="stat">
              <span className="stat-num">5</span>
              <span className="stat-label">AWARDS &amp; DISTINCTIONS</span>
            </div>
            <div className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">HUMAN LANGUAGES SPOKEN</span>
            </div>
          </div>
        </section>

        {/* ---------------------------- experience ----------------------------- */}
        <section id="work" className="section">
          <SectionHead index="①" title="EXPERIENCE" />
          <div className="xp-list">
            {EXPERIENCE.map((job) => (
              <Reveal as="article" className="xp" key={job.n}>
                <div className="xp-head">
                  <span className="xp-n">{job.n}</span>
                  <div className="xp-title">
                    <h3>{job.role}</h3>
                    <p className="xp-org">{job.org}</p>
                  </div>
                  <div className="xp-meta">
                    <span className="xp-tag">{job.tag}</span>
                    <span className="xp-span">{job.span}</span>
                  </div>
                </div>
                <ul className="xp-points">
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ------------------------------ skills ------------------------------ */}
        <section id="skills" className="section section-dark">
          <SectionHead index="②" title="STACK" />
          <div className="skills-grid">
            {SKILLS.map((g) => (
              <Reveal className="skill-block" key={g.label}>
                <h3 className="skill-label">{g.label}</h3>
                <div className="chips">
                  {g.items.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ------------------------- education / awards ------------------------ */}
        <section id="education" className="section">
          <SectionHead index="③" title="EDUCATION + HONOURS" />
          <div className="edu-grid">
            <Reveal className="edu-col">
              <h3 className="col-label">SCHOOLING</h3>
              {EDUCATION.map((e) => (
                <div className="edu-item" key={e.school}>
                  <span className="edu-span">{e.span}</span>
                  <h4>{e.school}</h4>
                  <p>{e.deg}</p>
                </div>
              ))}
            </Reveal>
            <Reveal className="edu-col">
              <h3 className="col-label">AWARDS</h3>
              <ul className="award-list">
                {AWARDS.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <h3 className="col-label col-label-gap">SPEAKS</h3>
              <div className="chips">
                {SPOKEN.map((l) => (
                  <span className="chip chip-light" key={l}>
                    {l}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ------------------------------ contact ------------------------------ */}
        <section className="contact">
          <Reveal>
            <p className="contact-kicker">GOT A PROJECT? A TEAM? A PROBLEM?</p>
            <a className="contact-mail" href={`mailto:${EMAIL}`}>
              {EMAIL.split("@")[0]}
              <span className="contact-at">@{EMAIL.split("@")[1]}</span>
            </a>
            <div className="contact-row">
              <span>+975 17459528</span>
              <span aria-hidden="true">✦</span>
              <span>THIMPHU, BHUTAN</span>
              <span aria-hidden="true">✦</span>
              <span>FULL WORKING RIGHTS — AUSTRALIA</span>
              <span aria-hidden="true">✦</span>
              <a className="contact-link" href={GITHUB} target="_blank" rel="noopener noreferrer">
                GITHUB ↗
              </a>
              <span aria-hidden="true">✦</span>
              <a className="contact-link" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                LINKEDIN ↗
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} BHUWAN S. KOIRALA</span>
        <span className="footer-links">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          {" / "}
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            LINKEDIN
          </a>
        </span>
        <span>BUILT LOUD. SHIPPED QUIET.</span>
      </footer>
    </>
  );
}
