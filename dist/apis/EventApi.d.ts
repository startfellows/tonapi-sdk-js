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
import type { AccountEvents200Response, Event } from '../models';
export interface AccountEventsRequest {
    account: string;
    limit: number;
    beforeLt?: number;
}
export interface GetEventRequest {
    eventId: string;
}
/**
 * EventApi - interface
 *
 * @export
 * @interface EventApiInterface
 */
export interface EventApiInterface {
    /**
     * Get events for account
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {number} limit
     * @param {number} [beforeLt] omit this parameter to get last events
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApiInterface
     */
    accountEventsRaw(requestParameters: AccountEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountEvents200Response>>;
    /**
     * Get events for account
     */
    accountEvents(requestParameters: AccountEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountEvents200Response>;
    /**
     * Get the event by event ID or hash of any transaction in trace
     * @param {string} eventId event ID or transaction hash in hex (without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApiInterface
     */
    getEventRaw(requestParameters: GetEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>>;
    /**
     * Get the event by event ID or hash of any transaction in trace
     */
    getEvent(requestParameters: GetEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event>;
}
/**
 *
 */
export declare class EventApi extends runtime.BaseAPI implements EventApiInterface {
    /**
     * Get events for account
     */
    accountEventsRaw(requestParameters: AccountEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountEvents200Response>>;
    /**
     * Get events for account
     */
    accountEvents(requestParameters: AccountEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountEvents200Response>;
    /**
     * Get the event by event ID or hash of any transaction in trace
     */
    getEventRaw(requestParameters: GetEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>>;
    /**
     * Get the event by event ID or hash of any transaction in trace
     */
    getEvent(requestParameters: GetEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event>;
}
