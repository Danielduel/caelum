import moment from "moment";
import styled from "styled-components";
import { ModalCloseButton } from "../Modal/ModalCloseButton";
import { DailyWeatherProps, ItemDateInfo } from "./DailyWeather";

const DailyWeatherDetailsWrapper = styled.div`
  position: relative;
  min-height: 5rem;
`;

export const DailyWeatherDetails = ({ setSelectedDay, forecast }: DailyWeatherProps): JSX.Element => {
  return (
    <DailyWeatherDetailsWrapper>
      <ItemDateInfo>{moment(forecast.dt * 1000).format("dddd, DD.M")}</ItemDateInfo>
      <ModalCloseButton onClick={() => setSelectedDay(null)} />
    </DailyWeatherDetailsWrapper>
  );
};
