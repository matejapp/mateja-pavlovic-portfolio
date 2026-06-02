import { HiAcademicCap, HiTrophy, HiStar, HiCodeBracket } from 'react-icons/hi2';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import achievements from '../data/achievements.json';

const ICONS = {
  academic: HiAcademicCap,
  trophy: HiTrophy,
  star: HiStar,
  code: HiCodeBracket,
};

export default function Achievements() {
  const [headRef, headVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="achievements-grid">
          <div
            ref={headRef}
            className={`achievements-heading fade-up${headVisible ? ' in-view' : ''}`}
          >
            Achievements
          </div>

          <div ref={cardsRef} className="achievements-cards">
            {achievements.map((item, i) => {
              const Icon = ICONS[item.icon] || HiStar;
              return (
                <div
                  key={item.id}
                  className={`achievement-card fade-up${cardsVisible ? ' in-view' : ''}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="achievement-icon">
                    <Icon />
                  </div>
                  <div>
                    <div className="achievement-title">{item.title}</div>
                    <div className="achievement-desc">{item.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
