import React from "react";
import styled from "styled-components";
import { FormattedTemperature } from "../components/ValueFormatters";
import prototypeLandscapeSvg from "../components/landscapes/prototype.svg";
import { WeatherIcon } from "../components/WeatherIcon";
import { HourlyForecast } from "../components/HourlyForecast/HourlyForecast";
import { CurrentWeatherForecast, HourWeatherForecast } from "../models/OpenWeatherAPI";

export type TodayWeatherProps = {
  currentWeather: CurrentWeatherForecast;
  hourForecast: HourWeatherForecast[];
};

const TodayWeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
`;
const TodayWeatherBackgroundContainer = styled.div`
  position: relative;
`;
const TodayWeatherBackground = styled.img`
  width: 100%;
`;
const TodayWeatherBackgroundInfo = styled.div`
  position: absolute;
  top: 3rem;
  left: 3rem;
  color: white;
  text-shadow: -0.2px -0.2px 0 #000, 0.2px -0.2px 0 #000, -0.2px 0.2px 0 #000, 0.2px 0.2px 0 #000;
  font-weight: 500;

  transform: scale(5);
  transform-origin: 0 0;
`;
const TodayWeatherBackgroundInfoLine = styled.div`
  font-size: 0.8em;
  font-weight: 900;
  /* Bad solution (I don't know why formatted date is a span) */
  & > span > span {
    font-size: 0.6em;
  }
`;

export const TodayWeather: React.FunctionComponent<TodayWeatherProps> = (props) => {
  return (
    <TodayWeatherWrapper>
      <TodayWeatherBackgroundContainer>
        <TodayWeatherBackground src={prototypeLandscapeSvg} />
        <TodayWeatherBackgroundInfo>
          <WeatherIcon weatherCode={props.currentWeather.weather[0].id} />
          <TodayWeatherBackgroundInfoLine>
            <FormattedTemperature value={props.currentWeather.temp} />
          </TodayWeatherBackgroundInfoLine>
        </TodayWeatherBackgroundInfo>
      </TodayWeatherBackgroundContainer>
      <HourlyForecast hourForecast={props.hourForecast} />
    </TodayWeatherWrapper>
  );
};
