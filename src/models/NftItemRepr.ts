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
import {
    AccountAddress,
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';
import {
    Sale,
    SaleFromJSON,
    SaleFromJSONTyped,
    SaleToJSON,
} from './Sale';

/**
 * 
 * @export
 * @interface NftItemRepr
 */
export interface NftItemRepr {
    /**
     * 
     * @type {string}
     * @memberof NftItemRepr
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof NftItemRepr
     */
    collectionAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof NftItemRepr
     */
    index: number;
    /**
     * 
     * @type {any}
     * @memberof NftItemRepr
     */
    metadata?: any | null;
    /**
     * 
     * @type {AccountAddress}
     * @memberof NftItemRepr
     */
    owner?: AccountAddress;
    /**
     * 
     * @type {Sale}
     * @memberof NftItemRepr
     */
    sale?: Sale;
    /**
     * 
     * @type {boolean}
     * @memberof NftItemRepr
     */
    verified: boolean;
}

/**
 * Check if a given object implements the NftItemRepr interface.
 */
export function instanceOfNftItemRepr(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "index" in value;
    isInstance = isInstance && "verified" in value;

    return isInstance;
}

export function NftItemReprFromJSON(json: any): NftItemRepr {
    return NftItemReprFromJSONTyped(json, false);
}

export function NftItemReprFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftItemRepr {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'collectionAddress': !exists(json, 'collection_address') ? undefined : json['collection_address'],
        'index': json['index'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'owner': !exists(json, 'owner') ? undefined : AccountAddressFromJSON(json['owner']),
        'sale': !exists(json, 'sale') ? undefined : SaleFromJSON(json['sale']),
        'verified': json['verified'],
    };
}

export function NftItemReprToJSON(value?: NftItemRepr | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'collection_address': value.collectionAddress,
        'index': value.index,
        'metadata': value.metadata,
        'owner': AccountAddressToJSON(value.owner),
        'sale': SaleToJSON(value.sale),
        'verified': value.verified,
    };
}
