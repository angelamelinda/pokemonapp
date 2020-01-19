import styled from "styled-components";
import { COLOR } from "../../constants";

export const PokemonDetailWrapper = styled.div``;

export const PokemonDetailContainer = styled.div``;

export const PokemonDetailName = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
`;

export const PokemonDetailContent = styled.div``;

export const PokemonDetailImageWrapper = styled.div`
  background-color: ${COLOR.CONCRETE};
  border-radius: 5px;
  position: relative;
  height: 0;
  padding-bottom: 100%;
`;

export const PokemonDetailImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PokemonDetailHeightWeight = styled.div``;

export const PokemonDetailProfileWrapper = styled.div``;

export const PokemonDetailProfileStatsWrapper = styled.div`
  margin-top: 10px;
`;

export const PokemonDetailSubtitle = styled.h4`
  margin-bottom: 5px;
`;

export const PokemonDetailColumn = styled.div`
  &.one-to-third {
    flex: 0 0 33.33%;
    max-width: 33.33%;

    @media (max-width: 576px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  &.two-to-third {
    flex: 0 0 66.66%;
    max-width: 66.66%;

    @media (max-width: 576px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

export const PokemonDetailTypeWrapper = styled.div`
  margin-top: 10px
  :after {
    content: "";
    clear: both;
    display: inline-block;
  }
`;

export const PokemonDetailType = styled.div<{
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

export const PokemonDetailAbility = styled.div`
  margin-top: 10px;
`;

export const PokemonDetailAbilityTitle = styled.h4``;

export const PokemonDetailAbilityUl = styled.ul`
  padding-left: 20px;
  margin-top: 5px;
  margin-bottom: 0;
`;

export const PokemonDetailAbilityLi = styled.li``;

export const PokemonDetailBackButton = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;
