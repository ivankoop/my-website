import React from 'react';
import styles from './headertitles.module.css';

const linkedinUrl = 'https://www.linkedin.com/in/ivankoop/';
const githubUrl = 'https://github.com/ivankoop';

export default function HeaderTitles() {
  return (
    <div className={styles.headerTitlesRoot}>
      <h1 className={styles.title}>Ivan Koop</h1>
      <h2 className={styles.subtitle}>Software Developer</h2>
      <div className={styles.iconsRow}>
        <a href={linkedinUrl} target="_blank" className={styles.iconCont}>
          <i className="icon">&#xf30c;</i>
        </a>
        <a href={githubUrl} target="_blank" className={styles.iconCont}>
          <i className="icon">&#xf113;</i>
        </a>
      </div>
    </div>
  );
}
