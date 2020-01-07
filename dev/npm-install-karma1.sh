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

#use karma1
listLib=$(
  cat <<EOF
#to execute JavaScript code in multiple real browsers?
"karma": "^1.4.1",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
#to generate code coverage using Istanbul?
"karma-coverage": "^1.1.1",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
#let test code with Mocha testing framework?
"karma-mocha": "^1.3.0",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
#to test code in browser phantomjs?
"karma-phantomjs-launcher": "^1.0.2",
# provides shims when running tests in browser PhantomJS?
"karma-phantomjs-shim": "^1.4.0",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
#to test code with sinon-chai testing framework?
"karma-sinon-chai": "^1.3.1",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
#to use webpack to preprocess files  in karma?
"karma-webpack": "^2.0.2",
#locates and loads existing source maps to preprocess files  in karma?
"karma-sourcemap-loader": "^0.3.7",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0
