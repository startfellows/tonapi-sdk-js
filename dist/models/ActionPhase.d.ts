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
 * @interface ActionPhase
 */
export interface ActionPhase {
    /**
     *
     * @type {boolean}
     * @memberof ActionPhase
     */
    success: boolean;
    /**
     *
     * @type {number}
     * @memberof ActionPhase
     */
    totalActions: number;
    /**
     *
     * @type {number}
     * @memberof ActionPhase
     */
    skippedActions: number;
    /**
     *
     * @type {number}
     * @memberof ActionPhase
     */
    fwdFees: number;
    /**
     *
     * @type {number}
     * @memberof ActionPhase
     */
    totalFees: number;
}
/**
 * Check if a given object implements the ActionPhase interface.
 */
export declare function instanceOfActionPhase(value: object): boolean;
export declare function ActionPhaseFromJSON(json: any): ActionPhase;
export declare function ActionPhaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionPhase;
export declare function ActionPhaseToJSON(value?: ActionPhase | null): any;