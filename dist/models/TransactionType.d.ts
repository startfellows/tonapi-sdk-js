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
 */
export declare const TransactionType: {
    readonly TransOrd: "TransOrd";
    readonly TransTickTock: "TransTickTock";
    readonly TransSplitPrepare: "TransSplitPrepare";
    readonly TransSplitInstall: "TransSplitInstall";
    readonly TransMergePrepare: "TransMergePrepare";
    readonly TransMergeInstall: "TransMergeInstall";
    readonly TransStorage: "TransStorage";
};
export declare type TransactionType = typeof TransactionType[keyof typeof TransactionType];
export declare function TransactionTypeFromJSON(json: any): TransactionType;
export declare function TransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionType;
export declare function TransactionTypeToJSON(value?: TransactionType | null): any;