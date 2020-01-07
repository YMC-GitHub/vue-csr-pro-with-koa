/**
 * 客户端接口入口
 */
import axios from "axios";
import qs from "qs";

import config from "./config-csr-server";

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => response,
  error => Promise.resolve(error.response)
);

function checkStatus(response) {
  if (response.status === 200 || response.status === 304) {
    return response;
  }
  return {
    data: {
      code: -404,
      message: response.statusText,
      data: ""
    }
  };
}

/**
 * 检查响应代码
 * @param {*} res 响应对象
 * @returns {Object} response
 * @desc
 * 根据响应状态代码，决定页面去向
 */
function checkCode(res) {
  if (res.data.code === -500) {
    //window.location.href = "/backend";
  } else if (res.data.code === -400) {
    //window.location.href = "/";
  } else if (res.data.code !== 200) {
    //showMsg(res.data.message);
  }
  return res;
}

//注意：
//虽然axios支持get/post/delete/put等方式发送http请求
//但在浏览器上使用XMLHttpRequest发送http请求时只能以get和post方式，不能以put和delete等方式，
//在使用get/post/delete/put风格的restful的后端接口时，后端需要做一下兼容。
export default {
  post(url, data) {
    return axios({
      method: "post",
      url: config.api + url,
      data: qs.stringify(data),
      timeout: config.timeout,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    })
      .then(checkStatus)
      .then(checkCode);
  },
  get(url, params) {
    return axios({
      method: "get",
      url: config.api + url,
      params,
      timeout: config.timeout,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    })
      .then(checkStatus)
      .then(checkCode);
  }
};
