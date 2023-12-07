# Upgrading from v0 to v1

## Version v0

In **v0**, your code looks like this:

```js
import {
    JettonApi,
    DNSApi,
    NFTApi,
    RawBlockchainApi,
    SubscriptionApi,
    TraceApi,
    WalletApi,
    Configuration,
} from 'tonapi-sdk-js';

// Getting a list of transactions
// Token should be obtained from https://tonconsole.com
const blockchainApi = new RawBlockchainApi(new Configuration({
    headers: {
        // For unlimited requests
        Authorization: 'Bearer YOUR_TOKEN',
    },
}));

// Receiving a typed array of transactions
const { transactions } = await blockchainApi.getTransactions({
    account: address,
    limit: 10,
    maxLt: 25758317000002
});

// Getting a list of NFTs by owner address
const nftApi = new NFTApi();
// Receiving a typed array of owner's NFTs
const { nftItems } = await nftApi.getNftItemsByOwnerAddress({
    account: address,
});
```

For different APIs, separate instances are created. For example, for NFT information, you create a new instance: **new NFTApi()**, for jettons: **new JettonApi()**.

## Version v1

In **v1**, you now only need to create a single instance of the API:

```js
import { HttpClient, Api } from 'tonapi-sdk-js';

const httpClient = new HttpClient({
    baseUrl: 'https://tonapi.io/',
    baseApiParams: {
        headers: {
            Authorization: `Bearer ${YOUR_TOKEN}`,
            'Content-type': 'application/json'
        }
    }
});

const client = new Api(httpClient);
```

Now, all necessary data can be accessed through this single instance:

```js
// Account
const events = await client.accounts.getAccountEvents(address, { limit: 50 });

// NFT
const collection = await client.nft.getNftCollection(address);

// Jettons
const jetton = await client.jettons.getJettonInfo(address);
```

This update simplifies the interaction with the API by reducing the number of instances required and streamlining the code structure.