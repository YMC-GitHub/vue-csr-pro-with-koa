#!/bin/sh

function has() {
  local file=
  if [ -n "${1}" ]; then
    file="${1}"
  fi
  if [ -e "$file" ]; then
    echo "true"
  else
    echo "false"
  fi
}

function delete() {
  local list=
  local val=
  local p=
  local hasP=
  if [ -n "${1}" ]; then
    list="${1}"
  fi
  list=$(echo "$list" | sed "s/^ *#.*//g" | sed "/^ *$/d")
  arr=(${list//,/ })
  for val in ${arr[@]}; do
    p="$path/$val"
    hasP=$(has "${p}")
    if [[ $hasP = "true" ]]; then
      echo "rm -rf $p"
      rm -rf "$p"
    else
      echo "$p=$hasP "
    fi

  done

}

#delete ssr  files in build dir
path=/d/code-store/nodejs/vue-spa-dev-with-webpack/build
#path=/d/code-store/nodejs/vue-spa-dev-with-webpack/build && ls "$path" | grep ssr
files=$(
  cat <<EOF
#for ssr
setup-koa-dev-ssr-server.js
webpack.ssr-client.conf.js
webpack.ssr-server.conf.js
EOF
)
delete "$files"

## file-usage
#dev/delete-file.sh
