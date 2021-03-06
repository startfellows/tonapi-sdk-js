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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AccountReprAddress
 */
export interface AccountReprAddress {
    /**
     * 
     * @type {string}
     * @memberof AccountReprAddress
     */
    bounceable: string;
    /**
     * 
     * @type {string}
     * @memberof AccountReprAddress
     */
    nonBounceable: string;
    /**
     * 
     * @type {string}
     * @memberof AccountReprAddress
     */
    raw: string;
}

/**
 * Check if a given object implements the AccountReprAddress interface.
 */
export function instanceOfAccountReprAddress(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "bounceable" in value;
    isInstance = isInstance && "nonBounceable" in value;
    isInstance = isInstance && "raw" in value;

    return isInstance;
}

export function AccountReprAddressFromJSON(json: any): AccountReprAddress {
    return AccountReprAddressFromJSONTyped(json, false);
}

export function AccountReprAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountReprAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bounceable': json['bounceable'],
        'nonBounceable': json['non_bounceable'],
        'raw': json['raw'],
    };
}

export function AccountReprAddressToJSON(value?: AccountReprAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bounceable': value.bounceable,
        'non_bounceable': value.nonBounceable,
        'raw': value.raw,
    };
}

