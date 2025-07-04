import React from 'react';
import styles from './content.module.css';
import Experience from './experience/experience';
import HeaderTitles from '../shared/HeaderTitles';
import Divider from '../shared/divider';
import Footer from '../shared/Footer';
import Skills from '../sidebar/skills/skills';
import Contributions from '../sidebar/contributions/contributions';

export default function Content(props) {
  const { experiences } = props;
  return (
    <div className={styles.contentRoot}>
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

      <div className={styles.responsiveExperiences}>
        {experiences.map((experience, index) => (
          <div key={`experience-${index}`}>
            <Experience data={experience} isLast={index === experiences.length - 1} />
          </div>
        ))}
        <Divider />
      </div>

      <div className={styles.responsiveContributions}>
        <Contributions />
        <Divider />
      </div>

      <div className={styles.responsiveSkills}>
        <Skills />
      </div>

      <div className={styles.responsiveFooter}>
        <Footer />
      </div>
    </div>
  );
}
