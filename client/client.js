import axios from "axios";

export default class ContributionsApi {
    static getContributions(apiBaseURL) {
        return axios.get(`${apiBaseURL}api/contributions`)
    }
}