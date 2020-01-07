const data = require("./mock-data");
const LATENCY = 16;

export function getTodos(cb) {
  setTimeout(() => {
    cb(data);
  }, LATENCY);
}
