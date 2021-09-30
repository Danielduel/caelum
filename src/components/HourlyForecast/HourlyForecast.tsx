import React from "react";
import styled from "styled-components";
import { head, skipFirst } from "../../common/helpers";
import { TodayWeatherProps } from "../TodayWeather";
import { HourWeatherForecast } from "../../models/OpenWeatherAPI";
import { FormattedHour, FormattedTemperature } from "../ValueFormatters";
import { WeatherInfoArrWeatherIcon } from "../WeatherIcon";
import { Pop } from "../common/Pop/Pop";

// Actually I have no clue how to name those components
const HorizontalContainer = styled.div`
  margin-top: 2rem; /* imperative distance from landscape */
  padding-bottom: 2rem;
  display: grid;
  grid-auto-columns: 100px;
  max-width: 100vw;
  overflow: scroll;
`;
const HorizontalHourlyItem = styled.div`
  grid-column: span 1;
  grid-row: 1;
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
  box-shadow: 2px 2px #ccc;
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
    <HorizontalHourlyItem>
      <StyledFormattedHour value={forecast.dt} />
      <StyledWeatherInfoArrWeatherIcon weatherInfoArr={forecast.weather} />
      <FormattedTemperature value={forecast.temp} withoutSpace />
      <Pop pop={forecast.pop} />
    </HorizontalHourlyItem>
  );
};
type HourlyForecastProps = Pick<TodayWeatherProps, "hourForecast">;
const HourlyForecast = ({ hourForecast }: HourlyForecastProps) => {
  const forecast = React.useMemo(() => hourForecast.filter(skipFirst()).filter(head(8)).flatMap(HourlyItem), [
    hourForecast
  ]);

  return <HorizontalContainer>{forecast}</HorizontalContainer>;
};

export { HourlyForecast };
