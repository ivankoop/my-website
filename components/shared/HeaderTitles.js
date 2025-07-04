import React from 'react';
import { Linkedin, Github, FileText, Youtube } from 'lucide-react';
import styles from './headertitles.module.css';

const linkedinUrl = 'https://www.linkedin.com/in/ivankoop/';
const githubUrl = 'https://github.com/ivankoop';
const cvLink =
  'https://drive.google.com/file/d/1i4MogYnRB_j9B6n1DW_NBEhGz-rboQyE/view?usp=drive_link';
const youtubeUrl = 'https://www.youtube.com/@ivankoop1915';
const mediumUrl = 'https://medium.com/@ivankoop';

export default function HeaderTitles() {
  return (
    <div className={styles.headerTitlesRoot}>
      <div className={styles.profileSection}>
        <img 
          src="/images/profile-picture.jpg" 
          alt="Ivan Koop" 
          className={styles.profilePicture}
        />
        <div className={styles.titleSection}>
          <h1 className={styles.title}>Ivan Koop</h1>
          <h2 className={styles.subtitle}>SOFTWARE DEVELOPER</h2>
        </div>
      </div>
      <div className={styles.iconsRow}>
        <a href={youtubeUrl} target="_blank" className={styles.iconCont}>
          <Youtube size={16} />
        </a>
        <a href={mediumUrl} target="_blank" className={styles.iconCont}>
          <div className={styles.mediumLogo} aria-label="Medium"></div>
        </a>
        <a href={githubUrl} target="_blank" className={styles.iconCont}>
          <Github size={16} />
        </a>
        <a href={linkedinUrl} target="_blank" className={styles.iconCont}>
          <Linkedin size={16} />
        </a>
        <a href={cvLink} target="_blank" className={styles.iconCont}>
          <FileText size={16} />
        </a>
      </div>
    </div>
  );
}
