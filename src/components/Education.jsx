import { AWARDS, EDUCATION, SPOKEN } from "../constants";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Education() {
  return (
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
  );
}
