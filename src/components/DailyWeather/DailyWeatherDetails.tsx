import moment from "moment";
import styled from "styled-components";
import { ArrowRightIconStyled, ArrowRightIconWrapper, DailyWeatherProps, ItemDateInfo } from "./DailyWeather";
import { DetailItem, DetailItemWrapper } from "./DetailItem";
import { forecastWeatherZeroDescription } from "../../common/helpers";
import {
  FormattedTemperature,
  FormattedTemperatureValue,
  FormattedTime,
  FormattedTimeWrapper
} from "../ValueFormatters";
import React from "react";
import { useAppContextModal } from "../../hooks/useAppContextModal";

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

const DetailValue = styled.span`
  font-size: 1.2em;
`;

const TitleContainer = styled.div`
  height: 8.125rem;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const ItemDateInfoStyled = styled(ItemDateInfo)`
  margin-left: 0.5rem;
`;

const ArrowRightIconWrapperRestyled = styled(ArrowRightIconWrapper)`
  position: relative;
  height: 3em;
  width: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
`;

type DailyWeatherDetailsProps = Pick<DailyWeatherProps, "forecast">;
export const DailyWeatherDetails = ({ forecast }: DailyWeatherDetailsProps): JSX.Element => {
  const { closeModals } = useAppContextModal();
  const date = React.useMemo(() => moment(forecast.dt * 1000).format("dddd, DD.M"), [forecast]);
  const { wind_speed, pressure, pop, sunrise, sunset } = forecast;
  const dayTemperature = forecast.temp.day;
  return (
    <DailyWeatherDetailsWrapper>
      <TitleContainer>
        <ArrowRightIconWrapperRestyled onClick={closeModals}>
          <ArrowRightIconStyled />
        </ArrowRightIconWrapperRestyled>
        <ItemDateInfoStyled fontSize="1.8rem">{date}</ItemDateInfoStyled>
      </TitleContainer>
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
