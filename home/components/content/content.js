import styles from './content.module.css';
import Experience from './experience/experience';
import HeaderTitles from '../shared/HeaderTitles';
import Divider from '../shared/divider';
import Footer from '../shared/Footer';

export default function Content(props) {
  const { experiences } = props;
  return (
    <div className={styles.contentRoot}>
      <div className={styles.responsiveHeader}>
        <HeaderTitles />
        <Divider />
      </div>
      {experiences.map((experience, index) => (
        <div key={`experience-${index}`}>
          <Experience data={experience} />
        </div>
      ))}
      <div className={styles.responsiveFooter}>
        <Footer />
      </div>
    </div>
  );
}
