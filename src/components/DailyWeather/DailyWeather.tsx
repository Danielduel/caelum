import React from "react";
import moment from "moment";
import styled from "styled-components";
import { ArrowRightIcon } from "../Icon/Icons";
import { FormattedTemperature, FormattedTemperatureValue } from "../ValueFormatters";
import { WeatherInfoArrWeatherIcon } from "../WeatherIcon";
import { DayWeatherForecast } from "../../models/OpenWeatherAPI";
import { prop } from "../../common/helpers";
import { hexToCssFilter } from "../../common/hexToCssFilter";

export const DailyWeatherListItem = styled.div`
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.25));
  background: rgba(243, 243, 243, 0.9);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  padding: 0.5rem;
  height: 85%;
  box-sizing: border-box;
  margin: 0 1rem;
  position: relative;
`;

export type ItemDateInfoProps = {
  fontSize?: string;
};

export const ItemDateInfo = styled.div<ItemDateInfoProps>`
  text-transform: capitalize;
  opacity: 0.8;
  font-weight: 500;
  font-size: ${prop("fontSize", "1.4rem")};
`;

export const ItemWeatherInfo = styled.div`
  font-size: 3.2rem;
  font-weight: 500;
  opacity: 0.8;
  margin-left: 0.5rem;
  ${FormattedTemperatureValue} {
    font-size: 1.4em;
  }
`;

export const IconContainer = styled.span`
  position: absolute;
  right: 4rem;
  bottom: 2rem;
`;

const StyledWeatherInfoArrWeatherIcon = styled(WeatherInfoArrWeatherIcon)`
  font-size: 5em;
  color: #bdbdbd;
`;

export const ArrowRightIconStyled = styled(ArrowRightIcon)`
  filter: ${hexToCssFilter("#00000080")};
  width: 2em;
  height: 2em;
`;

export const ArrowRightIconWrapper = styled.div`
  background: rgba(196, 196, 196, 0.5);
  border-radius: 10px 0;
  position: absolute;
  cursor: pointer;
  padding: 0.6em;
  bottom: 0;
  right: 0;
`;

export type DailyWeatherProps = {
  forecast: DayWeatherForecast;
  setSelectedDay: React.Dispatch<React.SetStateAction<DayWeatherForecast | null>>;
};

export const DailyWeather = ({ forecast, setSelectedDay }: DailyWeatherProps): JSX.Element => {
  return (
    <DailyWeatherListItem>
      <ItemDateInfo>{moment(forecast.dt * 1000).format("dddd, DD.M")}</ItemDateInfo>
      <ItemWeatherInfo>
        <FormattedTemperature value={forecast.temp.day} />
      </ItemWeatherInfo>
      <IconContainer>
        <StyledWeatherInfoArrWeatherIcon weatherInfoArr={forecast.weather} />
      </IconContainer>
      <ArrowRightIconWrapper onClick={() => setSelectedDay(forecast)}>
        <ArrowRightIconStyled />
      </ArrowRightIconWrapper>
    </DailyWeatherListItem>
  );
};
