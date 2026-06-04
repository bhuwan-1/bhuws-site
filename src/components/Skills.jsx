import { SKILLS } from "../constants";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
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
  );
}
