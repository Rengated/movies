import axios from "axios";

const movieApi = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/api/v2.2/",
});

movieApi.interceptors.request.use((config) => {
  config.headers["X-API-KEY"] = process.env.REACT_APP_API_KEY;
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default movieApi;
