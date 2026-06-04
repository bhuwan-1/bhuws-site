import { EXPERIENCE } from "../constants";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Experience() {
  return (
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
  );
}
