"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRawBlockchainBlockHeader200ResponseToJSON = exports.GetRawBlockchainBlockHeader200ResponseFromJSONTyped = exports.GetRawBlockchainBlockHeader200ResponseFromJSON = exports.instanceOfGetRawBlockchainBlockHeader200Response = void 0;
const BlockRaw_1 = require("./BlockRaw");
/**
 * Check if a given object implements the GetRawBlockchainBlockHeader200Response interface.
 */
function instanceOfGetRawBlockchainBlockHeader200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "mode" in value;
    isInstance = isInstance && "headerProof" in value;
    return isInstance;
}
exports.instanceOfGetRawBlockchainBlockHeader200Response = instanceOfGetRawBlockchainBlockHeader200Response;
function GetRawBlockchainBlockHeader200ResponseFromJSON(json) {
    return GetRawBlockchainBlockHeader200ResponseFromJSONTyped(json, false);
}
exports.GetRawBlockchainBlockHeader200ResponseFromJSON = GetRawBlockchainBlockHeader200ResponseFromJSON;
function GetRawBlockchainBlockHeader200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': (0, BlockRaw_1.BlockRawFromJSON)(json['id']),
        'mode': json['mode'],
        'headerProof': json['header_proof'],
    };
}
exports.GetRawBlockchainBlockHeader200ResponseFromJSONTyped = GetRawBlockchainBlockHeader200ResponseFromJSONTyped;
function GetRawBlockchainBlockHeader200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': (0, BlockRaw_1.BlockRawToJSON)(value.id),
        'mode': value.mode,
        'header_proof': value.headerProof,
    };
}
exports.GetRawBlockchainBlockHeader200ResponseToJSON = GetRawBlockchainBlockHeader200ResponseToJSON;