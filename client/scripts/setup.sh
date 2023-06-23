#! /bin/bash

echo 'Setting up local environment for Topick client'

cd $(dirname ${BASH_SOURCE[0]})/..
npm ci
