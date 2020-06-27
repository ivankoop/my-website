import styles from "./sidebar.module.css";
import Contributions from "../contributions/contributions"

export default function SideBar() {
  return (
    <div className={styles.sidebarRoot}>
      <h1>Ivan Koop</h1>
      <h2>Software Developer</h2>
      <div className={styles.iconsRow}>
        <div className={styles.iconCont}>
          <i className="icon">&#xf30c;</i>
        </div>
        <div className={styles.iconCont}>
          <i className="icon">&#xf113;</i>
        </div>
      </div>
      <div className={styles.divider}></div>
      <p className={styles.description}>
        Passionate self-taught developer, 25 years old. Experienced with a wide
        range of frontend & backend technologies, specialized on Frontend
        development.
      </p>
      <div className={styles.divider}></div>
      <Contributions/>
    </div>
  );
}
