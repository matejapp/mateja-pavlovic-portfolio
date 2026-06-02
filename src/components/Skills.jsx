import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiCSharp,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import skillsData from "../data/skills.json";

const ICONS = {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  VscVscode,
};

function CategoryRow({ category, rowDelay }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`skills-cat fade-up${visible ? " in-view" : ""}`}
      style={{ transitionDelay: `${rowDelay}ms` }}
    >
      <div className="skills-cat-label">{category.name}</div>
      <div className="skills-grid">
        {category.skills.map((skill, i) => {
          const Icon = ICONS[skill.icon];
          return (
            <div
              key={skill.name}
              className={`skill-card fade-up${visible ? " in-view" : ""}`}
              style={{ transitionDelay: `${rowDelay + i * 55}ms` }}
            >
              <div className="skill-icon">{Icon ? <Icon /> : null}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div ref={ref} className={`fade-up${visible ? " in-view" : ""}`}>
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-categories">
          {skillsData.categories.map((cat, i) => (
            <CategoryRow key={cat.name} category={cat} rowDelay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
