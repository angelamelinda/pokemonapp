import styled from "styled-components";

export const PokedexWrapper = styled.div``;

export const PokedexContainer = styled.div``;

export const PokedexTitle = styled.h1``;

export const PokedexRow = styled.div``;

export const PokedexFilter = styled.div`
  display: flex;

  @media (max-width: 375px) {
    margin-top: 10px;
  }
`;

export const PokedexFilterText = styled.div`
  margin-right: 15px;
`;

export const PokedexTitleWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 375px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;
