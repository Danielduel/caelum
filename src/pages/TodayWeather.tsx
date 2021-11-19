import React from "react";
import styled from "styled-components";
import { WindPrecipitationInfo } from "../components/RainWindInfo/WindPrecipitationInfo";
import { NavigationFab } from "../components/NavigationFab/NavigationFab";
import { HourlyForecast } from "../components/HourlyForecast/HourlyForecast";
import { BottomDownArrow } from "../components/common/BottomDownArrow/BottomDownArrow";
import { CurrentWeatherForecast, HourWeatherForecast } from "../models/OpenWeatherAPI";
import { BasicInfoFromCurrentWeatherForecast } from "../components/BasicInfo/BasicInfo";

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
  return (
    <TodayWeatherWrapper>
      <NavigationFab />
      <BasicInfoFromCurrentWeatherForecast currentWeather={currentWeather} />
      <WindPrecipitationInfo currentWeather={currentWeather} />
      <HourlyForecast hourForecast={hourForecast} />
      <BottomDownArrow nextPageRef={nextPageRef} />
    </TodayWeatherWrapper>
  );
};
