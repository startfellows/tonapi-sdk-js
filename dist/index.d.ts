export interface Error {
    /** @example "error description" */
    error: string;
}
export interface AccountAddress {
    /** @example "0:10C1073837B93FDAAD594284CE8B8EFF7B9CF25427440EB2FC682762E1471365" */
    address: string;
    /**
     * Display name. Data collected from different sources like moderation lists, dns, collections names and over.
     * @example "Ton foundation"
     */
    name?: string;
    /**
     * Is this account was marked as part of scammers activity
     * @example true
     */
    is_scam: boolean;
    /** @example "https://ton.org/logo.png" */
    icon?: string;
    /** @example true */
    is_wallet: boolean;
}
export interface BlockCurrencyCollection {
    /**
     * @format int64
     * @example 10000000000
     */
    grams: number;
    other: {
        /**
         * @format int64
         * @example 13
         */
        id: number;
        /** @example "10000000000" */
        value: string;
    }[];
}
export interface BlockValueFlow {
    from_prev_blk: BlockCurrencyCollection;
    to_next_blk: BlockCurrencyCollection;
    imported: BlockCurrencyCollection;
    exported: BlockCurrencyCollection;
    fees_collected: BlockCurrencyCollection;
    burned?: BlockCurrencyCollection;
    fees_imported: BlockCurrencyCollection;
    recovered: BlockCurrencyCollection;
    created: BlockCurrencyCollection;
    minted: BlockCurrencyCollection;
}
export interface BlockchainBlock {
    /** @example 130 */
    tx_quantity: number;
    value_flow: BlockValueFlow;
    /**
     * @format int32
     * @example 0
     */
    workchain_id: number;
    /** @example 8000000000000000 */
    shard: string;
    /**
     * @format int32
     * @example 21734019
     */
    seqno: number;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    root_hash: string;
    /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
    file_hash: string;
    /**
     * @format int32
     * @example -239
     */
    global_id: number;
    /**
     * @format int32
     * @example 0
     */
    version: number;
    /** @example true */
    after_merge: boolean;
    /** @example true */
    before_split: boolean;
    /** @example true */
    after_split: boolean;
    /** @example true */
    want_split: boolean;
    /** @example true */
    want_merge: boolean;
    /** @example true */
    key_block: boolean;
    /**
     * @format int64
     * @example 1674826775
     */
    gen_utime: number;
    /**
     * @format int64
     * @example 23814011000000
     */
    start_lt: number;
    /**
     * @format int64
     * @example 23814011000001
     */
    end_lt: number;
    /**
     * @format int32
     * @example 0
     */
    vert_seqno: number;
    /**
     * @format int32
     * @example 0
     */
    gen_catchain_seqno: number;
    /**
     * @format int32
     * @example 0
     */
    min_ref_mc_seqno: number;
    /**
     * @format int32
     * @example 0
     */
    prev_key_block_seqno: number;
    /**
     * @format int32
     * @example 0
     */
    gen_software_version?: number;
    /**
     * @format int64
     * @example 0
     */
    gen_software_capabilities?: number;
    /** @example "(-1,4234234,8000000000000000)" */
    master_ref?: string;
    prev_refs: string[];
    /**
     * @format int64
     * @example 0
     */
    in_msg_descr_length: number;
    /**
     * @format int64
     * @example 0
     */
    out_msg_descr_length: number;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    rand_seed: string;
    /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
    created_by: string;
}
export interface BlockchainBlocks {
    blocks: BlockchainBlock[];
}
export interface BlockchainBlockShards {
    shards: {
        /** @example "(0,8000000000000000,4234234)" */
        last_known_block_id: string;
    }[];
}
/** @example "active" */
export declare enum AccountStatus {
    Nonexist = "nonexist",
    Uninit = "uninit",
    Active = "active",
    Frozen = "frozen"
}
export interface StateInit {
    /** @example "te6ccgEBBgEARAABFP8A9KQT9LzyyAsBAgEgAgMCAUgEBQAE8jAAONBsIdMfMO1E0NM/MAHAAZekyMs/ye1UkzDyBuIAEaE0MdqJoaZ+YQ==" */
    boc: string;
}
export interface Message {
    /** @example "int_msg" */
    msg_type: "int_msg" | "ext_in_msg" | "ext_out_msg";
    /**
     * @format int64
     * @example 25713146000001
     */
    created_lt: number;
    /** @example true */
    ihr_disabled: boolean;
    /** @example true */
    bounce: boolean;
    /** @example true */
    bounced: boolean;
    /**
     * @format int64
     * @example 60000000
     */
    value: number;
    /**
     * @format int64
     * @example 5681002
     */
    fwd_fee: number;
    /**
     * @format int64
     * @example 5681002
     */
    ihr_fee: number;
    destination?: AccountAddress;
    source?: AccountAddress;
    /**
     * @format int64
     * @example 5681002
     */
    import_fee: number;
    /**
     * @format int64
     * @example 5681002
     */
    created_at: number;
    /** @example "0xdeadbeaf" */
    op_code?: string;
    init?: StateInit;
    /**
     * hex-encoded BoC with raw message body
     * @example "B5EE9C7201010101001100001D00048656C6C6F2C20776F726C64218"
     */
    raw_body?: string;
    /** @example "nft_transfer" */
    decoded_op_name?: string;
    decoded_body?: any;
}
/** @example "TransOrd" */
export declare enum TransactionType {
    TransOrd = "TransOrd",
    TransTickTock = "TransTickTock",
    TransSplitPrepare = "TransSplitPrepare",
    TransSplitInstall = "TransSplitInstall",
    TransMergePrepare = "TransMergePrepare",
    TransMergeInstall = "TransMergeInstall",
    TransStorage = "TransStorage"
}
/** @example "acst_unchanged" */
export declare enum AccStatusChange {
    AcstUnchanged = "acst_unchanged",
    AcstFrozen = "acst_frozen",
    AcstDeleted = "acst_deleted"
}
/** @example "cskip_no_state" */
export declare enum ComputeSkipReason {
    CskipNoState = "cskip_no_state",
    CskipBadState = "cskip_bad_state",
    CskipNoGas = "cskip_no_gas"
}
/** @example "cskip_no_state" */
export declare enum BouncePhaseType {
    TrPhaseBounceNegfunds = "TrPhaseBounceNegfunds",
    TrPhaseBounceNofunds = "TrPhaseBounceNofunds",
    TrPhaseBounceOk = "TrPhaseBounceOk"
}
export interface ComputePhase {
    /** @example true */
    skipped: boolean;
    skip_reason?: ComputeSkipReason;
    /** @example true */
    success?: boolean;
    /**
     * @format int64
     * @example 1000
     */
    gas_fees?: number;
    /**
     * @format int64
     * @example 10000
     */
    gas_used?: number;
    /**
     * @format uint32
     * @example 5
     */
    vm_steps?: number;
    /**
     * @format int32
     * @example 0
     */
    exit_code?: number;
}
export interface StoragePhase {
    /**
     * @format int64
     * @example 25713146000001
     */
    fees_collected: number;
    /**
     * @format int64
     * @example 25713146000001
     */
    fees_due?: number;
    status_change: AccStatusChange;
}
export interface CreditPhase {
    /**
     * @format int64
     * @example 100
     */
    fees_collected: number;
    /**
     * @format int64
     * @example 1000
     */
    credit: number;
}
export interface ActionPhase {
    /** @example true */
    success: boolean;
    /**
     * @format int32
     * @example 5
     */
    total_actions: number;
    /**
     * @format int32
     * @example 5
     */
    skipped_actions: number;
    /**
     * @format int64
     * @example 1000
     */
    fwd_fees: number;
    /**
     * @format int64
     * @example 1000
     */
    total_fees: number;
}
export interface Transaction {
    /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
    hash: string;
    /**
     * @format int64
     * @example 25713146000001
     */
    lt: number;
    account: AccountAddress;
    /** @example true */
    success: boolean;
    /**
     * @format int64
     * @example 1645544908
     */
    utime: number;
    orig_status: AccountStatus;
    end_status: AccountStatus;
    /**
     * @format int64
     * @example 25713146000001
     */
    total_fees: number;
    transaction_type: TransactionType;
    /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
    state_update_old: string;
    /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
    state_update_new: string;
    in_msg?: Message;
    out_msgs: Message[];
    /** @example "(-1,4234234,8000000000000000)" */
    block: string;
    /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
    prev_trans_hash?: string;
    /**
     * @format int64
     * @example 25713146000001
     */
    prev_trans_lt?: number;
    compute_phase?: ComputePhase;
    storage_phase?: StoragePhase;
    credit_phase?: CreditPhase;
    action_phase?: ActionPhase;
    bounce_phase?: BouncePhaseType;
    /** @example true */
    aborted: boolean;
    /** @example true */
    destroyed: boolean;
}
export interface Transactions {
    transactions: Transaction[];
}
export interface ConfigProposalSetup {
    /** @example 2 */
    min_tot_rounds: number;
    /** @example 6 */
    max_tot_rounds: number;
    /** @example 2 */
    min_wins: number;
    /** @example 6 */
    max_losses: number;
    /**
     * @format int64
     * @example 1000000
     */
    min_store_sec: number;
    /**
     * @format int64
     * @example 10000000
     */
    max_store_sec: number;
    /**
     * @format int64
     * @example 1
     */
    bit_price: number;
    /**
     * @format int64
     * @example 500
     */
    cell_price: number;
}
export interface GasLimitPrices {
    /** @format int64 */
    special_gas_limit?: number;
    /** @format int64 */
    flat_gas_limit?: number;
    /** @format int64 */
    flat_gas_price?: number;
    /**
     * @format int64
     * @example 1
     */
    gas_price: number;
    /**
     * @format int64
     * @example 1000000
     */
    gas_limit: number;
    /**
     * @format int64
     * @example 1000000
     */
    gas_credit: number;
    /**
     * @format int64
     * @example 1000000
     */
    block_gas_limit: number;
    /**
     * @format int64
     * @example 1000000
     */
    freeze_due_limit: number;
    /**
     * @format int64
     * @example 1000000
     */
    delete_due_limit: number;
}
export interface BlockParamLimits {
    /**
     * @format int64
     * @example 1000000
     */
    underload: number;
    /**
     * @format int64
     * @example 1000000
     */
    soft_limit: number;
    /**
     * @format int64
     * @example 1000000
     */
    hard_limit: number;
}
export interface BlockLimits {
    bytes: BlockParamLimits;
    gas: BlockParamLimits;
    lt_delta: BlockParamLimits;
}
export interface MsgForwardPrices {
    /**
     * @format int64
     * @example 1000000
     */
    lump_price: number;
    /**
     * @format int64
     * @example 1000000
     */
    bit_price: number;
    /**
     * @format int64
     * @example 1000000
     */
    cell_price: number;
    /**
     * @format int64
     * @example 1000000
     */
    ihr_price_factor: number;
    /**
     * @format int64
     * @example 1000000
     */
    first_frac: number;
    /**
     * @format int64
     * @example 1000000
     */
    next_frac: number;
}
export interface WorkchainDescr {
    /**
     * @format int
     * @example 0
     */
    workchain: number;
    /**
     * @format int64
     * @example 1000000
     */
    enabled_since: number;
    /**
     * @format int
     * @example 1000000
     */
    actual_min_split: number;
    /**
     * @format int
     * @example 1000000
     */
    min_split: number;
    /**
     * @format int
     * @example 1000000
     */
    max_split: number;
    /** @example 1000000 */
    basic: number;
    /** @example true */
    active: boolean;
    /** @example true */
    accept_msgs: boolean;
    /**
     * @format int
     * @example 1000000
     */
    flags: number;
    /** @example 1000000 */
    zerostate_root_hash: string;
    /** @example 1000000 */
    zerostate_file_hash: string;
    /**
     * @format int64
     * @example 1000000
     */
    version: number;
}
export interface MisbehaviourPunishmentConfig {
    /**
     * @format int64
     * @example 1000000
     */
    default_flat_fine: number;
    /**
     * @format int64
     * @example 1000000
     */
    default_proportional_fine: number;
    /** @example 1000000 */
    severity_flat_mult: number;
    /** @example 1000000 */
    severity_proportional_mult: number;
    /** @example 1000000 */
    unpunishable_interval: number;
    /** @example 1000000 */
    long_interval: number;
    /** @example 1000000 */
    long_flat_mult: number;
    /** @example 1000000 */
    long_proportional_mult: number;
    /** @example 1000000 */
    medium_interval: number;
    /** @example 1000000 */
    medium_flat_mult: number;
    /** @example 1000000 */
    medium_proportional_mult: number;
}
export interface SizeLimitsConfig {
    /**
     * @format int64
     * @example 1000000
     */
    max_msg_bits: number;
    /**
     * @format int64
     * @example 1000000
     */
    max_msg_cells: number;
    /**
     * @format int64
     * @example 1000000
     */
    max_library_cells: number;
    /**
     * @format int
     * @example 1000000
     */
    max_vm_data_depth: number;
    /**
     * @format int64
     * @example 1000000
     */
    max_ext_msg_size: number;
    /**
     * @format int
     * @example 1000000
     */
    max_ext_msg_depth: number;
    /**
     * @format int64
     * @example 1000000
     */
    max_acc_state_cells?: number;
    /**
     * @format int64
     * @example 1000000
     */
    max_acc_state_bits?: number;
}
export interface ValidatorsSet {
    utime_since: number;
    utime_until: number;
    total: number;
    main: number;
    /** @format int64 */
    total_weight?: number;
    list: {
        public_key: string;
        /** @format int64 */
        weight: number;
        adnl_addr?: string;
    }[];
}
export interface Oracle {
    /** @example "0:55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
    address: string;
    /** @example "00000000000000000000000017dcab1b1481610f6c7a7a98cf0370dc0ec704a6" */
    secp_pubkey: string;
}
export interface OracleBridgeParams {
    bridge_addr: string;
    oracle_multisig_address: string;
    external_chain_address: string;
    oracles: Oracle[];
}
export interface JettonBridgePrices {
    /** @format int64 */
    bridge_burn_fee: number;
    /** @format int64 */
    bridge_mint_fee: number;
    /** @format int64 */
    wallet_min_tons_for_storage: number;
    /** @format int64 */
    wallet_gas_consumption: number;
    /** @format int64 */
    minter_min_tons_for_storage: number;
    /** @format int64 */
    discover_gas_consumption: number;
}
export interface JettonBridgeParams {
    bridge_address: string;
    oracles_address: string;
    state_flags: number;
    /** @format int64 */
    burn_bridge_fee?: number;
    oracles: Oracle[];
    external_chain_address?: string;
    prices?: JettonBridgePrices;
}
export interface Validator {
    /** @example "0:55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
    address: string;
    /** @example "10C1073837B93FDAAD594284CE8B8EFF7B9CF25427440EB2FC682762E1471365" */
    adnl_address: string;
    /**
     * @format int64
     * @example 123456789
     */
    stake: number;
    /**
     * @format int64
     * @example 123456789
     */
    max_factor: number;
}
export interface Validators {
    /**
     * @format int64
     * @example 123456789
     */
    elect_at: number;
    /**
     * @format int64
     * @example 123456789
     */
    elect_close: number;
    /**
     * @format int64
     * @example 123456789
     */
    min_stake: number;
    /**
     * @format int64
     * @example 123456789
     */
    total_stake: number;
    validators: Validator[];
}
export interface AccountStorageInfo {
    /**
     * @format int64
     * @example 567
     */
    used_cells: number;
    /**
     * @format int64
     * @example 567
     */
    used_bits: number;
    /**
     * @format int64
     * @example 567
     */
    used_public_cells: number;
    /**
     * @format int64
     * @example 567
     */
    last_paid: number;
    /**
     * @format int64
     * @example 567
     */
    due_payment: number;
}
export interface BlockchainRawAccount {
    /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
    address: string;
    /**
     * @format int64
     * @example 123456789
     */
    balance: number;
    extra_balance?: Record<string, string>;
    /** @example "b5ee9c72410104010087000114ff00f4a413f4a0f2c80b0102012002030002d200dfa5ffff76a268698fe9ffe8e42c5267858f90e785ffe4f6aa6467c444ffb365ffc10802faf0807d014035e7a064b87d804077e7857fc10803dfd2407d014035e7a064b86467cd8903a32b9ba4410803ade68afd014035e7a045ea432b6363796103bb7b9363210c678b64b87d807d8040c249b3e4" */
    code?: string;
    /** @example "b5ee9c7241010101002600004811fd096c0000000000000000000000000000000000000000000000000000000000000000cb78264d" */
    data?: string;
    /**
     * @format int64
     * @example 123456789
     */
    last_transaction_lt: number;
    /** @example "active" */
    status: string;
    storage: AccountStorageInfo;
}
export interface Account {
    /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
    address: string;
    /**
     * @format int64
     * @example 123456789
     */
    balance: number;
    /**
     * unix timestamp
     * @format int64
     * @example 123456789
     */
    last_activity: number;
    /** @example "active" */
    status: string;
    interfaces?: string[];
    /** @example "Ton foundation" */
    name?: string;
    /** @example true */
    is_scam?: boolean;
    /** @example "https://ton.org/logo.png" */
    icon?: string;
    /** @example true */
    memo_required?: boolean;
    /** @example ["get_item_data"] */
    get_methods: string[];
    is_suspended?: boolean;
    is_wallet: boolean;
}
export interface Accounts {
    accounts: Account[];
}
export interface MethodExecutionResult {
    /** @example true */
    success: boolean;
    /**
     * tvm exit code
     * @example 0
     */
    exit_code: number;
    stack: TvmStackRecord[];
    decoded?: any;
}
export interface TvmStackRecord {
    /** @example "cell" */
    type: "cell" | "num" | "nan" | "null" | "tuple";
    /** @example "te6cckEBAQEAJAAAQ4ARPeUceMlv4l12d6jdLpIzzbAV6amYXNZeZK2aicQdC/Apj8aJ" */
    cell?: string;
    /** @example "" */
    slice?: string;
    /** @example "" */
    num?: string;
    /** @example [] */
    tuple?: TvmStackRecord[];
}
export interface RawBlockchainConfig {
    /** @example {} */
    config: Record<string, any>;
}
export interface BlockchainConfig {
    /** config address */
    "0": string;
    /** elector address */
    "1": string;
    /** minter address */
    "2": string;
    /** The address of the transaction fee collector. */
    "3"?: string;
    /** dns root address */
    "4": string;
    "5"?: {
        blackhole_addr?: string;
        /** @format int64 */
        fee_burn_nom: number;
        /** @format int64 */
        fee_burn_denom: number;
    };
    /** Minting fees of new currencies. */
    "6"?: {
        /** @format int64 */
        mint_new_price: number;
        /** @format int64 */
        mint_add_price: number;
    };
    /** The volume of each of the additional currencies in circulation. */
    "7"?: {
        currencies: {
            /** @format int64 */
            currency_id: number;
            amount: string;
        }[];
    };
    /** The network version and additional capabilities supported by the validators. */
    "8"?: {
        /** @format int64 */
        version: number;
        /** @format int64 */
        capabilities: number;
    };
    /** List of mandatory parameters of the blockchain config. */
    "9"?: {
        mandatory_params: number[];
    };
    /** List of critical TON parameters, the change of which significantly affects the network, so more voting rounds are held. */
    "10"?: {
        critical_params: number[];
    };
    /** This parameter indicates under what conditions proposals to change the TON configuration are accepted. */
    "11"?: {
        normal_params: ConfigProposalSetup;
        critical_params: ConfigProposalSetup;
    };
    /** Workchains in the TON Blockchain */
    "12"?: {
        workchains: WorkchainDescr[];
    };
    /** The cost of filing complaints about incorrect operation of validators. */
    "13"?: {
        /** @format int64 */
        deposit: number;
        /** @format int64 */
        bit_price: number;
        /** @format int64 */
        cell_price: number;
    };
    /** The reward in nanoTons for block creation in the TON blockchain. */
    "14"?: {
        /** @format int64 */
        masterchain_block_fee: number;
        /** @format int64 */
        basechain_block_fee: number;
    };
    /** The reward in nanoTons for block creation in the TON blockchain. */
    "15"?: {
        /**
         * @format int64
         * @example 65536
         */
        validators_elected_for: number;
        /**
         * @format int64
         * @example 32768
         */
        elections_start_before: number;
        /**
         * @format int64
         * @example 8192
         */
        elections_end_before: number;
        /**
         * @format int64
         * @example 32768
         */
        stake_held_for: number;
    };
    /** The limits on the number of validators in the TON blockchain. */
    "16"?: {
        /** @example 400 */
        max_validators: number;
        /** @example 100 */
        max_main_validators: number;
        /** @example 75 */
        min_validators: number;
    };
    /** The stake parameters configuration in the TON blockchain. */
    "17"?: {
        min_stake: string;
        max_stake: string;
        min_total_stake: string;
        /** @format int64 */
        max_stake_factor: number;
    };
    /** The prices for data storage. */
    "18"?: {
        storage_prices: {
            /**
             * @format int64
             * @example 0
             */
            utime_since: number;
            /**
             * @format int64
             * @example 1
             */
            bit_price_ps: number;
            /**
             * @format int64
             * @example 500
             */
            cell_price_ps: number;
            /**
             * @format int64
             * @example 1000
             */
            mc_bit_price_ps: number;
            /**
             * @format int64
             * @example 500000
             */
            mc_cell_price_ps: number;
        }[];
    };
    /** The cost of computations in the masterchain. The complexity of any computation is estimated in gas units. */
    "20"?: {
        gas_limits_prices: GasLimitPrices;
    };
    /** The cost of computations in the basechains. The complexity of any computation is estimated in gas units. */
    "21"?: {
        gas_limits_prices: GasLimitPrices;
    };
    /** The limits on the block in the masterchain, upon reaching which the block is finalized and the callback of the remaining messages (if any) is carried over to the next block. */
    "22"?: {
        block_limits: BlockLimits;
    };
    /** The limits on the block in the basechains, upon reaching which the block is finalized and the callback of the remaining messages (if any) is carried over to the next block. */
    "23"?: {
        block_limits: BlockLimits;
    };
    /** The cost of sending messages in the masterchain of the TON blockchain. */
    "24"?: {
        msg_forward_prices: MsgForwardPrices;
    };
    /** The cost of sending messages in the basechains of the TON blockchain. */
    "25"?: {
        msg_forward_prices: MsgForwardPrices;
    };
    /** The configuration for the Catchain protocol. */
    "28"?: {
        /**
         * @format int64
         * @example 1000000
         */
        mc_catchain_lifetime: number;
        /**
         * @format int64
         * @example 1000000
         */
        shard_catchain_lifetime: number;
        /**
         * @format int64
         * @example 1000000
         */
        shard_validators_lifetime: number;
        /**
         * @format int64
         * @example 1000000
         */
        shard_validators_num: number;
        /**
         * @format int
         * @example 1000000
         */
        flags?: number;
        shuffle_mc_validators?: boolean;
    };
    /** The configuration for the consensus protocol above catchain. */
    "29"?: {
        /**
         * @format int
         * @example 0
         */
        flags?: number;
        /** @example true */
        new_catchain_ids?: boolean;
        /**
         * @format int64
         * @example 3
         */
        round_candidates: number;
        /**
         * @format int64
         * @example 2000
         */
        next_candidate_delay_ms: number;
        /**
         * @format int64
         * @example 16000
         */
        consensus_timeout_ms: number;
        /**
         * @format int64
         * @example 3
         */
        fast_attempts: number;
        /**
         * @format int64
         * @example 8
         */
        attempt_duration: number;
        /**
         * @format int64
         * @example 4
         */
        catchain_max_deps: number;
        /**
         * @format int64
         * @example 2097152
         */
        max_block_bytes: number;
        /**
         * @format int64
         * @example 2097152
         */
        max_collated_bytes: number;
        /**
         * @format int64
         * @example 2
         */
        proto_version?: number;
        /**
         * @format int64
         * @example 10000
         */
        catchain_max_blocks_coeff?: number;
    };
    /** The configuration for the consensus protocol above catchain. */
    "31"?: {
        fundamental_smc_addr: string[];
    };
    "32"?: ValidatorsSet;
    "33"?: ValidatorsSet;
    "34"?: ValidatorsSet;
    "35"?: ValidatorsSet;
    "36"?: ValidatorsSet;
    "37"?: ValidatorsSet;
    /** The configuration for punishment for improper behavior (non-validation). In the absence of the parameter, the default fine size is 101 TON */
    "40"?: {
        misbehaviour_punishment_config: MisbehaviourPunishmentConfig;
    };
    /** The size limits and some other characteristics of accounts and messages. */
    "43"?: {
        size_limits_config: SizeLimitsConfig;
    };
    /** suspended accounts */
    "44": {
        accounts: string[];
        suspended_until: number;
    };
    /** Bridge parameters for wrapping TON in other networks. */
    "71"?: {
        oracle_bridge_params: OracleBridgeParams;
    };
    /** Bridge parameters for wrapping TON in other networks. */
    "72"?: {
        oracle_bridge_params: OracleBridgeParams;
    };
    /** Bridge parameters for wrapping TON in other networks. */
    "73"?: {
        oracle_bridge_params: OracleBridgeParams;
    };
    /** Bridge parameters for wrapping tokens from other networks into tokens on the TON network. */
    "79"?: {
        jetton_bridge_params: JettonBridgeParams;
    };
    /** Bridge parameters for wrapping tokens from other networks into tokens on the TON network. */
    "81"?: {
        jetton_bridge_params: JettonBridgeParams;
    };
    /** Bridge parameters for wrapping tokens from other networks into tokens on the TON network. */
    "82"?: {
        jetton_bridge_params: JettonBridgeParams;
    };
    /**
     * config boc in base64 format
     * @example "te6ccgEBBgEARAABFP8A9KQT9LzyyAsBAgEgAgMCAUgEBQAE8jAAONBsIdMfMO1E0NM/MAHAAZekyMs/ye1UkzDyBuIAEaE0MdqJoaZ+YQ=="
     */
    raw: string;
}
export interface DomainNames {
    domains: string[];
}
export interface DomainBid {
    /**
     * @default false
     * @example true
     */
    success: boolean;
    /**
     * @format int64
     * @example 1660050553
     */
    value: number;
    /**
     * @format int64
     * @example 1660050553
     */
    txTime: number;
    /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
    txHash: string;
    bidder: AccountAddress;
}
export interface DomainBids {
    data: DomainBid[];
}
export declare enum JettonVerificationType {
    Whitelist = "whitelist",
    Blacklist = "blacklist",
    None = "none"
}
export interface JettonPreview {
    /** @example "0:0BB5A9F69043EEBDDA5AD2E946EB953242BD8F603FE795D90698CEEC6BFC60A0" */
    address: string;
    /** @example "Wrapped TON" */
    name: string;
    /** @example "WTON" */
    symbol: string;
    /** @example 9 */
    decimals: number;
    /** @example "https://cache.tonapi.io/images/jetton.jpg" */
    image: string;
    verification: JettonVerificationType;
}
export interface JettonBalance {
    /** @example 597968399 */
    balance: string;
    price?: TokenRates;
    wallet_address: AccountAddress;
    jetton: JettonPreview;
}
export interface JettonsBalances {
    balances: JettonBalance[];
}
export interface Price {
    /** @example 123000000000 */
    value: string;
    /** @example "TON" */
    token_name: string;
}
export interface ImagePreview {
    /** @example "100x100" */
    resolution: string;
    /** @example "https://site.com/pic1.jpg" */
    url: string;
}
export type NftApprovedBy = ("getgems" | "tonkeeper" | "ton.diamonds")[];
export interface Sale {
    /** @example "0:10C1073837B93FDAAD594284CE8B8EFF7B9CF25427440EB2FC682762E1471365" */
    address: string;
    market: AccountAddress;
    owner?: AccountAddress;
    price: Price;
}
export interface NftItem {
    /** @example "0:E93E7D444180608B8520C00DC664383A387356FB6E16FDDF99DBE5E1415A574B" */
    address: string;
    /**
     * @format int64
     * @example 58
     */
    index: number;
    owner?: AccountAddress;
    collection?: {
        /** @example "0:E93E7D444180608B8520C00DC664383A387356FB6E16FDDF99DBE5E1415A574B" */
        address: string;
        /** @example "TON Diamonds" */
        name: string;
        /** @example "Best collection in TON network" */
        description: string;
    };
    /** @example true */
    verified: boolean;
    /** @example {} */
    metadata: Record<string, any>;
    sale?: Sale;
    previews?: ImagePreview[];
    /** @example "crypto.ton" */
    dns?: string;
    approved_by: NftApprovedBy;
}
export interface NftItems {
    nft_items: NftItem[];
}
export interface Refund {
    /** @example "DNS.ton" */
    type: "DNS.ton" | "DNS.tg" | "GetGems";
    /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
    origin: string;
}
export interface ValueFlow {
    account: AccountAddress;
    /**
     * @format int64
     * @example 80
     */
    ton: number;
    /**
     * @format int64
     * @example 10
     */
    fees: number;
    jettons?: {
        account: AccountAddress;
        jetton: JettonPreview;
        /**
         * @format int64
         * @example 10
         */
        quantity: number;
    }[];
}
export interface Action {
    /** @example "TonTransfer" */
    type: "TonTransfer" | "JettonTransfer" | "JettonBurn" | "JettonMint" | "NftItemTransfer" | "ContractDeploy" | "Subscribe" | "UnSubscribe" | "AuctionBid" | "NftPurchase" | "DepositStake" | "WithdrawStake" | "WithdrawStakeRequest" | "JettonSwap" | "SmartContractExec" | "ElectionsRecoverStake" | "ElectionsDepositStake" | "DomainRenew" | "Unknown";
    /** @example "ok" */
    status: "ok" | "failed";
    TonTransfer?: TonTransferAction;
    ContractDeploy?: ContractDeployAction;
    JettonTransfer?: JettonTransferAction;
    JettonBurn?: JettonBurnAction;
    JettonMint?: JettonMintAction;
    NftItemTransfer?: NftItemTransferAction;
    Subscribe?: SubscriptionAction;
    UnSubscribe?: UnSubscriptionAction;
    AuctionBid?: AuctionBidAction;
    NftPurchase?: NftPurchaseAction;
    /** validator's participation in elections */
    DepositStake?: DepositStakeAction;
    /** validator's participation in elections */
    WithdrawStake?: WithdrawStakeAction;
    /** validator's participation in elections */
    WithdrawStakeRequest?: WithdrawStakeRequestAction;
    ElectionsDepositStake?: ElectionsDepositStakeAction;
    ElectionsRecoverStake?: ElectionsRecoverStakeAction;
    JettonSwap?: JettonSwapAction;
    SmartContractExec?: SmartContractAction;
    DomainRenew?: DomainRenewAction;
    /** shortly describes what this action is about. */
    simple_preview: ActionSimplePreview;
}
export interface TonTransferAction {
    sender: AccountAddress;
    recipient: AccountAddress;
    /**
     * amount in nanotons
     * @format int64
     * @example 123456789
     */
    amount: number;
    /**
     * @example "Hi! This is your salary.
     * From accounting with love."
     */
    comment?: string;
    encrypted_comment?: EncryptedComment;
    refund?: Refund;
}
export interface SmartContractAction {
    executor: AccountAddress;
    contract: AccountAddress;
    /**
     * amount in nanotons
     * @format int64
     * @example 123456789
     */
    ton_attached: number;
    /** @example "NftTransfer or 0x35d95a12" */
    operation: string;
    payload?: string;
    refund?: Refund;
}
export interface DomainRenewAction {
    /** @example "vasya.ton" */
    domain: string;
    /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
    contract_address: string;
    renewer: AccountAddress;
}
export interface NftItemTransferAction {
    sender?: AccountAddress;
    recipient?: AccountAddress;
    /** @example "" */
    nft: string;
    /**
     * @example "Hi! This is your salary.
     * From accounting with love."
     */
    comment?: string;
    encrypted_comment?: EncryptedComment;
    /**
     * raw hex encoded payload
     * @example "0234de3e21d21b3ee21f3"
     */
    payload?: string;
    refund?: Refund;
}
export interface JettonTransferAction {
    sender?: AccountAddress;
    recipient?: AccountAddress;
    /** @example "0:E93E7D444180608B8520C00DC664383A387356FB6E16FDDF99DBE5E1415A574B" */
    senders_wallet: string;
    /** @example "0:E93E7D444180608B8520C00DC664383A387356FB6E16FDDF99DBE5E1415A574B" */
    recipients_wallet: string;
    /**
     * amount in quanta of tokens
     * @example 1000000000
     */
    amount: string;
    /**
     * @example "Hi! This is your salary.
     * From accounting with love."
     */
    comment?: string;
    encrypted_comment?: EncryptedComment;
    refund?: Refund;
    jetton: JettonPreview;
}
export interface JettonBurnAction {
    sender: AccountAddress;
    /** @example "0:E93E7D444180608B8520C00DC664383A387356FB6E16FDDF99DBE5E1415A574B" */
    senders_wallet: string;
    /**
     * amount in quanta of tokens
     * @example 1000000000
     */
    amount: string;
    jetton: JettonPreview;
}
export interface JettonMintAction {
    recipient: AccountAddress;
    /** @example "0:E93E7D444180608B8520C00DC664383A387356FB6E16FDDF99DBE5E1415A574B" */
    recipients_wallet: string;
    /**
     * amount in quanta of tokens
     * @example 1000000000
     */
    amount: string;
    jetton: JettonPreview;
}
export interface ContractDeployAction {
    /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
    address: string;
    /** @example ["nft_item","nft_royalty"] */
    interfaces: string[];
}
export interface SubscriptionAction {
    subscriber: AccountAddress;
    /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
    subscription: string;
    beneficiary: AccountAddress;
    /**
     * @format int64
     * @example 1000000000
     */
    amount: number;
    /** @example false */
    initial: boolean;
}
export interface UnSubscriptionAction {
    subscriber: AccountAddress;
    /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
    subscription: string;
    beneficiary: AccountAddress;
}
export interface AuctionBidAction {
    auction_type: "DNS.ton" | "DNS.tg" | "NUMBER.tg" | "getgems";
    amount: Price;
    nft?: NftItem;
    bidder: AccountAddress;
    auction: AccountAddress;
}
/** validator's participation in elections */
export interface DepositStakeAction {
    /**
     * @format int64
     * @example 1660050553
     */
    amount: number;
    staker: AccountAddress;
    pool: AccountAddress;
    implementation: PoolImplementationType;
}
/** validator's participation in elections */
export interface WithdrawStakeAction {
    /**
     * @format int64
     * @example 1660050553
     */
    amount: number;
    staker: AccountAddress;
    pool: AccountAddress;
    implementation: PoolImplementationType;
}
/** validator's participation in elections */
export interface WithdrawStakeRequestAction {
    /**
     * @format int64
     * @example 1660050553
     */
    amount?: number;
    staker: AccountAddress;
    pool: AccountAddress;
    implementation: PoolImplementationType;
}
export interface ElectionsRecoverStakeAction {
    /**
     * @format int64
     * @example 1660050553
     */
    amount: number;
    staker: AccountAddress;
}
export interface ElectionsDepositStakeAction {
    /**
     * @format int64
     * @example 1660050553
     */
    amount: number;
    staker: AccountAddress;
}
export interface JettonSwapAction {
    dex: "stonfi" | "dedust" | "megatonfi";
    /** @example "1660050553" */
    amount_in: string;
    /** @example "1660050553" */
    amount_out: string;
    /**
     * @format int64
     * @example 1000000000
     */
    ton_in?: number;
    /**
     * @format int64
     * @example 2000000000
     */
    ton_out?: number;
    user_wallet: AccountAddress;
    router: AccountAddress;
    jetton_master_in?: JettonPreview;
    jetton_master_out?: JettonPreview;
}
export interface NftPurchaseAction {
    auction_type: "DNS.tg" | "getgems" | "basic";
    amount: Price;
    nft: NftItem;
    seller: AccountAddress;
    buyer: AccountAddress;
}
/** shortly describes what this action is about. */
export interface ActionSimplePreview {
    /** @example "Ton Transfer" */
    name: string;
    /** @example "Transferring 5 Ton" */
    description: string;
    /** a link to an image for this particular action. */
    action_image?: string;
    /** @example "5 Ton" */
    value?: string;
    /** a link to an image that depicts this action's asset. */
    value_image?: string;
    accounts: AccountAddress[];
}
/** An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time. */
export interface AccountEvent {
    /** @example "e8b0e3fee4a26bd2317ac1f9952fcdc87dc08fdb617656b5202416323337372e" */
    event_id: string;
    account: AccountAddress;
    /**
     * @format int64
     * @example 1234567890
     */
    timestamp: number;
    actions: Action[];
    /**
     * scam
     * @example false
     */
    is_scam: boolean;
    /**
     * @format int64
     * @example 25713146000001
     */
    lt: number;
    /**
     * Event is not finished yet. Transactions still happening
     * @example false
     */
    in_progress: boolean;
    /**
     * TODO
     * @format int64
     * @example 3
     */
    extra: number;
}
export interface AccountEvents {
    events: AccountEvent[];
    /**
     * @format int64
     * @example 25713146000001
     */
    next_from: number;
}
export interface TraceID {
    /** @example "55e8809519cd3c49098c9ee45afdafcea7a894a74d0f628d94a115a50e045122" */
    id: string;
    /**
     * @format uint64
     * @example 1645544908
     */
    utime: number;
}
export interface TraceIDs {
    traces: TraceID[];
}
export interface ApyHistory {
    apy: number;
    time: number;
}
export interface Subscription {
    /** @example "0:dea8f638b789172ce36d10a20318125e52c649aa84893cd77858224fe2b9b0ee" */
    address: string;
    /** @example "0:567DE86AF2B6A557D7085807CF7C26338124987A5179344F0D0FA2657EB710F1" */
    wallet_address: string;
    /** @example "0:c704dadfabac88eab58e340de03080df81ff76636431f48624ad6e26fb2da0a4" */
    beneficiary_address: string;
    /**
     * @format int64
     * @example 1000000000
     */
    amount: number;
    /**
     * @format int64
     * @example 2592000
     */
    period: number;
    /**
     * @format int64
     * @example 1653996832
     */
    start_time: number;
    /**
     * @format int64
     * @example 10800
     */
    timeout: number;
    /**
     * @format int64
     * @example 1653996834
     */
    last_payment_time: number;
    /**
     * @format int64
     * @example 0
     */
    last_request_time: number;
    /**
     * @format int64
     * @example 217477
     */
    subscription_id: number;
    /**
     * @format int32
     * @example 0
     */
    failed_attempts: number;
}
export interface Subscriptions {
    subscriptions: Subscription[];
}
export interface Auction {
    /** @example "wallet.ton" */
    domain: string;
    /** @example "owner" */
    owner: string;
    /**
     * @format int64
     * @example 1660050553
     */
    price: number;
    /**
     * @format int64
     * @example 1660050553
     */
    bids: number;
    /**
     * @format int64
     * @example 1660050553
     */
    date: number;
}
export interface Auctions {
    data: Auction[];
    /**
     * @format int64
     * @example 1660050553
     */
    total: number;
}
export interface WalletDNS {
    /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
    address: string;
    /** @example true */
    is_wallet: boolean;
    /** @example true */
    has_method_pubkey: boolean;
    /** @example true */
    has_method_seqno: boolean;
    names: string[];
}
export interface DomainInfo {
    name: string;
    /**
     * date of expiring. optional. not all domain in ton has expiration date
     * @format int64
     */
    expiring_at?: number;
    item?: NftItem;
}
export interface DnsRecord {
    wallet?: WalletDNS;
    /** @example "0:da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf" */
    next_resolver?: string;
    sites: string[];
    /**
     * tonstorage bag id
     * @example "da6b1b6663a0e4d18cc8574ccd9db5296e367dd9324706f3bbd9eb1cd2caf0bf"
     */
    storage?: string;
}
export interface NftCollection {
    /** @example "0:FD595F36B4C1535BEC8461490D38EBB9AE3C38DD6ACE17CA63ABE2C6608BE159" */
    address: string;
    /**
     * @format int64
     * @example 1
     */
    next_item_index: number;
    owner?: AccountAddress;
    /** @example "697066733a2f2f516d596e437861746f5178433571584b79773971656768415853626f3544644e6a32387631487669437a47355359" */
    raw_collection_content: string;
    /** @example {} */
    metadata?: Record<string, any>;
    previews?: ImagePreview[];
    approved_by: NftApprovedBy;
}
export interface NftCollections {
    nft_collections: NftCollection[];
}
export interface Trace {
    transaction: Transaction;
    /** @example ["wallet","tep62_item"] */
    interfaces: string[];
    children?: Trace[];
    /** @example false */
    emulated?: boolean;
}
export interface MessageConsequences {
    trace: Trace;
    /** Risk specifies assets that could be lost if a message would be sent to a malicious smart contract. It makes sense to understand the risk BEFORE sending a message to the blockchain. */
    risk: Risk;
    /** An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time. */
    event: AccountEvent;
}
/** Risk specifies assets that could be lost if a message would be sent to a malicious smart contract. It makes sense to understand the risk BEFORE sending a message to the blockchain. */
export interface Risk {
    /**
     * transfer all the remaining balance of the wallet.
     * @example true
     */
    transfer_all_remaining_balance: boolean;
    /**
     * @format int64
     * @example 500
     */
    ton: number;
    jettons: JettonQuantity[];
    nfts: NftItem[];
}
export interface JettonQuantity {
    /** @example 597968399 */
    quantity: string;
    wallet_address: AccountAddress;
    jetton: JettonPreview;
}
export interface DecodedMessage {
    destination: AccountAddress;
    /** @example "v3R2" */
    destination_wallet_version: string;
    ext_in_msg_decoded?: {
        wallet_v3?: {
            /**
             * @format uint32
             * @example 1
             */
            subwallet_id: number;
            /**
             * @format uint32
             * @example 1
             */
            valid_until: number;
            /**
             * @format uint32
             * @example 1
             */
            seqno: number;
            raw_messages: DecodedRawMessage[];
        };
        wallet_v4?: {
            /**
             * @format uint32
             * @example 1
             */
            subwallet_id: number;
            /**
             * @format uint32
             * @example 1
             */
            valid_until: number;
            /**
             * @format uint32
             * @example 1
             */
            seqno: number;
            /**
             * @format int8
             * @example 1
             */
            op: number;
            raw_messages: DecodedRawMessage[];
        };
        wallet_highload_v2?: {
            /**
             * @format uint32
             * @example 1
             */
            subwallet_id: number;
            /** @example "34254528475294857" */
            bounded_query_id: string;
            raw_messages: DecodedRawMessage[];
        };
    };
}
export interface DecodedRawMessage {
    message: {
        /** @example "te6ccgEBAQEABgAACCiAmCMBAgEABwA=" */
        boc: string;
        /** @example "nft_transfer" */
        decoded_op_name?: string;
        /** @example "0xdeadbeaf" */
        op_code?: string;
        decoded_body?: any;
    };
    /** @example 2 */
    mode: number;
}
export interface Event {
    /** @example "e8b0e3fee4a26bd2317ac1f9952fcdc87dc08fdb617656b5202416323337372e" */
    event_id: string;
    /**
     * @format int64
     * @example 1234567890
     */
    timestamp: number;
    actions: Action[];
    value_flow: ValueFlow[];
    /**
     * scam
     * @example false
     */
    is_scam: boolean;
    /**
     * @format int64
     * @example 25713146000001
     */
    lt: number;
    /**
     * Event is not finished yet. Transactions still happening
     * @example false
     */
    in_progress: boolean;
}
export interface JettonMetadata {
    /** @example "0:0BB5A9F69043EEBDDA5AD2E946EB953242BD8F603FE795D90698CEEC6BFC60A0" */
    address: string;
    /** @example "Wrapped TON" */
    name: string;
    /** @example "WTON" */
    symbol: string;
    /** @example "9" */
    decimals: string;
    /** @example "https://cache.tonapi.io/images/jetton.jpg" */
    image?: string;
    /** @example "Wrapped Toncoin" */
    description?: string;
    social?: string[];
    websites?: string[];
    catalogs?: string[];
}
export interface Jettons {
    jettons: JettonInfo[];
}
export interface JettonInfo {
    /** @example true */
    mintable: boolean;
    /** @example 311500000000000 */
    total_supply: string;
    metadata: JettonMetadata;
    verification: JettonVerificationType;
    /**
     * @format int32
     * @example 2000
     */
    holders_count: number;
}
export interface JettonHolders {
    addresses: {
        /** @example "0:10C1073837B93FDAAD594284CE8B8EFF7B9CF25427440EB2FC682762E1471365" */
        address: string;
        owner: AccountAddress;
        /** @example 1000000000 */
        balance: string;
    }[];
}
export interface AccountStaking {
    pools: AccountStakingInfo[];
}
export interface AccountStakingInfo {
    /** @example "EQBI-wGVp_x0VFEjd7m9cEUD3tJ_bnxMSp0Tb9qz757ATEAM" */
    pool: string;
    /**
     * @format int64
     * @example 10050000000000
     */
    amount: number;
    /**
     * @format int64
     * @example 500000000000
     */
    pending_deposit: number;
    /**
     * @format int64
     * @example 500000000000
     */
    pending_withdraw: number;
    /**
     * @format int64
     * @example 500000000000
     */
    ready_withdraw: number;
}
export interface PoolInfo {
    /** @example "0:48fb0195a7fc7454512377b9bd704503ded27f6e7c4c4a9d136fdab3ef9ec04c" */
    address: string;
    /** @example "Tonkeeper pool" */
    name: string;
    /** @format int64 */
    total_amount: number;
    implementation: PoolImplementationType;
    /**
     * APY in percent
     * @example 5.31
     */
    apy: number;
    /**
     * @format int64
     * @example 5000000000
     */
    min_stake: number;
    /**
     * current nomination cycle beginning timestamp
     * @format int64
     * @example 1678223064
     */
    cycle_start: number;
    /**
     * current nomination cycle ending timestamp
     * @format int64
     * @example 1678223064
     */
    cycle_end: number;
    /**
     * this pool has verified source code or managed by trusted company
     * @example true
     */
    verified: boolean;
    /**
     * current number of nominators
     * @example 10
     */
    current_nominators: number;
    /**
     * maximum number of nominators
     * @example 100
     */
    max_nominators: number;
    /**
     * for liquid staking master account of jetton
     * @example "0:4a91d32d0289bda9813ae00ff7640e6c38fdce76e4583dd6afc463b70c7d767c"
     */
    liquid_jetton_master?: string;
    /**
     * total stake of all nominators
     * @format int64
     * @example 5000000000
     */
    nominators_stake: number;
    /**
     * stake of validator
     * @format int64
     * @example 5000000000
     */
    validator_stake: number;
    /** @format int64 */
    cycle_length?: number;
}
export interface PoolImplementation {
    /** @example "TON Whales" */
    name: string;
    /** @example "Oldest pool with minimal staking amount 50 TON" */
    description: string;
    /** @example "https://tonvalidators.org/" */
    url: string;
    socials: string[];
}
export interface StorageProvider {
    /** @example "0:FD595F36B4C1535BEC8461490D38EBB9AE3C38DD6ACE17CA63ABE2C6608BE159" */
    address: string;
    /** @example true */
    accept_new_contracts: boolean;
    /**
     * @format int64
     * @example 50000000
     */
    rate_per_mb_day: number;
    /**
     * @format int64
     * @example 604800
     */
    max_span: number;
    /**
     * @format int64
     * @example 64
     */
    minimal_file_size: number;
    /**
     * @format int64
     * @example 10485760
     */
    maximal_file_size: number;
}
export interface FoundAccounts {
    addresses: {
        /** @example "0:010cеeac44fad23417a5c55e4071796868771082с9a61e8c195a8d57508b8471" */
        address: string;
        /** @example "blah_blah.ton" */
        name: string;
        /** @example "https://cache.tonapi.io/images/media.jpg" */
        preview: string;
    }[];
}
export interface DnsExpiring {
    items: {
        /**
         * @format int64
         * @example "1678275313"
         */
        expiring_at: number;
        /** @example "blah_blah.ton" */
        name: string;
        dns_item?: NftItem;
    }[];
}
export interface AccountInfoByStateInit {
    /** @example "NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ3..." */
    public_key: string;
    /** @example "0:97146a46acc2654y27947f14c4a4b14273e954f78bc017790b41208b0043200b" */
    address: string;
}
export interface Seqno {
    /** @format uint32 */
    seqno: number;
}
export interface BlockRaw {
    /**
     * @format uint32
     * @example 4294967295
     */
    workchain: number;
    /**
     * @format uint64
     * @example 9223372036854776000
     */
    shard: number;
    /**
     * @format uint32
     * @example 30699640
     */
    seqno: number;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    root_hash: string;
    /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
    file_hash: string;
}
export interface InitStateRaw {
    /**
     * @format uint32
     * @example 4294967295
     */
    workchain: number;
    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
    root_hash: string;
    /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
    file_hash: string;
}
export interface EncryptedComment {
    /** @example "simple" */
    encryption_type: string;
    /** @example "A6A0BD6608672B...CE3AF8DB" */
    cipher_text: string;
}
export interface BlockchainAccountInspect {
    code: string;
    code_hash: string;
    methods: {
        /** @format int64 */
        id: number;
        /** @example "get_something" */
        method: string;
    }[];
    compiler?: "func";
}
export declare enum PoolImplementationType {
    Whales = "whales",
    Tf = "tf",
    LiquidTF = "liquidTF"
}
export interface TokenRates {
    /** @example {"TON":1.3710752873163712} */
    prices?: Record<string, number>;
    /** @example {"TON":"-1.28%"} */
    diff_24h?: Record<string, string>;
    /** @example {"TON":"-2.74%"} */
    diff_7d?: Record<string, string>;
    /** @example {"TON":"-0.56%"} */
    diff_30d?: Record<string, string>;
}
export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseFormat;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
    customFetch?: typeof fetch;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker?;
    private abortControllers;
    private customFetch;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    protected encodeQueryParam(key: string, value: any): string;
    protected addQueryParam(query: QueryParamsType, key: string): string;
    protected addArrayQueryParam(query: QueryParamsType, key: string): any;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams;
    protected createAbortSignal: (cancelToken: CancelToken) => AbortSignal | undefined;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<T>;
}
/**
 * @title REST api to TON blockchain explorer
 * @version 2.0.0
 * @baseUrl https://tonapi.io
 * @contact Support <support@tonkeeper.com>
 *
 * Provide access to indexed TON blockchain
 */
