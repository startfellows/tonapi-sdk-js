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
exports.TraceToJSON = exports.TraceFromJSONTyped = exports.TraceFromJSON = exports.instanceOfTrace = void 0;
/**
 * Check if a given object implements the Trace interface.
 */
function instanceOfTrace(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "utime" in value;
    return isInstance;
}
exports.instanceOfTrace = instanceOfTrace;
function TraceFromJSON(json) {
    return TraceFromJSONTyped(json, false);
}
exports.TraceFromJSON = TraceFromJSON;
function TraceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'utime': json['utime'],
    };
}
exports.TraceFromJSONTyped = TraceFromJSONTyped;
function TraceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'utime': value.utime,
    };
}
exports.TraceToJSON = TraceToJSON;
