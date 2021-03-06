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
import type { Subscription } from './Subscription';
/**
 *
 * @export
 * @interface Subscriptions
 */
export interface Subscriptions {
    /**
     *
     * @type {Array<Subscription>}
     * @memberof Subscriptions
     */
    subscriptions: Array<Subscription>;
}
/**
 * Check if a given object implements the Subscriptions interface.
 */
export declare function instanceOfSubscriptions(value: object): boolean;
export declare function SubscriptionsFromJSON(json: any): Subscriptions;
export declare function SubscriptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subscriptions;
export declare function SubscriptionsToJSON(value?: Subscriptions | null): any;
