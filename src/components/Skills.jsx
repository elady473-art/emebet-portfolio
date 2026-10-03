import { skills } from '../data/portfolioData';
import { SectionHeader } from './About';

const icons = {
  code: (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  database: (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  design: (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="bg-blur blur-4" />
      <div className="container">
        <SectionHeader title="My Skills" />
        <div className="skills-grid">
          {skills.map((cat) => (
            <div className="skill-category" key={cat.category}>
              <div className="skill-icon">{icons[cat.icon]}</div>
              <h3 className="category-title">{cat.category}</h3>
              <div className="skills-list">
                {cat.items.map((item) => (
                  <div className="skill-item" key={item}>
                    <span>{item}</span>
                    <span className="skill-dot" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
