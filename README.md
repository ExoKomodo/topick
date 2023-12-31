# [topick.fyi](https://topick.fyi)

## Important Links

- [UI - production](https://topick.fyi)
- [UI - staging](https://stg.topick.fyi)
- [UI - development](https://dev.topick.fyi)
- [API - production](https://services.topick.fyi)
- [This Repository](https://github.com/ExoKomodo/topick)
- [CD Repository - production](https://github.com/ExoKomodo/topick-prd)
- [CD Repository - staging](https://github.com/ExoKomodo/topick-stg)
- [CD Repository - development](https://github.com/ExoKomodo/topick-dev)
- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)

## CI/CD Statuses

### Core

[![CI](https://github.com/ExoKomodo/topick/actions/workflows/ci.yaml/badge.svg)](https://github.com/ExoKomodo/topick/actions/workflows/ci.yaml)

### Production

[![CI](https://github.com/ExoKomodo/topick-prd/actions/workflows/ci.yaml/badge.svg)](https://github.com/ExoKomodo/topick-prd/actions/workflows/ci.yaml)

[![Frontend Deployment](https://github.com/ExoKomodo/topick-prd/actions/workflows/cd-client.yaml/badge.svg)](https://github.com/ExoKomodo/topick-prd/actions/workflows/cd-client.yaml)

[![pages-build-deployment](https://github.com/ExoKomodo/topick-prd/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/ExoKomodo/topick-prd/actions/workflows/pages/pages-build-deployment)

### Staging

[![CI](https://github.com/ExoKomodo/topick-stg/actions/workflows/ci.yaml/badge.svg)](https://github.com/ExoKomodo/topick-stg/actions/workflows/ci.yaml)

[![Frontend Deployment](https://github.com/ExoKomodo/topick-stg/actions/workflows/cd-client.yaml/badge.svg)](https://github.com/ExoKomodo/topick-stg/actions/workflows/cd-client.yaml)

[![pages-build-deployment](https://github.com/ExoKomodo/topick-stg/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/ExoKomodo/topick-stg/actions/workflows/pages/pages-build-deployment)

### Development

[![CI](https://github.com/ExoKomodo/topick-dev/actions/workflows/ci.yaml/badge.svg)](https://github.com/ExoKomodo/topick-dev/actions/workflows/ci.yaml)

[![Frontend Deployment](https://github.com/ExoKomodo/topick-dev/actions/workflows/cd-client.yaml/badge.svg)](https://github.com/ExoKomodo/topick-dev/actions/workflows/cd-client.yaml)

[![pages-build-deployment](https://github.com/ExoKomodo/topick-dev/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/ExoKomodo/topick-dev/actions/workflows/pages/pages-build-deployment)

## Client

### Client - Setup

Install nodejs v18+. Using [`nvm`](https://github.com/nvm-sh/nvm) is the best option.

Then run the `setup.sh`

```shell
./client/scripts/setup.sh
```

### Client - Build

```shell
./client/scripts/build.sh
```

### Client - Run

```shell
./client/scripts/run.sh
```

### Client - Unit Testing

```shell
./client/scripts/unit-test.sh
```

### Client - Integration Testing

```shell
./client/scripts/integration-test.sh
```

## Server

### Server - Setup

Create a .env file in the server root directory with the following contents:

```
SERVER_PORT=8080
OPENAI_API_KEY=<set this with the key you got>

```

Install nodejs v18+. Using [`nvm`](https://github.com/nvm-sh/nvm) is the best option.

Then run the `setup.sh`

```shell
./server/scripts/setup.sh
```

### Server - Build

```shell
./server/scripts/build.sh
```

### Server - Run

```shell
./server/scripts/run.sh
```

### Server - Unit Testing

```shell
./server/scripts/unit-test.sh
```

### Server - Integration Testing

```shell
./server/scripts/integration-test.sh
```
