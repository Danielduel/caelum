import React from "react";
import { CurrentWeatherForecast, HourWeatherForecast } from "../models/OpenWeatherAPI";
import styled from "styled-components";
import { FormattedHour, FormattedTemperature } from "./ValueFormatters";
import prototypeLandscapeSvg from "./landscapes/prototype.svg";

const TodayWeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;

  & > * {
    flex: 1;
  }
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
  text-shadow: -.2px -.2px 0 #000, .2px -.2px 0 #000, -.2px .2px 0 #000, .2px .2px 0 #000;
  font-weight: 500;
  
  transform: scale(5);
  transform-origin: 0 0;
`;
const TodayWeatherBackgroundInfoIcon = styled.i``;
const TodayWeatherBackgroundInfoLine = styled.div`
  font-size: 0.8em;
  font-weight: 900;
  /* Bad solution (I don't know why formatted date is a span) */
  & > span > span {
    font-size: 0.6em;
  }
`;

type TodayWeatherProps = {
  currentWeather: CurrentWeatherForecast;
  hourForecast: HourWeatherForecast[];
};

export const TodayWeather: React.FunctionComponent<TodayWeatherProps> = (props) => {
  const range = Array(6).fill(1);
  return (
    <TodayWeatherWrapper>
      <TodayWeatherBackgroundContainer>
        <TodayWeatherBackground src={prototypeLandscapeSvg} />
        <TodayWeatherBackgroundInfo>
          <TodayWeatherBackgroundInfoIcon className="wi wi-night-sleet" />
          <TodayWeatherBackgroundInfoLine>
            <FormattedTemperature value={props.currentWeather.temp} />
          </TodayWeatherBackgroundInfoLine>
        </TodayWeatherBackgroundInfo>
      </TodayWeatherBackgroundContainer>
      <div>
        {range.map((_, idx) => {
          return (
            <h3 key={idx}>
              <FormattedHour value={props.hourForecast[idx].dt} />
              {"  "}
              <FormattedTemperature value={props.hourForecast[idx].temp} />
            </h3>
          );
        })}
      </div>
    </TodayWeatherWrapper>
  );
};
