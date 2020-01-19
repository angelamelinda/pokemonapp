import * as common from "./common";
import { E_COMMON_ACTION } from "../../interfaces/action";
import { ERROR_MESSAGE } from "../../constants";

describe("common actions", () => {
  it("should return as expected when setLoading when the isLoading is true", () => {
    const expectedResult = {
      type: E_COMMON_ACTION.COMMON_SET_LOADING,
      payload: { isLoading: true }
    };
    expect(common.setLoading(true)).toEqual(expectedResult);
  });

  it("should return as expected when setLoading when the isLoading is false", () => {
    const expectedResult = {
      type: E_COMMON_ACTION.COMMON_SET_LOADING,
      payload: { isLoading: false }
    };
    expect(common.setLoading(false)).toEqual(expectedResult);
  });

  it("should return as expected when setError when the error is null", () => {
    const expectedResult = {
      type: E_COMMON_ACTION.COMMON_SET_ERROR,
      payload: { error: null }
    };
    expect(common.setError(null)).toEqual(expectedResult);
  });

  it(`should return as expected when setError when the message is ${ERROR_MESSAGE.DEFAULT}`, () => {
    const expectedResult = {
      type: E_COMMON_ACTION.COMMON_SET_ERROR,
      payload: { error: ERROR_MESSAGE.DEFAULT }
    };
    expect(common.setError(ERROR_MESSAGE.DEFAULT)).toEqual(expectedResult);
  });

  it("should return as expected when resetState", () => {
    const expectedResult = {
      type: E_COMMON_ACTION.COMMON_RESET_STATE
    };
    expect(common.resetCommonState()).toEqual(expectedResult);
  });
});
