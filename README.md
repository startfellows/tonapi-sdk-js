# tonapi-sdk-js

## Overview
This SDK, automatically generated, facilitates access to endpoints provided by tonapi.io. For detailed API information, visit the [swagger documentation](https://docs.tonconsole.com/tonapi).

To utilize tonapi, please set up an [account](https://tonconsole.com/).

## Installation

Install the package using npm or yarn:

```sh
npm install tonapi-sdk-js
# or
yarn add tonapi-sdk-js
```

## Usage

Below is an example of how to use the SDK in your JavaScript project:

```js
// client.js

import { HttpClient, Api } from 'tonapi-sdk-js';

// Configure the HTTP client with your host and token
const httpClient = new HttpClient({
    baseUrl: host,
    baseApiParams: {
        headers: {
            Authorization: `Bearer ${YOUR_TOKEN}`,
            'Content-type': 'application/json'
        }
    }
});

// Initialize the API client
const client = new Api(httpClient);

// Fetch a typed array of account events
const events = await client.accounts.getAccountEvents(address, { limit: 50 });

// Retrieve an NFT collection
const collection = await client.nft.getNftCollection(address);

// Obtain information about a specific jetton
const jetton = await client.jettons.getJettonInfo(address);
```

For those upgrading from v0 to v1, please refer to [the migration guide](/migration.md) for detailed instructions.