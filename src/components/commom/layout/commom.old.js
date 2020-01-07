// 空间与区块连接符：-
export const layout_NB_contact = "-";
// 区块与元素连接符：'__' for BEM or '-' for iview
export const layout_BE_contact = "__";
// 元素与修饰连接符：'--' for BEM or '-' for iview
export const layout_EM_contact = "-";
// 元素与状态连接符：' ' for BEM or '-'  for iview
export const layout_ES_contact = "-";

// 空间名字
export const ns = `spm`;
export const css_prefix = ns;
// 区块名字:layout
export const layout_prefix_cls = `${css_prefix}${layout_NB_contact}layout`;
// 元素名字:header footer content sider
export const layout_E_list = `header footer body content sider`;
export const layout_header_name = `${layout_prefix_cls}${layout_BE_contact}header`;
export const layout_footer_name = `${layout_prefix_cls}${layout_BE_contact}footer`;
export const layout_body_name = `${layout_prefix_cls}${layout_BE_contact}body`;
export const layout_content_name = `${layout_prefix_cls}${layout_BE_contact}content`;
export const layout_sider_name = `${layout_prefix_cls}${layout_BE_contact}sider`;
// 修饰名字:

// 状态名字:
//has-sider

//lib:it-is-it-has
const _p = "it-data";
const it = p => {
  //设置
  _p = p;
  return this;
};
//以某一功能作为函数名字，以函数名字作为文件名字
const isString = p => typeof p === "String";
const isArray = p => typeof p === "Array";
const hasProperty = (cache, p) => p in cache;
//...
//通过加装装置，遍历目录文件，引入模块实现自动加载

//通过对象扩展，遍历依赖数组，少写重复代码实现封装

//通过函科里化，参数够就执行，解决封装时函参数不一
const currify = fn => {
  const length = fn.length;
  return function curried() {
    // 参数组化
    let args = [].slice.call(arguments);
    // 参数不够
    if (args.length < length) {
      return function() {
        let argsInner = [].slice.call(arguments);
        return curried.apply(this, args.concat(argsInner));
      };
    }
    // 参数够了
    else {
      return fn.apply(this, args);
    }
  };
};
// currify(fn)(_p)
//eg: it.isString = currify(isString)(_p) 即 it.isString = () => isString(_P);
//eg: it.hasProperty = currify(hasProperty)(_p) 即 it.hasProperty = p => hasProperty(_P, p);
//it.isString = () => isString(_P);
//it.isArray = () => isArray(_P);
//it.hasProperty = p => hasProperty(_p, p);

// lib:config or c-u-r-d
const config = (element, value, cache) => {
  let flag = true;
  //todo it
  // 批量设置
  // 一个参数+参为数组+元素对象+带有键值
  //eg:config([{name,value}])
  if (it(element).isArray() && !value) {
    element.forEach(item => {
      let passed =
        it(item).isObject() &&
        it(item).hasProperty("name") &&
        it(cache).hasProperty("add") &&
        cache.add(item.name, item.value);
      if (!passed) flag = false;
    });
    return flag;
  }
  // 两个个参数+参为数组+元素字符，键值对应
  if (it(element).isArray() && it(value).isArray()) {
    element.forEach((v, k) => {
      let passed =
        it(v).isString() &&
        it(value[k]).isString() &&
        it(cache).hasProperty("add") &&
        cache.add(v, value[k]);
      if (!passed) flag = false;
    });
    return flag;
  }
  // 单个设置
  if (it(element).isString() && value) {
    return it(cache).hasProperty("add") && cache.add(element, key);
  }
  // 单个获取
  if (it(element).isString()) {
    return it(cache).hasProperty("get") && cache.get(element);
  }
  //多个获取
};

