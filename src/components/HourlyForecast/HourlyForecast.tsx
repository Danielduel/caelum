import React from "react";
import styled from "styled-components";
import { head, skipFirst } from "../../common/helpers";
import { HourWeatherForecast } from "../../models/OpenWeatherAPI";
import { FormattedHour, FormattedTemperature } from "../ValueFormatters";
import { WeatherInfoArrWeatherIcon } from "../WeatherIcon";
import { HorizontalList, HorizontalListItem } from "../layouts/HorizontalList";
import { TodayWeatherPageProps } from "../../pages/TodayWeatherPage";
import { useTranslation } from "react-i18next";

const HourlyForecastWrapper = styled.div`
  background-color: #ffffff7d;
  min-height: 18rem; /* temp - remove this */
`;
const HourlyForecastHeading = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  font-size: 2.25em;
  font-weight: 500;
`;

// Actually I have no clue how to name those components
const StyledHorizontalList = styled(HorizontalList)``;
const StyledHorizontalListItem = styled(HorizontalListItem)`
  display: grid;
  grid-template-rows: repeat(3, 2em);
  grid-row-gap: 0.1em;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 0.2em;
  box-shadow: none;
`;

const StyledWeatherInfoArrWeatherIcon = styled(WeatherInfoArrWeatherIcon)`
  font-size: 2em;
  opacity: 1;
`;

const StyledFormattedHour = styled(FormattedHour)`
  font-size: 1.125em;
  font-weight: 300;
  width: 100%;
`;

const StyledFormattedTemperature = styled(FormattedTemperature)`
  font-weight: 500;
  font-size: 1.5em; // 24
  & > span {
    font-size: 0.75em; // 18
  }
`;

const HourlyItem = (forecast: HourWeatherForecast) => {
  return (
    <StyledHorizontalListItem key={forecast.dt}>
      <StyledFormattedHour value={forecast.dt} />
      <StyledWeatherInfoArrWeatherIcon weatherInfoArr={forecast.weather} />
      <StyledFormattedTemperature value={forecast.temp} />
      {/* <Pop pop={forecast.pop} /> */}
    </StyledHorizontalListItem>
  );
};

type HourlyForecastProps = Pick<TodayWeatherPageProps, "hourForecast">;
const HourlyForecast = ({ hourForecast }: HourlyForecastProps) => {
  const { t } = useTranslation();
  const forecast = React.useMemo(
    () => hourForecast.filter(skipFirst()).filter(head(8)).flatMap(HourlyItem),
    [hourForecast]
  );

  return (
    <HourlyForecastWrapper>
      <HourlyForecastHeading>{t("hourly")}</HourlyForecastHeading>
      <StyledHorizontalList>{forecast}</StyledHorizontalList>
    </HourlyForecastWrapper>
  );
};

export { HourlyForecast };
