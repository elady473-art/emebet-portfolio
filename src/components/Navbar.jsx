import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', section: 'home' },
  { label: 'About', section: 'about' },
  { label: 'Skills', section: 'skills' },
  { label: 'Experience', section: 'experience' },
  { label: 'Projects', section: 'projects' },
  { label: 'Contact', section: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + 100;
      for (const { section } of navItems) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          MY PORTFOLIO
        </div>

        {/* Hamburger for mobile */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          {navItems.map(({ label, section }) => (
            <button
              key={section}
              className={`nav-item ${activeSection === section ? 'active' : ''}`}
              onClick={() => scrollToSection(section)}
            >
              {label}
              <span className="nav-underline" />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