// lib:n-b-e-m
class NBEM {
  constructor(opts) {
    this.cache = new Set();
    it(opts).isObject() &&
      Object.keys(opts).forEach((v, k) => this.cache.set(v, k));

    //this.layout_NB_contact = "-";
    //this.layout_BE_contact = "__";
    //this.layout_EM_contact = "-";
    //this.layout_ES_contact = "-";
    //this.N = `spm`;
    //this.B = `layout`;
    //this.E = new Set();
    //this.M = new Set();
  }
  namespace(value) {
    let self = this;
    let { n, nb } = self.cache;
    if (value) {
      self.cache["n"] = value;
      return self;
    } else {
      return `${n}`;
    }
  }
  block(value) {
    let self = this;
    let { n, nb, b, be } = self.cache;
    if (value) {
      self.cache["b"] = value;
      return self;
    } else {
      return `${n}${nb}${b}`;
    }
  }
  element(element, value) {
    let self = this;
    //todo it
    // 批量设置
    if (it(element).isArray()) {
      element.forEach(
        item =>
          it(item).isObject() &&
          it(item).hasProperty("name") &&
          self.cache.set(item.name, item.value)
      );
      return self;
    }
    // 单个设置
    if (it(element).isString() && value) {
      self.cache.set(element, key);
      return self;
    }
    // 单个获取
    if (it(element).isString()) {
      let e = self.cache.get(element);
      let { n, nb, e, be } = self.cache;
      return `${n}${nb}${b}${be}${e}`;
    }
  }
  modify() {
    return `${n}${nb}${b}${be}${e}${em}${m}`;
  }
  state() {
    return `${n}${nb}${b}${be}${e}${es}${s}`;
  }
}

//lib:obj-alias-inherits-extend
const alias = (hash, obj) => {
  //hash = {name:xxx,value:aliasList}
  hash.value.forEach(key => {
    if (!(key in obj)) {
      obj[key] = obj[hash.name];
    }
  });
};
const inherits = (son, mother) => {
  son.prototype = mother.prototype;
};
const extend = (son, mother) => {
  son.prototype = mother.prototype;
};

alias({ name: "layout_NB_contact", value: ["nb", "NB"] }, NBEM);
alias({ name: "layout_BE_contact", value: ["be", "BE"] }, NBEM);
alias({ name: "layout_EM_contact", value: ["em", "EM"] }, NBEM);
alias({ name: "layout_ES_contact", value: ["es", "ES"] }, NBEM);
//
NBEM.namespace(`spm`) //n:name,value
  .block(`layout`) //b:name,value
  .element(`header footer body content sider`) //e:name,value
  .modify() //m:name,value
  .state() //s:name,value
  .make();

const helper = (element, value, order) => {
  let self = this;
  // 批量设置
  if (it(element).isArray()) {
    element.forEach(
      item =>
        it(item).isObject() &&
        it(item).hasProperty("name") &&
        self.cache.set(item.name, item.value)
    );
    return self;
  }
  // 单个设置
  if (it(element).isString() && value) {
    self.cache.set(element, key);
    return self;
  }
  // 单个获取
  if (it(element).isString()) {
    return (order || []).map(v => self.cache.get(v)).join("");
    /*
    let { n, nb, e, be } = self.cache;
    return `${n}${nb}${b}${be}${e}`;
    */
  }
};
//get
//helperE('e',null,'n,nb,e,be,e'.split(','))
//set
//helperE('header','header')
//helperE({'header':'header','body':'body'})

let layoutNbem = new NBEM();
layoutNbem
  .n("spm", "spm")
  .b("layout", "layout")
  .e("header", "header")
  .e("body", "body")
  .e("footer", "footer")
  .e("sider", "sider")
  .e("content", "content")
  .m("trigger", "has-trigger")
  .s();

let n = layoutNbem.n("spm");
let b = layoutNbem.b("layout");
let e = layoutNbem.e("header");
let m = layoutNbem.m("trigger");
let nb = layoutNbem.nb;
let be = layoutNbem.be;
let em = layoutNbem.em;
let es = layoutNbem.es;
let hash = {
  n,
  b,
  e,
  m,
  nb,
  be,
  em,
  es
};

//eg:tpl({n:"spm",nb:"-",e:"",be,e})('n,nb,e,be,e'.split(',')) => `${n}`
const tpl = hash => order => (order || []).map(item => hash.get(item)).join("");
//let toN = () => tpl(hash)("n".split(","));
//let toB = () => tpl(hash)("n,nb,b".split(","));
//let toE = () => tpl(hash)("n,nb,e,be,e".split(","));
//let toM = () => tpl(hash)("n,nb,e,be,e,em,m".split(","));
//let toS = () => tpl(hash)("n,nb,e,be,e,es,s".split(","));
const to = str => tpl(hash)(str.split(","));
class NbemBuilder {
  constructor() {}
  n() {}
}

nbemBuilder.n();
nbemBuilder.b();
nbemBuilder.e();
nbemBuilder.m();
nbemBuilder.s();
