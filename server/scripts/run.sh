#! /bin/bash

echo 'Running Topick server'

cd $(dirname ${BASH_SOURCE[0]})/..
npm run dev
