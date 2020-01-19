import commonReducer, { INITIAL_STATE } from "./common";
import { E_COMMON_ACTION } from "../../interfaces/action";
import { ERROR_MESSAGE } from "../../constants";

describe("common reducer", () => {
  it("should return isLoading true if the isLoading payload is true", () => {
    expect(
      commonReducer(
        { error: null, isLoading: false },
        {
          type: E_COMMON_ACTION.COMMON_SET_LOADING,
          payload: { isLoading: true }
        }
      )
    ).toEqual({ error: null, isLoading: true });
  });

  it("should return isLoading false if the isLoading payload is false", () => {
    expect(
      commonReducer(
        { error: null, isLoading: true },
        {
          type: E_COMMON_ACTION.COMMON_SET_LOADING,
          payload: { isLoading: false }
        }
      )
    ).toEqual({ error: null, isLoading: false });
  });

  it(`should return error message ${ERROR_MESSAGE.DEFAULT} if the error message ${ERROR_MESSAGE.DEFAULT} payload`, () => {
    expect(
      commonReducer(
        { error: null, isLoading: false },
        {
          type: E_COMMON_ACTION.COMMON_SET_ERROR,
          payload: { error: ERROR_MESSAGE.DEFAULT }
        }
      )
    ).toEqual({
      error: ERROR_MESSAGE.DEFAULT,
      isLoading: false
    });
  });

  it("should return error null if the error payload is null", () => {
    expect(
      commonReducer(
        {
          error: ERROR_MESSAGE.DEFAULT,
          isLoading: false
        },
        {
          type: E_COMMON_ACTION.COMMON_SET_ERROR,
          payload: { error: null }
        }
      )
    ).toEqual({ error: null, isLoading: false });
  });

  it(`should return ${INITIAL_STATE} if reset state`, () => {
    expect(
      commonReducer(
        { ...INITIAL_STATE, isLoading: true },
        {
          type: E_COMMON_ACTION.COMMON_RESET_STATE
        }
      )
    ).toEqual(INITIAL_STATE);
  });
});
