const devBaseUrl = "http://47.114.176.255/v1";
const proBaseUrl = "proUrl";

const config = {
  baseURL: process.env.NODE_ENV === "development" ? devBaseUrl : proBaseUrl, //请求地址
  header: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" }, //默认请求头
};

export default config;
