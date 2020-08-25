import axios from "axios";

const token = '';
const baseDomain = "https://api.github.com";
const user = 'placeholder';
const url = '/search/repositories';
const res = `${baseDomain}${url}?q=`;

export default axios.create({
    data() {
        return {
            repos: [],
            forks: [],
            errors: []
        }
    },
  baseURL: baseDomain,
  headers: {
    "Content-type": "application/json"
  }
});