import axios from "axios";
import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()
const {WEBSITE_BASE_URL} = publicRuntimeConfig

export class ContributionsApi {
    static getContributions() {
        return axios.get(`${WEBSITE_BASE_URL}api/contributions`)
    }
}

export class ExperiencesApi {
    static getExperiences() {
        return axios.get(`${WEBSITE_BASE_URL}api/experiences`)
    }
}