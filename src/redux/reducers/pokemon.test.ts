import pokemonReducer, { INITIAL_STATE } from "./pokemon";
import { E_POKEMON_ACTION } from "../../interfaces/action";
import { POKEMON_DETAIL, POKEMON_LIST } from "../../mock/data";

describe("pokemon reducer", () => {
  it("should currentPage is 1, when setCurrentPage with 1", () => {
    expect(
      pokemonReducer(INITIAL_STATE, {
        type: E_POKEMON_ACTION.POKEMON_SET_CURRENT_PAGE,
        payload: { currentPage: 1 }
      })
    ).toEqual({ ...INITIAL_STATE, currentPage: 1 });
  });

  it("should totalResult is 10, when setCurrentPage with 10", () => {
    expect(
      pokemonReducer(INITIAL_STATE, {
        type: E_POKEMON_ACTION.POKEMON_SET_TOTAL_RESULT,
        payload: { totalResult: 10 }
      })
    ).toEqual({ ...INITIAL_STATE, totalResult: 10 });
  });

  it("should filter is bug, when setFilter with bug", () => {
    expect(
      pokemonReducer(INITIAL_STATE, {
        type: E_POKEMON_ACTION.POKEMON_SET_FILTER,
        payload: { filter: "bug" }
      })
    ).toEqual({ ...INITIAL_STATE, filter: "bug" });
  });

  it("should filter is null, when setFilter with null", () => {
    expect(
      pokemonReducer(INITIAL_STATE, {
        type: E_POKEMON_ACTION.POKEMON_SET_FILTER,
        payload: { filter: null }
      })
    ).toEqual({ ...INITIAL_STATE, filter: null });
  });

  it("should types is [bug], when setFilter with [bug]", () => {
    expect(
      pokemonReducer(INITIAL_STATE, {
        type: E_POKEMON_ACTION.POKEMON_SET_TYPES,
        payload: { types: ["bug"] }
      })
    ).toEqual({ ...INITIAL_STATE, allTypes: ["bug"] });
  });

  it("should pokemondDetail as expected, when setPokemonDetail with expected mock data", () => {
    expect(
      pokemonReducer(INITIAL_STATE, {
        type: E_POKEMON_ACTION.POKEMON_SET_DETAIL,
        payload: { pokemonDetail: POKEMON_DETAIL }
      })
    ).toEqual({ ...INITIAL_STATE, pokemonDetail: POKEMON_DETAIL });
  });

  it("should pokemondDetail is null, when setPokemonDetail with null", () => {
    expect(
      pokemonReducer(INITIAL_STATE, {
        type: E_POKEMON_ACTION.POKEMON_SET_DETAIL,
        payload: { pokemonDetail: null }
      })
    ).toEqual({ ...INITIAL_STATE, pokemonDetail: null });
  });

  it("should pokemonByType as expected, when setPokemonByTypes with expected mock data", () => {
    expect(
      pokemonReducer(INITIAL_STATE, {
        type: E_POKEMON_ACTION.POKEMON_SET_POKEMON_BY_TYPES,
        payload: { pokemonList: POKEMON_LIST }
      })
    ).toEqual({ ...INITIAL_STATE, pokemonByType: POKEMON_LIST });
  });

  it("should pokemonByType is null, when setPokemonByTypes with null", () => {
    expect(
      pokemonReducer(INITIAL_STATE, {
        type: E_POKEMON_ACTION.POKEMON_SET_POKEMON_BY_TYPES,
        payload: { pokemonList: null }
      })
    ).toEqual({ ...INITIAL_STATE, pokemonByType: null });
  });

  it("should pokedex as expected, when setPokedex with expected mock data", () => {
    expect(
      pokemonReducer(INITIAL_STATE, {
        type: E_POKEMON_ACTION.POKEMON_SET_POKEDEX,
        payload: { pokemonList: POKEMON_LIST }
      })
    ).toEqual({ ...INITIAL_STATE, pokemonList: POKEMON_LIST });
  });

  it("should pokedex as expected, when setPokedex with expected mock data", () => {
    const initialState = { ...INITIAL_STATE, pokemonList: POKEMON_LIST };
    expect(
      pokemonReducer(initialState, {
        type: E_POKEMON_ACTION.POKEMON_SET_POKEDEX,
        payload: { pokemonList: POKEMON_LIST }
      })
    ).toEqual({
      ...initialState,
      pokemonList: [...initialState.pokemonList, ...POKEMON_LIST]
    });
  });

  it("should pokemonList is null when reset pokedex", () => {
    expect(
      pokemonReducer(INITIAL_STATE, {
        type: E_POKEMON_ACTION.POKEMON_RESET_POKEDEX,
        payload: { pokemonList: null }
      })
    ).toEqual({ ...INITIAL_STATE, pokemonList: null });
  });

  it("should return INITIAL_STATE when reset state", () => {
    expect(
      pokemonReducer(INITIAL_STATE, {
        type: E_POKEMON_ACTION.POKEMON_RESET_STATE
      })
    ).toEqual(INITIAL_STATE);
  });
});
