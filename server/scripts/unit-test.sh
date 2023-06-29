#! /bin/bash

echo 'Unit testing Topick server'

set -euo pipefail

cd $(dirname ${BASH_SOURCE[0]})/..
npm run test:unit
