import React, { FC } from "react";
import {
  IndicatorStatsWrapper,
  IndicatorStatsWrapperName,
  IndicatorStatsWrapperProgressBar
} from "./index.styled";

interface IIndicatorStats {
  name: string;
  baseStat: number;
}

const IndicatorStats: FC<IIndicatorStats> = ({ name, baseStat }) => {
  return (
    <IndicatorStatsWrapper>
      <IndicatorStatsWrapperName>{name}</IndicatorStatsWrapperName>
      <IndicatorStatsWrapperProgressBar width={baseStat} />
    </IndicatorStatsWrapper>
  );
};

export default IndicatorStats;
