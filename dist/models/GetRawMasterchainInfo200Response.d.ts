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
import type { BlockRaw } from './BlockRaw';
import type { InitStateRaw } from './InitStateRaw';
/**
 *
 * @export
 * @interface GetRawMasterchainInfo200Response
 */
export interface GetRawMasterchainInfo200Response {
    /**
     *
     * @type {BlockRaw}
     * @memberof GetRawMasterchainInfo200Response
     */
    last: BlockRaw;
    /**
     *
     * @type {string}
     * @memberof GetRawMasterchainInfo200Response
     */
    stateRootHash: string;
    /**
     *
     * @type {InitStateRaw}
     * @memberof GetRawMasterchainInfo200Response
     */
    init: InitStateRaw;
}
/**
 * Check if a given object implements the GetRawMasterchainInfo200Response interface.
 */
export declare function instanceOfGetRawMasterchainInfo200Response(value: object): boolean;
export declare function GetRawMasterchainInfo200ResponseFromJSON(json: any): GetRawMasterchainInfo200Response;
export declare function GetRawMasterchainInfo200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRawMasterchainInfo200Response;
export declare function GetRawMasterchainInfo200ResponseToJSON(value?: GetRawMasterchainInfo200Response | null): any;