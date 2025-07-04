import React, { useRef, useEffect, useState } from 'react';
import styles from './content.module.css';
import Experience from './experience/experience';
import HeaderTitles from '../shared/HeaderTitles';
import Divider from '../shared/divider';
import Footer from '../shared/Footer';
import Skills from '../sidebar/skills/skills';
import Contributions from '../sidebar/contributions/contributions';

export default function Content(props) {
  const { experiences } = props;
  const contentRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

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
      }, 150);
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
          <div key={`experience-${index}`}>
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
