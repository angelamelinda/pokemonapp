import React from "react";
import { Switch, Route } from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import PokemonDetail from "./containers/PokemonDetail";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PokemonList}></Route>
        <Route exact path="/:pokemonId" component={PokemonDetail}></Route>
      </Switch>
    </div>
  );
};

export default App;
