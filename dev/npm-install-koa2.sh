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
--save-prod
#--save-dev
#--registry=https://registry.npm.taobao.org
EOF
)

listLib=$(
  cat <<EOF
"koa": "^2.11.0",
#to support multipart, urlencoded, and json request bodies parse?
"koa-body": "^4.1.1",
#Convert koa legacy ( 0.x & 1.x ) generator middleware to modern promise middleware ( 2.x )?
"koa-convert": "^1.2.0",
#to use JSON pretty-printed response ?
"koa-json": "^2.0.2",
#to get logger with style for development?
"koa-logger": "^3.2.1",
#to handle all errors in one place( hack ctx.onerror)?
"koa-onerror": "^4.1.0",
#use route help you?
"koa-router": "^7.4.0",
#use static file serve?
"koa-static": "^5.0.0",
#to use some htmp template engine?(must still install the engines you wish to use)
"koa-views": "^6.2.1",
EOF
)

#use koa2
listLib=$(
  cat <<EOF
"koa": "^2.2.0",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
#use route help you?
"koa-router": "^7.4.0",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
#use static file serve?
"koa-static": "^4.0.2",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

#file-usage
#./dev/npm-install-koa2.sh
