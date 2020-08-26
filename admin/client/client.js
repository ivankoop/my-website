import axios from 'axios';

export class ContributionsApi {
  static getContributions(baseUrl) {
    return axios.get(`${baseUrl}api/contributions`);
  }
}

export class ExperiencesApi {
  static getExperiences(baseUrl) {
    return axios.get(`${baseUrl}api/experiences`);
  }
}
