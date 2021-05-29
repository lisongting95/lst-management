import http from "@/http/http";
import md5Libs from "@/libs/md5";

export function login(params) {
  let appid = "hua5_text";
  let rand = getRandNum(6);
  let timestamp = getTimeStamp();
  let sign = getSign({
    appid: appid,
    rand: rand,
    timestamp: timestamp,
  });

  let newParams = {
    ...params,
    appid: appid,
    rand: rand,
    timestamp: timestamp,
    sign: sign,
  };
  return http({
    url: "/session/password",
    method: "post",
    params: newParams,
  });
}

//获取随机数
const getRandNum = (num) => {
  let rand = "";
  for (let i = 0; i < num; i++) {
    rand += Math.floor(Math.random() * 10);
  }
  return rand;
};

//获取时间戳
const getTimeStamp = () => {
  let token = "";
  let tmp = Date.parse(new Date()).toString();
  //这里时间戳要转化成数字格式
  tmp = parseInt(tmp.substr(0, 10));
  if (token) {
    if (token.time_diff > 0) {
      tmp = tmp + token.time_diff;
    }
  }
  return tmp;
};

// 参数签名
const getSign = (params) => {
  let i;
  let s_keys = [];
  for (i in params) {
    s_keys.push(i);
  }
  s_keys.sort();
  let data = "";
  for (i = 0; i < s_keys.length; i++) {
    // encodeURIComponent 特殊字符和中文字符转义
    data +=
      (data ? "&" : "") +
      s_keys[i] +
      "=" +
      encodeURIComponent(params[s_keys[i]]);
  }
  return md5Libs.md5(data + "&key=hua5_123456");
};
