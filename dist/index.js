"use strict";
/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.HttpClient = exports.ContentType = exports.PoolImplementationType = exports.JettonVerificationType = exports.BouncePhaseType = exports.ComputeSkipReason = exports.AccStatusChange = exports.TransactionType = exports.AccountStatus = void 0;
/** @example "active" */
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["Nonexist"] = "nonexist";
    AccountStatus["Uninit"] = "uninit";
    AccountStatus["Active"] = "active";
    AccountStatus["Frozen"] = "frozen";
})(AccountStatus || (exports.AccountStatus = AccountStatus = {}));
/** @example "TransOrd" */
var TransactionType;
(function (TransactionType) {
    TransactionType["TransOrd"] = "TransOrd";
    TransactionType["TransTickTock"] = "TransTickTock";
    TransactionType["TransSplitPrepare"] = "TransSplitPrepare";
    TransactionType["TransSplitInstall"] = "TransSplitInstall";
    TransactionType["TransMergePrepare"] = "TransMergePrepare";
    TransactionType["TransMergeInstall"] = "TransMergeInstall";
    TransactionType["TransStorage"] = "TransStorage";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
/** @example "acst_unchanged" */
var AccStatusChange;
(function (AccStatusChange) {
    AccStatusChange["AcstUnchanged"] = "acst_unchanged";
    AccStatusChange["AcstFrozen"] = "acst_frozen";
    AccStatusChange["AcstDeleted"] = "acst_deleted";
})(AccStatusChange || (exports.AccStatusChange = AccStatusChange = {}));
/** @example "cskip_no_state" */
var ComputeSkipReason;
(function (ComputeSkipReason) {
    ComputeSkipReason["CskipNoState"] = "cskip_no_state";
    ComputeSkipReason["CskipBadState"] = "cskip_bad_state";
    ComputeSkipReason["CskipNoGas"] = "cskip_no_gas";
})(ComputeSkipReason || (exports.ComputeSkipReason = ComputeSkipReason = {}));
/** @example "cskip_no_state" */
var BouncePhaseType;
(function (BouncePhaseType) {
    BouncePhaseType["TrPhaseBounceNegfunds"] = "TrPhaseBounceNegfunds";
    BouncePhaseType["TrPhaseBounceNofunds"] = "TrPhaseBounceNofunds";
    BouncePhaseType["TrPhaseBounceOk"] = "TrPhaseBounceOk";
})(BouncePhaseType || (exports.BouncePhaseType = BouncePhaseType = {}));
var JettonVerificationType;
(function (JettonVerificationType) {
    JettonVerificationType["Whitelist"] = "whitelist";
    JettonVerificationType["Blacklist"] = "blacklist";
    JettonVerificationType["None"] = "none";
})(JettonVerificationType || (exports.JettonVerificationType = JettonVerificationType = {}));
var PoolImplementationType;
(function (PoolImplementationType) {
    PoolImplementationType["Whales"] = "whales";
    PoolImplementationType["Tf"] = "tf";
    PoolImplementationType["LiquidTF"] = "liquidTF";
})(PoolImplementationType || (exports.PoolImplementationType = PoolImplementationType = {}));
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType || (exports.ContentType = ContentType = {}));
class HttpClient {
    baseUrl = "https://tonapi.io";
    securityData = null;
    securityWorker;
    abortControllers = new Map();
    customFetch = (...fetchParams) => fetch(...fetchParams);
    baseApiParams = {
        credentials: "same-origin",
        headers: {},
        redirect: "follow",
        referrerPolicy: "no-referrer",
    };
    constructor(apiConfig = {}) {
        Object.assign(this, apiConfig);
    }
    setSecurityData = (data) => {
        this.securityData = data;
    };
    encodeQueryParam(key, value) {
        const encodedKey = encodeURIComponent(key);
        return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
    }
    addQueryParam(query, key) {
        return this.encodeQueryParam(key, query[key]);
    }
    addArrayQueryParam(query, key) {
        const value = query[key];
        return value.map((v) => this.encodeQueryParam(key, v)).join("&");
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    contentFormatters = {
        [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
        [ContentType.Text]: (input) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
        [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            formData.append(key, property instanceof Blob
                ? property
                : typeof property === "object" && property !== null
                    ? JSON.stringify(property)
                    : `${property}`);
            return formData;
        }, new FormData()),
        [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
    };
    mergeRequestParams(params1, params2) {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
    createAbortSignal = (cancelToken) => {
        if (this.abortControllers.has(cancelToken)) {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                return abortController.signal;
            }
            return void 0;
        }
        const abortController = new AbortController();
        this.abortControllers.set(cancelToken, abortController);
        return abortController.signal;
    };
    abortRequest = (cancelToken) => {
        const abortController = this.abortControllers.get(cancelToken);
        if (abortController) {
            abortController.abort();
            this.abortControllers.delete(cancelToken);
        }
    };
    request = async ({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }) => {
        const secureParams = ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
            this.securityWorker &&
            (await this.securityWorker(this.securityData))) ||
            {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const queryString = query && this.toQueryString(query);
        const payloadFormatter = this.contentFormatters[type || ContentType.Json];
        const responseFormat = format || requestParams.format;
        return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
            },
            signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
            body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
        }).then(async (response) => {
            const r = response;
            r.data = null;
            r.error = null;
            const data = !responseFormat
                ? r
                : await response[responseFormat]()
                    .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
                        r.error = data;
                    }
                    return r;
                })
                    .catch((e) => {
                    r.error = e;
                    return r;
                });
            if (cancelToken) {
                this.abortControllers.delete(cancelToken);
            }
            if (!response.ok)
                throw data;
            return data.data;
        });
    };
}
exports.HttpClient = HttpClient;
/**
 * @title REST api to TON blockchain explorer
 * @version 2.0.0
 * @baseUrl https://tonapi.io
 * @contact Support <support@tonkeeper.com>
 *
 * Provide access to indexed TON blockchain
 */
