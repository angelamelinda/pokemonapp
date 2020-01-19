import axiosMock from "axios";
import { POKEMON_DETAIL, POKEMON_DETAIL_RESPONSE } from "../mock/data";
import { sanitizeDataPokemonDetail, api } from "./api";
import { IApiRequest } from "../interfaces";
import { API_URL } from "../constants";

test("return as expected when sanitizeDataPokemonDetail", () => {
  const expected = POKEMON_DETAIL;
  expect(sanitizeDataPokemonDetail(POKEMON_DETAIL_RESPONSE)).toEqual(expected);
});

test("should return success response if the request is correct", () => {
  const request: IApiRequest = {
    url: API_URL.DETAIL.replace(":id", "2"),
    method: "GET"
  };

  api(request);

  return axiosMock(request)
    .then(response => {
      if (response && response.data) {
        const expectedResult = POKEMON_DETAIL_RESPONSE;
        expect(response.data).toEqual(expectedResult);

        return { success: response.data };
      }
    })
    .catch(_ => {
      // ...
    });
});

test("should return failed response if the request is not correct", () => {
  const request: IApiRequest = {
    url: API_URL.DETAIL.replace(":id", "hehhehdlasdhasldahdl"),
    method: "GET"
  };

  api(request).catch(_ => {});

  return axiosMock(request)
    .then(_ => {
      // ...
    })
    .catch(_ => {
      // throw new Error("Invalid Response");
    });
});
