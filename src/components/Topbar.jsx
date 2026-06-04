import { EMAIL } from "../constants";

export default function Topbar() {
  return (
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
  );
}
