import {
  SiJavascript, SiTypescript, SiPython,
  SiReact, SiTailwindcss, SiVite, SiShadcnui,
  SiDotnet, SiExpress, SiPostgresql, SiMongodb,
  SiGit, SiGithub, SiDocker, SiJetbrains,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import personal from '../data/personal.json';
import skillsData from '../data/skills.json';

const ICONS = {
  SiJavascript, SiTypescript, SiPython,
  SiReact, SiTailwindcss, SiVite, SiShadcnui,
  SiDotnet, SiExpress, SiPostgresql, SiMongodb,
  SiGit, SiGithub, SiDocker, SiJetbrains, VscVscode,
};

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-status">
          <span className="hero-dot" />
          {personal.status}
        </div>

        <h1 className="hero-title">
          Hi, I&apos;m{' '}
          <span className="hero-name">{personal.name}</span>.
        </h1>

        <p className="hero-sub">{personal.tagline}</p>

        <div className="hero-skill-rows">
          {skillsData.categories.map((cat) => (
            <div key={cat.name} className="hero-skill-row">
              <span className="hero-skill-label">{cat.name}</span>
              <div className="hero-tags">
                {cat.skills.map((s) => {
                  const Icon = ICONS[s.icon];
                  return (
                    <span key={s.name} className="tag">
                      {Icon && <Icon className="tag-icon" />}
                      {s.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
