import styled from "styled-components";
import { WeatherIcon } from "../WeatherIcon";
import { FormattedTemperature, FormattedTemperatureUnit } from "../ValueFormatters";
import { weatherZeroDescription, weatherZeroId } from "../../common/helpers";
import { CurrentWeatherForecast, HourWeatherForecast, WeatherInfo } from "../../models/OpenWeatherAPI";

const BasicInfoWrapper = styled.div`
  padding-left: 1.5em;
  font-family: "Roboto", sans-serif;
  opacity: 0.8;
  display: flex;
`;
const BasicInfoData = styled.div`
  margin-left: 1rem;
`;
const BasicInfoIcon = styled(WeatherIcon)`
  font-size: 6em;
`;
export const BasicInfoTemperature = styled(FormattedTemperature)`
  font-size: 3.5em;
  font-weight: 500;
  ${FormattedTemperatureUnit} {
    font-size: 0.75em;
  }
`;
export const BasicInfoDescription = styled.div`
  font-size: 2em;
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
      <BasicInfoIcon weatherCode={weatherCode} />
      <BasicInfoData>
        <BasicInfoTemperature value={temp} />
        <BasicInfoDescription>{description}</BasicInfoDescription>
      </BasicInfoData>
    </BasicInfoWrapper>
  );
};

type BasicInfoFromCurrentWeatherForecastProps = { currentWeather: Pick<CurrentWeatherForecast, "temp" | "weather"> };
export const BasicInfoFromCurrentWeatherForecast = ({
  currentWeather: { temp, weather }
}: BasicInfoFromCurrentWeatherForecastProps) => (
  <BasicInfo temp={temp} description={weatherZeroDescription(weather)} weatherCode={weatherZeroId(weather)} />
);
