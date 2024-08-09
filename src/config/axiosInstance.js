import axios from "axios";
const { VITE_SERVER_URL_LOCAL } = import.meta.env;

const instance = axios.create({
  baseURL: VITE_SERVER_URL_LOCAL,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
