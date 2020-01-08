#!/bin/sh

function copySome() {
  local o_f=
  local o_p=
  local n_p=
  local n_f=
  local o_path=
  local n_path=
  if [ -n "${1}" ]; then
    o_f="${1}"
  fi
  n_f=""
  if [ -n "${2}" ]; then
    n_f="${2}"
  fi
  o_p="vue-ssr-koa-demo"
  if [ -n "${3}" ]; then
    o_p="${3}"
  fi
  n_p="vue-spa-dev-with-webpack"
  if [ -n "${4}" ]; then
    n_p="${4}"
  fi
  o_path="/d/code-store/nodejs"
  if [ -n "${5}" ]; then
    o_path="${5}"
  fi
  n_path="$o_path"
  if [ -n "${6}" ]; then
    n_path="${6}"
  fi
  cp -r "${o_path}/${o_p}/${o_f}" "${n_path}/${n_p}/${n_f}"
}
#copy build dir from project $o_p
path="/d/code-store/nodejs" &&
  o_p="vue-ssr-koa-demo" &&
  o_f="build" &&
  n_p="vue-spa-dev-with-webpack" &&
  n_f="" &&
  cp -r "${path}/${o_p}/${o_f}" "${path}/${n_p}/${n_f}"

#copy config dir from project $o_p
path="/d/code-store/nodejs" &&
  o_p="vue-ssr-koa-demo" &&
  o_f="config" &&
  n_p="vue-spa-dev-with-webpack" &&
  n_f="" &&
  cp -r "${path}/${o_p}/${o_f}" "${path}/${n_p}/${n_f}"

#copy src dir from project $o_p
path="/d/code-store/nodejs" &&
  o_p="vue-ssr-koa-demo" &&
  o_f="src" &&
  n_p="vue-spa-dev-with-webpack" &&
  n_f="" &&
  cp -r "${path}/${o_p}/${o_f}" "${path}/${n_p}/${n_f}"

#copy static dir from project $o_p
path="/d/code-store/nodejs" &&
  o_p="vue-ssr-koa-demo" &&
  o_f="static" &&
  n_p="vue-spa-dev-with-webpack" &&
  n_f="" &&
  cp -r "${path}/${o_p}/${o_f}" "${path}/${n_p}/${n_f}"

#copy static dir from project $o_p
path="/d/code-store/nodejs" &&
  o_p="vue-ssr-koa-demo" &&
  o_f="static" &&
  n_p="vue-spa-dev-with-webpack" &&
  n_f="" &&
  cp -r "${path}/${o_p}/${o_f}" "${path}/${n_p}/${n_f}"

#copy .babelrc file from project $o_p
copySome '.babelrc'

#copy .browserslistrc file from project $o_p
copySome '.browserslistrc'

#get list
#path=/d/code-store/nodejs/vue-ssr-koa-demo && list=$(ls -a "$path") && echo "$list"
list=$(
  cat <<EOF
.babelrc
.browserslistrc
.editorconfig
.eslintignore
.eslintrc.js
.gitignore
.postcssrc.js
.prettier.config.js
csr-index.html
csr-server.js
husky.config.js
index.html
#LICENSE
lint-staged.config.js
package.json
README.md
src
static
EOF
)
list=$(echo "$list" | sed "s/^ *#.*//g" | sed "/^$/d")
arr=(${list//,/ })
for val in ${arr[@]}; do
  val=$(echo "$val" | tr "[A-Z]" "[a-z]")
  copySome "$val"
done

#copy some file in dev dir
#path=/d/code-store/nodejs/vue-ssr-koa-demo/dev && list=$(ls -a "$path") && echo "$list"
list=$(
  cat <<EOF
npm-install-chai4.sh
npm-install-csr-lib.sh
npm-install-eslint4.sh
npm-install-karma1.sh
npm-install-koa2.sh
npm-install-mocha3.sh
npm-install-postcss6.sh
npm-install-sass4.sh
npm-install-sinon4.sh
npm-install-webpack3.sh
EOF
)
list=$(echo "$list" | sed "s/^ *#.*//g" | sed "/^$/d")
arr=(${list//,/ })
for val in ${arr[@]}; do
  val=$(echo "$val" | tr "[A-Z]" "[a-z]")
  copySome "dev/$val" "dev/" "" ""
done

#copy some file in dev dir
list=$(
  cat <<EOF
get-dir-construtor.sh
function-list.sh
EOF
)
list=$(echo "$list" | sed "s/^ *#.*//g" | sed "/^$/d")
arr=(${list//,/ })
for val in ${arr[@]}; do
  val=$(echo "$val" | tr "[A-Z]" "[a-z]")
  copySome "dev/$val" "dev/" "" ""
done
