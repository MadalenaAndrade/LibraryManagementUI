import axios from "axios";

// URL to azure API
const BASE_URL = "/"; //base URL, has I published on the same server as API, check my API project.
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
