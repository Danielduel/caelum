import React from "react";
import styled from "styled-components";
import { HourlyForecast } from "../components/HourlyForecast/HourlyForecast";
import { BottomDownArrow } from "../components/common/BottomDownArrow/BottomDownArrow";
import { CurrentWeatherForecast, HourWeatherForecast } from "../models/OpenWeatherAPI";
import { BasicInfoFromCurrentWeatherForecast } from "../components/BasicInfo/BasicInfo";
import { RainWindInfo } from "../components/RainWindInfo/RainWindInfo";

export type TodayWeatherProps = {
  nextPageRef: React.MutableRefObject<HTMLDivElement | null>;
  currentWeather: CurrentWeatherForecast;
  hourForecast: HourWeatherForecast[];
};

const TodayWeatherWrapper = styled.div`
  position: relative;
  height: 100%;
  padding-top: 2em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const TodayWeather = ({ nextPageRef, currentWeather, hourForecast }: TodayWeatherProps) => {
  const wind = currentWeather.wind_speed;
  const rain = currentWeather.rain?.["1h"] || 0;
  return (
    <TodayWeatherWrapper>
      <BasicInfoFromCurrentWeatherForecast currentWeather={currentWeather} />
      <RainWindInfo rainProbability={rain} windSpeed={wind} />
      <HourlyForecast hourForecast={hourForecast} />
      <BottomDownArrow nextPageRef={nextPageRef} />
    </TodayWeatherWrapper>
  );
};
