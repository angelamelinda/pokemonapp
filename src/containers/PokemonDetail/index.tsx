import React, { PureComponent } from "react";
import Loading from "../../components/Loading";
import { LoaderPageWrapper } from "../../components/Loading/index.styled";

interface IPokemonDetail {}

class PokemonDetail extends PureComponent<IPokemonDetail> {
  constructor(props: IPokemonDetail) {
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

export default PokemonDetail;
