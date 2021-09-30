import React from "react";
import { DayWeatherForecast } from "../models/OpenWeatherAPI";
import moment from "moment";
import styled from "styled-components";
import { FormattedTemperature } from "./ValueFormatters";
import { WeatherIcon } from "./WeatherIcon";

export const DailyWeatherListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const DailyWeatherListItem = styled.div`
  flex: 1;
  border: 2px solid brown;
  border-bottom: none;
  box-sizing: border-box;
  padding: 0.5rem;

  &:last-child {
    border-bottom: 2px solid brown;
  }
`;

export const ItemDateInfo = styled.div`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.4rem;
`;

export const ItemWeatherInfo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

export const IconContainer = styled.span`
  margin-left: 1rem;
`;

export type NextDaysProps = {
  daily: DayWeatherForecast[];
};

export const NextDaysForecast: React.FunctionComponent<NextDaysProps> = (props) => {
  const list = props.daily.slice(1, 7).map((item) => (
    <DailyWeatherListItem key={item.dt}>
      <ItemDateInfo>{moment(item.dt * 1000).format("dddd, DD.M")}</ItemDateInfo>
      <ItemWeatherInfo>
        <FormattedTemperature value={item.temp.day} />
        <IconContainer>
          <WeatherIcon weatherCode={item.weather[0].id} />
        </IconContainer>
      </ItemWeatherInfo>
    </DailyWeatherListItem>
  ));
  return <DailyWeatherListContainer>{list}</DailyWeatherListContainer>;
};
