import React from "react";
import { DayWeatherForecast } from "../models/OpenWeatherAPI";
import moment from "moment";
import styled from "styled-components";
import { FormattedTemperature } from "../components/ValueFormatters";
import { WeatherInfoArrWeatherIcon } from "../components/WeatherIcon";

export const DailyWeatherListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const DailyWeatherListItemContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DailyWeatherListItem = styled.div`
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  height: 80%;
  box-sizing: border-box;
  margin: 0 1rem;
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

export type NextDaysProps = {
  daily: DayWeatherForecast[];
};

export const NextDaysForecast: React.FunctionComponent<NextDaysProps> = (props) => {
  const list = props.daily.slice(1, 6).map((item) => (
    <DailyWeatherListItemContainer key={item.dt}>
      <DailyWeatherListItem>
        <ItemDateInfo>{moment(item.dt * 1000).format("dddd, DD.M")}</ItemDateInfo>
        <ItemWeatherInfo>
          <FormattedTemperature value={item.temp.day} />
          <IconContainer>
            <WeatherInfoArrWeatherIcon weatherInfoArr={item.weather} />
          </IconContainer>
        </ItemWeatherInfo>
      </DailyWeatherListItem>
    </DailyWeatherListItemContainer>
  ));
  return <DailyWeatherListContainer>{list}</DailyWeatherListContainer>;
};
