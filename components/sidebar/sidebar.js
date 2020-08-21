import styles from './sidebar.module.css';
import Contributions from './contributions/contributions';
import Certifications from './certifications/certifications';
import Divider from '../shared/divider';
import HeaderTitles from '../shared/HeaderTitles';



export default function SideBar() {
  return (
    <div className={styles.sidebarRoot}>
      <HeaderTitles />
      <Divider />
      <p className={styles.description}>
        Passionate self-taught developer, 25 years old. Experienced with a wide
        range of frontend & backend technologies, specialized on Frontend
        development.
      </p>
      <Divider />
      <Contributions />
      <Divider />
      <Certifications />
      <div className={styles.sideBarDivider}></div>
      <div className={styles.copyRight}>
        Created with ❤️ by <strong>Ivan Koop</strong>, Powered by{' '}
        <strong>NextJs</strong>
      </div>
    </div>
  );
}
