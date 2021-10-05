import React from "react";
import styled from "styled-components";
import { head, skipFirst } from "../../common/helpers";
import { TodayWeatherProps } from "../../pages/TodayWeather";
import { HourWeatherForecast } from "../../models/OpenWeatherAPI";
import { FormattedHour, FormattedTemperature } from "../ValueFormatters";
import { WeatherInfoArrWeatherIcon } from "../WeatherIcon";
import { Pop } from "../common/Pop/Pop";
import { HorizontalList, HorizontalListItem } from "../layouts/HorizontalList";

// Actually I have no clue how to name those components
const StyledHorizontalList = styled(HorizontalList)`
  margin-top: 2rem;
`;
const StyledHorizontalListItem = styled(HorizontalListItem)`
  display: grid;
  grid-template-rows: repeat(3, 2em);
  grid-row-gap: 0.1em;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #eee;
  padding: 0.5em 0;
  margin: 0 0.2em;
  border-radius: 1.5em;
`;

const StyledWeatherInfoArrWeatherIcon = styled(WeatherInfoArrWeatherIcon)`
  font-size: 1.5em;
  opacity: 0.5; /* tonning down, font-weight doesn't work, it looks way too pronounced while not translucent */
`;

const StyledFormattedHour = styled(FormattedHour)`
  width: 100%;
`;

const HourlyItem = (forecast: HourWeatherForecast) => {
  return (
    <StyledHorizontalListItem>
      <StyledFormattedHour value={forecast.dt} />
      <StyledWeatherInfoArrWeatherIcon weatherInfoArr={forecast.weather} />
      <FormattedTemperature value={forecast.temp} withoutSpace />
      <Pop pop={forecast.pop} />
    </StyledHorizontalListItem>
  );
};
type HourlyForecastProps = Pick<TodayWeatherProps, "hourForecast">;
const HourlyForecast = ({ hourForecast }: HourlyForecastProps) => {
  const forecast = React.useMemo(() => hourForecast.filter(skipFirst()).filter(head(8)).flatMap(HourlyItem), [
    hourForecast
  ]);

  return <StyledHorizontalList>{forecast}</StyledHorizontalList>;
};

export { HourlyForecast };
