# vue-csr-dev-with-webpack

## desc

vue app spa develop with webpack  (csr mode)

note: you can also start your project with [Vue CLI](https://cli.vuejs.org/)

## project diretory constructor

get detail [here](./note/dir-construtor.md)

## some important deps for csr develop

- eslint (lint .js .vue file)
- babel (handle es6+)
- webpack (pack lib)
- postcss (handle css style with future feat)
- node-sass (handle sass/scss style (optional))
- less (handle less style (optional))

note: remember to take care of their version with each other.

## some config

`webpack.config.base.js`

01.set file context dir [config](./build/webpack.conf.base.js#L42)

02.set files enty [config](./build/webpack.conf.base.js#L44-#L46)

03.set files output with project config [config](./build/webpack.conf.base.js#L48-#L54)

04.set where to find npm lib [config](./build/webpack.conf.base.js#L56-#L62)

05.set files match and how to handle the matched files [config](./build/webpack.conf.base.js#L63-#L103)

06.use eslint to lint with project config [config](./build/webpack.conf.base.js#L67-#L67)

07.handle .vue files with vue-loader [config](./build/webpack.conf.base.js#L68-#L72)

08.handle .js files with babel-loader [config](./build/webpack.conf.base.js#L73-#L77)

09.match image files and handle  with url-loader or file-loader [config](./build/webpack.conf.base.js#L78-#L85)

10.match mp4,mp3 and other media files and handle  with url-loader or file-loader [config](./build/webpack.conf.base.js#L86-#L93)

11.match font files and handle  with url-loader or file-loader [config](./build/webpack.conf.base.js#L94-#L101)

12.use freindly formmater for eslint [config](./build/webpack.conf.base.js#L35-#L35)

`webpack.config.dev.js`

01.set devtool for dev mode [config](./build/webpack.conf.dev.js#L25-#L25)

02.set webpack-dev-server options [config](./build/webpack.conf.dev.js#L28-#L50)

03.set process.env for webpack dev env with DefinePlugin [config](./build/webpack.conf.dev.js#L52-#L54)

04.set hot module replace [config](./build/webpack.conf.dev.js#L55-#L55)

05.tell HMR shows correct file names in console on update [config](./build/webpack.conf.dev.js#L56-#L56)

06.tell no emit on errors [config](./build/webpack.conf.dev.js#L57-#L57)

07.auto genarate index.html [config](./build/webpack.conf.dev.js#L59-#L63)

08.copy custom static assets [config](./build/webpack.conf.dev.js#L65-#L71)

09.set friendly errors [config](./build/webpack.conf.dev.js#L87-#L94)

10.set notify on errors with project config [config](./build/webpack.conf.dev.js#L91-#L93)

11.set style loader for css/less/sass/scss/stylus/styl/postcss file [config](./build/webpack.conf.dev.js#L21-#L23)


`webpack.config.prod.js`

01.set the devtool tool with config [config](./build/webpack.conf.prod.js#L56-#L56)

02.set files output with project config [config](./build/webpack.conf.prod.js#L57-#L62)

03.set process.env for webpack pro env with DefinePlugin [config](./build/webpack.conf.prod.js#L66-#L68)

04.set uglify js [config](./build/webpack.conf.prod.js#L70-#L78)

05.extract css into its own file [config](./build/webpack.conf.prod.js#L80-#L87)

06.compress extracted CSS [config](./build/webpack.conf.prod.js#L90-#L94)

07.generate index.html  with template for pro or test [config](./build/webpack.conf.prod.js#L98-#L111)

08.keep module.id stable when vendor modules does not change [config](./build/webpack.conf.prod.js#L114-#L114)

09.enable scope hoisting [config](./build/webpack.conf.prod.js#L116-#L116)

10.split vendor js into its own file [config](./build/webpack.conf.prod.js#L118-#L130)

11.extract webpack runtime and module manifest to its own file [config](./build/webpack.conf.prod.js#L133-#L136)

12.extracts shared chunks from code splitted chunks and bundles them [config](./build/webpack.conf.prod.js#L140-#L145)

13.copy custom static assets [config](./build/webpack.conf.prod.js#L148-#L154)

14.set style loader for css/less/sass/scss/stylus/styl/postcss file [config](./build/webpack.conf.prod.js#L48-#L53)

15.use gzip with config data [config](./build/webpack.conf.prod.js#L159-#L175)

16.use bundle analyzer with config data [config](./build/webpack.conf.prod.js#L177-#L180)

`webpack.config.test.js`

01.set process.env for webpack test env with DefinePlugin [config](./build/webpack.conf.prod.js#L23-#L25)

02.to make lang="scss" work in test [config](./build/webpack.conf.prod.js#L15-#L21)

03.set style loader for css/less/sass/scss/stylus/styl/postcss file [config](./build/webpack.conf.prod.js#L12-#L12)

04.no need for app entry during tests [config](./build/webpack.conf.prod.js#L30-#L30)


`.babelrc`

\# for default env:

01.use env plugin

02.set lib module type is es5

03.set what env translate to

04.use jsx for vue

05.use transform for runtime in web app

06.use dynamic import syntax

07.use es7 in babel6?


\# for test env:

01.set test env flag

02.set lib module type is es6+

03.use jsx for vue

04.use coverage collection


`.eslintrc.js`

\# for default env:

01.he is the root config?

02.to lint aLL valid Babel code with the fantastic ESLint?

03.support es6(es2015)? es7? es8?

04.my code is in ECMAScript modules?

05.support jsx?

06.predefined global variables for browser env?

07.predefined global variables for node env?

08.predefined global variables for browser-only code that uses Browserify/WebPack?

09.use some rule from some extend?

10.use some plugin to handle some rule?

11.add some custom rules?

12.use eslint built in rule?

13.use eslint-plugin-vue 's rule?

14.use eslint-plugin-prettier 's rule?

15.use eslint-plugin-vue?

16.use eslint-plugin-prettier?

17.allow debugger during development?

`.postcssrc.js`

01.to transform @import rules by inlining content?

02.to rebase, inline or copy on url()?

03.to fix an element's dimensions to an aspect ratio?

04.write SVGs directly in CSS?

05.to use the latest CSS syntax today?

06.generates rem units from pixel units?

07.automatically append content property for viewport-units-buggyfill?

08.minify with cssno ?

09.automatically append prefixer?

## some command

```sh
#install his deps
: <<cmd
#npm install
#npm run install:csr
./dev/npm-install-csr-lib.sh
cmd

#devleop him
: <<cmd
npm run dev:csr
cmd

#test him
: <<cmd
#npm run test
#npm run test:unit
#npm run test:e2e
cmd

#build him
: <<cmd
npm run build:csr
#npm run build:csr-client
cmd

#lint him(optional)
: <<cmd
npm run lint
npm run lint:no-fix
cmd

#beautify him(optional)
: <<cmd
npm run format
cmd

#publish him
: <<cmd
#pushish to github code manage,npm registry
#npm run release
cmd

#run him
: <<cmd
#npm run start:csr-server
cmd
```

## get more

## author

yemiancheng <ymc-github@gmail.com>

## contributor

Evan You <yyx990803@gmail.com>

## License

MIT
