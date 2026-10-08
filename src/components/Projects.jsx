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

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const GalleryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

function ImageModal({ images, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={onClose}>
      <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '30px', background: 'transparent', border: 'none', color: 'white', fontSize: '3rem', cursor: 'pointer' }}>&times;</button>
      <button onClick={prevImage} style={{ position: 'absolute', left: '20px', background: 'transparent', border: 'none', color: 'white', fontSize: '3rem', cursor: 'pointer' }}>&#10094;</button>
      <img src={images[currentIndex]} style={{ maxHeight: '85vh', maxWidth: '85vw', objectFit: 'contain' }} alt="Gallery view" onClick={(e) => e.stopPropagation()} />
      <button onClick={nextImage} style={{ position: 'absolute', right: '20px', background: 'transparent', border: 'none', color: 'white', fontSize: '3rem', cursor: 'pointer' }}>&#10095;</button>
      <div style={{ position: 'absolute', bottom: '20px', color: 'white', fontSize: '1.2rem', background: 'rgba(0,0,0,0.5)', padding: '5px 15px', borderRadius: '20px' }}>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default function Projects() {
  const [projectType, setProjectType] = useState('Finished');
  const [tagFilter, setTagFilter] = useState('All');
  const [galleryImages, setGalleryImages] = useState(null);

  const filteredByType = projects.filter((p) => p.status === projectType);
  const allTags = ['All', ...Array.from(new Set(filteredByType.flatMap((p) => p.tags)))];
  
  const filtered =
    tagFilter === 'All' ? filteredByType : filteredByType.filter((p) => p.tags.includes(tagFilter));

  const handleTypeChange = (type) => {
    setProjectType(type);
    setTagFilter('All');
  };

  return (
    <section id="projects" className="section">
      <div className="bg-blur blur-5" />
      <div className="container-large">
        <SectionHeader title="My Projects" />

        <div className="type-toggle" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <button className={`btn ${projectType === 'Finished' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => handleTypeChange('Finished')}>Finished Projects</button>
          <button className={`btn ${projectType === 'Ongoing' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => handleTypeChange('Ongoing')}>Ongoing Projects</button>
        </div>

        {/* Filter bar */}
        <div className="filter-bar" role="group" aria-label="Filter projects by technology">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-btn ${tagFilter === tag ? 'active' : ''}`}
              onClick={() => setTagFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <div key={project.title} className="project-card" style={{ cursor: 'default' }}>
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay" style={{ display: 'flex', gap: '1.5rem', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  {project.images && (
                    <button onClick={() => setGalleryImages(project.images)} aria-label="View Gallery" style={{ background: 'transparent', border: 'none', color: 'white', opacity: 0.9, cursor: 'pointer', padding: 0 }}>
                      <GalleryIcon />
                    </button>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" style={{ color: 'white', opacity: 0.9 }}>
                      <GithubIcon />
                    </a>
                  )}
                  {project.link && project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live Project" style={{ color: 'white', opacity: 0.9 }}>
                      <ExternalLinkIcon />
                    </a>
                  )}
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
                {project.moreDesignsLink && (
                  <a href={project.moreDesignsLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginTop: '1.5rem', display: 'inline-block', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    More Designs
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {galleryImages && (
        <ImageModal images={galleryImages} onClose={() => setGalleryImages(null)} />
      )}
    </section>
  );
}
