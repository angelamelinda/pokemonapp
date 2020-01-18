import { ICommonState } from "../../interfaces/state";
import {
  ICommonAction,
  E_COMMON_ACTION,
  ICommonSetLoading,
  ICommonSetError
} from "../../interfaces/action";

export const INITIAL_STATE: ICommonState = {
  isLoading: false,
  error: null
};

function commonReducer(
  state = INITIAL_STATE,
  action: ICommonAction
): ICommonState {
  switch (action.type) {
    case E_COMMON_ACTION.COMMON_SET_LOADING:
      const { isLoading } = action.payload as ICommonSetLoading;
      return { ...state, isLoading };
    case E_COMMON_ACTION.COMMON_SET_ERROR:
      const { error } = action.payload as ICommonSetError;
      return { ...state, error };
    case E_COMMON_ACTION.COMMON_RESET_STATE:
      return INITIAL_STATE;
  }
  return state;
}

export default commonReducer;
