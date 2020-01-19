export interface IApiRequest {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
}

export interface IPokemonSprites {
  front_default: string | null;
}

export interface IPokemon {
  id: number;
  name: string;
  types: string[];
  abilities: string[];
  sprites: IPokemonSprites;
  weight: number;
  height: number;
  stats: IPokemonStatsResp[];
}

export interface IResponse {
  data?: any;
}

export interface IPokemonCommonEntityResp {
  url: string;
  name: string;
}

export interface IPokemonStatsResp {
  base_stat: number;
  stat: IPokemonCommonEntityResp;
}

export interface IPokemonTypeResp {
  slot: number;
  type: IPokemonCommonEntityResp;
}

export interface IPokemonListTypeResp {
  slot: number;
  pokemon: IPokemonCommonEntityResp;
}

export interface IPokemonAbilitiyResp {
  slot: number;
  ability: IPokemonCommonEntityResp;
}

export interface IPokemonResp {
  id: number;
  name: string;
  types: IPokemonTypeResp[];
  abilities: IPokemonAbilitiyResp[];
  sprites: IPokemonSprites;
  weight: number;
  height: number;
  stats: IPokemonStatsResp[];
}

export interface IPokemonDetailRoute {
  pokemonId: string;
}
