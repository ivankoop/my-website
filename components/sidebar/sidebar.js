import styles from "./sidebar.module.css";
import Contributions from "./contributions/contributions"
import Certifications from "./certifications/certifications"
import Divider from "../shared/divider"

const linkedinUrl = "https://www.linkedin.com/in/ivankoop/"
const githubUrl = "https://github.com/ivankoop"

export default function SideBar() {
  return (
    <div className={styles.sidebarRoot}>
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
      <Divider/>
      <p className={styles.description}>
        Passionate self-taught developer, 25 years old. Experienced with a wide
        range of frontend & backend technologies, specialized on Frontend
        development.
      </p>
      <Divider/>
      <Contributions/>
      <Divider/>
      <Certifications/>
      <div className={styles.copyRight}>Created with ❤️ by <strong>Ivan Koop</strong>, Powered by <strong>NextJs</strong></div>
    </div>
  );
}
