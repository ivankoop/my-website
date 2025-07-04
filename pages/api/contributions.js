const axios = require('axios');

const getRepo = (repoUrl) => {
  return axios.get(`${process.env.GITHUB_BASE_URL}/repos/${repoUrl}`, {
    headers: {
      authorization: `token ${process.env.GITHUB_API_KEY}`,
    },
  });
};

export default async function contributions(req, res) {
  console.log('Environment check:', {
    hasBaseUrl: !!process.env.GITHUB_BASE_URL,
    hasApiKey: !!process.env.GITHUB_API_KEY,
    baseUrl: process.env.GITHUB_BASE_URL
  });
  
  const repos = await Promise.all([
    getRepo('stripe/stripe-react-native'),
    getRepo('aautio/react-modal-image'),
    getRepo('reactjs/es.react.dev'),
    getRepo('ivankoop/ionic-capacitor-biometric'),
  ]);

  const contributions = repos.map((repo) => {
    console.log(repo.data);

    return {
      name: repo.data.name,
      description:
        repo.data.name === 'es.react.dev'
          ? 'React documentation website'
          : repo.data.description,
      stars: repo.data.stargazers_count,
      url: repo.data.html_url,
    };
  });

  res.status(200).json({ contributions });
}
