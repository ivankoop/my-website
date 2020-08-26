const axios = require('axios');

const getRepo = (repoUrl) => {
  return axios.get(`${process.env.GITHUB_BASE_URL}/repos/${repoUrl}`, {
    headers: {
      authorization: `token ${process.env.GITHUB_API_KEY}`,
    },
  });
};

export default async function contributions(req, res) {
  const repos = await Promise.all([
    getRepo('aautio/react-modal-image'),
    getRepo('ivankoop/quiniela-mail-scraper'),
    getRepo('ivankoop/Mosquito-Attack-Game'),
    getRepo('ivankoop/ee4_elastic_search'),
  ]);

  const contributions = repos.map((repo) => {
    return {
      name: repo.data.name,
      description: repo.data.description,
      stars: repo.data.stargazers_count,
      url: repo.data.html_url,
    };
  });

  res.status(200).json({ contributions });
}
