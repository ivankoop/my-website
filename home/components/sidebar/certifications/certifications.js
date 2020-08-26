import styles from './certifications.module.css';
import ReactTooltip from 'react-tooltip';

const certifications = [
  {
    name: 'Data Science With R',
    logo: '/images/harvardx-logo.png',
    url:
      'https://courses.edx.org/certificates/942095c1a18b413fa30cfa273a5d0657',
  },
  {
    name: 'Microsoft React Router and Redux',
    logo: '/images/microsoft-logo.png',
    url:
      'https://courses.edx.org/certificates/c032836401624fb8bb961ddc2bbb3c0a',
  },
  {
    name: 'Microsoft Introduction to ReactJS',
    logo: '/images/microsoft-logo.png',
    url:
      'https://courses.edx.org/certificates/ffbc662f31aa4053a1329069a297f437',
  },
];

export default function Certifications() {
  return (
    <div className={styles.certificationsCont}>
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.certificationsRow}>
        {certifications.map((certification, index) => (
          <div key={`certification-${index}`}>
            <ReactTooltip
              id={`tooltip-${index}`}
              place="top"
              effect="float"
              border
              textColor="#52648e"
              backgroundColor="white"
              borderColor="#52648e"
            >
              <p className={styles.text}>{certification.name}</p>
            </ReactTooltip>
            <a
              href={certification.url}
              data-tip
              data-for={`tooltip-${index}`}
              target="_blank"
            >
              <img src={certification.logo}></img>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
