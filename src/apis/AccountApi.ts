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


import * as runtime from '../runtime';
import type {
  AccountRepr,
  AccountReprs,
} from '../models';
import {
    AccountReprFromJSON,
    AccountReprToJSON,
    AccountReprsFromJSON,
    AccountReprsToJSON,
} from '../models';

export interface GetAccountInfoRequest {
    account: string;
}

export interface GetBulkAccountInfoRequest {
    addresses: Array<string>;
}

/**
 * AccountApi - interface
 * 
 * @export
 * @interface AccountApiInterface
 */
export interface AccountApiInterface {
    /**
     * Get info about account
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    getAccountInfoRaw(requestParameters: GetAccountInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountRepr>>;

    /**
     * Get info about account
     */
    getAccountInfo(requestParameters: GetAccountInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountRepr>;

    /**
     * Get info about few accounts account by one request
     * @param {Array<string>} addresses accounts addresses in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    getBulkAccountInfoRaw(requestParameters: GetBulkAccountInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountReprs>>;

    /**
     * Get info about few accounts account by one request
     */
    getBulkAccountInfo(requestParameters: GetBulkAccountInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountReprs>;

}

/**
 * 
 */
export class AccountApi extends runtime.BaseAPI implements AccountApiInterface {

    /**
     * Get info about account
     */
    async getAccountInfoRaw(requestParameters: GetAccountInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountRepr>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling getAccountInfo.');
        }

        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/account/getInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountReprFromJSON(jsonValue));
    }

    /**
     * Get info about account
     */
    async getAccountInfo(requestParameters: GetAccountInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountRepr> {
        const response = await this.getAccountInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get info about few accounts account by one request
     */
    async getBulkAccountInfoRaw(requestParameters: GetBulkAccountInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountReprs>> {
        if (requestParameters.addresses === null || requestParameters.addresses === undefined) {
            throw new runtime.RequiredError('addresses','Required parameter requestParameters.addresses was null or undefined when calling getBulkAccountInfo.');
        }

        const queryParameters: any = {};

        if (requestParameters.addresses) {
            queryParameters['addresses'] = requestParameters.addresses.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("JWTAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/account/getBulkInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountReprsFromJSON(jsonValue));
    }

    /**
     * Get info about few accounts account by one request
     */
    async getBulkAccountInfo(requestParameters: GetBulkAccountInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountReprs> {
        const response = await this.getBulkAccountInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
