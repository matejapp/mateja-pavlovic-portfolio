import { useRef } from "react";
import { SiGithub } from "react-icons/si";
import {
  HiArrowLeft,
  HiArrowRight,
  HiArrowTopRightOnSquare,
} from "react-icons/hi2";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import projects from "../data/projects.json";
import personal from "../data/personal.json";

const GRADIENTS = [
  "linear-gradient(135deg, #1e2040 0%, #0d1a3a 100%)",
  "linear-gradient(135deg, #0a1628 0%, #132040 100%)",
  "linear-gradient(135deg, #1a0a28 0%, #280a3a 100%)",
  "linear-gradient(135deg, #0a2818 0%, #0a3420 100%)",
  "linear-gradient(135deg, #281a0a 0%, #3a2a10 100%)",
  "linear-gradient(135deg, #0a1a28 0%, #10283a 100%)",
];

function ProjectCard({ project, index }) {
  const thumbStyle = project.image
    ? {
        backgroundImage: `url(${project.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }
    : { background: GRADIENTS[index % GRADIENTS.length] };

  return (
    <div className="project-card">
      <div className="project-thumb" style={thumbStyle}>
        {!project.image && project.title.charAt(0)}
      </div>
      <div className="project-body">
        <div className="project-title">{project.title}</div>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="project-tech-tag">
              {t}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <SiGithub /> GitHub →
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <HiArrowTopRightOnSquare /> Live →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [headerRef, headerVisible] = useScrollAnimation();

  const CARD_W = 340 + 20; // card width + gap

  const scrollBy = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * CARD_W, behavior: "smooth" });
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.classList.add("dragging");
  };

  const onMouseLeave = () => {
    isDragging.current = false;
    scrollRef.current?.classList.remove("dragging");
  };

  const onMouseUp = () => {
    isDragging.current = false;
    scrollRef.current?.classList.remove("dragging");
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft =
      scrollLeft.current - (x - startX.current) * 1.4;
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div
          ref={headerRef}
          className={`projects-header fade-up${headerVisible ? " in-view" : ""}`}
        >
          <div>
            <p className="section-label">Work</p>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Selected Projects
            </h2>
          </div>
          <div className="projects-nav">
            <button
              className="projects-nav-btn"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
            >
              <HiArrowLeft />
            </button>
            <button
              className="projects-nav-btn"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
            >
              <HiArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="projects-scroll"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}

          {/* GitHub CTA — always last */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-cta"
          >
            <SiGithub className="github-cta-icon" />
            <div className="github-cta-title">View all projects</div>
            <span className="github-cta-link">
              github.com/matejapp <HiArrowTopRightOnSquare />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
