#!/usr/bin/env bash
set -eu
npm run build
cp config/nginx.conf build/
cf push