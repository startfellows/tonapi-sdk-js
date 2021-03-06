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
import * as runtime from '../runtime';
import type { AccountEvent, SendBocRequest } from '../models';
export interface EstimateTxRequest {
    sendBocRequest?: SendBocRequest;
}
export interface SendBocOperationRequest {
    sendBocRequest?: SendBocRequest;
}
/**
 * SendApi - interface
 *
 * @export
 * @interface SendApiInterface
 */
export interface SendApiInterface {
    /**
     * Estimate fees for message
     * @param {SendBocRequest} [sendBocRequest] bag-of-cells serialized to base64
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SendApiInterface
     */
    estimateTxRaw(requestParameters: EstimateTxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountEvent>>;
    /**
     * Estimate fees for message
     */
    estimateTx(requestParameters: EstimateTxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountEvent>;
    /**
     * Send message to blockchain
     * @param {SendBocRequest} [sendBocRequest] bag-of-cells serialized to base64
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SendApiInterface
     */
    sendBocRaw(requestParameters: SendBocOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Send message to blockchain
     */
    sendBoc(requestParameters: SendBocOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
/**
 *
 */
export declare class SendApi extends runtime.BaseAPI implements SendApiInterface {
    /**
     * Estimate fees for message
     */
    estimateTxRaw(requestParameters: EstimateTxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountEvent>>;
    /**
     * Estimate fees for message
     */
    estimateTx(requestParameters?: EstimateTxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountEvent>;
    /**
     * Send message to blockchain
     */
    sendBocRaw(requestParameters: SendBocOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Send message to blockchain
     */
    sendBoc(requestParameters?: SendBocOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
