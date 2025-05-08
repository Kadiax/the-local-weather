import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

axiosInstance.interceptors.request.use((config) => {
  config.headers['x-api-key'] = import.meta.env.VITE_FRONT_SECRET_KEY;
  return config;
});

export default axiosInstance;
