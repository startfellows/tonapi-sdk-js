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
import type { DomainInfoNftItem } from './DomainInfoNftItem';
/**
 *
 * @export
 * @interface DomainInfo
 */
export interface DomainInfo {
    /**
     *
     * @type {number}
     * @memberof DomainInfo
     */
    expiration: number;
    /**
     *
     * @type {DomainInfoNftItem}
     * @memberof DomainInfo
     */
    nftItem?: DomainInfoNftItem;
}
/**
 * Check if a given object implements the DomainInfo interface.
 */
export declare function instanceOfDomainInfo(value: object): boolean;
export declare function DomainInfoFromJSON(json: any): DomainInfo;
export declare function DomainInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainInfo;
export declare function DomainInfoToJSON(value?: DomainInfo | null): any;
