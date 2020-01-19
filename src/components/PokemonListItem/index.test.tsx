import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import PokemonListItem from ".";
import { POKEMON_DETAIL } from "../../mock/data";
import { customRenderWithRedux } from "../../App.test";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test(`should have href="/18" when render PokemonListItem with ${POKEMON_DETAIL}`, () => {
  const store = mockStore();

  const { container } = customRenderWithRedux(
    <PokemonListItem pokemon={POKEMON_DETAIL} />,
    store
  );

  expect(container.innerHTML).toContain(`href=\"/18\"`);
});
