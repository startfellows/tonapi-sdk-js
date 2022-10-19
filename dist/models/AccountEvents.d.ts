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
import type { AccountEvent } from './AccountEvent';
/**
 *
 * @export
 * @interface AccountEvents
 */
export interface AccountEvents {
    /**
     *
     * @type {Array<AccountEvent>}
     * @memberof AccountEvents
     */
    events: Array<AccountEvent>;
}
/**
 * Check if a given object implements the AccountEvents interface.
 */
export declare function instanceOfAccountEvents(value: object): boolean;
export declare function AccountEventsFromJSON(json: any): AccountEvents;
export declare function AccountEventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountEvents;
export declare function AccountEventsToJSON(value?: AccountEvents | null): any;