class Api {
    http;
    constructor(http) {
        this.http = http;
    }
    blockchain = {
        /**
         * @description Get blockchain block data
         *
         * @tags Blockchain
         * @name GetBlockchainBlock
         * @request GET:/v2/blockchain/blocks/{block_id}
         */
        getBlockchainBlock: (blockId, params = {}) => this.http.request({
            path: `/v2/blockchain/blocks/${blockId}`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get blockchain block shards
         *
         * @tags Blockchain
         * @name GetBlockchainMasterchainShards
         * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/shards
         */
        getBlockchainMasterchainShards: (masterchainSeqno, params = {}) => this.http.request({
            path: `/v2/blockchain/masterchain/${masterchainSeqno}/shards`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get all blocks in all shards and workchains between target and previous masterchain block according to shards last blocks snapshot in masterchain.  We don't recommend to build your app around this method because it has problem with scalability and will work very slow in the future.
         *
         * @tags Blockchain
         * @name GetBlockchainMasterchainBlocks
         * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/blocks
         */
        getBlockchainMasterchainBlocks: (masterchainSeqno, params = {}) => this.http.request({
            path: `/v2/blockchain/masterchain/${masterchainSeqno}/blocks`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get all transactions in all shards and workchains between target and previous masterchain block according to shards last blocks snapshot in masterchain. We don't recommend to build your app around this method because it has problem with scalability and will work very slow in the future.
         *
         * @tags Blockchain
         * @name GetBlockchainMasterchainTransactions
         * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/transactions
         */
        getBlockchainMasterchainTransactions: (masterchainSeqno, params = {}) => this.http.request({
            path: `/v2/blockchain/masterchain/${masterchainSeqno}/transactions`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get blockchain config from a specific block, if present.
         *
         * @tags Blockchain
         * @name GetBlockchainConfigFromBlock
         * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/config
         */
        getBlockchainConfigFromBlock: (masterchainSeqno, params = {}) => this.http.request({
            path: `/v2/blockchain/masterchain/${masterchainSeqno}/config`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get raw blockchain config from a specific block, if present.
         *
         * @tags Blockchain
         * @name GetRawBlockchainConfigFromBlock
         * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/config/raw
         */
        getRawBlockchainConfigFromBlock: (masterchainSeqno, params = {}) => this.http.request({
            path: `/v2/blockchain/masterchain/${masterchainSeqno}/config/raw`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get transactions from block
         *
         * @tags Blockchain
         * @name GetBlockchainBlockTransactions
         * @request GET:/v2/blockchain/blocks/{block_id}/transactions
         */
        getBlockchainBlockTransactions: (blockId, params = {}) => this.http.request({
            path: `/v2/blockchain/blocks/${blockId}/transactions`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get transaction data
         *
         * @tags Blockchain
         * @name GetBlockchainTransaction
         * @request GET:/v2/blockchain/transactions/{transaction_id}
         */
        getBlockchainTransaction: (transactionId, params = {}) => this.http.request({
            path: `/v2/blockchain/transactions/${transactionId}`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get transaction data by message hash
         *
         * @tags Blockchain
         * @name GetBlockchainTransactionByMessageHash
         * @request GET:/v2/blockchain/messages/{msg_id}/transaction
         */
        getBlockchainTransactionByMessageHash: (msgId, params = {}) => this.http.request({
            path: `/v2/blockchain/messages/${msgId}/transaction`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get blockchain validators
         *
         * @tags Blockchain
         * @name GetBlockchainValidators
         * @request GET:/v2/blockchain/validators
         */
        getBlockchainValidators: (params = {}) => this.http.request({
            path: `/v2/blockchain/validators`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get last known masterchain block
         *
         * @tags Blockchain
         * @name GetBlockchainMasterchainHead
         * @request GET:/v2/blockchain/masterchain-head
         */
        getBlockchainMasterchainHead: (params = {}) => this.http.request({
            path: `/v2/blockchain/masterchain-head`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get low-level information about an account taken directly from the blockchain.
         *
         * @tags Blockchain
         * @name GetBlockchainRawAccount
         * @request GET:/v2/blockchain/accounts/{account_id}
         */
        getBlockchainRawAccount: (accountId, params = {}) => this.http.request({
            path: `/v2/blockchain/accounts/${accountId}`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get account transactions
         *
         * @tags Blockchain
         * @name GetBlockchainAccountTransactions
         * @request GET:/v2/blockchain/accounts/{account_id}/transactions
         */
        getBlockchainAccountTransactions: (accountId, query, params = {}) => this.http.request({
            path: `/v2/blockchain/accounts/${accountId}/transactions`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Execute get method for account
         *
         * @tags Blockchain
         * @name ExecGetMethodForBlockchainAccount
         * @request GET:/v2/blockchain/accounts/{account_id}/methods/{method_name}
         */
        execGetMethodForBlockchainAccount: (accountId, methodName, query, params = {}) => this.http.request({
            path: `/v2/blockchain/accounts/${accountId}/methods/${methodName}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Send message to blockchain
         *
         * @tags Blockchain
         * @name SendBlockchainMessage
         * @request POST:/v2/blockchain/message
         */
        sendBlockchainMessage: (data, params = {}) => this.http.request({
            path: `/v2/blockchain/message`,
            method: "POST",
            body: data,
            ...params,
        }),
        /**
         * @description Get blockchain config
         *
         * @tags Blockchain
         * @name GetBlockchainConfig
         * @request GET:/v2/blockchain/config
         */
        getBlockchainConfig: (params = {}) => this.http.request({
            path: `/v2/blockchain/config`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get raw blockchain config
         *
         * @tags Blockchain
         * @name GetRawBlockchainConfig
         * @request GET:/v2/blockchain/config/raw
         */
        getRawBlockchainConfig: (params = {}) => this.http.request({
            path: `/v2/blockchain/config/raw`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Blockchain account inspect
         *
         * @tags Blockchain
         * @name BlockchainAccountInspect
         * @request GET:/v2/blockchain/accounts/{account_id}/inspect
         */
        blockchainAccountInspect: (accountId, params = {}) => this.http.request({
            path: `/v2/blockchain/accounts/${accountId}/inspect`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    emulation = {
        /**
         * @description Decode a given message. Only external incoming messages can be decoded currently.
         *
         * @tags Emulation
         * @name DecodeMessage
         * @request POST:/v2/message/decode
         */
        decodeMessage: (data, params = {}) => this.http.request({
            path: `/v2/message/decode`,
            method: "POST",
            body: data,
            format: "json",
            ...params,
        }),
        /**
         * @description Emulate sending message to blockchain
         *
         * @tags Emulation
         * @name EmulateMessageToEvent
         * @request POST:/v2/events/emulate
         */
        emulateMessageToEvent: (data, query, params = {}) => this.http.request({
            path: `/v2/events/emulate`,
            method: "POST",
            query: query,
            body: data,
            format: "json",
            ...params,
        }),
        /**
         * @description Emulate sending message to blockchain
         *
         * @tags Emulation
         * @name EmulateMessageToTrace
         * @request POST:/v2/traces/emulate
         */
        emulateMessageToTrace: (data, query, params = {}) => this.http.request({
            path: `/v2/traces/emulate`,
            method: "POST",
            query: query,
            body: data,
            format: "json",
            ...params,
        }),
        /**
         * @description Emulate sending message to blockchain
         *
         * @tags Emulation
         * @name EmulateMessageToWallet
         * @request POST:/v2/wallet/emulate
         */
        emulateMessageToWallet: (data, params = {}) => this.http.request({
            path: `/v2/wallet/emulate`,
            method: "POST",
            body: data,
            format: "json",
            ...params,
        }),
        /**
         * @description Emulate sending message to blockchain
         *
         * @tags Emulation
         * @name EmulateMessageToAccountEvent
         * @request POST:/v2/accounts/{account_id}/events/emulate
         */
        emulateMessageToAccountEvent: (accountId, data, params = {}) => this.http.request({
            path: `/v2/accounts/${accountId}/events/emulate`,
            method: "POST",
            body: data,
            format: "json",
            ...params,
        }),
    };
    accounts = {
        /**
         * @description parse address and display in all formats
         *
         * @tags Accounts
         * @name AddressParse
         * @request GET:/v2/address/{account_id}/parse
         */
        addressParse: (accountId, params = {}) => this.http.request({
            path: `/v2/address/${accountId}/parse`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get human-friendly information about several accounts without low-level details.
         *
         * @tags Accounts
         * @name GetAccounts
         * @request POST:/v2/accounts/_bulk
         */
        getAccounts: (data, params = {}) => this.http.request({
            path: `/v2/accounts/_bulk`,
            method: "POST",
            body: data,
            format: "json",
            ...params,
        }),
        /**
         * @description Get human-friendly information about an account without low-level details.
         *
         * @tags Accounts
         * @name GetAccount
         * @request GET:/v2/accounts/{account_id}
         */
        getAccount: (accountId, params = {}) => this.http.request({
            path: `/v2/accounts/${accountId}`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get account's domains
         *
         * @tags Accounts
         * @name AccountDnsBackResolve
         * @request GET:/v2/accounts/{account_id}/dns/backresolve
         */
        accountDnsBackResolve: (accountId, params = {}) => this.http.request({
            path: `/v2/accounts/${accountId}/dns/backresolve`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get all Jettons balances by owner address
         *
         * @tags Accounts
         * @name GetAccountJettonsBalances
         * @request GET:/v2/accounts/{account_id}/jettons
         */
        getAccountJettonsBalances: (accountId, query, params = {}) => this.http.request({
            path: `/v2/accounts/${accountId}/jettons`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get the transfer jettons history for account
         *
         * @tags Accounts
         * @name GetAccountJettonsHistory
         * @request GET:/v2/accounts/{account_id}/jettons/history
         */
        getAccountJettonsHistory: (accountId, query, params = {}) => this.http.request({
            path: `/v2/accounts/${accountId}/jettons/history`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get the transfer jetton history for account and jetton
         *
         * @tags Accounts
         * @name GetAccountJettonHistoryById
         * @request GET:/v2/accounts/{account_id}/jettons/{jetton_id}/history
         */
        getAccountJettonHistoryById: (accountId, jettonId, query, params = {}) => this.http.request({
            path: `/v2/accounts/${accountId}/jettons/${jettonId}/history`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get all NFT items by owner address
         *
         * @tags Accounts
         * @name GetAccountNftItems
         * @request GET:/v2/accounts/{account_id}/nfts
         */
        getAccountNftItems: (accountId, query, params = {}) => this.http.request({
            path: `/v2/accounts/${accountId}/nfts`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get events for an account. Each event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
         *
         * @tags Accounts
         * @name GetAccountEvents
         * @request GET:/v2/accounts/{account_id}/events
         */
        getAccountEvents: (accountId, query, params = {}) => this.http.request({
            path: `/v2/accounts/${accountId}/events`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get event for an account by event_id
         *
         * @tags Accounts
         * @name GetAccountEvent
         * @request GET:/v2/accounts/{account_id}/events/{event_id}
         */
        getAccountEvent: (accountId, eventId, query, params = {}) => this.http.request({
            path: `/v2/accounts/${accountId}/events/${eventId}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get traces for account
         *
         * @tags Accounts
         * @name GetAccountTraces
         * @request GET:/v2/accounts/{account_id}/traces
         */
        getAccountTraces: (accountId, query, params = {}) => this.http.request({
            path: `/v2/accounts/${accountId}/traces`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get all subscriptions by wallet address
         *
         * @tags Accounts
         * @name GetAccountSubscriptions
         * @request GET:/v2/accounts/{account_id}/subscriptions
         */
        getAccountSubscriptions: (accountId, params = {}) => this.http.request({
            path: `/v2/accounts/${accountId}/subscriptions`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Update internal cache for a particular account
         *
         * @tags Accounts
         * @name ReindexAccount
         * @request POST:/v2/accounts/{account_id}/reindex
         */
        reindexAccount: (accountId, params = {}) => this.http.request({
            path: `/v2/accounts/${accountId}/reindex`,
            method: "POST",
            ...params,
        }),
        /**
         * @description Search by account domain name
         *
         * @tags Accounts
         * @name SearchAccounts
         * @request GET:/v2/accounts/search
         */
        searchAccounts: (query, params = {}) => this.http.request({
            path: `/v2/accounts/search`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get expiring account .ton dns
         *
         * @tags Accounts
         * @name GetAccountDnsExpiring
         * @request GET:/v2/accounts/{account_id}/dns/expiring
         */
        getAccountDnsExpiring: (accountId, query, params = {}) => this.http.request({
            path: `/v2/accounts/${accountId}/dns/expiring`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get public key by account id
         *
         * @tags Accounts
         * @name GetAccountPublicKey
         * @request GET:/v2/accounts/{account_id}/publickey
         */
        getAccountPublicKey: (accountId, params = {}) => this.http.request({
            path: `/v2/accounts/${accountId}/publickey`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get account's balance change
         *
         * @tags Accounts
         * @name GetAccountDiff
         * @request GET:/v2/accounts/{account_id}/diff
         */
        getAccountDiff: (accountId, query, params = {}) => this.http.request({
            path: `/v2/accounts/${accountId}/diff`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
    };
    nft = {
        /**
         * @description Get the transfer nft history
         *
         * @tags NFT
         * @name GetAccountNftHistory
         * @request GET:/v2/accounts/{account_id}/nfts/history
         */
        getAccountNftHistory: (accountId, query, params = {}) => this.http.request({
            path: `/v2/accounts/${accountId}/nfts/history`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get NFT collections
         *
         * @tags NFT
         * @name GetNftCollections
         * @request GET:/v2/nfts/collections
         */
        getNftCollections: (query, params = {}) => this.http.request({
            path: `/v2/nfts/collections`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get NFT collection by collection address
         *
         * @tags NFT
         * @name GetNftCollection
         * @request GET:/v2/nfts/collections/{account_id}
         */
        getNftCollection: (accountId, params = {}) => this.http.request({
            path: `/v2/nfts/collections/${accountId}`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get NFT items from collection by collection address
         *
         * @tags NFT
         * @name GetItemsFromCollection
         * @request GET:/v2/nfts/collections/{account_id}/items
         */
        getItemsFromCollection: (accountId, query, params = {}) => this.http.request({
            path: `/v2/nfts/collections/${accountId}/items`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get NFT items by their addresses
         *
         * @tags NFT
         * @name GetNftItemsByAddresses
         * @request POST:/v2/nfts/_bulk
         */
        getNftItemsByAddresses: (data, params = {}) => this.http.request({
            path: `/v2/nfts/_bulk`,
            method: "POST",
            body: data,
            format: "json",
            ...params,
        }),
        /**
         * @description Get NFT item by its address
         *
         * @tags NFT
         * @name GetNftItemByAddress
         * @request GET:/v2/nfts/{account_id}
         */
        getNftItemByAddress: (accountId, params = {}) => this.http.request({
            path: `/v2/nfts/${accountId}`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get the transfer nfts history for account
         *
         * @tags NFT
         * @name GetNftHistoryById
         * @request GET:/v2/nfts/{account_id}/history
         */
        getNftHistoryById: (accountId, query, params = {}) => this.http.request({
            path: `/v2/nfts/${accountId}/history`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
    };
    dns = {
        /**
         * @description Get full information about domain name
         *
         * @tags DNS
         * @name GetDnsInfo
         * @request GET:/v2/dns/{domain_name}
         */
        getDnsInfo: (domainName, params = {}) => this.http.request({
            path: `/v2/dns/${domainName}`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description DNS resolve for domain name
         *
         * @tags DNS
         * @name DnsResolve
         * @request GET:/v2/dns/{domain_name}/resolve
         */
        dnsResolve: (domainName, params = {}) => this.http.request({
            path: `/v2/dns/${domainName}/resolve`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get domain bids
         *
         * @tags DNS
         * @name GetDomainBids
         * @request GET:/v2/dns/{domain_name}/bids
         */
        getDomainBids: (domainName, params = {}) => this.http.request({
            path: `/v2/dns/${domainName}/bids`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get all auctions
         *
         * @tags DNS
         * @name GetAllAuctions
         * @request GET:/v2/dns/auctions
         */
        getAllAuctions: (query, params = {}) => this.http.request({
            path: `/v2/dns/auctions`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
    };
    traces = {
        /**
         * @description Get the trace by trace ID or hash of any transaction in trace
         *
         * @tags Traces
         * @name GetTrace
         * @request GET:/v2/traces/{trace_id}
         */
        getTrace: (traceId, params = {}) => this.http.request({
            path: `/v2/traces/${traceId}`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    events = {
        /**
         * @description Get an event either by event ID or a hash of any transaction in a trace. An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
         *
         * @tags Events
         * @name GetEvent
         * @request GET:/v2/events/{event_id}
         */
        getEvent: (eventId, params = {}) => this.http.request({
            path: `/v2/events/${eventId}`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    jettons = {
        /**
         * @description Get a list of all indexed jetton masters in the blockchain.
         *
         * @tags Jettons
         * @name GetJettons
         * @request GET:/v2/jettons
         */
        getJettons: (query, params = {}) => this.http.request({
            path: `/v2/jettons`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get jetton metadata by jetton master address
         *
         * @tags Jettons
         * @name GetJettonInfo
         * @request GET:/v2/jettons/{account_id}
         */
        getJettonInfo: (accountId, params = {}) => this.http.request({
            path: `/v2/jettons/${accountId}`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get jetton's holders
         *
         * @tags Jettons
         * @name GetJettonHolders
         * @request GET:/v2/jettons/{account_id}/holders
         */
        getJettonHolders: (accountId, query, params = {}) => this.http.request({
            path: `/v2/jettons/${accountId}/holders`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get only jetton transfers in the event
         *
         * @tags Jettons
         * @name GetJettonsEvents
         * @request GET:/v2/events/{event_id}/jettons
         */
        getJettonsEvents: (eventId, params = {}) => this.http.request({
            path: `/v2/events/${eventId}/jettons`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    staking = {
        /**
         * @description All pools where account participates
         *
         * @tags Staking
         * @name GetAccountNominatorsPools
         * @request GET:/v2/staking/nominator/{account_id}/pools
         */
        getAccountNominatorsPools: (accountId, params = {}) => this.http.request({
            path: `/v2/staking/nominator/${accountId}/pools`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Stacking pool info
         *
         * @tags Staking
         * @name GetStakingPoolInfo
         * @request GET:/v2/staking/pool/{account_id}
         */
        getStakingPoolInfo: (accountId, params = {}) => this.http.request({
            path: `/v2/staking/pool/${accountId}`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Pool history
         *
         * @tags Staking
         * @name GetStakingPoolHistory
         * @request GET:/v2/staking/pool/{account_id}/history
         */
        getStakingPoolHistory: (accountId, params = {}) => this.http.request({
            path: `/v2/staking/pool/${accountId}/history`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description All pools available in network
         *
         * @tags Staking
         * @name GetStakingPools
         * @request GET:/v2/staking/pools
         */
        getStakingPools: (query, params = {}) => this.http.request({
            path: `/v2/staking/pools`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
    };
    storage = {
        /**
         * @description Get TON storage providers deployed to the blockchain.
         *
         * @tags Storage
         * @name GetStorageProviders
         * @request GET:/v2/storage/providers
         */
        getStorageProviders: (params = {}) => this.http.request({
            path: `/v2/storage/providers`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    rates = {
        /**
         * @description Get the token price to the currency
         *
         * @tags Rates
         * @name GetRates
         * @request GET:/v2/rates
         */
        getRates: (query, params = {}) => this.http.request({
            path: `/v2/rates`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get chart by token
         *
         * @tags Rates
         * @name GetChartRates
         * @request GET:/v2/rates/chart
         */
        getChartRates: (query, params = {}) => this.http.request({
            path: `/v2/rates/chart`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
    };
    connect = {
        /**
         * @description Get a payload for further token receipt
         *
         * @tags Connect
         * @name GetTonConnectPayload
         * @request GET:/v2/tonconnect/payload
         */
        getTonConnectPayload: (params = {}) => this.http.request({
            path: `/v2/tonconnect/payload`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get account info by state init
         *
         * @tags Connect
         * @name GetAccountInfoByStateInit
         * @request POST:/v2/tonconnect/stateinit
         */
        getAccountInfoByStateInit: (data, params = {}) => this.http.request({
            path: `/v2/tonconnect/stateinit`,
            method: "POST",
            body: data,
            format: "json",
            ...params,
        }),
    };
    wallet = {
        /**
         * @description Get backup info
         *
         * @tags Wallet
         * @name GetWalletBackup
         * @request GET:/v2/wallet/backup
         */
        getWalletBackup: (params = {}) => this.http.request({
            path: `/v2/wallet/backup`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Set backup info
         *
         * @tags Wallet
         * @name SetWalletBackup
         * @request PUT:/v2/wallet/backup
         */
        setWalletBackup: (data, params = {}) => this.http.request({
            path: `/v2/wallet/backup`,
            method: "PUT",
            body: data,
            ...params,
        }),
        /**
         * @description Account verification and token issuance
         *
         * @tags Wallet
         * @name TonConnectProof
         * @request POST:/v2/wallet/auth/proof
         */
        tonConnectProof: (data, params = {}) => this.http.request({
            path: `/v2/wallet/auth/proof`,
            method: "POST",
            body: data,
            format: "json",
            ...params,
        }),
        /**
         * @description Get wallets by public key
         *
         * @tags Wallet
         * @name GetWalletsByPublicKey
         * @request GET:/v2/pubkeys/{public_key}/wallets
         */
        getWalletsByPublicKey: (publicKey, params = {}) => this.http.request({
            path: `/v2/pubkeys/${publicKey}/wallets`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get account seqno
         *
         * @tags Wallet
         * @name GetAccountSeqno
         * @request GET:/v2/wallet/{account_id}/seqno
         */
        getAccountSeqno: (accountId, params = {}) => this.http.request({
            path: `/v2/wallet/${accountId}/seqno`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
    liteServer = {
        /**
         * @description Get raw masterchain info
         *
         * @tags Lite Server
         * @name GetRawMasterchainInfo
         * @request GET:/v2/liteserver/get_masterchain_info
         */
        getRawMasterchainInfo: (params = {}) => this.http.request({
            path: `/v2/liteserver/get_masterchain_info`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get raw masterchain info ext
         *
         * @tags Lite Server
         * @name GetRawMasterchainInfoExt
         * @request GET:/v2/liteserver/get_masterchain_info_ext
         */
        getRawMasterchainInfoExt: (query, params = {}) => this.http.request({
            path: `/v2/liteserver/get_masterchain_info_ext`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get raw time
         *
         * @tags Lite Server
         * @name GetRawTime
         * @request GET:/v2/liteserver/get_time
         */
        getRawTime: (params = {}) => this.http.request({
            path: `/v2/liteserver/get_time`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get raw blockchain block
         *
         * @tags Lite Server
         * @name GetRawBlockchainBlock
         * @request GET:/v2/liteserver/get_block/{block_id}
         */
        getRawBlockchainBlock: (blockId, params = {}) => this.http.request({
            path: `/v2/liteserver/get_block/${blockId}`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get raw blockchain block state
         *
         * @tags Lite Server
         * @name GetRawBlockchainBlockState
         * @request GET:/v2/liteserver/get_state/{block_id}
         */
        getRawBlockchainBlockState: (blockId, params = {}) => this.http.request({
            path: `/v2/liteserver/get_state/${blockId}`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get raw blockchain block header
         *
         * @tags Lite Server
         * @name GetRawBlockchainBlockHeader
         * @request GET:/v2/liteserver/get_block_header/{block_id}
         */
        getRawBlockchainBlockHeader: (blockId, query, params = {}) => this.http.request({
            path: `/v2/liteserver/get_block_header/${blockId}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Send raw message to blockchain
         *
         * @tags Lite Server
         * @name SendRawMessage
         * @request POST:/v2/liteserver/send_message
         */
        sendRawMessage: (data, params = {}) => this.http.request({
            path: `/v2/liteserver/send_message`,
            method: "POST",
            body: data,
            format: "json",
            ...params,
        }),
        /**
         * @description Get raw account state
         *
         * @tags Lite Server
         * @name GetRawAccountState
         * @request GET:/v2/liteserver/get_account_state/{account_id}
         */
        getRawAccountState: (accountId, query, params = {}) => this.http.request({
            path: `/v2/liteserver/get_account_state/${accountId}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get raw shard info
         *
         * @tags Lite Server
         * @name GetRawShardInfo
         * @request GET:/v2/liteserver/get_shard_info/{block_id}
         */
        getRawShardInfo: (blockId, query, params = {}) => this.http.request({
            path: `/v2/liteserver/get_shard_info/${blockId}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get all raw shards info
         *
         * @tags Lite Server
         * @name GetAllRawShardsInfo
         * @request GET:/v2/liteserver/get_all_shards_info/{block_id}
         */
        getAllRawShardsInfo: (blockId, params = {}) => this.http.request({
            path: `/v2/liteserver/get_all_shards_info/${blockId}`,
            method: "GET",
            format: "json",
            ...params,
        }),
        /**
         * @description Get raw transactions
         *
         * @tags Lite Server
         * @name GetRawTransactions
         * @request GET:/v2/liteserver/get_transactions/{account_id}
         */
        getRawTransactions: (accountId, query, params = {}) => this.http.request({
            path: `/v2/liteserver/get_transactions/${accountId}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get raw list block transactions
         *
         * @tags Lite Server
         * @name GetRawListBlockTransactions
         * @request GET:/v2/liteserver/list_block_transactions/{block_id}
         */
        getRawListBlockTransactions: (blockId, query, params = {}) => this.http.request({
            path: `/v2/liteserver/list_block_transactions/${blockId}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get raw block proof
         *
         * @tags Lite Server
         * @name GetRawBlockProof
         * @request GET:/v2/liteserver/get_block_proof
         */
        getRawBlockProof: (query, params = {}) => this.http.request({
            path: `/v2/liteserver/get_block_proof`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get raw config
         *
         * @tags Lite Server
         * @name GetRawConfig
         * @request GET:/v2/liteserver/get_config_all/{block_id}
         */
        getRawConfig: (blockId, query, params = {}) => this.http.request({
            path: `/v2/liteserver/get_config_all/${blockId}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        }),
        /**
         * @description Get raw shard block proof
         *
         * @tags Lite Server
         * @name GetRawShardBlockProof
         * @request GET:/v2/liteserver/get_shard_block_proof/{block_id}
         */
        getRawShardBlockProof: (blockId, params = {}) => this.http.request({
            path: `/v2/liteserver/get_shard_block_proof/${blockId}`,
            method: "GET",
            format: "json",
            ...params,
        }),
    };
}
exports.Api = Api;
