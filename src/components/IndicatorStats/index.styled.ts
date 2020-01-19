import styled from "styled-components";
import { COLOR } from "../../constants";

export const IndicatorStatsWrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;

export const IndicatorStatsWrapperName = styled.div`
  text-transform: capitalize;
  margin-bottom: 5px;
`;

export const IndicatorStatsWrapperProgressBar = styled.div<{
  width: number;
}>`
  position: relative;
	height: 15px;
	background-color: ${COLOR.CONCRETE};
	max-width: 300px;
	border-radius: 4px;
	overflow:hidden;

  :after {
    content: "";
    width: ${props => props.width}%;
		background-color: ${COLOR.SUSHI};
		display: inline-block;
    height: 100%;
    transition: all .3s ease;
		
}
  }
`;
