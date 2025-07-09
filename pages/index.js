import React, { useEffect } from 'react';
import Header from '../components/header/header';
import SideBar from '../components/sidebar/sidebar';
import Content from '../components/content/content';
import Layout from '../components/layout/layout';
import { experiences } from '../mocks/experiences';

function Home() {
  useEffect(() => {
    // Fetch and log git-stats data on page load
    fetch('/api/git-stats')
      .then(response => response.json())
      .then(data => {
        console.log('📊 Git Stats Data (Last Year):', data);
        console.log(`📈 Last year commits: ${data.lastYearCommits}`);
        console.log(`📅 Date range: ${data.dateRange.from} to ${data.dateRange.to}`);
        console.log(`📅 Last updated: ${new Date(data.lastUpdated).toLocaleString()}`);
        console.log(`📊 Days active in last year: ${data.summary.totalDays}`);
        console.log(`📊 Average commits per day: ${data.summary.averageCommitsPerDay}`);
        console.log(`🏆 Most active day: ${data.summary.mostActiveDay?.date} (${data.summary.mostActiveDay?.commits} commits)`);
        console.log('🔥 Recent activity:', data.summary.recentActivity);
      })
      .catch(error => {
        console.error('❌ Error fetching git-stats:', error);
      });
  }, []);

  return (
    <Layout>
      <Header />
      <SideBar />
      <Content experiences={experiences} />
    </Layout>
  );
}

export default Home;
