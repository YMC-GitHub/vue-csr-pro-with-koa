import axios from "axios";
import qs from "qs";
import md5 from "md5";

// vuejs-ssr 服务端渲的接口配置
import config from "./config-ssr-server";

const parseCookie = cookies => {
  let cookie = "";
  Object.keys(cookies).forEach(item => {
    cookie += item + "=" + cookies[item] + "; ";
  });
  return cookie;
};

export default {};

export const api = cookies => {
  return {
    cookies,
    api: axios.create({
      // 基础路径
      baseURL: config.api,
      // 请求头部
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        cookie: parseCookie(cookies)
      },
      // 超时时间
      timeout: config.timeout
    }),
    getCookes() {
      return this.cookies;
    },
    ajax(url, type, options) {
      return (
        // 发出请求
        axios({
          method: type,
          url: config.api + url,
          params: type === "get" ? options : null,
          data: type !== "get" ? qs.stringify(options) : null
        })
          // 请求成功
          .then(result => result)
          // 请求出错
          .catch(function(error) {
            console.log(error, url);
          })
      );
    },
    post(url, data) {
      const cookies = this.getCookes() || {};
      const username = cookies.username || "";
      // 生成数据的键
      const key = md5(url + JSON.stringify(data) + username);
      // 使用缓存数据
      if (config.cached && data.cache && config.cached.has(key)) {
        return Promise.resolve(config.cached.get(key));
      }
      // 获取新的数据
      return (
        this.api({
          method: "post",
          url,
          data: qs.stringify(data),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
        })
          // 加入缓存数据
          .then(res => {
            if (config.cached && data.cache) config.cached.set(key, res);
            return res;
          })
      );
    },
    async get(url, params) {
      const cookies = this.getCookes() || {};
      const username = cookies.username || "";
      const key = md5(url + JSON.stringify(params) + username);
      if (config.cached && params.cache && config.cached.has(key)) {
        return Promise.resolve(config.cached.get(key));
      }
      return this.api({
        method: "get",
        url,
        params
      }).then(res => {
        if (config.cached && params.cache) config.cached.set(key, res);
        return res;
      });
    },

    delete(url, options) {
      return new Promise((resolve, reject) => {
        ajax(url, "delete", options).then(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        );
      });
    },

    jsonp(url, options) {
      return new Promise((resolve, reject) => {
        ajax(url, "jsonp", options).then(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        );
      });
    }
  };
};
