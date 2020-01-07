// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // 样式引入
    //to transform @import rules by inlining content?
    "postcss-import": {},

    //to rebase, inline or copy on url()?
    "postcss-url": {},

    // 自动前缀
    // to edit target browsers: use "browserslist" field in package.json
    // 注释掉，因为后面由postcss-cssnext设置自动前缀
    //"autoprefixer": {},

    // 容器宽高
    //to fix an element's dimensions to an aspect ratio?
    "postcss-aspect-ratio-mini": {},

    // 解一像素?
    //write SVGs directly in CSS?
    "postcss-write-svg": {
      "utf8": false
    },

    // 未来特性
    //to use the latest CSS syntax today?
    "postcss-cssnext": {},

    /*
    // 单位转换-pxtovw
    //generates viewport units (vw, vh, vmin, vmax) from pixel units?
    "postcss-px-to-viewport": {
      "viewportWidth": 750,
      // (Number) The width of the viewport
      "viewportHeight": 1334,
      // (Number) The height of the viewport
      "unitPrecision": 3,
      // (Number) The decimal numbers to allow the REM units to grow to
      "viewportUnit": 'vw',
      // (String) Expected units
      "selectorBlackList": ['.ignore', '.hairlines'],
      // (Array) The selectors to ignore and leave as px
      "minPixelValue": 1,
      // (Number) Set the minimum pixel value to replace
      "mediaQuery": false
      // (Boolean) Allow px to be converted in media queries
    },
    */

    // 单位转换-pxtorem
    // generates rem units from pixel units?
    "postcss-pxtorem": {
      rootValue: 16,
      unitPrecision: 5,
      "propList": ["*"],//default:['font', 'font-size', 'line-height', 'letter-spacing']
      // 注意：如果有使用第三方UI如VUX，则需要配置下忽略选择器不转换。
      // 规则是class中包含的字符串，如vux中所有的class前缀都是weui-。也可以是正则。则：
      //"selectorBlackList": ["weui-"]
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 1 //default:0
    },

    // 容器宽高
    //Automatically append content property for viewport-units-buggyfill?
    "postcss-viewport-units": {},

    // 压缩清理
    //minifier ?
    "cssnano": {
      //"preset": "advanced",//need cssnano-preset-advanced
      //前面已由postcss-cssnext设置自动前缀
      "autoprefixer": false,
      //只要启用了这个插件，z-index的值就会重置为1。这是一个天坑，千万记得将postcss-zindex设置为false。
      "postcss-zindex": false
    }
  }
}

