#! /bin/bash

echo 'Integration testing Topick client'

set -euo pipefail

cd $(dirname ${BASH_SOURCE[0]})/..
npm run test:e2e
