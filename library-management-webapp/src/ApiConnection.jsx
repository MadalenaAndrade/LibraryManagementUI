import axios from "axios";

// URL to azure API
const api = axios.create({
  baseURL: "https://xxx.net/",
});

export default api;
