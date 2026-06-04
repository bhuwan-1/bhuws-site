import { useState } from "react";
import { EXPERIENCE } from "../constants";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = EXPERIENCE[active];

  return (
    <section id="work" className="section">
      <SectionHead index="①" title="EXPERIENCE" />
      <Reveal className="xp-tabs">
        <div className="xp-rail" role="tablist" aria-label="Work history">
          {EXPERIENCE.map((j, i) => (
            <button
              key={j.n}
              type="button"
              role="tab"
              id={`xp-tab-${i}`}
              aria-selected={active === i}
              aria-controls="xp-panel"
              className={active === i ? "xp-tab xp-tab-active" : "xp-tab"}
              onClick={() => setActive(i)}
            >
              <span className="xp-tab-n">{j.n}</span>
              {j.org}
            </button>
          ))}
        </div>
        <article
          className="xp-panel"
          role="tabpanel"
          id="xp-panel"
          aria-labelledby={`xp-tab-${active}`}
          key={job.n}
        >
          <div className="xp-head">
            <div className="xp-title">
              <h3>
                {job.role} <span className="xp-at">@ {job.org}</span>
              </h3>
              <span className="xp-span">{job.span}</span>
            </div>
            <span className="xp-tag">{job.tag}</span>
          </div>
          <ul className="xp-points">
            {job.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </article>
      </Reveal>
    </section>
  );
}
