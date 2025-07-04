import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './mobile-navigation.module.css';

export default function MobileNavigation() {
  const [activeSection, setActiveSection] = useState('experiences');
  const { isDarkMode, toggleTheme } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['experiences', 'contributions', 'skills'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            // Group contributions and skills under 'skills' for navigation
            if (sectionId === 'contributions' || sectionId === 'skills') {
              setActiveSection('skills');
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.mobileNavigation}>
      <div className={styles.navContent}>
        <div className={styles.leftSection}>
          <button className={styles.brandName} onClick={scrollToTop}>
            IVAN KOOP
          </button>
        </div>
        <div className={styles.rightSection}>
          <button 
            className={`${styles.navButton} ${activeSection === 'experiences' ? styles.active : ''}`}
            onClick={() => scrollToSection('experiences')}
          >
            EXPERIENCE
          </button>
          <button 
            className={`${styles.navButton} ${activeSection === 'skills' ? styles.active : ''}`}
            onClick={() => scrollToSection('contributions')}
          >
            SKILLS
          </button>
          <button
            onClick={toggleTheme}
            className={styles.themeButton}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}