import axios from "axios"; // 引入axios
import config from "@/http/config";

// 创建axios实例
const instance = axios.create({
  baseURL: "/api", // api 在vew.config.js里设置了代理 以避免cors错误
  timeout: 15000, // 请求超时时间
  headers: config.header,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // if (store.getters.token) {
    //   config.headers["Authorization"] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    config.headers["Mine"] = "123456";
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 判断下status
    switch (response.status) {
      // 200 请求成功
      case 200:
        // 处理返回的code码 1请求正常
        if (response.data.code === 1) {
          return response.data.data;
        }
        // -6 token过期
        if (response.data.code === -6) {
          // 处理逻辑
          // ...
        }
        break;
      // 500 错误
      case 500:
        return Promise.reject(response);
      default:
        return Promise.reject(response);
    }
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
