import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { SectionHeader } from './About';

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// Collect all unique tags for filter buttons
const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="section">
      <div className="bg-blur blur-5" />
      <div className="container-large">
        <SectionHeader title="My Projects" />

        {/* Filter bar — improvement over original */}
        <div className="filter-bar" role="group" aria-label="Filter projects by technology">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-btn ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <a
              key={project.title}
              className="project-card"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — open project`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <ExternalLinkIcon />
                </div>
                <div className="project-line" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
