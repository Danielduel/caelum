import React from "react";
import moment from "moment";
import styled from "styled-components";
import { CloseIcon } from "../Icon/Icons";
import { DailyWeatherProps, IconButton, ItemDateInfo } from "./DailyWeather";

const DailyWeatherDetailsWrapper = styled.div`
  position: relative;
  min-height: 5rem;
`;

const CloseIconStyled = styled(CloseIcon)`
  top: 0;
  right: 0;
  ${IconButton}
`;

export const DailyWeatherDetails = ({ setSelectedDay, forecast }: DailyWeatherProps): JSX.Element => {
  return (
    <DailyWeatherDetailsWrapper>
      <ItemDateInfo>{moment(forecast.dt * 1000).format("dddd, DD.M")}</ItemDateInfo>
      <CloseIconStyled onClick={() => setSelectedDay(null)} />
    </DailyWeatherDetailsWrapper>
  );
};
