import moment from "moment";
import styled from "styled-components";
import { ModalCloseButton } from "../Modal/ModalCloseButton";
import { DailyWeatherProps, ItemDateInfo } from "./DailyWeather";
import { DetailItem } from "./DetailItem";
import { weatherZeroDescription } from "../../common/helpers";
import { FormattedTemperature, FormattedTime } from "../ValueFormatters";

const DailyWeatherDetailsWrapper = styled.div`
  position: relative;
  min-height: 5rem;

  .temperature-value > span:first-child,
  .time-value {
    font-size: 1.2em;
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
  return (
    <DailyWeatherDetailsWrapper>
      <ItemDateInfo fontSize={"1.6rem"}>{moment(forecast.dt * 1000).format("dddd, DD.M")}</ItemDateInfo>
      <Spacer />
      <ModalCloseButton onClick={() => setSelectedDay(null)} />
      <DetailItem label={"weather"}>
        <WeatherDescription>{weatherZeroDescription(forecast.weather)}</WeatherDescription>
      </DetailItem>
      <DetailItem label={"temp"}>
        <FormattedTemperature className={"temperature-value"} value={forecast.temp.day} />
      </DetailItem>
      <DetailItem label={"wind"}>
        <DetailValue>{forecast.wind_speed}</DetailValue>m/s
      </DetailItem>
      <DetailItem label={"pressure"}>
        <DetailValue>{forecast.pressure}</DetailValue>hPa
      </DetailItem>
      <DetailItem label={"rain"}>
        <DetailValue>{forecast.pop}</DetailValue>%
      </DetailItem>
      <DetailItem label={"sunrise"}>
        <FormattedTime className={"time-value"} value={forecast.sunrise} />
      </DetailItem>
      <DetailItem label={"sunset"}>
        <FormattedTime className={"time-value"} value={forecast.sunset} />
      </DetailItem>
    </DailyWeatherDetailsWrapper>
  );
};
