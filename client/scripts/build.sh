#! /bin/bash

echo 'Building Topick client'

cd $(dirname ${BASH_SOURCE[0]})/..
npm run build
