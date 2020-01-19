import styled, { keyframes } from "styled-components";

export const LoaderAnimation = keyframes`
	0% {
			transform: rotate(0deg)
	}

	25% {
			transform: rotate(90deg)
	}

	50% {
			transform: rotate(180deg)
	}

	75% {
			transform: rotate(270deg)
	}

	100% {
			transform: rotate(360deg)
	}
`;

export const Loader = styled.div`
  background: url("https://assets.pokemon.com/static2/_ui/img/chrome/loaders/pokeball_gray.png")
    center center no-repeat;
  background-size: 32px 32px;
  width: 32px;
  height: 32px;
  animation: ${LoaderAnimation} 0.5s infinite;
  margin: 15px auto;
`;

export const LoaderPageWrapper = styled.div`
  min-height: calc(100vh - 78px);
  display: flex;
  align-items: center;
`;
