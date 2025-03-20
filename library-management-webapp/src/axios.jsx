import axios from "axios";

// URL to azure API
const api = axios.create({
  baseURL:
    "https://libmanagementapi-ashnc2hsh3gma6fc.westeurope-01.azurewebsites.net/",
});

export default api;
