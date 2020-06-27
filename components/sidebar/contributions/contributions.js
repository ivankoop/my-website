import React, { useState, useEffect } from 'react';
import styles from './contributions.module.css';
import getBaseUrl from '../../../utils/baseUrlUtils';
import ContributionsApi from '../../../client/client';
import { BulletList } from 'react-content-loader';
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
      const response = await ContributionsApi.getContributions(getBaseUrl());
      setContributions(response?.data?.contributions);
    } catch (e) {
      console.info('ERROR', e);
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) return <BulletList />;

  return (
    <div className={styles.contributionsRoot}>
      {!_.isEmpty(contributions) && (
        <>
          <h2>Open Source Contributions</h2>
          {contributions.map((contribution, index) => {
            return (
              <div key={`contribution-${index}`} className={styles.contributionCont}>
                <div className={styles.contributionTextCont}>
                  <a href={contribution.url} target="_blank">
                    {contribution.name}{' '}
                    <span>
                      <i className="icon">&#xe800;</i>{' '}
                    </span>
                    <span>{contribution.stars}</span>
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
