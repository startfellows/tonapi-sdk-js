"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JettonBalanceToJSON = exports.JettonBalanceFromJSONTyped = exports.JettonBalanceFromJSON = exports.instanceOfJettonBalance = void 0;
const runtime_1 = require("../runtime");
const AccountAddress_1 = require("./AccountAddress");
/**
 * Check if a given object implements the JettonBalance interface.
 */
function instanceOfJettonBalance(value) {
    let isInstance = true;
    isInstance = isInstance && "balance" in value;
    isInstance = isInstance && "jettonAddress" in value;
    isInstance = isInstance && "walletAddress" in value;
    return isInstance;
}
exports.instanceOfJettonBalance = instanceOfJettonBalance;
function JettonBalanceFromJSON(json) {
    return JettonBalanceFromJSONTyped(json, false);
}
exports.JettonBalanceFromJSON = JettonBalanceFromJSON;
function JettonBalanceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'balance': json['balance'],
        'jettonAddress': json['jetton_address'],
        'metadata': !(0, runtime_1.exists)(json, 'metadata') ? undefined : json['metadata'],
        'walletAddress': (0, AccountAddress_1.AccountAddressFromJSON)(json['wallet_address']),
    };
}
exports.JettonBalanceFromJSONTyped = JettonBalanceFromJSONTyped;
function JettonBalanceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'balance': value.balance,
        'jetton_address': value.jettonAddress,
        'metadata': value.metadata,
        'wallet_address': (0, AccountAddress_1.AccountAddressToJSON)(value.walletAddress),
    };
}
exports.JettonBalanceToJSON = JettonBalanceToJSON;
