import styled from "styled-components";
import { WeatherIcon } from "../WeatherIcon";
import { FormattedTemperature } from "../ValueFormatters";
import { weatherZeroDescription, weatherZeroId } from "../../common/helpers";
import { CurrentWeatherForecast, HourWeatherForecast, WeatherInfo } from "../../models/OpenWeatherAPI";

const BasicInfoWrapper = styled.div`
  padding-left: 1.5em;
  font-family: "Roboto", sans-serif;
  opacity: 0.8;
`;
const BasicInfoHeadline = styled.div``;
const Separator = styled.span`
  margin-left: 1em;
`;
const BasicInfoIcon = styled(WeatherIcon)`
  font-size: 6em;
`;
const BasicInfoTemperature = styled(FormattedTemperature)`
  font-size: 3em;
  font-weight: 500;
`;
const BasicInfoDescription = styled.div`
  font-size: 2.25em;
  font-weight: 500;

  &:first-letter {
    text-transform: capitalize;
  }
`;
type BasicInfoProps = {
  temp: HourWeatherForecast["temp"];
  description: WeatherInfo["description"];
  weatherCode: WeatherInfo["id"];
};
export const BasicInfo = ({ temp, description, weatherCode }: BasicInfoProps) => {
  return (
    <BasicInfoWrapper>
      <BasicInfoHeadline>
        <BasicInfoIcon weatherCode={weatherCode} />
        <Separator />
        <BasicInfoTemperature value={temp} />
      </BasicInfoHeadline>
      <BasicInfoDescription>{description}</BasicInfoDescription>
    </BasicInfoWrapper>
  );
};

type BasicInfoFromCurrentWeatherForecastProps = { currentWeather: Pick<CurrentWeatherForecast, "temp" | "weather"> };
export const BasicInfoFromCurrentWeatherForecast = ({
  currentWeather: { temp, weather }
}: BasicInfoFromCurrentWeatherForecastProps) => (
  <BasicInfo temp={temp} description={weatherZeroDescription(weather)} weatherCode={weatherZeroId(weather)} />
);
