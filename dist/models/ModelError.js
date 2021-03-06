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
exports.ModelErrorToJSON = exports.ModelErrorFromJSONTyped = exports.ModelErrorFromJSON = exports.instanceOfModelError = void 0;
/**
 * Check if a given object implements the ModelError interface.
 */
function instanceOfModelError(value) {
    let isInstance = true;
    isInstance = isInstance && "error" in value;
    return isInstance;
}
exports.instanceOfModelError = instanceOfModelError;
function ModelErrorFromJSON(json) {
    return ModelErrorFromJSONTyped(json, false);
}
exports.ModelErrorFromJSON = ModelErrorFromJSON;
function ModelErrorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': json['error'],
    };
}
exports.ModelErrorFromJSONTyped = ModelErrorFromJSONTyped;
function ModelErrorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'error': value.error,
    };
}
exports.ModelErrorToJSON = ModelErrorToJSON;
