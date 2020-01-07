//-----------config----------
//it is a config file for eslint
//-----------config----------
//tasks:
//01.use babel-eslint lib as parser
//02.support es6
//03.support jsx
//04.use eslint-plugin-vue
//05.use eslint-plugin-prettier
//
//...


// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    //use babel-eslint lib as parser
    parser: 'babel-eslint',
    //support es6
    'ecmaVersion': 6,
    //my code is in ECMAScript modules?
    'sourceType': 'module',
    'ecmaFeatures': {
      //support jsx
      'jsx': true,
      'modules': true,
      'experimentalObjectRestSpread': true
    }
  },
  env: {
    // predefined global variables for browser env
    'browser': true,
    // predefined global variables for node env
    'node': true,
    //support es6
    'es6': true,
    // for browser-only code that uses Browserify/WebPack
    'commonjs': true
  },
  //use some rule from some extend
  extends: [
    //use eslint built in rule
    'eslint:recommended',
    //use eslint-plugin-standard 's rule
    //'standard'

    //use eslint-plugin-node 's rule
    //'plugin:node/recommended',

    //use eslint-plugin-import 's rule
    //'plugin:import/errors',
    //'plugin:import/warnings',

    //use eslint-plugin-promise 's rule
    //'plugin:promise/recommended',

    //use eslint-plugin-vue 's rule
    // https://www.npmjs.com/package/eslint-plugin-vue
    //'extends': 'plugin:vue/base',
    //'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    //'plugin:vue/recommended',

    //use eslint-plugin-prettier 's rule
    'plugin:prettier/recommended',
    //"prettier/flowtype",
    //"prettier/react",
    //"prettier/standard"
  ],
  // required to lint *.vue files
  //use some plugin ,eg eslint-plugin-xx
  plugins: [
    //use eslint-plugin-node
    //"node",
    //use eslint-plugin-promise
    //"promise",
    //use eslint-plugin-import
    //"import",
    //use eslint-plugin-vue
    'vue',
    //use eslint-plugin-prettier
    'prettier'

  ],

  // add your custom rules here
  //错误提示级别-忽略:'off|0'|警告:'warn|1'|报错:'error|2'
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    //'prettier/prettier': 'error',
    //'prettier/prettier': ['error', { 'singleQuote': true, 'parser': 'flow' }],
    // it dose not work as below when using ".prettier.config.js" , not ".prettierrc"
    //'prettier/prettier': ['error', {'parser': 'flow'},{"usePrettierrc": true}]
  }
}
