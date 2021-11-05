import React from "react";
import moment from "moment";
import styled, { css } from "styled-components";
import { ArrowRightIcon } from "../Icon/Icons";
import { FormattedTemperature } from "../ValueFormatters";
import { WeatherInfoArrWeatherIcon } from "../WeatherIcon";
import { DayWeatherForecast } from "../../models/OpenWeatherAPI";

export const DailyWeatherListItem = styled.div`
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  height: 80%;
  box-sizing: border-box;
  margin: 0 1rem;
  position: relative;
`;

export const ItemDateInfo = styled.div`
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.4rem;
`;

export const ItemWeatherInfo = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;

export const IconContainer = styled.span`
  margin-left: 1rem;
`;

export const IconButton = css`
  position: absolute;
  cursor: pointer;
  opacity: 0.8;
  width: 2em;
  height: 2em;
`;

export const ArrowRightIconStyled = styled(ArrowRightIcon)`
  bottom: 0.5em;
  right: 0.5em;
  ${IconButton}
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
        <IconContainer>
          <WeatherInfoArrWeatherIcon weatherInfoArr={forecast.weather} />
        </IconContainer>
      </ItemWeatherInfo>
      <ArrowRightIconStyled onClick={() => setSelectedDay(forecast)} />
    </DailyWeatherListItem>
  );
};
