import axios from "axios";

// URL to azure API
const BASE_URL =
  "https://libmanagementapi-ashnc2hsh3gma6fc.westeurope-01.azurewebsites.net/"; //this api has IP restrictions, check how to create one similar on README!

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
