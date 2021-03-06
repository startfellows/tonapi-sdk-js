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
exports.PriceToJSON = exports.PriceFromJSONTyped = exports.PriceFromJSON = exports.instanceOfPrice = void 0;
/**
 * Check if a given object implements the Price interface.
 */
function instanceOfPrice(value) {
    let isInstance = true;
    isInstance = isInstance && "tokenName" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
exports.instanceOfPrice = instanceOfPrice;
function PriceFromJSON(json) {
    return PriceFromJSONTyped(json, false);
}
exports.PriceFromJSON = PriceFromJSON;
function PriceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'tokenName': json['token_name'],
        'value': json['value'],
    };
}
exports.PriceFromJSONTyped = PriceFromJSONTyped;
function PriceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'token_name': value.tokenName,
        'value': value.value,
    };
}
exports.PriceToJSON = PriceToJSON;
