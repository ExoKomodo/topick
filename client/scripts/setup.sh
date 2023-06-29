#! /bin/bash

echo 'Setting up local environment for Topick client'

set -euo pipefail

cd $(dirname ${BASH_SOURCE[0]})/..
npm ci
