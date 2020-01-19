import * as pokemon from "./pokemon";
import { E_POKEMON_ACTION } from "../../interfaces/action";
import { POKEMON_DETAIL, POKEMON_LIST } from "../../mock/data";

describe("pokemon actions", () => {
  it("should return as expected when setCurrentPage", () => {
    const expectedResult = {
      type: E_POKEMON_ACTION.POKEMON_SET_CURRENT_PAGE,
      payload: { currentPage: 1 }
    };
    expect(pokemon.setCurrentPage(1)).toEqual(expectedResult);
  });

  it("should return as expected when setTotalResult", () => {
    const expectedResult = {
      type: E_POKEMON_ACTION.POKEMON_SET_TOTAL_RESULT,
      payload: { totalResult: 10 }
    };
    expect(pokemon.setTotalResult(10)).toEqual(expectedResult);
  });

  it("should return as expected when setFilter with bug", () => {
    const expectedResult = {
      type: E_POKEMON_ACTION.POKEMON_SET_FILTER,
      payload: { filter: "bug" }
    };
    expect(pokemon.setFilter("bug")).toEqual(expectedResult);
  });

  it("should return as expected when setFilter with null", () => {
    const expectedResult = {
      type: E_POKEMON_ACTION.POKEMON_SET_FILTER,
      payload: { filter: null }
    };
    expect(pokemon.setFilter(null)).toEqual(expectedResult);
  });

  it(`should return as expected when setPokemonDetail with ${POKEMON_DETAIL}`, () => {
    const expectedResult = {
      type: E_POKEMON_ACTION.POKEMON_SET_DETAIL,
      payload: { pokemonDetail: POKEMON_DETAIL }
    };
    expect(pokemon.setPokemonDetail(POKEMON_DETAIL)).toEqual(expectedResult);
  });

  it("should return as expected when setPokemonDetail with null", () => {
    const expectedResult = {
      type: E_POKEMON_ACTION.POKEMON_SET_DETAIL,
      payload: { pokemonDetail: null }
    };
    expect(pokemon.setPokemonDetail(null)).toEqual(expectedResult);
  });

  it("should return as expected when setPokedex with null", () => {
    const expectedResult = {
      type: E_POKEMON_ACTION.POKEMON_SET_POKEDEX,
      payload: { pokemonList: null }
    };
    expect(pokemon.setPokedex(null)).toEqual(expectedResult);
  });

  it(`should return as expected when setPokedex with ${POKEMON_LIST}`, () => {
    const expectedResult = {
      type: E_POKEMON_ACTION.POKEMON_SET_POKEDEX,
      payload: { pokemonList: POKEMON_LIST }
    };
    expect(pokemon.setPokedex(POKEMON_LIST)).toEqual(expectedResult);
  });

  it("should return as expected when setTypes with ['bug']", () => {
    const expectedResult = {
      type: E_POKEMON_ACTION.POKEMON_SET_TYPES,
      payload: { types: ["bug"] }
    };
    expect(pokemon.setTypes(["bug"])).toEqual(expectedResult);
  });

  it("should return as expected when resetPokemonState", () => {
    const expectedResult = {
      type: E_POKEMON_ACTION.POKEMON_RESET_STATE
    };
    expect(pokemon.resetPokemonState()).toEqual(expectedResult);
  });

  it("should return as expected when resetPokedex", () => {
    const expectedResult = {
      type: E_POKEMON_ACTION.POKEMON_RESET_POKEDEX
    };
    expect(pokemon.resetPokedex()).toEqual(expectedResult);
  });

  it(`should return as expected when setPokemonByType with ${POKEMON_LIST}`, () => {
    const expectedResult = {
      type: E_POKEMON_ACTION.POKEMON_SET_POKEMON_BY_TYPES,
      payload: { pokemonList: POKEMON_LIST }
    };
    expect(pokemon.setPokemonByType(POKEMON_LIST)).toEqual(expectedResult);
  });

  it(`should return as expected when setPokemonByType with null`, () => {
    const expectedResult = {
      type: E_POKEMON_ACTION.POKEMON_SET_POKEMON_BY_TYPES,
      payload: { pokemonList: POKEMON_LIST }
    };
    expect(pokemon.setPokemonByType(POKEMON_LIST)).toEqual(expectedResult);
  });
});
