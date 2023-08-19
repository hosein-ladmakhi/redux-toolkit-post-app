import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3002",
});

httpClient.interceptors.response.use(({ data }) => data);

export default httpClient;
