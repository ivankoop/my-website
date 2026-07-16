import React, { useRef, useEffect, useState } from 'react';
import styles from './content.module.css';
import Experience from './experience/experience';
import HeaderTitles from '../shared/HeaderTitles';
import Divider from '../shared/divider';
import Footer from '../shared/Footer';
import Skills from '../sidebar/skills/skills';
import Contributions from '../sidebar/contributions/contributions';
import GitStatsChart from '../sidebar/git-stats-chart/git-stats-chart';

export default function Content(props) {
  const { experiences } = props;
  const contentRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const revealRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const items = revealRefs.current.filter(Boolean);
    if (!items.length) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    // No JS-driven reveal for reduced-motion users or unsupported browsers:
    // cards stay visible (also keeps print output intact).
    if (prefersReduced || !('IntersectionObserver' in window)) return;

    items.forEach((el) => el.classList.add(styles.revealPending));

    const reveal = (el) => el.classList.add(styles.revealed);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    // Safety net: anything already in or above the viewport (e.g. on reload
    // with a restored scroll position) is revealed immediately so a card can
    // never get stuck invisible. Only genuinely below-the-fold cards animate in.
    items.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        reveal(el);
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Set timeout to hide shadow after scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
      
      return () => {
        contentElement.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, []);
  return (
    <>
      <div 
        ref={contentRef}
        className={`${styles.contentRoot} ${isScrolling ? styles.scrolling : ''}`}
      >
      <div className={styles.responsiveHeader}>
        <HeaderTitles />
        <Divider />
      </div>
      
      <div className={styles.responsiveDescription}>
        <p className={styles.description}>
          Senior Full Stack Developer with more than 10 years of experience.
          Experienced with a wide range of frontend & backend technologies,
          specialized on Frontend development.
        </p>
        <Divider />
      </div>

      <div id="experiences" className={styles.responsiveExperiences}>
        {experiences.map((experience, index) => (
          <div
            key={`experience-${index}`}
            ref={(el) => {
              revealRefs.current[index] = el;
            }}
          >
            <Experience data={experience} isLast={index === experiences.length - 1} />
          </div>
        ))}
        <div className={styles.mobileOnlyDivider}>
          <Divider />
        </div>
      </div>

      <div id="contributions" className={styles.responsiveContributions}>
        <Contributions />
        <Divider />
      </div>

      <div id="git-stats" className={styles.responsiveGitStats}>
        <GitStatsChart />
        <Divider />
      </div>

      <div id="skills" className={styles.responsiveSkills}>
        <Skills />
      </div>

      <div className={styles.responsiveFooter}>
        <Footer />
      </div>
      <div className={`${styles.scrollShadow} ${isScrolling ? styles.scrolling : ''}`}></div>
      </div>
    </>
  );
}
