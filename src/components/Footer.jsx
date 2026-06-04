import { GITHUB, LINKEDIN } from "../constants";

export default function Footer() {
  return (
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
  );
}
