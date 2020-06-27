const axios = require("axios");

const githubApiUrl = "https://api.github.com";

const getRepo = (repoUrl) => {
  return axios.get(`${githubApiUrl}/repos/${repoUrl}`, {
    headers: {
      authorization: `token ${process.env.GITHUB_API_KEY}`
    }
  });
};

export default async function contributions(req, res) {
  const repos = await Promise.all([
    getRepo("aautio/react-modal-image"),
    getRepo("ivankoop/quiniela-mail-scraper"),
    getRepo("ivankoop/Mosquito-Attack-Game"),
    getRepo("ivankoop/ee4_elastic_search"),
    getRepo("ivankoop/asu-traffic-miner")
  ]);

  const contributions = repos.map((repo) => {
    return {
      name: repo.data.name,
      stars: repo.data.stargazers_count,
    };
  });

  console.log("POLITO", contributions)

  res.status(200).json({ contributions });
}
