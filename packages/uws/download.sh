#!/bin/sh

if [ -f "./installed.lock" ]; then
  echo "UWS is installed. Skipping installation."
  exit
fi

BASE_DOWNLOAD_URL="https://github.com/uNetworking/uWebSockets.js/archive/refs/tags/v"
TMP_FILE_PATH="/tmp/uws.zip"

if [ ! $(command -v jq) ] || [ ! $(command -v unzip) ] || [ ! $(command -v curl) ]; then
  echo "You don't have the necessary dependencies.\nDependencies: jq, curl, unzip."
  exit -1
fi

version=$(jq '.version' -r package.json)

echo "$BASE_DOWNLOAD_URL""$version"".zip"

curl -L -o $TMP_FILE_PATH "$BASE_DOWNLOAD_URL""$version"".zip"

unzip $TMP_FILE_PATH -d ./

mv ./uWebSockets*/ ./dist

rm -rf $TMP_FILE_PATH

echo "installed" > "installed.lock"
