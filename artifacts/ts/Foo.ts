/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as FooContractJson } from "../Foo.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace FooTypes {
  export type Fields = {
    bar: HexString;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    doSomething: {
      params: CallContractParams<{ payer: Address }>;
      result: CallContractResult<null>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
  export type MulticallReturnType<Callss extends MultiCallParams[]> = {
    [index in keyof Callss]: MultiCallResults<Callss[index]>;
  };

  export interface SignExecuteMethodTable {
    doSomething: {
      params: SignExecuteContractMethodParams<{ payer: Address }>;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<FooInstance, FooTypes.Fields> {
  encodeFields(fields: FooTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      []
    );
  }

  at(address: string): FooInstance {
    return new FooInstance(address);
  }

  tests = {
    doSomething: async (
      params: TestContractParamsWithoutMaps<FooTypes.Fields, { payer: Address }>
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "doSomething", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const Foo = new Factory(
  Contract.fromJson(
    FooContractJson,
    "",
    "f9eba17b4d5238dfafc19ccda4f55a2f092b43795cfc853279f11382f5acb02f",
    []
  )
);

// Use this class to interact with the blockchain
export class FooInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<FooTypes.State> {
    return fetchContractState(Foo, this);
  }

  view = {
    doSomething: async (
      params: FooTypes.CallMethodParams<"doSomething">
    ): Promise<FooTypes.CallMethodResult<"doSomething">> => {
      return callMethod(
        Foo,
        this,
        "doSomething",
        params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    doSomething: async (
      params: FooTypes.SignExecuteMethodParams<"doSomething">
    ): Promise<FooTypes.SignExecuteMethodResult<"doSomething">> => {
      return signExecuteMethod(Foo, this, "doSomething", params);
    },
  };
}