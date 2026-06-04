import Reveal from "./Reveal";

export default function SectionHead({ index, title }) {
  return (
    <Reveal className="section-head">
      <span className="section-index">{index}</span>
      <h2 className="section-title">{title}</h2>
      <span className="section-rule" aria-hidden="true" />
    </Reveal>
  );
}
