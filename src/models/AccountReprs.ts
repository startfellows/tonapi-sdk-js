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
import type { AccountRepr } from './AccountRepr';
import {
    AccountReprFromJSON,
    AccountReprFromJSONTyped,
    AccountReprToJSON,
} from './AccountRepr';

/**
 * 
 * @export
 * @interface AccountReprs
 */
export interface AccountReprs {
    /**
     * 
     * @type {Array<AccountRepr>}
     * @memberof AccountReprs
     */
    accounts: Array<AccountRepr>;
}

/**
 * Check if a given object implements the AccountReprs interface.
 */
export function instanceOfAccountReprs(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accounts" in value;

    return isInstance;
}

export function AccountReprsFromJSON(json: any): AccountReprs {
    return AccountReprsFromJSONTyped(json, false);
}

export function AccountReprsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountReprs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accounts': ((json['accounts'] as Array<any>).map(AccountReprFromJSON)),
    };
}

export function AccountReprsToJSON(value?: AccountReprs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accounts': ((value.accounts as Array<any>).map(AccountReprToJSON)),
    };
}

