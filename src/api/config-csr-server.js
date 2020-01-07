/**
 * 客户端接口配置
 * @prop api 接口路径
 * @prop timeout 超时时间
 */
const host = "127.0.0.1";
const port = 3000;
const baseApi = "/api/";
module.exports = {
  api: `${host}:${port}${baseApi}`,
  host,
  port,
  timeout: 30000
};
