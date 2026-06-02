import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import personal from "../data/personal.json";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <span className="footer-logo">MatejaPavlović</span>
        <span className="footer-copy">
          &copy; {new Date().getFullYear()} {personal.name}. All rights
          reserved.
        </span>
        <div className="footer-links">
          {personal.github && (
            <a href={personal.github} target="_blank" rel="noopener noreferrer">
              <SiGithub />
            </a>
          )}
          {personal.linkedin && (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          )}
          {personal.twitter && (
            <a
              href={personal.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiX />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
