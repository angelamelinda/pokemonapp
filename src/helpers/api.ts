import axios from "axios";
import { IApiRequest, IResponse, IPokemonResp } from "../interfaces";

export async function api(request: IApiRequest): Promise<IResponse> {
  return axios(request)
    .then(response => {
      if (response && response.data) {
        return { data: response.data };
      }
      throw new Error("Invalid Response");
    })
    .catch(_ => {
      throw new Error("Invalid Response");
    });
}

export async function promiseFetchAll(urls: string[]): Promise<IResponse[]> {
  return axios
    .all(urls.map(url => api({ url, method: "GET" })))
    .then(
      axios.spread((...params) => {
        return params;
      })
    )
    .catch(() => {
      throw new Error("Invalid Response");
    });
}

export function sanitizeDataPokemonDetail(data: IPokemonResp) {
  const types = data.types.map(type => type.type.name);
  const abilities = data.abilities.map(ability => ability.ability.name);

  return {
    id: data.id,
    name: data.name,
    types,
    abilities,
    sprites: data.sprites,
    weight: data.weight,
    height: data.height,
    stats: data.stats
  };
}
