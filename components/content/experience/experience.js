import React from 'react';
import styles from './experience.module.css';

export default function Experience(props) {
  const { data } = props;
  return (
    <div className={styles.experienceRoot}>
      <div className={styles.topRow}>
        <img className={styles.image} src={data?.logo}></img>
        <div className={styles.titleColumn}>
          <h2>{data?.title}</h2>
          <p>{data?.time}</p>
        </div>
      </div>
      <p className={styles.description}>{data?.description}</p>
      <div className={styles.tagContainer}>
        {data?.tags.map((tag, index) => (
          <div className={styles.tagItem} key={`tag-${index}`}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
