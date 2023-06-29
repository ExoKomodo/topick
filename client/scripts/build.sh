#! /bin/bash

echo 'Building Topick client'

set -euo pipefail

cd $(dirname ${BASH_SOURCE[0]})/..
npm run build
