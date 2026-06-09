import { PROJECTS } from "../constants";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHead index="②" title="PROJECTS" />
      <div className="proj-list">
        {PROJECTS.map((p) => (
          <Reveal
            as="article"
            className={p.img || p.shots ? "proj proj-has-shot" : "proj"}
            key={p.n}
          >
            <div className="proj-copy">
              <div className="proj-head">
                <span className="proj-n">{p.n}</span>
                <div className="proj-title">
                  <h3>{p.name}</h3>
                  <p className="proj-tagline">{p.tagline}</p>
                </div>
                <div className="proj-meta">
                  <span className="proj-tag">{p.tag}</span>
                  <span className="proj-span">{p.span}</span>
                </div>
              </div>
              <p className="proj-desc">{p.desc}</p>
              <ul className="proj-points">
                {p.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <div className="proj-foot">
                <div className="chips">
                  {p.stack.map((s) => (
                    <span className="chip chip-light" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                <div className="proj-links">
                  <a
                    className="btn btn-small"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW CODE ↗
                  </a>
                  {p.site && (
                    <a
                      className="btn btn-small btn-ghost"
                      href={p.site}
                      target="_blank"
                      rel="noreferrer"
                    >
                      VISIT SITE ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
            {p.img && (
              <figure className={p.imgWide ? "proj-shot proj-shot-wide" : "proj-shot"}>
                <img src={p.img} alt={p.imgAlt} loading="lazy" />
                <figcaption>{p.shotCaption}</figcaption>
              </figure>
            )}
            {p.shots && (
              <figure className="proj-shot proj-shot-strip">
                <div className="shot-frames">
                  {p.shots.map((s) => (
                    <img key={s.src} src={s.src} alt={s.alt} loading="lazy" />
                  ))}
                </div>
                <figcaption>{p.shotCaption}</figcaption>
              </figure>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
