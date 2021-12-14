import React from "react";
import styled from "styled-components";
import { PageContainer } from "../components/layouts/PageContainer";
import { WindPrecipitationInfo } from "../components/RainWindInfo/WindPrecipitationInfo";
import { NavigationFab } from "../components/NavigationFab/NavigationFab";
import { HourlyForecast } from "../components/HourlyForecast/HourlyForecast";
import { BottomDownArrow } from "../components/common/BottomDownArrow/BottomDownArrow";
import { AlertsInfo, CurrentWeatherForecast, HourWeatherForecast } from "../models/OpenWeatherAPI";
import { BasicInfoFromCurrentWeatherForecast } from "../components/BasicInfo/BasicInfo";
import { AlertWeatherInfoContainer } from "../components/AlertInfo/AlertWeatherInfoContainer";

export type TodayWeatherPageProps = {
  nextPageRef: React.MutableRefObject<HTMLDivElement | null>;
  currentWeather: CurrentWeatherForecast;
  hourForecast: HourWeatherForecast[];
  alert: AlertsInfo | undefined;
};

const TodayWeatherPageWrapper = styled.div`
  position: relative;
  height: 100%;
  padding-top: 2em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const TodayWeatherPage = ({ nextPageRef, currentWeather, hourForecast, alert }: TodayWeatherPageProps) => {
  return (
    <PageContainer>
      <TodayWeatherPageWrapper>
        <NavigationFab />
        <BasicInfoFromCurrentWeatherForecast currentWeather={currentWeather} />
        <AlertWeatherInfoContainer alert={alert}>
          <WindPrecipitationInfo currentWeather={currentWeather} />
        </AlertWeatherInfoContainer>
        <HourlyForecast hourForecast={hourForecast} />
        <BottomDownArrow nextPageRef={nextPageRef} />
      </TodayWeatherPageWrapper>
    </PageContainer>
  );
};
