import React from 'react';
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
  return (
    <div className={styles.skillsRoot}>
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
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}