export declare class Api<SecurityDataType extends unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    blockchain: {
        /**
         * @description Get blockchain block data
         *
         * @tags Blockchain
         * @name GetBlockchainBlock
         * @request GET:/v2/blockchain/blocks/{block_id}
         */
        getBlockchainBlock: (blockId: string, params?: RequestParams) => Promise<BlockchainBlock>;
        /**
         * @description Get blockchain block shards
         *
         * @tags Blockchain
         * @name GetBlockchainMasterchainShards
         * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/shards
         */
        getBlockchainMasterchainShards: (masterchainSeqno: number, params?: RequestParams) => Promise<BlockchainBlockShards>;
        /**
         * @description Get all blocks in all shards and workchains between target and previous masterchain block according to shards last blocks snapshot in masterchain.  We don't recommend to build your app around this method because it has problem with scalability and will work very slow in the future.
         *
         * @tags Blockchain
         * @name GetBlockchainMasterchainBlocks
         * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/blocks
         */
        getBlockchainMasterchainBlocks: (masterchainSeqno: number, params?: RequestParams) => Promise<BlockchainBlocks>;
        /**
         * @description Get all transactions in all shards and workchains between target and previous masterchain block according to shards last blocks snapshot in masterchain. We don't recommend to build your app around this method because it has problem with scalability and will work very slow in the future.
         *
         * @tags Blockchain
         * @name GetBlockchainMasterchainTransactions
         * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/transactions
         */
        getBlockchainMasterchainTransactions: (masterchainSeqno: number, params?: RequestParams) => Promise<Transactions>;
        /**
         * @description Get blockchain config from a specific block, if present.
         *
         * @tags Blockchain
         * @name GetBlockchainConfigFromBlock
         * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/config
         */
        getBlockchainConfigFromBlock: (masterchainSeqno: number, params?: RequestParams) => Promise<BlockchainConfig>;
        /**
         * @description Get raw blockchain config from a specific block, if present.
         *
         * @tags Blockchain
         * @name GetRawBlockchainConfigFromBlock
         * @request GET:/v2/blockchain/masterchain/{masterchain_seqno}/config/raw
         */
        getRawBlockchainConfigFromBlock: (masterchainSeqno: number, params?: RequestParams) => Promise<RawBlockchainConfig>;
        /**
         * @description Get transactions from block
         *
         * @tags Blockchain
         * @name GetBlockchainBlockTransactions
         * @request GET:/v2/blockchain/blocks/{block_id}/transactions
         */
        getBlockchainBlockTransactions: (blockId: string, params?: RequestParams) => Promise<Transactions>;
        /**
         * @description Get transaction data
         *
         * @tags Blockchain
         * @name GetBlockchainTransaction
         * @request GET:/v2/blockchain/transactions/{transaction_id}
         */
        getBlockchainTransaction: (transactionId: string, params?: RequestParams) => Promise<Transaction>;
        /**
         * @description Get transaction data by message hash
         *
         * @tags Blockchain
         * @name GetBlockchainTransactionByMessageHash
         * @request GET:/v2/blockchain/messages/{msg_id}/transaction
         */
        getBlockchainTransactionByMessageHash: (msgId: string, params?: RequestParams) => Promise<Transaction>;
        /**
         * @description Get blockchain validators
         *
         * @tags Blockchain
         * @name GetBlockchainValidators
         * @request GET:/v2/blockchain/validators
         */
        getBlockchainValidators: (params?: RequestParams) => Promise<Validators>;
        /**
         * @description Get last known masterchain block
         *
         * @tags Blockchain
         * @name GetBlockchainMasterchainHead
         * @request GET:/v2/blockchain/masterchain-head
         */
        getBlockchainMasterchainHead: (params?: RequestParams) => Promise<BlockchainBlock>;
        /**
         * @description Get low-level information about an account taken directly from the blockchain.
         *
         * @tags Blockchain
         * @name GetBlockchainRawAccount
         * @request GET:/v2/blockchain/accounts/{account_id}
         */
        getBlockchainRawAccount: (accountId: string, params?: RequestParams) => Promise<BlockchainRawAccount>;
        /**
         * @description Get account transactions
         *
         * @tags Blockchain
         * @name GetBlockchainAccountTransactions
         * @request GET:/v2/blockchain/accounts/{account_id}/transactions
         */
        getBlockchainAccountTransactions: (accountId: string, query?: {
            /**
             * omit this parameter to get last transactions
             * @format int64
             * @example 39787624000003
             */
            after_lt?: number;
            /**
             * omit this parameter to get last transactions
             * @format int64
             * @example 39787624000003
             */
            before_lt?: number;
            /**
             * @format int32
             * @max 1000
             * @default 100
             * @example 100
             */
            limit?: number;
        }, params?: RequestParams) => Promise<Transactions>;
        /**
         * @description Execute get method for account
         *
         * @tags Blockchain
         * @name ExecGetMethodForBlockchainAccount
         * @request GET:/v2/blockchain/accounts/{account_id}/methods/{method_name}
         */
        execGetMethodForBlockchainAccount: (accountId: string, methodName: string, query?: {
            /**
             * Supported values: NaN, Null, 10-base digits for tiny int, 0x-prefixed hex digits for int257, all forms of addresses for slice, single-root base64-encoded BOC for cell
             * @example ["0:9a33970f617bcd71acf2cd28357c067aa31859c02820d8f01d74c88063a8f4d8"]
             */
            args?: string[];
        }, params?: RequestParams) => Promise<MethodExecutionResult>;
        /**
         * @description Send message to blockchain
         *
         * @tags Blockchain
         * @name SendBlockchainMessage
         * @request POST:/v2/blockchain/message
         */
        sendBlockchainMessage: (data: {
            /** @example "te6ccgECBQEAARUAAkWIAWTtae+KgtbrX26Bep8JSq8lFLfGOoyGR/xwdjfvpvEaHg" */
            boc?: string;
            /** @maxItems 10 */
            batch?: string[];
        }, params?: RequestParams) => Promise<void>;
        /**
         * @description Get blockchain config
         *
         * @tags Blockchain
         * @name GetBlockchainConfig
         * @request GET:/v2/blockchain/config
         */
        getBlockchainConfig: (params?: RequestParams) => Promise<BlockchainConfig>;
        /**
         * @description Get raw blockchain config
         *
         * @tags Blockchain
         * @name GetRawBlockchainConfig
         * @request GET:/v2/blockchain/config/raw
         */
        getRawBlockchainConfig: (params?: RequestParams) => Promise<RawBlockchainConfig>;
        /**
         * @description Blockchain account inspect
         *
         * @tags Blockchain
         * @name BlockchainAccountInspect
         * @request GET:/v2/blockchain/accounts/{account_id}/inspect
         */
        blockchainAccountInspect: (accountId: string, params?: RequestParams) => Promise<BlockchainAccountInspect>;
    };
    emulation: {
        /**
         * @description Decode a given message. Only external incoming messages can be decoded currently.
         *
         * @tags Emulation
         * @name DecodeMessage
         * @request POST:/v2/message/decode
         */
        decodeMessage: (data: {
            /** @example "te6ccgECBQEAARUAAkWIAWTtae+KgtbrX26Bep8JSq8lFLfGOoyGR/xwdjfvpvEaHg" */
            boc: string;
        }, params?: RequestParams) => Promise<DecodedMessage>;
        /**
         * @description Emulate sending message to blockchain
         *
         * @tags Emulation
         * @name EmulateMessageToEvent
         * @request POST:/v2/events/emulate
         */
        emulateMessageToEvent: (data: {
            /** @example "te6ccgECBQEAARUAAkWIAWTtae+KgtbrX26Bep8JSq8lFLfGOoyGR/xwdjfvpvEaHg" */
            boc: string;
        }, query?: {
            ignore_signature_check?: boolean;
        }, params?: RequestParams) => Promise<Event>;
        /**
         * @description Emulate sending message to blockchain
         *
         * @tags Emulation
         * @name EmulateMessageToTrace
         * @request POST:/v2/traces/emulate
         */
        emulateMessageToTrace: (data: {
            /** @example "te6ccgECBQEAARUAAkWIAWTtae+KgtbrX26Bep8JSq8lFLfGOoyGR/xwdjfvpvEaHg" */
            boc: string;
        }, query?: {
            ignore_signature_check?: boolean;
        }, params?: RequestParams) => Promise<Trace>;
        /**
         * @description Emulate sending message to blockchain
         *
         * @tags Emulation
         * @name EmulateMessageToWallet
         * @request POST:/v2/wallet/emulate
         */
        emulateMessageToWallet: (data: {
            /** @example "te6ccgECBQEAARUAAkWIAWTtae+KgtbrX26Bep8JSq8lFLfGOoyGR/xwdjfvpvEaHg" */
            boc: string;
            /** additional per account configuration */
            params?: {
                /** @example "0:97146a46acc2654y27947f14c4a4b14273e954f78bc017790b41208b0043200b" */
                address: string;
                /**
                 * @format int64
                 * @example 10000000000
                 */
                balance?: number;
            }[];
        }, params?: RequestParams) => Promise<MessageConsequences>;
        /**
         * @description Emulate sending message to blockchain
         *
         * @tags Emulation
         * @name EmulateMessageToAccountEvent
         * @request POST:/v2/accounts/{account_id}/events/emulate
         */
        emulateMessageToAccountEvent: (accountId: string, data: {
            /** @example "te6ccgECBQEAARUAAkWIAWTtae+KgtbrX26Bep8JSq8lFLfGOoyGR/xwdjfvpvEaHg" */
            boc: string;
        }, params?: RequestParams) => Promise<AccountEvent>;
    };
    accounts: {
        /**
         * @description parse address and display in all formats
         *
         * @tags Accounts
         * @name AddressParse
         * @request GET:/v2/address/{account_id}/parse
         */
        addressParse: (accountId: string, params?: RequestParams) => Promise<{
            /** @example "0:6e731f2e28b73539a7f85ac47ca104d5840b229351189977bb6151d36b5e3f5e" */
            raw_form: string;
            bounceable: {
                b64: string;
                b64url: string;
            };
            non_bounceable: {
                b64: string;
                b64url: string;
            };
            given_type: string;
            test_only: boolean;
        }>;
        /**
         * @description Get human-friendly information about several accounts without low-level details.
         *
         * @tags Accounts
         * @name GetAccounts
         * @request POST:/v2/accounts/_bulk
         */
        getAccounts: (data: {
            account_ids: string[];
        }, params?: RequestParams) => Promise<Accounts>;
        /**
         * @description Get human-friendly information about an account without low-level details.
         *
         * @tags Accounts
         * @name GetAccount
         * @request GET:/v2/accounts/{account_id}
         */
        getAccount: (accountId: string, params?: RequestParams) => Promise<Account>;
        /**
         * @description Get account's domains
         *
         * @tags Accounts
         * @name AccountDnsBackResolve
         * @request GET:/v2/accounts/{account_id}/dns/backresolve
         */
        accountDnsBackResolve: (accountId: string, params?: RequestParams) => Promise<DomainNames>;
        /**
         * @description Get all Jettons balances by owner address
         *
         * @tags Accounts
         * @name GetAccountJettonsBalances
         * @request GET:/v2/accounts/{account_id}/jettons
         */
        getAccountJettonsBalances: (accountId: string, query?: {
            /**
             * accept ton and all possible fiat currencies, separated by commas
             * @example "ton,usd,rub"
             */
            currencies?: string;
        }, params?: RequestParams) => Promise<JettonsBalances>;
        /**
         * @description Get the transfer jettons history for account
         *
         * @tags Accounts
         * @name GetAccountJettonsHistory
         * @request GET:/v2/accounts/{account_id}/jettons/history
         */
        getAccountJettonsHistory: (accountId: string, query: {
            /**
             * omit this parameter to get last events
             * @format int64
             * @example 25758317000002
             */
            before_lt?: number;
            /**
             * @max 1000
             * @example 100
             */
            limit: number;
            /**
             * @format int64
             * @example 1668436763
             */
            start_date?: number;
            /**
             * @format int64
             * @example 1668436763
             */
            end_date?: number;
        }, params?: RequestParams) => Promise<AccountEvents>;
        /**
         * @description Get the transfer jetton history for account and jetton
         *
         * @tags Accounts
         * @name GetAccountJettonHistoryById
         * @request GET:/v2/accounts/{account_id}/jettons/{jetton_id}/history
         */
        getAccountJettonHistoryById: (accountId: string, jettonId: string, query: {
            /**
             * omit this parameter to get last events
             * @format int64
             * @example 25758317000002
             */
            before_lt?: number;
            /**
             * @max 1000
             * @example 100
             */
            limit: number;
            /**
             * @format int64
             * @example 1668436763
             */
            start_date?: number;
            /**
             * @format int64
             * @example 1668436763
             */
            end_date?: number;
        }, params?: RequestParams) => Promise<AccountEvents>;
        /**
         * @description Get all NFT items by owner address
         *
         * @tags Accounts
         * @name GetAccountNftItems
         * @request GET:/v2/accounts/{account_id}/nfts
         */
        getAccountNftItems: (accountId: string, query?: {
            /**
             * nft collection
             * @example "0:06d811f426598591b32b2c49f29f66c821368e4acb1de16762b04e0174532465"
             */
            collection?: string;
            /**
             * @max 1000
             * @default 1000
             */
            limit?: number;
            /** @default 0 */
            offset?: number;
            /**
             * Selling nft items in ton implemented usually via transfer items to special selling account. This option enables including items which owned not directly.
             * @default false
             */
            indirect_ownership?: boolean;
        }, params?: RequestParams) => Promise<NftItems>;
        /**
         * @description Get events for an account. Each event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
         *
         * @tags Accounts
         * @name GetAccountEvents
         * @request GET:/v2/accounts/{account_id}/events
         */
        getAccountEvents: (accountId: string, query: {
            /**
             * Show only events that are initiated by this account
             * @default false
             */
            initiator?: boolean;
            /**
             * filter actions where requested account is not real subject (for example sender or receiver jettons)
             * @default false
             */
            subject_only?: boolean;
            /**
             * omit this parameter to get last events
             * @format int64
             * @example 25758317000002
             */
            before_lt?: number;
            /**
             * @max 1000
             * @example 100
             */
            limit: number;
            /**
             * @format int64
             * @example 1668436763
             */
            start_date?: number;
            /**
             * @format int64
             * @example 1668436763
             */
            end_date?: number;
        }, params?: RequestParams) => Promise<AccountEvents>;
        /**
         * @description Get event for an account by event_id
         *
         * @tags Accounts
         * @name GetAccountEvent
         * @request GET:/v2/accounts/{account_id}/events/{event_id}
         */
        getAccountEvent: (accountId: string, eventId: string, query?: {
            /**
             * filter actions where requested account is not real subject (for example sender or receiver jettons)
             * @default false
             */
            subject_only?: boolean;
        }, params?: RequestParams) => Promise<AccountEvent>;
        /**
         * @description Get traces for account
         *
         * @tags Accounts
         * @name GetAccountTraces
         * @request GET:/v2/accounts/{account_id}/traces
         */
        getAccountTraces: (accountId: string, query?: {
            /**
             * @max 1000
             * @default 100
             * @example 100
             */
            limit?: number;
        }, params?: RequestParams) => Promise<TraceIDs>;
        /**
         * @description Get all subscriptions by wallet address
         *
         * @tags Accounts
         * @name GetAccountSubscriptions
         * @request GET:/v2/accounts/{account_id}/subscriptions
         */
        getAccountSubscriptions: (accountId: string, params?: RequestParams) => Promise<Subscriptions>;
        /**
         * @description Update internal cache for a particular account
         *
         * @tags Accounts
         * @name ReindexAccount
         * @request POST:/v2/accounts/{account_id}/reindex
         */
        reindexAccount: (accountId: string, params?: RequestParams) => Promise<void>;
        /**
         * @description Search by account domain name
         *
         * @tags Accounts
         * @name SearchAccounts
         * @request GET:/v2/accounts/search
         */
        searchAccounts: (query: {
            /**
             * @minLength 3
             * @maxLength 15
             */
            name: string;
        }, params?: RequestParams) => Promise<FoundAccounts>;
        /**
         * @description Get expiring account .ton dns
         *
         * @tags Accounts
         * @name GetAccountDnsExpiring
         * @request GET:/v2/accounts/{account_id}/dns/expiring
         */
        getAccountDnsExpiring: (accountId: string, query?: {
            /**
             * number of days before expiration
             * @min 1
             * @max 3660
             */
            period?: number;
        }, params?: RequestParams) => Promise<DnsExpiring>;
        /**
         * @description Get public key by account id
         *
         * @tags Accounts
         * @name GetAccountPublicKey
         * @request GET:/v2/accounts/{account_id}/publickey
         */
        getAccountPublicKey: (accountId: string, params?: RequestParams) => Promise<{
            /** @example "NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ3..." */
            public_key: string;
        }>;
        /**
         * @description Get account's balance change
         *
         * @tags Accounts
         * @name GetAccountDiff
         * @request GET:/v2/accounts/{account_id}/diff
         */
        getAccountDiff: (accountId: string, query: {
            /**
             * @format int64
             * @example 1668436763
             */
            start_date: number;
            /**
             * @format int64
             * @example 1668436763
             */
            end_date: number;
        }, params?: RequestParams) => Promise<{
            /**
             * @format int64
             * @example 1000000000
             */
            balance_change: number;
        }>;
    };
    nft: {
        /**
         * @description Get the transfer nft history
         *
         * @tags NFT
         * @name GetAccountNftHistory
         * @request GET:/v2/accounts/{account_id}/nfts/history
         */
        getAccountNftHistory: (accountId: string, query: {
            /**
             * omit this parameter to get last events
             * @format int64
             * @example 25758317000002
             */
            before_lt?: number;
            /**
             * @max 1000
             * @example 100
             */
            limit: number;
            /**
             * @format int64
             * @example 1668436763
             */
            start_date?: number;
            /**
             * @format int64
             * @example 1668436763
             */
            end_date?: number;
        }, params?: RequestParams) => Promise<AccountEvents>;
        /**
         * @description Get NFT collections
         *
         * @tags NFT
         * @name GetNftCollections
         * @request GET:/v2/nfts/collections
         */
        getNftCollections: (query?: {
            /**
             * @format int32
             * @max 1000
             * @default 100
             * @example 15
             */
            limit?: number;
            /**
             * @format int32
             * @default 0
             * @example 10
             */
            offset?: number;
        }, params?: RequestParams) => Promise<NftCollections>;
        /**
         * @description Get NFT collection by collection address
         *
         * @tags NFT
         * @name GetNftCollection
         * @request GET:/v2/nfts/collections/{account_id}
         */
        getNftCollection: (accountId: string, params?: RequestParams) => Promise<NftCollection>;
        /**
         * @description Get NFT items from collection by collection address
         *
         * @tags NFT
         * @name GetItemsFromCollection
         * @request GET:/v2/nfts/collections/{account_id}/items
         */
        getItemsFromCollection: (accountId: string, query?: {
            /**
             * @max 1000
             * @default 1000
             */
            limit?: number;
            /** @default 0 */
            offset?: number;
        }, params?: RequestParams) => Promise<NftItems>;
        /**
         * @description Get NFT items by their addresses
         *
         * @tags NFT
         * @name GetNftItemsByAddresses
         * @request POST:/v2/nfts/_bulk
         */
        getNftItemsByAddresses: (data: {
            account_ids: string[];
        }, params?: RequestParams) => Promise<NftItems>;
        /**
         * @description Get NFT item by its address
         *
         * @tags NFT
         * @name GetNftItemByAddress
         * @request GET:/v2/nfts/{account_id}
         */
        getNftItemByAddress: (accountId: string, params?: RequestParams) => Promise<NftItem>;
        /**
         * @description Get the transfer nfts history for account
         *
         * @tags NFT
         * @name GetNftHistoryById
         * @request GET:/v2/nfts/{account_id}/history
         */
        getNftHistoryById: (accountId: string, query: {
            /**
             * omit this parameter to get last events
             * @format int64
             * @example 25758317000002
             */
            before_lt?: number;
            /**
             * @max 1000
             * @example 100
             */
            limit: number;
            /**
             * @format int64
             * @example 1668436763
             */
            start_date?: number;
            /**
             * @format int64
             * @example 1668436763
             */
            end_date?: number;
        }, params?: RequestParams) => Promise<AccountEvents>;
    };
    dns: {
        /**
         * @description Get full information about domain name
         *
         * @tags DNS
         * @name GetDnsInfo
         * @request GET:/v2/dns/{domain_name}
         */
        getDnsInfo: (domainName: string, params?: RequestParams) => Promise<DomainInfo>;
        /**
         * @description DNS resolve for domain name
         *
         * @tags DNS
         * @name DnsResolve
         * @request GET:/v2/dns/{domain_name}/resolve
         */
        dnsResolve: (domainName: string, params?: RequestParams) => Promise<DnsRecord>;
        /**
         * @description Get domain bids
         *
         * @tags DNS
         * @name GetDomainBids
         * @request GET:/v2/dns/{domain_name}/bids
         */
        getDomainBids: (domainName: string, params?: RequestParams) => Promise<DomainBids>;
        /**
         * @description Get all auctions
         *
         * @tags DNS
         * @name GetAllAuctions
         * @request GET:/v2/dns/auctions
         */
        getAllAuctions: (query?: {
            /**
             * domain filter for current auctions "ton" or "t.me"
             * @example "ton"
             */
            tld?: string;
        }, params?: RequestParams) => Promise<Auctions>;
    };
    traces: {
        /**
         * @description Get the trace by trace ID or hash of any transaction in trace
         *
         * @tags Traces
         * @name GetTrace
         * @request GET:/v2/traces/{trace_id}
         */
        getTrace: (traceId: string, params?: RequestParams) => Promise<Trace>;
    };
    events: {
        /**
         * @description Get an event either by event ID or a hash of any transaction in a trace. An event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
         *
         * @tags Events
         * @name GetEvent
         * @request GET:/v2/events/{event_id}
         */
        getEvent: (eventId: string, params?: RequestParams) => Promise<Event>;
    };
    jettons: {
        /**
         * @description Get a list of all indexed jetton masters in the blockchain.
         *
         * @tags Jettons
         * @name GetJettons
         * @request GET:/v2/jettons
         */
        getJettons: (query?: {
            /**
             * @format int32
             * @max 1000
             * @default 100
             * @example 15
             */
            limit?: number;
            /**
             * @format int32
             * @default 0
             * @example 10
             */
            offset?: number;
        }, params?: RequestParams) => Promise<Jettons>;
        /**
         * @description Get jetton metadata by jetton master address
         *
         * @tags Jettons
         * @name GetJettonInfo
         * @request GET:/v2/jettons/{account_id}
         */
        getJettonInfo: (accountId: string, params?: RequestParams) => Promise<JettonInfo>;
        /**
         * @description Get jetton's holders
         *
         * @tags Jettons
         * @name GetJettonHolders
         * @request GET:/v2/jettons/{account_id}/holders
         */
        getJettonHolders: (accountId: string, query?: {
            /**
             * @max 1000
             * @default 1000
             */
            limit?: number;
            /** @default 0 */
            offset?: number;
        }, params?: RequestParams) => Promise<JettonHolders>;
        /**
         * @description Get only jetton transfers in the event
         *
         * @tags Jettons
         * @name GetJettonsEvents
         * @request GET:/v2/events/{event_id}/jettons
         */
        getJettonsEvents: (eventId: string, params?: RequestParams) => Promise<Event>;
    };
    staking: {
        /**
         * @description All pools where account participates
         *
         * @tags Staking
         * @name GetAccountNominatorsPools
         * @request GET:/v2/staking/nominator/{account_id}/pools
         */
        getAccountNominatorsPools: (accountId: string, params?: RequestParams) => Promise<AccountStaking>;
        /**
         * @description Stacking pool info
         *
         * @tags Staking
         * @name GetStakingPoolInfo
         * @request GET:/v2/staking/pool/{account_id}
         */
        getStakingPoolInfo: (accountId: string, params?: RequestParams) => Promise<{
            implementation: PoolImplementation;
            pool: PoolInfo;
        }>;
        /**
         * @description Pool history
         *
         * @tags Staking
         * @name GetStakingPoolHistory
         * @request GET:/v2/staking/pool/{account_id}/history
         */
        getStakingPoolHistory: (accountId: string, params?: RequestParams) => Promise<{
            apy: ApyHistory[];
        }>;
        /**
         * @description All pools available in network
         *
         * @tags Staking
         * @name GetStakingPools
         * @request GET:/v2/staking/pools
         */
        getStakingPools: (query?: {
            /**
             * account ID
             * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
             */
            available_for?: string;
            /**
             * return also pools not from white list - just compatible by interfaces (maybe dangerous!)
             * @example false
             */
            include_unverified?: boolean;
        }, params?: RequestParams) => Promise<{
            pools: PoolInfo[];
            implementations: Record<string, PoolImplementation>;
        }>;
    };
    storage: {
        /**
         * @description Get TON storage providers deployed to the blockchain.
         *
         * @tags Storage
         * @name GetStorageProviders
         * @request GET:/v2/storage/providers
         */
        getStorageProviders: (params?: RequestParams) => Promise<{
            providers: StorageProvider[];
        }>;
    };
    rates: {
        /**
         * @description Get the token price to the currency
         *
         * @tags Rates
         * @name GetRates
         * @request GET:/v2/rates
         */
        getRates: (query: {
            /**
             * accept ton and jetton master addresses, separated by commas
             * @example "ton"
             */
            tokens: string;
            /**
             * accept ton and all possible fiat currencies, separated by commas
             * @example "ton,usd,rub"
             */
            currencies: string;
        }, params?: RequestParams) => Promise<{
            rates: Record<string, TokenRates>;
        }>;
        /**
         * @description Get chart by token
         *
         * @tags Rates
         * @name GetChartRates
         * @request GET:/v2/rates/chart
         */
        getChartRates: (query: {
            /** accept jetton master address */
            token: string;
            /** @example "usd" */
            currency?: string;
            /**
             * @format int64
             * @example 1668436763
             */
            start_date?: number;
            /**
             * @format int64
             * @example 1668436763
             */
            end_date?: number;
        }, params?: RequestParams) => Promise<{
            /** @example {} */
            points: any;
        }>;
    };
    connect: {
        /**
         * @description Get a payload for further token receipt
         *
         * @tags Connect
         * @name GetTonConnectPayload
         * @request GET:/v2/tonconnect/payload
         */
        getTonConnectPayload: (params?: RequestParams) => Promise<{
            /** @example "84jHVNLQmZsAAAAAZB0Zryi2wqVJI-KaKNXOvCijEi46YyYzkaSHyJrMPBMOkVZa" */
            payload: string;
        }>;
        /**
         * @description Get account info by state init
         *
         * @tags Connect
         * @name GetAccountInfoByStateInit
         * @request POST:/v2/tonconnect/stateinit
         */
        getAccountInfoByStateInit: (data: {
            state_init: string;
        }, params?: RequestParams) => Promise<AccountInfoByStateInit>;
    };
    wallet: {
        /**
         * @description Get backup info
         *
         * @tags Wallet
         * @name GetWalletBackup
         * @request GET:/v2/wallet/backup
         */
        getWalletBackup: (params?: RequestParams) => Promise<{
            dump: string;
        }>;
        /**
         * @description Set backup info
         *
         * @tags Wallet
         * @name SetWalletBackup
         * @request PUT:/v2/wallet/backup
         */
        setWalletBackup: (data: File, params?: RequestParams) => Promise<void>;
        /**
         * @description Account verification and token issuance
         *
         * @tags Wallet
         * @name TonConnectProof
         * @request POST:/v2/wallet/auth/proof
         */
        tonConnectProof: (data: {
            /** @example "0:97146a46acc2654y27947f14c4a4b14273e954f78bc017790b41208b0043200b" */
            address: string;
            proof: {
                /**
                 * @format int64
                 * @example "1678275313"
                 */
                timestamp: number;
                domain: {
                    /** @format uint32 */
                    length_bytes?: number;
                    value: string;
                };
                signature: string;
                /** @example "84jHVNLQmZsAAAAAZB0Zryi2wqVJI-KaKNXOvCijEi46YyYzkaSHyJrMPBMOkVZa" */
                payload: string;
                state_init?: string;
            };
        }, params?: RequestParams) => Promise<{
            /** @example "NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ3..." */
            token: string;
        }>;
        /**
         * @description Get wallets by public key
         *
         * @tags Wallet
         * @name GetWalletsByPublicKey
         * @request GET:/v2/pubkeys/{public_key}/wallets
         */
        getWalletsByPublicKey: (publicKey: string, params?: RequestParams) => Promise<Accounts>;
        /**
         * @description Get account seqno
         *
         * @tags Wallet
         * @name GetAccountSeqno
         * @request GET:/v2/wallet/{account_id}/seqno
         */
        getAccountSeqno: (accountId: string, params?: RequestParams) => Promise<Seqno>;
    };
    liteServer: {
        /**
         * @description Get raw masterchain info
         *
         * @tags Lite Server
         * @name GetRawMasterchainInfo
         * @request GET:/v2/liteserver/get_masterchain_info
         */
        getRawMasterchainInfo: (params?: RequestParams) => Promise<{
            last: BlockRaw;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            state_root_hash: string;
            init: InitStateRaw;
        }>;
        /**
         * @description Get raw masterchain info ext
         *
         * @tags Lite Server
         * @name GetRawMasterchainInfoExt
         * @request GET:/v2/liteserver/get_masterchain_info_ext
         */
        getRawMasterchainInfoExt: (query: {
            /**
             * mode
             * @format uint32
             * @example 0
             */
            mode: number;
        }, params?: RequestParams) => Promise<{
            /**
             * @format uint32
             * @example 0
             */
            mode: number;
            /**
             * @format uint32
             * @example 257
             */
            version: number;
            /**
             * @format uint64
             * @example 7
             */
            capabilities: number;
            last: BlockRaw;
            /**
             * @format uint32
             * @example 1687938199
             */
            last_utime: number;
            /**
             * @format uint32
             * @example 1687938204
             */
            now: number;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            state_root_hash: string;
            init: InitStateRaw;
        }>;
        /**
         * @description Get raw time
         *
         * @tags Lite Server
         * @name GetRawTime
         * @request GET:/v2/liteserver/get_time
         */
        getRawTime: (params?: RequestParams) => Promise<{
            /**
             * @format uint32
             * @example 1687146728
             */
            time: number;
        }>;
        /**
         * @description Get raw blockchain block
         *
         * @tags Lite Server
         * @name GetRawBlockchainBlock
         * @request GET:/v2/liteserver/get_block/{block_id}
         */
        getRawBlockchainBlock: (blockId: string, params?: RequestParams) => Promise<{
            id: BlockRaw;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            data: string;
        }>;
        /**
         * @description Get raw blockchain block state
         *
         * @tags Lite Server
         * @name GetRawBlockchainBlockState
         * @request GET:/v2/liteserver/get_state/{block_id}
         */
        getRawBlockchainBlockState: (blockId: string, params?: RequestParams) => Promise<{
            id: BlockRaw;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            root_hash: string;
            /** @example "A6A0BD6608672B11B79538A50B2204E748305C12AA0DED9C16CF0006CE3AF8DB" */
            file_hash: string;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            data: string;
        }>;
        /**
         * @description Get raw blockchain block header
         *
         * @tags Lite Server
         * @name GetRawBlockchainBlockHeader
         * @request GET:/v2/liteserver/get_block_header/{block_id}
         */
        getRawBlockchainBlockHeader: (blockId: string, query: {
            /**
             * mode
             * @format uint32
             * @example 0
             */
            mode: number;
        }, params?: RequestParams) => Promise<{
            id: BlockRaw;
            /**
             * @format uint32
             * @example 0
             */
            mode: number;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            header_proof: string;
        }>;
        /**
         * @description Send raw message to blockchain
         *
         * @tags Lite Server
         * @name SendRawMessage
         * @request POST:/v2/liteserver/send_message
         */
        sendRawMessage: (data: {
            body: string;
        }, params?: RequestParams) => Promise<{
            /**
             * @format uint32
             * @example 200
             */
            code: number;
        }>;
        /**
         * @description Get raw account state
         *
         * @tags Lite Server
         * @name GetRawAccountState
         * @request GET:/v2/liteserver/get_account_state/{account_id}
         */
        getRawAccountState: (accountId: string, query?: {
            /**
             * target block: (workchain,shard,seqno,root_hash,file_hash)
             * @example "(-1,8000000000000000,4234234,3E575DAB1D25...90D8,47192E5C46C...BB29)"
             */
            target_block?: string;
        }, params?: RequestParams) => Promise<{
            id: BlockRaw;
            shardblk: BlockRaw;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            shard_proof: string;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            proof: string;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            state: string;
        }>;
        /**
         * @description Get raw shard info
         *
         * @tags Lite Server
         * @name GetRawShardInfo
         * @request GET:/v2/liteserver/get_shard_info/{block_id}
         */
        getRawShardInfo: (blockId: string, query: {
            /**
             * workchain
             * @format uint32
             * @example 1
             */
            workchain: number;
            /**
             * shard
             * @format uint64
             * @example 1
             */
            shard: number;
            /**
             * exact
             * @example false
             */
            exact: boolean;
        }, params?: RequestParams) => Promise<{
            id: BlockRaw;
            shardblk: BlockRaw;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            shard_proof: string;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            shard_descr: string;
        }>;
        /**
         * @description Get all raw shards info
         *
         * @tags Lite Server
         * @name GetAllRawShardsInfo
         * @request GET:/v2/liteserver/get_all_shards_info/{block_id}
         */
        getAllRawShardsInfo: (blockId: string, params?: RequestParams) => Promise<{
            id: BlockRaw;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            proof: string;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            data: string;
        }>;
        /**
         * @description Get raw transactions
         *
         * @tags Lite Server
         * @name GetRawTransactions
         * @request GET:/v2/liteserver/get_transactions/{account_id}
         */
        getRawTransactions: (accountId: string, query: {
            /**
             * count
             * @format uint32
             * @example 100
             */
            count: number;
            /**
             * lt
             * @format uint64
             * @example 23814011000000
             */
            lt: number;
            /**
             * hash
             * @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85"
             */
            hash: string;
        }, params?: RequestParams) => Promise<{
            ids: BlockRaw[];
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            transactions: string;
        }>;
        /**
         * @description Get raw list block transactions
         *
         * @tags Lite Server
         * @name GetRawListBlockTransactions
         * @request GET:/v2/liteserver/list_block_transactions/{block_id}
         */
        getRawListBlockTransactions: (blockId: string, query: {
            /**
             * mode
             * @format uint32
             * @example 0
             */
            mode: number;
            /**
             * count
             * @format uint32
             * @example 100
             */
            count: number;
            /**
             * account ID
             * @example "0:97264395BD65A255A429B11326C84128B7D70FFED7949ABAE3036D506BA38621"
             */
            account_id?: string;
            /**
             * lt
             * @format uint64
             * @example 23814011000000
             */
            lt?: number;
        }, params?: RequestParams) => Promise<{
            id: BlockRaw;
            /**
             * @format uint32
             * @example 100
             */
            req_count: number;
            /** @example true */
            incomplete: boolean;
            ids: {
                /**
                 * @format uint32
                 * @example 0
                 */
                mode: number;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                account?: string;
                /** @format uint64 */
                lt?: number;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                hash?: string;
            }[];
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            proof: string;
        }>;
        /**
         * @description Get raw block proof
         *
         * @tags Lite Server
         * @name GetRawBlockProof
         * @request GET:/v2/liteserver/get_block_proof
         */
        getRawBlockProof: (query: {
            /**
             * known block: (workchain,shard,seqno,root_hash,file_hash)
             * @example "(-1,8000000000000000,4234234,3E575DAB1D25...90D8,47192E5C46C...BB29)"
             */
            known_block: string;
            /**
             * target block: (workchain,shard,seqno,root_hash,file_hash)
             * @example "(-1,8000000000000000,4234234,3E575DAB1D25...90D8,47192E5C46C...BB29)"
             */
            target_block?: string;
            /**
             * mode
             * @format uint32
             * @example 0
             */
            mode: number;
        }, params?: RequestParams) => Promise<{
            /** @example true */
            complete: boolean;
            from: BlockRaw;
            to: BlockRaw;
            steps: {
                lite_server_block_link_back: {
                    /** @example false */
                    to_key_block: boolean;
                    from: BlockRaw;
                    to: BlockRaw;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    dest_proof: string;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    proof: string;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    state_proof: string;
                };
                lite_server_block_link_forward: {
                    /** @example false */
                    to_key_block: boolean;
                    from: BlockRaw;
                    to: BlockRaw;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    dest_proof: string;
                    /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                    config_proof: string;
                    signatures: {
                        /** @format uint32 */
                        validator_set_hash: number;
                        /** @format uint32 */
                        catchain_seqno: number;
                        signatures: {
                            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                            node_id_short: string;
                            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                            signature: string;
                        }[];
                    };
                };
            }[];
        }>;
        /**
         * @description Get raw config
         *
         * @tags Lite Server
         * @name GetRawConfig
         * @request GET:/v2/liteserver/get_config_all/{block_id}
         */
        getRawConfig: (blockId: string, query: {
            /**
             * mode
             * @format uint32
             * @example 0
             */
            mode: number;
        }, params?: RequestParams) => Promise<{
            /**
             * @format uint32
             * @example 0
             */
            mode: number;
            id: BlockRaw;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            state_proof: string;
            /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
            config_proof: string;
        }>;
        /**
         * @description Get raw shard block proof
         *
         * @tags Lite Server
         * @name GetRawShardBlockProof
         * @request GET:/v2/liteserver/get_shard_block_proof/{block_id}
         */
        getRawShardBlockProof: (blockId: string, params?: RequestParams) => Promise<{
            masterchain_id: BlockRaw;
            links: {
                id: BlockRaw;
                /** @example "131D0C65055F04E9C19D687B51BC70F952FD9CA6F02C2801D3B89964A779DF85" */
                proof: string;
            }[];
        }>;
    };
}
export {};
