import { Action } from "redux";

export enum E_COMMON_ACTION {
  COMMON_SET_LOADING = "COMMON_SET_LOADING",
  COMMON_SET_ERROR = "COMMON_SET_ERROR",
  COMMON_RESET_STATE = "COMMON_RESET_STATE"
}

export interface ICommonSetLoading {
  isLoading: boolean;
}

export interface ICommonSetError {
  error: string | null;
}

export type TCommonAction = ICommonSetLoading | ICommonSetError;

export interface ICommonAction extends Action<E_COMMON_ACTION> {
  payload?: TCommonAction;
}
