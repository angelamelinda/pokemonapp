import {
  IPokemonAction,
  E_POKEMON_ACTION,
  TAllAction
} from "../../interfaces/action";
import {
  IPokemon,
  IApiRequest,
  IPokemonCommonEntityResp,
  IPokemonListTypeResp
} from "../../interfaces";
import { ThunkAction } from "redux-thunk";
import { IAppState } from "../../interfaces/state";
import { setLoading, setError } from "./common";
import { API_URL, POKEMON_PAGE_LIMIT, ERROR_MESSAGE } from "../../constants";
import {
  api,
  promiseFetchAll,
  sanitizeDataPokemonDetail
} from "../../helpers/api";

export function setCurrentPage(currentPage: number): IPokemonAction {
  return {
    type: E_POKEMON_ACTION.POKEMON_SET_CURRENT_PAGE,
    payload: { currentPage }
  };
}

export function setTotalResult(totalResult: number): IPokemonAction {
  return {
    type: E_POKEMON_ACTION.POKEMON_SET_TOTAL_RESULT,
    payload: { totalResult }
  };
}

export function setFilter(filter: string | null): IPokemonAction {
  return {
    type: E_POKEMON_ACTION.POKEMON_SET_FILTER,
    payload: { filter }
  };
}

export function setPokemonDetail(
  pokemonDetail: IPokemon | null
): IPokemonAction {
  return {
    type: E_POKEMON_ACTION.POKEMON_SET_DETAIL,
    payload: { pokemonDetail }
  };
}

export function setPokedex(pokemonList: IPokemon[] | null): IPokemonAction {
  return {
    type: E_POKEMON_ACTION.POKEMON_SET_POKEDEX,
    payload: { pokemonList }
  };
}

export function setTypes(types: string[]): IPokemonAction {
  return {
    type: E_POKEMON_ACTION.POKEMON_SET_TYPES,
    payload: { types }
  };
}

export function resetPokemonState(): IPokemonAction {
  return {
    type: E_POKEMON_ACTION.POKEMON_RESET_STATE
  };
}

export function resetPokedex(): IPokemonAction {
  return {
    type: E_POKEMON_ACTION.POKEMON_RESET_POKEDEX
  };
}

export function setPokemonByType(
  pokemonList: IPokemon[] | null
): IPokemonAction {
  return {
    type: E_POKEMON_ACTION.POKEMON_SET_POKEMON_BY_TYPES,
    payload: { pokemonList }
  };
}

export function fetchPokemonDetail(
  pokemonId: string
): ThunkAction<void, IAppState, {}, TAllAction> {
  return dispatch => {
    const apiRequest: IApiRequest = {
      url: API_URL.DETAIL.replace(":id", pokemonId),
      method: "GET"
    };
    api(apiRequest)
      .then(resp => {
        const result = sanitizeDataPokemonDetail(resp.data);
        dispatch(setPokemonDetail(result));
      })
      .catch(_ => {
        dispatch(setError(ERROR_MESSAGE.DEFAULT));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function fetchPokedex(): ThunkAction<void, IAppState, {}, TAllAction> {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    const totalFetchedPokemon =
      getState().pokemonReducer.currentPage * POKEMON_PAGE_LIMIT;
    const apiRequest: IApiRequest = {
      url: API_URL.ALL_POKEMON.replace(
        ":offset",
        totalFetchedPokemon.toString()
      ),
      method: "GET"
    };
    api(apiRequest)
      .then(resp => {
        const { count, results } = resp.data;

        dispatch(setTotalResult(count));

        const urls = results.map(
          (pokemon: IPokemonCommonEntityResp) => pokemon.url
        );

        promiseFetchAll(urls)
          .then(responseAll => {
            const result = responseAll.map(response =>
              sanitizeDataPokemonDetail(response.data)
            );
            if (result && result.length > 0) {
              dispatch(setPokedex(result));
              dispatch(
                setCurrentPage(getState().pokemonReducer.currentPage + 1)
              );
            } else {
              dispatch(setError(ERROR_MESSAGE.POKEMON_NOT_FOUND));
            }
          })
          .catch(_ => {
            dispatch(setError(ERROR_MESSAGE.DEFAULT));
          })
          .finally(() => {
            dispatch(setLoading(false));
          });
      })
      .catch(_ => {
        dispatch(setError(ERROR_MESSAGE.DEFAULT));
        dispatch(setLoading(false));
      });
  };
}

export function fetchTypes(): ThunkAction<void, IAppState, {}, TAllAction> {
  return dispatch => {
    const apiRequest: IApiRequest = {
      url: API_URL.TYPE,
      method: "GET"
    };
    api(apiRequest)
      .then(resp => {
        const { results } = resp.data;
        const types = (results as IPokemonCommonEntityResp[]).map(
          type => type.name
        );
        dispatch(setTypes(types));
      })
      .catch(_ => {
        dispatch(setError(ERROR_MESSAGE.DEFAULT));
      });
  };
}

export function fetchPokemonBaseType(
  type: string
): ThunkAction<void, IAppState, {}, TAllAction> {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    const apiRequest: IApiRequest = {
      url: API_URL.TYPE_DETAIL.replace(":name", type),
      method: "GET"
    };
    api(apiRequest)
      .then(resp => {
        const { pokemon: pokemonResp } = resp.data;

        dispatch(setTotalResult(pokemonResp.length));

        const urls = pokemonResp.map(
          (pokemonList: IPokemonListTypeResp) => pokemonList.pokemon.url
        );

        promiseFetchAll(urls)
          .then(responseAll => {
            const { currentPage } = getState().pokemonReducer;
            const result = responseAll.map(response =>
              sanitizeDataPokemonDetail(response.data)
            );

            if (result && result.length > 0) {
              dispatch(setPokemonByType(result));
              dispatch(
                setPokedex(
                  result.slice(
                    currentPage - 1,
                    POKEMON_PAGE_LIMIT * currentPage
                  )
                )
              );
              dispatch(setCurrentPage(currentPage + 1));
            } else {
              dispatch(setError(ERROR_MESSAGE.POKEMON_NOT_FOUND));
            }
          })
          .catch(_ => {
            dispatch(setError(ERROR_MESSAGE.DEFAULT));
          })
          .finally(() => {
            dispatch(setLoading(false));
          });
      })
      .catch(_ => {
        dispatch(setError(ERROR_MESSAGE.DEFAULT));
        dispatch(setLoading(false));
      });
  };
}

export function adjustPokedexByTypes(): ThunkAction<
  void,
  IAppState,
  {},
  TAllAction
> {
  return (dispatch, getState) => {
    const { pokemonByType, currentPage } = getState().pokemonReducer;
    dispatch(setLoading(true));
    if (pokemonByType) {
      dispatch(
        setPokedex(
          pokemonByType.slice(
            POKEMON_PAGE_LIMIT * currentPage - 1,
            POKEMON_PAGE_LIMIT * (currentPage + 1)
          )
        )
      );
      dispatch(setCurrentPage(currentPage + 1));
      dispatch(setLoading(false));
    }
  };
}
