#!/usr/bin/env bash
npm run build
cp config/nginx.conf build/
cf push