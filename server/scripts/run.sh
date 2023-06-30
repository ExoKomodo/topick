#! /bin/bash

echo 'Running Topick server'

set -euo pipefail

cd $(dirname ${BASH_SOURCE[0]})/..
npm run dev
