import React from "react";
import { CurrentWeatherForecast, HourWeatherForecast } from "../models/OpenWeatherAPI";
import styled from "styled-components";
import { FormattedHour, FormattedTemperature } from "./ValueFormatters";

const TodayWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;

  & > * {
    flex: 1;
  }
`;

type TodayWeatherProps = {
  currentWeather: CurrentWeatherForecast;
  hourForecast: HourWeatherForecast[];
};

export const TodayWeather: React.FunctionComponent<TodayWeatherProps> = (props) => {
  const range = Array(6).fill(1);
  return (
    <TodayWeatherContainer>
      <div>
        <h1>
          <FormattedTemperature value={props.currentWeather.temp} />
        </h1>
      </div>
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
    </TodayWeatherContainer>
  );
};
