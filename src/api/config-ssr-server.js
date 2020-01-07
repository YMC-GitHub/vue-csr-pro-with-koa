var lruCache = require("lru-cache");

let api;
const cached = false;
const host = "127.0.0.1";
const port = 3000;
const baseApi = "/api/";
api = {
  // 接口基础路径
  api: `${host}:${port}${baseApi}`,
  host,
  // 端口
  port,
  // 超时
  timeout: 30000,
  // 缓存
  cached:
    cached &&
    lruCache({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
  cachedItem: {}
};

module.exports = api;
