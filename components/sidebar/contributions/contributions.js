import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import styles from './contributions.module.css';
import { BulletList } from 'react-content-loader';
import getBaseUrl from '../../../utils/baseUrlUtils';
import _ from 'lodash';

export function Contributions() {
  const [contributions, setContributions] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadContributions();
  }, []);

  const loadContributions = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${getBaseUrl()}/api/contributions`);
      const data = await response.json();
      setContributions(data?.contributions);
    } catch (e) {
      console.info('ERROR', e);
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) return (
    <div className={styles.contributionsRoot}>
      <h2 className={styles.title}>Open Source Contributions</h2>
      <BulletList 
        backgroundColor="var(--tag-bg-color)"
        foregroundColor="var(--divider-bg-color)"
      />
    </div>
  );

  return (
    <div className={styles.contributionsRoot}>
      {!_.isEmpty(contributions) && (
        <>
          <h2 className={styles.title}>Open Source Contributions</h2>
          {contributions.map((contribution, index) => {
            return (
              <div
                key={`contribution-${index}`}
                className={styles.contributionCont}
              >
                <div className={styles.contributionTextCont}>
                  <a href={contribution.url} target="_blank">
                    {contribution.name}{' '}
                    <span className={styles.starContainer}>
                      <Star size={12} fill="currentColor" />
                      <span>{contribution.stars}</span>
                    </span>
                  </a>
                  <p>{contribution.description}</p>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
export default Contributions;
