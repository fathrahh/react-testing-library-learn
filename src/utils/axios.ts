import axios from "axios";
import { API_BASE_URL } from "../config";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // Do something for example Refresh Token
    // const refreshToken = localStorage.getItem("refreshToken");
    // const response = await axiosInstance.post("refreshToken", { refreshToken });
    // config.headers?.accessToken = response.data.accessToken as string;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
