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
exports.AccountToJSON = exports.AccountFromJSONTyped = exports.AccountFromJSON = exports.instanceOfAccount = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the Account interface.
 */
function instanceOfAccount(value) {
    let isInstance = true;
    isInstance = isInstance && "balance" in value;
    isInstance = isInstance && "status" in value;
    return isInstance;
}
exports.instanceOfAccount = instanceOfAccount;
function AccountFromJSON(json) {
    return AccountFromJSONTyped(json, false);
}
exports.AccountFromJSON = AccountFromJSON;
function AccountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'balance': json['balance'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : json['data'],
        'status': json['status'],
    };
}
exports.AccountFromJSONTyped = AccountFromJSONTyped;
function AccountToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'balance': value.balance,
        'code': value.code,
        'data': value.data,
        'status': value.status,
    };
}
exports.AccountToJSON = AccountToJSON;
