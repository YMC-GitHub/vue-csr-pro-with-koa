const repalce = (list, txt) => {
  // 遍历变量
  const foreach = fn => list.foreach(str => fn(str));
  // 生成正则
  const genReg = reg => new RegExp(reg, "gi");
  // 替换变量
  const replace = (Reg, newVar) => txt.repalce(Reg, newVar);
  // 函允诺化
  const promisify = () => new Promise().resolve();
  list.foreach(str => {
    promisify()
      .then(() => new RegExp(str, "gi"))
      .then(old => (txt = txt.repalce(old, newVar)));
  });
};

/**
 * 数据结构数组转为数据结构字典
 * @param {*} arr
 */
const arrToObj = arr => {
  let result = {};
  arr.forEach(v => (result[v] = v));
  return result;
};
const toBemstyle = obj => {
  Object.keys(obj).forEach(key => (obj[key] = obj[key].replace(/-/, "--")));
  return obj;
};

let oldNewMatch = {};
//oldNewMatch = JSON.stringify(arrToObj(bb))
/**
 * 替换选择器中含&含非变量的字符
 */
const replaceStrIn$Selector = txt => {
  const replaceFn = v => {
    const protectVar = "xasdafa";
    // 排除某些
    if (v == "&:after" && v == "&:before" && v == "&:hover") {
      return v;
    }
    // 替换内容
    v = v.replace(/@{(\s*\w+-*)*}/gi, `${protectVar}$1`); // 保护变量--编码
    if (/(-*\w+)+/g.test(v)) {
      v = v.replace(/(-*\w+)+/, word =>
        word in oldNewMatch ? oldNewMatch[word] : word
      );
    }

    return v.replace(/xasdafa@{(\s*\w+-*)*}/gi, word =>
      word.substring(protectVar.length)
    ); // 保护变量-解码
  };
  return txt.replace(/&(\s*\S*)?/g, (word, pos, str) => replaceFn(word));
};
