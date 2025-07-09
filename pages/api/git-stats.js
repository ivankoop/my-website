const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');

// Initialize S3 client
const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

const BUCKET_NAME = process.env.S3_BUCKET_NAME || 'ivankoop-dev';

export default async function gitStats(req, res) {
  try {

    // Get git-stats data from S3
    const getObjectParams = {
      Bucket: BUCKET_NAME,
      Key: 'git-stats/git-stats.json'
    };

    const command = new GetObjectCommand(getObjectParams);
    const response = await s3Client.send(command);
    
    // Convert stream to string
    const streamToString = (stream) => {
      return new Promise((resolve, reject) => {
        const chunks = [];
        stream.on('data', chunk => chunks.push(chunk));
        stream.on('error', reject);
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      });
    };

    const dataString = await streamToString(response.Body);
    const gitStatsData = JSON.parse(dataString);


    // Filter commits for the last year (from today to last year same day)
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setFullYear(today.getFullYear() - 1);
    
    const lastYearCommits = {};
    let lastYearCommitCount = 0;
    
    for (const [dateStr, dayCommits] of Object.entries(gitStatsData.data.commits)) {
      const commitDate = new Date(dateStr);
      if (commitDate >= oneYearAgo && commitDate <= today) {
        lastYearCommits[dateStr] = dayCommits;
        lastYearCommitCount += Object.keys(dayCommits).length;
      }
    }

    // Process data for frontend consumption
    const processedData = {
      totalCommits: gitStatsData.totalCommits,
      lastYearCommits: lastYearCommitCount,
      lastUpdated: gitStatsData.timestamp,
      commits: lastYearCommits,
      dateRange: {
        from: oneYearAgo.toISOString().split('T')[0],
        to: today.toISOString().split('T')[0]
      },
      // Add some summary statistics
      summary: {
        totalDays: Object.keys(lastYearCommits).length,
        averageCommitsPerDay: Object.keys(lastYearCommits).length > 0 ? 
          Math.round(lastYearCommitCount / Object.keys(lastYearCommits).length * 100) / 100 : 0,
        mostActiveDay: getMostActiveDay(lastYearCommits),
        recentActivity: getRecentActivity(lastYearCommits)
      }
    };

    res.status(200).json(processedData);

  } catch (error) {
    
    if (error.name === 'NoSuchKey') {
      res.status(404).json({ 
        error: 'Git stats not found. Please upload git-stats data first.' 
      });
    } else {
      res.status(500).json({ 
        error: 'Failed to fetch git-stats data',
        details: error.message 
      });
    }
  }
}

function getMostActiveDay(commits) {
  let maxCommits = 0;
  let mostActiveDay = null;

  for (const [date, dayCommits] of Object.entries(commits)) {
    const commitCount = Object.keys(dayCommits).length;
    if (commitCount > maxCommits) {
      maxCommits = commitCount;
      mostActiveDay = { date, commits: commitCount };
    }
  }

  return mostActiveDay;
}

function getRecentActivity(commits) {
  const sortedDates = Object.keys(commits).sort((a, b) => new Date(b) - new Date(a));
  const recentDates = sortedDates.slice(0, 7); // Last 7 days with activity
  
  return recentDates.map(date => ({
    date,
    commits: Object.keys(commits[date]).length
  }));
}