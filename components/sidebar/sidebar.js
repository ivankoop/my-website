import React from 'react';
import styles from './sidebar.module.css';
import Skills from './skills/skills';
import Contributions from './contributions/contributions';
import GitStatsChart from './git-stats-chart/git-stats-chart';
import Divider from '../shared/divider';
import HeaderTitles from '../shared/HeaderTitles';
import Footer from '../shared/Footer';

export default function SideBar() {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarRoot}>
        <HeaderTitles />
        <Divider />
        <p className={styles.description}>
          Senior Full Stack Developer with more than 10 years of experience.
          Experienced with a wide range of frontend & backend technologies,
          specialized on Frontend development.
        </p>
        <Divider />
        <Contributions />
        <Divider />
        <GitStatsChart />
        <Divider />
        <Skills />
        <Footer />
      </div>
      <div className={styles.sideBarDivider}></div>
    </div>
  );
}
