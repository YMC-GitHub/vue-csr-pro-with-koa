// 空间与区块连接符：-
export const layout_NB_contact = "-";
// 区块与元素连接符：'__' for BEM or '-' for iview
export const layout_BE_contact = "__";
// 元素与修饰连接符：'--' for BEM or '-' for iview
export const layout_EM_contact = "-";
// 元素与状态连接符：' ' for BEM or '-'  for iview
export const layout_ES_contact = "-";

// 空间名字
export const ns = "spm";
export const css_prefix = ns;
// 区块名字:layout
export const layout_prefix_cls = `${css_prefix}${layout_NB_contact}layout`;
// 元素名字:header footer content sider
export const layout_E_list = "header footer body content sider";
export const layout_header_name = `${layout_prefix_cls}${layout_BE_contact}header`;
export const layout_footer_name = `${layout_prefix_cls}${layout_BE_contact}footer`;
export const layout_body_name = `${layout_prefix_cls}${layout_BE_contact}body`;
export const layout_content_name = `${layout_prefix_cls}${layout_BE_contact}content`;
export const layout_sider_name = `${layout_prefix_cls}${layout_BE_contact}sider`;
// 修饰名字:

// 状态名字:
//has-sider

//lib:it-is-it-has
//以某一功能作为函数名字，以函数名字作为文件名字
const isString = p => typeof p === "String";
const isArray = p => typeof p === "Array";
const hasProperty = (cache, p) => p in cache;
const isObject = p => p !== null && typeof p === "object";

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
/*
class ClassIt {
  constructor(data) {
    this.it(data);
  }
  it(data) {
    this.data = data;
    return this;
  }
}
*/

//todos loadFn
const registerFn = (prototype, name, fn) => {
  if (!(name in prototype)) prototype[name] = fn;
};
let _data;
function it(p) {
  if ((arguments.length = 1)) {
    _data = arguments[0];
  }
  return it;
}
it.isString = () => currify(isString)(_data);
it.isArray = () => currify(isArray)(_data);
it.hasProperty = () => currify(hasProperty)(_data);
it.isObject = () => currify(isObject)(_data);

// lib:config or c-u-r-d
const config = (element, value, cache) => {
  let flag = true;
  //todo it
  // 批量设置
  // 两个参数+参为数组+元素字符，键值对应
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
  else if (it(element).isString() && value) {
    return it(cache).hasProperty("add") && cache.add(element, key);
  }
  //多个获取
  else if (it(element).isArray()) {
    return element.map(item =>
      it(item).isObject()
        ? it(item).hasProperty("name") &&
          it(cache).hasProperty("get") &&
          cache.get(item.name)
        : it(cache).hasProperty("get") && cache.get(item)
    );
  }
  // 单个获取
  else if (it(element).isString()) {
    return it(cache).hasProperty("get") && cache.get(element);
  }
};

// lib:n-b-e-m
class NBEM {
  constructor(opts) {
    this.NB = "-";
    this.BE = "__";
    this.EM = "-";
    this.ES = "-";
    this.N = "";
    this.B = "";
    this.E = "";
    this.M = "";
    this.S = "";
    it(opts).isObject() && Object.keys(opts).forEach(k => (this[k] = opts[k]));
    this.$options = opts;
  }
  namespace(value) {
    let self = this;
    if (value) {
      self.N = value;
      return self;
    } else {
      let { N } = self;
      return `${N}`;
    }
  }
  block(value) {
    let self = this;
    if (value) {
      self.B = value;
      return self;
    } else {
      let { N, NB, B } = self;
      return `${N}${NB}${B}`;
    }
  }
  element(value) {
    let self = this;
    if (value) {
      self.E = value;
      return self;
    } else {
      let { N, NB, B, BE, E } = self;
      return `${N}${NB}${B}${BE}${E}`;
    }
  }
  modify(value) {
    let self = this;
    if (value) {
      self.M = value;
      return self;
    } else {
      let { N, NB, B, BE, E, EM, M } = self;
      return `${N}${NB}${B}${BE}${E}${EM}${M}`;
    }
  }
  state(value) {
    let self = this;
    if (value) {
      self.S = value;
      return self;
    } else {
      let { N, NB, B, BE, E, ES, S } = self;
      return `${N}${NB}${B}${BE}${E}${ES}${S}`;
    }
  }
  nbem(opts) {
    return new NBEM(opts || this.$options);
  }
  clear() {
    this.NB = "";
    this.BE = "";
    this.EM = "";
    this.ES = "";
    this.N = "";
    this.B = "";
    this.E = "";
    this.M = "";
    this.S = "";
    return this;
  }
}
const alias = (hash, obj) => {
  //hash = {name:xxx,value:aliasList}
  hash.value.forEach(key => {
    if (!(key in obj)) {
      obj[key] = obj[hash.name];
    }
  });
};
alias({ name: "namespace", value: ["ns", "n"] }, NBEM.prototype);
alias({ name: "block", value: ["b"] }, NBEM.prototype);
alias({ name: "element", value: ["e"] }, NBEM.prototype);
alias({ name: "modify", value: ["m"] }, NBEM.prototype);
alias({ name: "state", value: ["s"] }, NBEM.prototype);

const options = { NB: "-", BE: "__", EM: "--", ES: "--" };
export const layoutNBEM = new NBEM(options).n("spm").b("layout");
console.log(layoutNBEM.b());
console.log(layoutNBEM.e("header").e());
console.log(
  layoutNBEM
    .e("header")
    .s("trigger")
    .s()
);
console.log(
  layoutNBEM
    .nbem()
    .e("body")
    //.clear()
    .s()
);
/*
//usage:01
let layoutNbem = new NBEM();
//set
layoutNbem
  .n("spm")
  .b("layout")
  .e("header")
  //.m("xxx")
  .s("trigger");
//get
let n = layoutNbem.n();
let b = layoutNbem.b();
let e = layoutNbem.e();
let m = layoutNbem.m();
let s = layoutNbem.s();
//usage:02
//get
//const qucikTpl = order => hash =>
//  (order || []).map(action => hash[`${action}`]());
//qucikTpl("n,b,e,m,s".split(","))(layoutNbem);

//usage:03
let map = new Map();
//set
const quickE = ns =>
  (arr =
    ns.spilt(".") &&
    new NBEM()
      .n(arr[0])
      .b(arr[1])
      .e(arr[2])
      .m(arr[3]));
let instance = quickE("spm.layout.header");
map.add("spm.layout.header", instance);
//get
map.get("spm.layout.header");
*/
