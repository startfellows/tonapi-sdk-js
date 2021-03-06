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
exports.AccountEventToJSON = exports.AccountEventFromJSONTyped = exports.AccountEventFromJSON = exports.instanceOfAccountEvent = void 0;
const AccountAddress_1 = require("./AccountAddress");
const Action_1 = require("./Action");
const Fee_1 = require("./Fee");
/**
 * Check if a given object implements the AccountEvent interface.
 */
function instanceOfAccountEvent(value) {
    let isInstance = true;
    isInstance = isInstance && "account" in value;
    isInstance = isInstance && "actions" in value;
    isInstance = isInstance && "eventId" in value;
    isInstance = isInstance && "fee" in value;
    isInstance = isInstance && "inProgress" in value;
    isInstance = isInstance && "isScam" in value;
    isInstance = isInstance && "lt" in value;
    isInstance = isInstance && "timestamp" in value;
    return isInstance;
}
exports.instanceOfAccountEvent = instanceOfAccountEvent;
function AccountEventFromJSON(json) {
    return AccountEventFromJSONTyped(json, false);
}
exports.AccountEventFromJSON = AccountEventFromJSON;
function AccountEventFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'account': (0, AccountAddress_1.AccountAddressFromJSON)(json['account']),
        'actions': (json['actions'].map(Action_1.ActionFromJSON)),
        'eventId': json['event_id'],
        'fee': (0, Fee_1.FeeFromJSON)(json['fee']),
        'inProgress': json['in_progress'],
        'isScam': json['is_scam'],
        'lt': json['lt'],
        'timestamp': json['timestamp'],
    };
}
exports.AccountEventFromJSONTyped = AccountEventFromJSONTyped;
function AccountEventToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'account': (0, AccountAddress_1.AccountAddressToJSON)(value.account),
        'actions': (value.actions.map(Action_1.ActionToJSON)),
        'event_id': value.eventId,
        'fee': (0, Fee_1.FeeToJSON)(value.fee),
        'in_progress': value.inProgress,
        'is_scam': value.isScam,
        'lt': value.lt,
        'timestamp': value.timestamp,
    };
}
exports.AccountEventToJSON = AccountEventToJSON;
