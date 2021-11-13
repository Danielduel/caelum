import moment from "moment";
import styled from "styled-components";
import { ModalCloseButton } from "../Modal/ModalCloseButton";
import { DailyWeatherProps, ItemDateInfo } from "./DailyWeather";
import { DetailItem, DetailItemWrapper } from "./DetailItem";
import { forecastWeatherZeroDescription } from "../../common/helpers";
import {
  FormattedTemperature,
  FormattedTemperatureValue,
  FormattedTime,
  FormattedTimeWrapper
} from "../ValueFormatters";
import React from "react";

const DailyWeatherDetailsWrapper = styled.div`
  position: relative;
  min-height: 5rem;

  ${FormattedTemperatureValue},
  ${FormattedTimeWrapper} {
    font-size: 1.2em;
  }

  ${DetailItemWrapper} {
    border-bottom: 1px solid rgba(80, 80, 80, 0.2);
  }
`;

const WeatherDescription = styled.div`
  font-size: 0.8em;
  display: inline;
  vertical-align: bottom;
`;

const Spacer = styled.div`
  width: 100%;
  height: 1rem;
`;

const DetailValue = styled.span`
  font-size: 1.2em;
`;

export const DailyWeatherDetails = ({ setSelectedDay, forecast }: DailyWeatherProps): JSX.Element => {
  const date = React.useCallback(() => moment(forecast.dt * 1000).format("dddd, DD.M"), [forecast]);
  const { wind_speed, pressure, pop, sunrise, sunset } = forecast;
  const dayTemperature = forecast.temp.day;
  return (
    <DailyWeatherDetailsWrapper>
      <ItemDateInfo fontSize={"1.6rem"}>{date}</ItemDateInfo>
      <Spacer />
      <ModalCloseButton onClick={() => setSelectedDay(null)} />
      <DetailItem label={"weather"}>
        <WeatherDescription>{forecastWeatherZeroDescription(forecast)}</WeatherDescription>
      </DetailItem>
      <DetailItem label={"temp"}>
        <FormattedTemperature value={dayTemperature} />
      </DetailItem>
      <DetailItem label={"wind"}>
        <DetailValue>{wind_speed}</DetailValue>m/s
      </DetailItem>
      <DetailItem label={"pressure"}>
        <DetailValue>{pressure}</DetailValue>hPa
      </DetailItem>
      <DetailItem label={"rain"}>
        <DetailValue>{pop}</DetailValue>%
      </DetailItem>
      <DetailItem label={"sunrise"}>
        <FormattedTime value={sunrise} />
      </DetailItem>
      <DetailItem label={"sunset"}>
        <FormattedTime value={sunset} />
      </DetailItem>
    </DailyWeatherDetailsWrapper>
  );
};
