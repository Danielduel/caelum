import React from "react";
import { DayWeatherForecast } from "../models/OpenWeatherAPI";
import styled from "styled-components";
import { Modal } from "../components/Modal/Modal";
import { DailyWeather } from "../components/DailyWeather/DailyWeather";
import { DailyWeatherDetails } from "../components/DailyWeather/DailyWeatherDetails";

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

export type NextDaysProps = {
  daily: DayWeatherForecast[];
};

export const NextDaysForecast: React.FunctionComponent<NextDaysProps> = (props) => {
  const [selectedDay, setSelectedDay] = React.useState<DayWeatherForecast | null>(null);
  const list = props.daily.slice(1, 6).map((item) => (
    <DailyWeatherListItemContainer key={item.dt}>
      <DailyWeather forecast={item} setSelectedDay={setSelectedDay} />
      <Modal visible={selectedDay === item}>
        <DailyWeatherDetails forecast={item} setSelectedDay={setSelectedDay} />
      </Modal>
    </DailyWeatherListItemContainer>
  ));
  return <DailyWeatherListContainer>{list}</DailyWeatherListContainer>;
};
