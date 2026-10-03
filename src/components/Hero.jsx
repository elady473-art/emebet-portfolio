import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = personalInfo.roles;
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      // Pause at full word
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    } else {
      const speed = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const viewCV = () => window.open(personalInfo.cvUrl, '_blank');
  const downloadCV = () => {
    const a = document.createElement('a');
    a.href = personalInfo.cvUrl;
    a.download = 'Emebet_Mesfin_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="home" className="section">
      <div className="bg-blur blur-1" />
      <div className="bg-blur blur-2" />
      <div className="home-content">
        <div className="profile-photo">
          <img src={personalInfo.profilePhoto} alt={personalInfo.name} />
        </div>

        <h1 className="name">{personalInfo.name}</h1>

        <div className="typing-container" aria-live="polite">
          <span className="typed-text">{displayText}</span>
          <span className="cursor" aria-hidden="true">|</span>
        </div>

        <div className="home-buttons">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            View My Projects
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('contact')}>
            Contact Me
          </button>
          <button className="btn btn-primary" onClick={viewCV}>
            <EyeIcon /> View CV
          </button>
          <button className="btn btn-secondary" onClick={downloadCV}>
            <DownloadIcon /> Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
