import React, { useRef, useState, useEffect } from 'react';
import styles from './skills.module.css';

const skills = [
  {
    name: 'ReactJS',
    percentage: 100
  },
  {
    name: 'React Native',
    percentage: 100
  },
  {
    name: 'Django',
    percentage: 90
  },
  {
    name: 'Node.js',
    percentage: 90
  },
  {
    name: 'SQL',
    percentage: 80
  },
  {
    name: 'Swift - iOS',
    percentage: 70
  },
  {
    name: 'CI/CD - Bash (Docker)',
    percentage: 70
  },
  {
    name: 'DevOps - Terraform',
    percentage: 65
  },
  {
    name: 'Backend (Java, PHP, .NET)',
    percentage: 50
  }
];

export default function Skills() {
  const rootRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    // Reduced-motion or unsupported browsers: show final values immediately.
    if (prefersReduced || !('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.skillsRoot} ref={rootRef}>
      <h2 className={styles.title}>Skills</h2>
      {skills.map((skill, index) => (
        <div key={`skill-${index}`} className={styles.skillItem}>
          <div className={styles.skillHeader}>
            <span className={`${styles.skillName} skill-name`}>{skill.name}</span>
            <span className={`${styles.skillPercentage} skill-name`}>{skill.percentage}%</span>
          </div>
          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBar}
              style={{
                width: inView ? `${skill.percentage}%` : '0%',
                transitionDelay: `${index * 60}ms`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
