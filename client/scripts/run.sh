#! /bin/bash

echo 'Running Topick client'

cd $(dirname ${BASH_SOURCE[0]})/..
npm run dev
