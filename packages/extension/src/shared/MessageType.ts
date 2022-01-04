import type { JWK } from "jose"
import type { InvokeFunctionTransaction, Status, typedData } from "starknet"

import { ExtActionItem } from "./actionQueue"
import { BackupWallet } from "./backup.model"

export type MessageType =
  | { type: "OPEN_UI" }
  | { type: "ADD_TRANSACTION"; data: InvokeFunctionTransaction }
  | { type: "ADD_TRANSACTION_RES"; data: { actionHash: string } }
  | { type: "TRANSACTION_UPDATES"; data: { hash: string; status: Status }[] }
  | { type: "GET_TRANSACTION"; data: { hash: string; network: string } }
  | { type: "GET_TRANSACTION_RES"; data: { hash: string; status: Status } }
  | { type: "GET_ACTIONS" }
  | {
      type: "GET_ACTIONS_RES"
      data: ExtActionItem[]
    }
  | { type: "GET_SELECTED_WALLET" }
  | { type: "GET_SELECTED_WALLET_RES"; data: BackupWallet }
  | { type: "CONNECT"; data: { host: string } }
  | { type: "CONNECT_RES"; data: BackupWallet }
  | {
      type: "SUBMITTED_TX"
      data: {
        txHash: string
        actionHash: string
      }
    }
  | {
      type: "FAILED_TX"
      data: { actionHash: string }
    }
  | { type: "ADD_WHITELIST"; data: string }
  | { type: "APPROVE_WHITELIST"; data: { host: string; actionHash: string } }
  | { type: "REJECT_WHITELIST"; data: { host: string; actionHash: string } }
  | { type: "REMOVE_WHITELIST"; data: string }
  | { type: "GET_PENDING_WHITELIST" }
  | { type: "GET_PENDING_WHITELIST_RES"; data: string[] }
  | { type: "IS_WHITELIST"; data: string }
  | { type: "IS_WHITELIST_RES"; data: boolean }
  | { type: "RESET_WHITELIST" }
  | { type: "WALLET_CONNECTED"; data: BackupWallet }
  | { type: "RESET_ALL" }
  | { type: "REQ_PUB" }
  | { type: "REQ_PUB_RES"; data: JWK }
  | { type: "NEW_ACCOUNT"; data: string }
  | { type: "STOP_SESSION" }
  | {
      type: "NEW_ACCOUNT_RES"
      data: { txHash: string; address: string; wallets: BackupWallet[] }
    }
  | { type: "REPORT_PROGRESS"; data: number }
  | { type: "HAS_SESSION" }
  | { type: "HAS_SESSION_RES"; data: boolean }
  | { type: "IS_INITIALIZED" }
  | { type: "IS_INITIALIZED_RES"; data: boolean }
  | { type: "GET_WALLETS" }
  | { type: "GET_WALLETS_RES"; data: BackupWallet[] }
  | { type: "START_SESSION"; data: { secure: true; body: string } }
  | { type: "START_SESSION_REJ" }
  | { type: "START_SESSION_RES" }
  | { type: "RECOVER_KEYSTORE"; data: string }
  | { type: "RECOVER_KEYSTORE_RES" }
  | { type: "ADD_SIGN"; data: typedData.TypedData }
  | { type: "ADD_SIGN_RES"; data: { actionHash: string } }
  | { type: "APPROVE_ACTION"; data: { actionHash: string } }
  | { type: "REJECT_ACTION"; data: { actionHash: string } }
  | {
      type: "ACTIONS_QUEUE_UPDATE"
      data: { actions: ExtActionItem[] }
    }
  | {
      type: "APPROVE_SIGN"
      data: { typedData: typedData.TypedData; actionHash: string }
    }
  | { type: "FAILED_SIGN"; data: { actionHash: string } }
  | { type: "SUCCESS_SIGN"; data: { r: string; s: string; actionHash: string } }

export type WindowMessageType = {
  forwarded?: boolean
  extensionId: string
} & MessageType