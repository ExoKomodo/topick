#! /bin/bash

echo 'Building Topick server'

cd $(dirname ${BASH_SOURCE[0]})/..
npm run build
