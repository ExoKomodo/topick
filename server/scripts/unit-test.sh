#! /bin/bash

echo 'Unit testing Topick server'

cd $(dirname ${BASH_SOURCE[0]})/..
npm run test:unit
