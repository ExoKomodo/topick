#! /bin/bash

echo 'Setting up local environment for Topick server'

cd $(dirname ${BASH_SOURCE[0]})/..
npm ci
