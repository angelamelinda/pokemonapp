import React, { PureComponent } from "react";
import Loading from "../../components/Loading";
import { LoaderPageWrapper } from "../../components/Loading/index.styled";

interface IPokemonList {}

class PokemonList extends PureComponent<IPokemonList> {
  constructor(props: IPokemonList) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <LoaderPageWrapper>
        <Loading />
      </LoaderPageWrapper>
    );
  }
}

export default PokemonList;
