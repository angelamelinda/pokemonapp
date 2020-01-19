import { Action } from "redux";
import { IPokemon } from ".";

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

export enum E_POKEMON_ACTION {
  POKEMON_RESET_STATE = "POKEMON_RESET_STATE",
  POKEMON_SET_FILTER = "POKEMON_SET_FILTER",
  POKEMON_SET_DETAIL = "POKEMON_SET_DETAIL",
  POKEMON_SET_TOTAL_RESULT = "POKEMON_SET_TOTAL_RESULT",
  POKEMON_SET_CURRENT_PAGE = "POKEMON_SET_CURRENT_PAGE",
  POKEMON_SET_POKEDEX = "POKEMON_SET_POKEDEX",
  POKEMON_SET_TYPES = "POKEMON_SET_TYPES",
  POKEMON_SET_POKEMON_BY_TYPES = "POKEMON_SET_POKEMON_BY_TYPES",
  POKEMON_RESET_POKEDEX = "POKEMON_RESET_POKEDEX"
}

export interface IPokemonSetFilter {
  filter: string | null;
}

export interface IPokemonSetDetail {
  pokemonDetail: IPokemon | null;
}

export interface IPokemonSetTotalResult {
  totalResult: number;
}

export interface IPokemonSetCurrentPage {
  currentPage: number;
}

export interface IPokemonSetPokedex {
  pokemonList: IPokemon[] | null;
}

export interface IPokemonSetPokemonByTypes {
  pokemonList: IPokemon[] | null;
}

export interface IPokemonSetTypes {
  types: string[];
}

export type TPokemonAction =
  | IPokemonSetFilter
  | IPokemonSetDetail
  | IPokemonSetTotalResult
  | IPokemonSetCurrentPage
  | IPokemonSetPokedex
  | IPokemonSetTypes;

export interface IPokemonAction extends Action<E_POKEMON_ACTION> {
  payload?: TPokemonAction;
}

export type TAllAction = IPokemonAction | ICommonAction;
