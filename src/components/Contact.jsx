import { EMAIL, GITHUB, LINKEDIN } from "../constants";
import Reveal from "./Reveal";

export default function Contact() {
  return (
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
          {/* Uncomment when in oz */}
          {/* <span aria-hidden="true">✦</span> */}
          {/* <span>FULL WORKING RIGHTS — AUSTRALIA</span> */}
          <span aria-hidden="true">✦</span>
          <a
            className="contact-link"
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB ↗
          </a>
          <span aria-hidden="true">✦</span>
          <a
            className="contact-link"
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}
