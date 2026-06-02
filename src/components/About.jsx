import { useScrollAnimation } from '../hooks/useScrollAnimation';
import personal from '../data/personal.json';

export default function About() {
  const [headRef, headVisible] = useScrollAnimation();
  const [bodyRef, bodyVisible] = useScrollAnimation();

  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div
            ref={headRef}
            className={`about-heading fade-up${headVisible ? ' in-view' : ''}`}
          >
            About
          </div>

          <div
            ref={bodyRef}
            className={`about-body fade-in${bodyVisible ? ' in-view' : ''}`}
          >
            {personal.about.map((para, i) => (
              <p
                key={i}
                className={`fade-up${bodyVisible ? ' in-view' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
