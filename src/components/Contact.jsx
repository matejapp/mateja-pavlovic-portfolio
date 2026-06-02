import { SiGithub, SiX } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import personal from '../data/personal.json';

export default function Contact() {
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          <div
            ref={leftRef}
            className={`fade-up${leftVisible ? ' in-view' : ''}`}
          >
            <h2 className="contact-heading">Let&apos;s connect.</h2>
            <p className="contact-sub">
              I&apos;m currently looking for internship opportunities to contribute
              to high-impact teams. If you have a project in mind or just want to
              chat about technology, feel free to reach out.
            </p>
          </div>

          <div
            ref={rightRef}
            className={`fade-up${rightVisible ? ' in-view' : ''}`}
            style={{ transitionDelay: '100ms' }}
          >
            <a href={`mailto:${personal.email}`} className="contact-email">
              {personal.email}
            </a>
            <div className="contact-socials">
              {personal.twitter && (
                <a
                  href={personal.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <SiX /> Twitter
                </a>
              )}
              {personal.github && (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <SiGithub /> GitHub
                </a>
              )}
              {personal.linkedin && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
