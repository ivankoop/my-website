import React, { useState, useEffect } from 'react';
import styles from './git-stats-chart.module.css';
import { BulletList } from 'react-content-loader';
import getBaseUrl from '../../../utils/baseUrlUtils';

export function GitStatsChart() {
  const [gitStats, setGitStats] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadGitStats();
  }, []);

  const loadGitStats = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${getBaseUrl()}/api/git-stats`);
      const data = await response.json();
      setGitStats(data);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const generateWeeklyData = () => {
    if (!gitStats?.commits) return [];
    
    const weeks = [];
    const monthLabels = [];
    const today = new Date();
    
    // Find the start date: 6 months ago, adjusted to Sunday
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 180); // 6 months ago
    
    // Adjust to the previous Sunday (0 = Sunday)
    const dayOfWeek = startDate.getDay();
    startDate.setDate(startDate.getDate() - dayOfWeek);
    
    // Create 26 weeks of data for last 6 months
    for (let week = 0; week < 26; week++) {
      const weekData = [];
      
      // For each day in the week (Sunday = 0 to Saturday = 6)
      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + (week * 7) + dayOfWeek);
        
        const dateStr = currentDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        });
        
        const commits = gitStats.commits[dateStr] || {};
        const commitCount = Object.keys(commits).length;
        
        weekData.push({
          date: dateStr,
          commits: commitCount,
          level: getActivityLevel(commitCount),
          dayOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek]
        });
      }
      weeks.push(weekData);
      
      // Add month label for the first day of each week
      const firstDayOfWeek = new Date(startDate);
      firstDayOfWeek.setDate(startDate.getDate() + (week * 7));
      
      // Only add month label if it's the first week of the month or first week overall
      const isFirstWeek = week === 0;
      const isNewMonth = week > 0 && firstDayOfWeek.getMonth() !== new Date(startDate.getTime() + ((week - 1) * 7 * 24 * 60 * 60 * 1000)).getMonth();
      
      if (isFirstWeek || isNewMonth) {
        monthLabels.push({
          week: week,
          month: firstDayOfWeek.toLocaleDateString('en-US', { month: 'short' })
        });
      } else {
        monthLabels.push(null);
      }
    }
    
    return { weeks, monthLabels };
  };

  const getActivityLevel = (commits) => {
    if (commits === 0) return 0;
    if (commits <= 2) return 1;
    if (commits <= 5) return 2;
    if (commits <= 10) return 3;
    return 4;
  };

  if (isLoading) return (
    <div className={styles.gitStatsRoot}>
      <h2 className={styles.title}>Git Activity</h2>
      <BulletList 
        backgroundColor="var(--progress-bg-color)"
        foregroundColor="var(--tag-bg-color)"
      />
    </div>
  );

  if (!gitStats) return null;

  const { weeks, monthLabels } = generateWeeklyData();

  return (
    <div className={styles.gitStatsRoot}>
      <h2 className={styles.title}>Git Activity</h2>
      <div className={styles.statsContainer}>
        <div className={styles.contributionCount}>
          <span className={styles.contributionText}>
            {gitStats.lastYearCommits} contributions in the last year
          </span>
        </div>
        
        <div className={styles.monthLabels}>
          {monthLabels.map((monthLabel, index) => (
            <div key={index} className={styles.monthLabel}>
              {monthLabel ? monthLabel.month : ''}
            </div>
          ))}
        </div>
        
        <div className={styles.contributionChart}>
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className={styles.week}>
              {week.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`${styles.day} ${styles[`level${day.level}`]}`}
                  title={`${day.dayOfWeek}, ${day.date}: ${day.commits} commits`}
                />
              ))}
            </div>
          ))}
        </div>
        
        <div className={styles.legend}>
          <div className={styles.legendLeft}>
            <span className={styles.lastUpdated}>
              Last updated: {new Date(gitStats.lastUpdated).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>
          <div className={styles.legendRight}>
            <span className={styles.legendText}>Less</span>
            <div className={styles.legendSquares}>
              <div className={`${styles.legendSquare} ${styles.level0}`} />
              <div className={`${styles.legendSquare} ${styles.level1}`} />
              <div className={`${styles.legendSquare} ${styles.level2}`} />
              <div className={`${styles.legendSquare} ${styles.level3}`} />
              <div className={`${styles.legendSquare} ${styles.level4}`} />
            </div>
            <span className={styles.legendText}>More</span>
          </div>
        </div>
        
        <div className={styles.disclaimer}>
          <span className={styles.disclaimerText}>
            Uploaded periodically by Ivan's computer, not all contributions go through GitHub.
          </span>
        </div>
      </div>
    </div>
  );
}

export default GitStatsChart;