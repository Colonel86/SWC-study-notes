/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface RubixiInterface extends utils.Interface {
  functions: {
    "currentPyramidBalanceApproximately()": FunctionFragment;
    "feesSeperateFromBalanceApproximately()": FunctionFragment;
    "collectPercentOfFees(uint256)": FunctionFragment;
    "nextPayoutWhenPyramidBalanceTotalsApproximately()": FunctionFragment;
    "DynamicPyramid()": FunctionFragment;
    "collectAllFees()": FunctionFragment;
    "currentMultiplier()": FunctionFragment;
    "currentFeePercentage()": FunctionFragment;
    "participantDetails(uint256)": FunctionFragment;
    "totalParticipants()": FunctionFragment;
    "changeOwner(address)": FunctionFragment;
    "collectFeesInEther(uint256)": FunctionFragment;
    "changeMultiplier(uint256)": FunctionFragment;
    "numberOfParticipantsWaitingForPayout()": FunctionFragment;
    "changeFeePercentage(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "currentPyramidBalanceApproximately"
      | "feesSeperateFromBalanceApproximately"
      | "collectPercentOfFees"
      | "nextPayoutWhenPyramidBalanceTotalsApproximately"
      | "DynamicPyramid"
      | "collectAllFees"
      | "currentMultiplier"
      | "currentFeePercentage"
      | "participantDetails"
      | "totalParticipants"
      | "changeOwner"
      | "collectFeesInEther"
      | "changeMultiplier"
      | "numberOfParticipantsWaitingForPayout"
      | "changeFeePercentage"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "currentPyramidBalanceApproximately",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feesSeperateFromBalanceApproximately",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "collectPercentOfFees",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "nextPayoutWhenPyramidBalanceTotalsApproximately",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DynamicPyramid",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "collectAllFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentFeePercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "participantDetails",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalParticipants",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "collectFeesInEther",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeMultiplier",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfParticipantsWaitingForPayout",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeFeePercentage",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "currentPyramidBalanceApproximately",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feesSeperateFromBalanceApproximately",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectPercentOfFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextPayoutWhenPyramidBalanceTotalsApproximately",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DynamicPyramid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectAllFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentFeePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "participantDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalParticipants",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectFeesInEther",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfParticipantsWaitingForPayout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeFeePercentage",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Rubixi extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RubixiInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    currentPyramidBalanceApproximately(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & { pyramidBalance: BigNumber; info: string }
    >;

    feesSeperateFromBalanceApproximately(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { fees: BigNumber }>;

    collectPercentOfFees(
      _pcent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nextPayoutWhenPyramidBalanceTotalsApproximately(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balancePayout: BigNumber }>;

    DynamicPyramid(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    collectAllFees(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    currentMultiplier(
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { multiplier: BigNumber; info: string }>;

    currentFeePercentage(
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { fee: BigNumber; info: string }>;

    participantDetails(
      orderInPyramid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { Address: string; Payout: BigNumber }>;

    totalParticipants(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    changeOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    collectFeesInEther(
      _amt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeMultiplier(
      _mult: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    numberOfParticipantsWaitingForPayout(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    changeFeePercentage(
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  currentPyramidBalanceApproximately(
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { pyramidBalance: BigNumber; info: string }>;

  feesSeperateFromBalanceApproximately(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  collectPercentOfFees(
    _pcent: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nextPayoutWhenPyramidBalanceTotalsApproximately(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  DynamicPyramid(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  collectAllFees(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  currentMultiplier(
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { multiplier: BigNumber; info: string }>;

  currentFeePercentage(
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { fee: BigNumber; info: string }>;

  participantDetails(
    orderInPyramid: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { Address: string; Payout: BigNumber }>;

  totalParticipants(overrides?: CallOverrides): Promise<BigNumber>;

  changeOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  collectFeesInEther(
    _amt: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeMultiplier(
    _mult: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  numberOfParticipantsWaitingForPayout(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  changeFeePercentage(
    _fee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    currentPyramidBalanceApproximately(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & { pyramidBalance: BigNumber; info: string }
    >;

    feesSeperateFromBalanceApproximately(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collectPercentOfFees(
      _pcent: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    nextPayoutWhenPyramidBalanceTotalsApproximately(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    DynamicPyramid(overrides?: CallOverrides): Promise<void>;

    collectAllFees(overrides?: CallOverrides): Promise<void>;

    currentMultiplier(
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { multiplier: BigNumber; info: string }>;

    currentFeePercentage(
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { fee: BigNumber; info: string }>;

    participantDetails(
      orderInPyramid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { Address: string; Payout: BigNumber }>;

    totalParticipants(overrides?: CallOverrides): Promise<BigNumber>;

    changeOwner(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    collectFeesInEther(
      _amt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    changeMultiplier(
      _mult: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    numberOfParticipantsWaitingForPayout(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeFeePercentage(
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    currentPyramidBalanceApproximately(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feesSeperateFromBalanceApproximately(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collectPercentOfFees(
      _pcent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nextPayoutWhenPyramidBalanceTotalsApproximately(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    DynamicPyramid(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    collectAllFees(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    currentMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    currentFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    participantDetails(
      orderInPyramid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalParticipants(overrides?: CallOverrides): Promise<BigNumber>;

    changeOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    collectFeesInEther(
      _amt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeMultiplier(
      _mult: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    numberOfParticipantsWaitingForPayout(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeFeePercentage(
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    currentPyramidBalanceApproximately(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feesSeperateFromBalanceApproximately(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collectPercentOfFees(
      _pcent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nextPayoutWhenPyramidBalanceTotalsApproximately(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DynamicPyramid(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    collectAllFees(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    currentMultiplier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentFeePercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    participantDetails(
      orderInPyramid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalParticipants(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    collectFeesInEther(
      _amt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeMultiplier(
      _mult: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    numberOfParticipantsWaitingForPayout(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeFeePercentage(
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
