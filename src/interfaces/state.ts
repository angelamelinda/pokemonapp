import { IPokemon } from ".";

export interface ICommonState {
  isLoading: boolean;
  error: string | null;
}

export interface IPokemonState {
  filter: string | null;
  totalResult: number;
  currentPage: number;
  pokemonList: IPokemon[] | null;
  pokemonDetail: IPokemon | null;
  pokemonByType: IPokemon[] | null;
  allTypes: string[];
}

export interface IAppState {
  commonReducer: ICommonState;
  pokemonReducer: IPokemonState;
}
