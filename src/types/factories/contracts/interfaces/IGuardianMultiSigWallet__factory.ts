/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IGuardianMultiSigWallet,
  IGuardianMultiSigWalletInterface,
} from "../../../contracts/interfaces/IGuardianMultiSigWallet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_guardians",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IGuardianMultiSigWallet__factory {
  static readonly abi = _abi;
  static createInterface(): IGuardianMultiSigWalletInterface {
    return new utils.Interface(_abi) as IGuardianMultiSigWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGuardianMultiSigWallet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IGuardianMultiSigWallet;
  }
}
