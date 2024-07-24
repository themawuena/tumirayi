import axios from "axios";
import { BASE_ENDPOINT } from "./endpoints";
import authService from "../auth.service";

const http = axios.create({
  baseURL: BASE_ENDPOINT,
  timeout: 60000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// let alertShown = false;

http.interceptors.request.use(
  async (config: { headers: any }) => {
    const token = await authService.getToken();

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default http;
