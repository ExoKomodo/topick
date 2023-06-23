#! /bin/bash

echo 'Unit testing Topick client'

cd $(dirname ${BASH_SOURCE[0]})/..
npm run test:unit
