import { combineReducers } from "redux";
import commonReducer from "./common";
import pokemonReducer from "./pokemon";

const reducers = combineReducers({
  commonReducer,
  pokemonReducer
});

export default reducers;
