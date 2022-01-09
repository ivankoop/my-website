import React from 'react';
import styles from './sidebar.module.css';
import Contributions from './contributions/contributions';
import Certifications from './certifications/certifications';
import Divider from '../shared/divider';
import HeaderTitles from '../shared/HeaderTitles';
import Footer from '../shared/Footer';

export default function SideBar() {
  console.log('styles', styles);

  return (
    <div className={styles.sidebarRoot}>
      <HeaderTitles />
      <Divider />
      <p className={styles.description}>
        Passionate self-taught developer, 26 years old. Experienced with a wide
        range of frontend & backend technologies, specialized on Frontend
        development.
      </p>
      <Divider />
      <Contributions />
      <Divider />
      <Certifications />
      <div className={styles.sideBarDivider}></div>
      <Footer />
    </div>
  );
}
