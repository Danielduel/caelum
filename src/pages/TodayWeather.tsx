import styled from "styled-components";
import { HourlyForecast } from "../components/HourlyForecast/HourlyForecast";
import { CurrentWeatherForecast, HourWeatherForecast } from "../models/OpenWeatherAPI";
import { BasicInfoFromCurrentWeatherForecast } from "../components/BasicInfo/BasicInfo";

export type TodayWeatherProps = {
  currentWeather: CurrentWeatherForecast;
  hourForecast: HourWeatherForecast[];
};

const TodayWeatherWrapper = styled.div`
  height: 100%;
  padding-top: 2em;
  padding-left: 1.5em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const TodayWeather = ({ currentWeather, hourForecast }: TodayWeatherProps) => {
  return (
    <TodayWeatherWrapper>
      <BasicInfoFromCurrentWeatherForecast currentWeather={currentWeather} />
      <HourlyForecast hourForecast={hourForecast} />
    </TodayWeatherWrapper>
  );
};
