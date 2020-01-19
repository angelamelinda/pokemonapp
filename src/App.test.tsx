import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import RootReducer from "./redux/reducers";

export function customRenderWithRedux(ui: JSX.Element, store?: any) {
  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
    ),
    store
  };
}

test("renders pokedex page", () => {
  const history = createMemoryHistory();
  const route = "/";
  history.push(route);

  const { getByTestId } = customRenderWithRedux(
    <Router history={history}>
      <App />
    </Router>,
    createStore(RootReducer, applyMiddleware(thunkMiddleware))
  );

  expect(getByTestId("pokedex-page")).toBeInTheDocument();
});

test("renders pokemon-detail page", () => {
  const history = createMemoryHistory();
  const route = "/1";
  history.push(route);

  const { getByTestId } = customRenderWithRedux(
    <Router history={history}>
      <App />
    </Router>,
    createStore(RootReducer, applyMiddleware(thunkMiddleware))
  );

  expect(getByTestId("pokemon-detail-page")).toBeInTheDocument();
});
