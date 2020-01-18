import React from "react";
import { Switch, Route } from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import PokemonDetail from "./containers/PokemonDetail";
import { GlobalStyle } from "./App.style";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={PokemonList}></Route>
        <Route exact path="/:pokemonId" component={PokemonDetail}></Route>
      </Switch>
    </div>
  );
};

export default App;
