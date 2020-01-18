import React, { PureComponent } from "react";

interface IPokemonDetail {}

class PokemonDetail extends PureComponent<IPokemonDetail> {
  constructor(props: IPokemonDetail) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return "Pokemon Detail";
  }
}

export default PokemonDetail;
