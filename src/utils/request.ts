import axios, { AxiosRequestConfig } from 'axios';

const baseURL = import.meta.env.VITE_APP_BASE_URL?.toString();

const service = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

service.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    return config;
  },
  (error) => {
    return error;
  }
);
// 响应拦截
service.interceptors.response.use((res) => {
  return res;
});

export default service;
