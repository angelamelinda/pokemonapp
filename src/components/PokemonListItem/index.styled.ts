import styled from "styled-components";
import { COLOR } from "../../constants";

export const PokemonListItemColumn = styled.div`
  max-width: 25%;
  flex: 0 0 25%;
  margin-bottom: 20px;

  .pokemon-list-item__link {
    text-decoration: none;
    color: ${COLOR.MINE_SHAFT};
    transition: all 0.3s ease;
    display: block;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    max-width: 50%;
    flex: 0 0 50%;
  }

  @media (max-width: 375px) {
    max-width: 100%;
    flex: 0 0 100%;
  }
`;

export const PokemonListItemImageWrapper = styled.div`
  background-color: ${COLOR.CONCRETE};
  border-radius: 5px;
  position: relative;
  height: 0;
  padding-bottom: 100%;
`;

export const PokemonListItemImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PokemonListItemBottom = styled.div`
  padding: 10px;
`;

export const PokemonListItemName = styled.h4`
  text-transform: capitalize;
  margin-bottom: 5px;
`;

export const PokemonListItemTypeWrapper = styled.div`
  :after {
    content: "";
    clear: both;
    display: inline-block;
  }
`;

export const PokemonListItemType = styled.div<{
  color: string;
  background1: string;
  background2: string;
}>`
  border-radius: 3px;
  line-height: 18px;
  max-width: 110px;
  margin: 0 1.5625% 0 0;
  width: 38.4375%;
  float: left;
  text-transform: none;
  font-size: 11px;
  text-align: center;
  background: linear-gradient(
    180deg,
    ${props => props.background1} 50%,
    ${props => props.background2} 50%
  );
  background-color: ${props => props.background1};
  color: ${props => props.color};
`;
