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
          <div className="about-image">
            <div className="animated-box">
              <img src={personalInfo.aboutPhoto} alt="About Emebet" />
            </div>
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
