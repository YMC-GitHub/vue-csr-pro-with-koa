#!/bin/sh

function list_to_one() {
  local list=
  local arr=
  local i=
  local str=
  list=$(
    cat <<EOF
"koa": "^2.5.1",
EOF
  )
  if [ -n "${1}" ]; then
    list="${1}"
  fi

  list=$(echo "$list" | sed "/^ *#/d" | sed "/^$/d")
  list=$(echo "$list" | sed "s/^ *//g" | sed "s/ *//g")
  list=$(echo "$list" | sed "s/,$//g")
  #list=$(echo "$list" | sed "s/,$//g" | sed "s/:/@/g")
  #=>"koa-bodyparser"@"^4.2.1"
  #list=$(echo "$list" | sed "s/^\"//g" | sed "s/\":/@/g")
  #=>koa-bodyparser@"^4.2.1"
  list=$(echo "$list" | sed "s/\"//g" | sed "s/:/@/g")
  #=>koa-bodyparser@^4.2.1

  #arr=${list//,/ }
  #str=
  #for i in "${arr[@]}"; do
  #str="$str $i"
  #done
  #str=$(echo "$str" | sed "s/^ *//g" | sed "s/ *$//g")
  #echo "$str"
  echo $list
}
function install() {
  opts=$(echo "$listOpts" | sed "/^ *#/d" | sed "/^$/d")
  libs=$(list_to_one "$listLib")
  echo "npm install $libs $opts" && npm install $libs $opts
}
function uninstall() {
  opts=$(echo "$listOpts" | sed "/^ *#/d" | sed "/^$/d")
  libs=$(list_to_one "$listLib")
  libs=$(echo "$libs" | sed "s/@^[0-9]\.[0-9]\.[0-9]//g")
  echo "npm uninstall $libs $opts" && npm uninstall $libs $opts
}

listOpts=$(
  cat <<EOF
#--save-prod
--save-dev
#--registry=https://registry.npm.taobao.org
EOF
)

#use eslint4
listLib=$(
  cat <<EOF
#use eslint cli or in nodejs api
"eslint": "^4.15.0",
#"eslint-friendly-formatter": "^3.0.0",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
#use babel-eslint lib as parser
"babel-eslint": "^8.2.1",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
#let standard use eslint?
#"eslint-config-standard": "^10.2.1",
#"eslint-plugin-standard": "^3.0.1",
EOF
)
#install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
#to support linting of ES2015+ (ES6+) import/export syntax?
#"eslint-plugin-import": "^2.7.0",
EOF
)
#install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
#need additional ESLint's rules for Node.js ?
#"eslint-plugin-node": "^5.2.0",
EOF
)
#install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
#need enforce best practices for JavaScript promises?
#"eslint-plugin-promise": "^3.4.0",
EOF
)
#install
#uninstall && npm prune && npm ls --depth=0

#to check the <template> and <script> of .vue files?
listLib=$(
  cat <<EOF
#to check the <template> and <script> of .vue files?
"eslint-plugin-vue": "^4.0.0",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

#use prettier
listLib=$(
  cat <<EOF
#use prettier to fommat code?
"prettier": "^1.14.3",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

#combine prettier and eslint
listLib=$(
  cat <<EOF
#runs Prettier as an ESLint rule?
"eslint-plugin-prettier": "^3.0.0",
#to disable all formatting-related ESLint rules for prettier?
"eslint-config-prettier": "^3.1.0",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

#use husky and lint-stage
listLib=$(
  cat <<EOF
"husky": "^1.1.0",
"lint-staged": "^7.3.0",
EOF
)
#install
# remove
#uninstall && npm prune && npm ls --depth=0
#rm package-lock.json && npm prune
