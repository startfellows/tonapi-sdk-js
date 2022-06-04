# tonapi-sdk-js

## Overview
It's an auto-generated SDK by open-api to reach endpoints from tonapi.io
[swagger](https://tonapi.io/docs)

## Installation

```sh
npm install tonapi-sdk-js
# or
yarn add tonapi-sdk-js
```

## Usage

```js
import {
    AnnotationApi,
    JettonApi,
    NFTApi,
    RawBlockchainApi,
    TraceApi,
    WalletApi
} from 'tonapi-sdk-js'

// Get list of transactions
const blockchainApi = new RawBlockchainApi()
// Receive typed array of transactions
const { transactions } = await blockchainApi.getTransactions({
    account: address,
    limit: 10,
    maxLt: 25758317000002
})

// Get list of nfts by owner address
const nftApi = new NFTApi(configuration)
// Receive typed array of owner nfts
const { nftItems } = await nftApi.getNftItemsByOwnerAddress({
    account: address,
})
```

## Configuration

Every param in configuration is optional

| Key | Type | Description |
| --- | ---- | ----------- |
| basePath | string | override base path |
| fetchApi | FetchAPI | override for fetch implementation |
| middleware | Middleware[] | middleware to apply before/after fetch requests |
| query | (params: HTTPQuery) => string | stringify function for query strings |
| username | string | parameter for basic security |
| password | string | parameter for basic security |
| api | string | ((name: string) => string) | parameter for apiKey security |
| access | string | Promise<string> | ((name?: string, scopes?: string[]) => string | Promise<string>) | parameter for oauth2 security |
| headers | HTTPHeaders | header params we want to use on every request |
| credentials | RequestCredentials | value for the credentials param we want to use on each request |

### Example

```js
// syntax the same for other api's
import { AnnotationApi } from 'tonapi-sdk-js'

const api = new AnnotationApi(new Configration({
    basePath: 'https://your-own-backend-with-same-schema.com/api',
    // ... other params
}))
```

### Request limitation
By default you can use https://tonapi.io without token, but you will have limitations.
If you want unlimited requests to our backend, please use Bearer token.

Steps
* Get token from our [telegram bot](https://t.me/tonapi_bot)
* Pass it in configuration for API
* Enjoy unlimited requests

#### Example

```js
import { Configuration, RawBlockchainApi } from 'tonapi-sdk-js'
const blockchainApi = new RawBlockchainApi(new Configuration ({
  headers: {
    Authorization: 'Bearer YOUR_TOKEN_FROM_TELEGRAM_BOT',
  },
}))
```
