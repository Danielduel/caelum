import React from "react";
import styled from "styled-components";
import { WindPrecipitationInfo } from "../components/RainWindInfo/WindPrecipitationInfo";
import { NavigationFab } from "../components/NavigationFab/NavigationFab";
import { HourlyForecast } from "../components/HourlyForecast/HourlyForecast";
import { BottomDownArrow } from "../components/common/BottomDownArrow/BottomDownArrow";
import { AlertsInfo, CurrentWeatherForecast, HourWeatherForecast } from "../models/OpenWeatherAPI";
import { BasicInfoFromCurrentWeatherForecast } from "../components/BasicInfo/BasicInfo";
import { AlertWeatherInfoContainer } from "../components/AlertInfo/AlertWeatherInfoContainer";

export type TodayWeatherProps = {
  nextPageRef: React.MutableRefObject<HTMLDivElement | null>;
  currentWeather: CurrentWeatherForecast;
  hourForecast: HourWeatherForecast[];
  alert: AlertsInfo | undefined;
};

const TodayWeatherWrapper = styled.div`
  position: relative;
  height: 100%;
  padding-top: 2em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const TodayWeather = ({ nextPageRef, currentWeather, hourForecast, alert }: TodayWeatherProps) => {
  return (
    <TodayWeatherWrapper>
      <NavigationFab />
      <BasicInfoFromCurrentWeatherForecast currentWeather={currentWeather} />
      <AlertWeatherInfoContainer alert={alert}>
        <WindPrecipitationInfo currentWeather={currentWeather} />
      </AlertWeatherInfoContainer>
      <HourlyForecast hourForecast={hourForecast} />
      <BottomDownArrow nextPageRef={nextPageRef} />
    </TodayWeatherWrapper>
  );
};
