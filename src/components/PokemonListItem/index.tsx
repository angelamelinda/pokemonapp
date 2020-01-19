import React, { FC } from "react";
import {
  PokemonListItemColumn,
  PokemonListItemImageWrapper,
  PokemonListItemImage,
  PokemonListItemName,
  PokemonListItemType,
  PokemonListItemTypeWrapper,
  PokemonListItemBottom
} from "./index.styled";
import { Link } from "react-router-dom";
import { TYPE_CONFIG } from "../../constants";
import { IPokemon } from "../../interfaces";
import { setPokemonDetail } from "../../redux/actions/pokemon";
import { connect } from "react-redux";
import { IAppState } from "../../interfaces/state";

interface IPokemonListeItem {
  pokemon: IPokemon;
  setPokemonDetail: (pokemon: IPokemon) => void;
}

const PokemonListItem: FC<IPokemonListeItem> = ({
  pokemon,
  setPokemonDetail
}) => {
  const { sprites, types, id, name } = pokemon;
  return (
    <PokemonListItemColumn className="column">
      <Link
        to={`/${id}`}
        className="pokemon-list-item__link"
        onClick={() => setPokemonDetail(pokemon)}>
        <PokemonListItemImageWrapper>
          {sprites && sprites.front_default && (
            <PokemonListItemImage alt="" src={sprites.front_default} />
          )}
        </PokemonListItemImageWrapper>
        <PokemonListItemBottom>
          <PokemonListItemName>{name}</PokemonListItemName>
          <PokemonListItemTypeWrapper>
            {types.map((type, idx) => {
              const config = (TYPE_CONFIG as any)[type];
              return (
                <PokemonListItemType
                  key={idx}
                  color={config.color}
                  background1={config.background[0]}
                  background2={config.background[1]}>
                  {type}
                </PokemonListItemType>
              );
            })}
          </PokemonListItemTypeWrapper>
        </PokemonListItemBottom>
      </Link>
    </PokemonListItemColumn>
  );
};

const mapStateToProps = (state: IAppState) => ({ state });

const mapDispatchToProps = {
  setPokemonDetail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonListItem);
