import styles from './content.module.css';
import Experience from './experience/experience';

export default function Content(props) {
  const { experiences } = props;
  return (
    <div className={styles.contentRoot}>
      {experiences.map((experience, index) => (
        <div key={`experience-${index}`}>
          <Experience data={experience} />
        </div>
      ))}
    </div>
  );
}
