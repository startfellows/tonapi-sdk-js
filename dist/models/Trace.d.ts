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
/**
 *
 * @export
 * @interface Trace
 */
export interface Trace {
    /**
     *
     * @type {string}
     * @memberof Trace
     */
    id: string;
    /**
     *
     * @type {number}
     * @memberof Trace
     */
    utime: number;
}
/**
 * Check if a given object implements the Trace interface.
 */
export declare function instanceOfTrace(value: object): boolean;
export declare function TraceFromJSON(json: any): Trace;
export declare function TraceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Trace;
export declare function TraceToJSON(value?: Trace | null): any;
