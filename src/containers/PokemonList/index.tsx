import React, { PureComponent } from "react";

interface IPokemonList {}

class PokemonList extends PureComponent<IPokemonList> {
  constructor(props: IPokemonList) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return "Pokemon List";
  }
}

export default PokemonList;
