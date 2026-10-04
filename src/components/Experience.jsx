import { experience } from '../data/portfolioData';
import { SectionHeader } from './About';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="bg-blur blur-3" />
      <div className="container">
        <SectionHeader title="Experience" />
        <div className="timeline">
          {experience.map((job, i) => (
            <div className="timeline-item" key={i}>
              {/* dot + line */}
              <div className="timeline-marker">
                <div className={`timeline-dot ${job.current ? 'current' : ''}`} />
                {i < experience.length - 1 && <div className="timeline-line" />}
              </div>

              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <span className={`timeline-badge ${job.current ? 'current' : ''}`}>
                    {job.current ? '🟢 Current' : job.period}
                  </span>
                </div>
                {job.current && (
                  <p className="timeline-period">{job.period}</p>
                )}
                <ul className="timeline-points">
                  {job.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
