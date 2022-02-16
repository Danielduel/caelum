import moment from "moment";
import styled from "styled-components";
import { DailyWeatherProps } from "./DailyWeather";
import { DetailItem, DetailItemWrapper } from "./DetailItem";
import { forecastWeatherZeroDescription } from "../../common/helpers";
import {
  FormattedTemperature,
  FormattedTemperatureValue,
  FormattedTime,
  FormattedTimeWrapper
} from "../ValueFormatters";
import React from "react";
import { WindDirectionIcon } from "../Icon/Icons";
import { DrawerHeader } from "../DrawerHeader/DrawerHeader";
import { useTranslation } from "react-i18next";

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

const WindDirectionWrapper = styled.span`
  position: relative;
`;

const WindDirectionIconStyled = styled(WindDirectionIcon)`
  position: absolute;
  transform: ${({ deg }) => `rotate(${deg}deg)`};
  height: 1.5em;
  right: 0.2em;
`;

type DailyWeatherDetailsProps = Pick<DailyWeatherProps, "forecast">;
export const DailyWeatherDetails = ({ forecast }: DailyWeatherDetailsProps): JSX.Element => {
  const date = React.useMemo(() => moment(forecast.dt * 1000).format("dddd, DD.M"), [forecast]);
  const { wind_speed, wind_deg, pressure, pop, sunrise, sunset } = forecast;
  const dayTemperature = forecast.temp.day;
  const { t } = useTranslation();
  return (
    <DailyWeatherDetailsWrapper>
      <DrawerHeader title={date} />
      <DetailItem label={t("weather")}>
        <WeatherDescription>{forecastWeatherZeroDescription(forecast)}</WeatherDescription>
      </DetailItem>
      <DetailItem label={t("temp")}>
        <FormattedTemperature value={dayTemperature} />
      </DetailItem>
      <DetailItem label={t("wind")}>
        <WindDirectionWrapper>
          <WindDirectionIconStyled deg={wind_deg} />
        </WindDirectionWrapper>
        <DetailValue>{wind_speed}</DetailValue>m/s
      </DetailItem>
      <DetailItem label={t("pressure")}>
        <DetailValue>{pressure}</DetailValue>hPa
      </DetailItem>
      <DetailItem label={t("rain")}>
        <DetailValue>{pop}</DetailValue>%
      </DetailItem>
      <DetailItem label={t("sunrise")}>
        <FormattedTime value={sunrise} />
      </DetailItem>
      <DetailItem label={t("sunset")}>
        <FormattedTime value={sunset} />
      </DetailItem>
    </DailyWeatherDetailsWrapper>
  );
};
