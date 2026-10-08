import { useEffect, useRef, useState } from 'react';
import { personalInfo, stats } from '../data/portfolioData';

function useCounter(target, suffix, duration = 2000, started) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setCount(target);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target, duration]);

  return `${count}${suffix}`;
}

function StatCard({ value, suffix, label, started }) {
  const display = useCounter(value, suffix, 2000, started);
  return (
    <div className="stat-card">
      <div className="stat-value">{display}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function TypingText({ texts }) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let timeout;

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    } else {
      const speed = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, texts]);

  return (
    <div className="typing-container about-typing" aria-live="polite" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--primary-color)', textAlign: 'center', zIndex: 10 }}>
      <span className="typed-text">{displayText}</span>
      <span className="cursor" aria-hidden="true">|</span>
    </div>
  );
}

export default function About() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section">
      <div className="bg-blur blur-3" />
      <div className="container">
        <SectionHeader title="About Me" />

        <div className="about-content">
          <div className="about-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '350px', background: 'var(--card-bg)', borderRadius: '20px', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
            <TypingText texts={["4th year CS student", "Software Developer"]} />
            <div className="glow-effect" />
          </div>

          <div className="about-text">
            <div className="about-description">
              <p>{personalInfo.bio}</p>
            </div>

            <div className="stats-grid" ref={ref}>
              {stats.map((s) => (
                <StatCard key={s.label} {...s} started={started} />
              ))}
            </div>

            <div className="about-buttons" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Projects
              </button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <div className="title-underline" />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
