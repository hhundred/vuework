import axios from "axios";
import { getToken } from "./auth";
import { BASE_URL } from "./tools";

const instance = axios.create({
  baseURL: BASE_URL, //域名
  timeout: 5000, // 超时时间
});
// 请求拦截
instance.interceptors.request.use(
  function(config) {
    //   在请求拦截里面统一设置header头 ---如果有token设置headers=
    if (getToken()) {
      config.headers.authorization = "Bearer " + getToken();
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
// 响应拦截
instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export const get = (url, params) => instance.get(url, { params });

export const post = (url, data) => instance.post(url, data);

export const dele = (url,params) => instance.delete(url,{ params })

export default instance;
