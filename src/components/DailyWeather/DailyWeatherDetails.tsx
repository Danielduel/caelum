import moment from "moment";
import styled from "styled-components";
import { ModalCloseButton } from "../Modal/ModalCloseButton";
import { DailyWeatherProps, ItemDateInfo } from "./DailyWeather";
import { DetailItem } from "./DetailItem";
import { weatherZeroDescription } from "../../common/helpers";
import { FormattedHour, FormattedTemperature, FormattedTime } from "../ValueFormatters";

const DailyWeatherDetailsWrapper = styled.div`
  position: relative;
  min-height: 5rem;
`;

export const DailyWeatherDetails = ({ setSelectedDay, forecast }: DailyWeatherProps): JSX.Element => {
  return (
    <DailyWeatherDetailsWrapper>
      <ItemDateInfo>{moment(forecast.dt * 1000).format("dddd, DD.M")}</ItemDateInfo>
      <ModalCloseButton onClick={() => setSelectedDay(null)} />
      <DetailItem label={"weather"}>{weatherZeroDescription(forecast.weather)}</DetailItem>
      <DetailItem label={"temp"}>
        <FormattedTemperature value={forecast.temp.day} />
      </DetailItem>
      <DetailItem label={"pressure"}>{forecast.pressure}hPa</DetailItem>
      <DetailItem label={"rain"}>{forecast.pop}%</DetailItem>
      <DetailItem label={"sunrise"}>
        <FormattedTime value={forecast.sunrise} />
      </DetailItem>
      <DetailItem label={"sunset"}>
        <FormattedTime value={forecast.sunset} />
      </DetailItem>
    </DailyWeatherDetailsWrapper>
  );
};
