import styled from "styled-components";
import { DashboardSingleItem } from "../components/desktop/DashboardSingleItem";
import { DashboardClock } from "../components/desktop/DashboardClock";
import { WindIconStyled } from "../components/RainWindInfo/StyledIcons";
import { WeatherIcon } from "../components/WeatherIcon";
import { PrecipitationIcon } from "../components/RainWindInfo/PrecipitationIcon";
import { CurrentWeatherForecast } from "../models/OpenWeatherAPI";
import { rainAmount, snowAmount, weatherZeroDescription, weatherZeroId } from "../common/helpers";
import { BasicInfoDescription, BasicInfoTemperature } from "../components/BasicInfo/BasicInfo";
import { WindDescription } from "../components/RainWindInfo/WindDescription";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TopBarContainer = styled.div`
  height: 2rem;
  background-color: white;
  opacity: 60%;
`;

const DesktopDashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 2rem);
`;

const WeatherIconStyled = styled(WeatherIcon)`
  font-size: 4rem;
`;

type DesktopDashboardPageProps = {
  currentWeather: CurrentWeatherForecast;
};

export const DesktopDashboardPage = ({ currentWeather }: DesktopDashboardPageProps): JSX.Element => {
  const { temp, weather, wind_speed } = currentWeather;
  const rain = rainAmount(currentWeather);
  const snow = snowAmount(currentWeather);
  return (
    <PageContainer>
      <TopBarContainer />
      <DesktopDashboardContent>
        <DashboardClock />
        <DashboardSingleItem icon={<WeatherIconStyled weatherCode={weatherZeroId(weather)} />}>
          <BasicInfoTemperature value={temp} />
          <BasicInfoDescription>{weatherZeroDescription(weather)}</BasicInfoDescription>
        </DashboardSingleItem>
        <DashboardSingleItem icon={<PrecipitationIcon temperature={temp} rain={rain} snow={snow} />}>
          {rain + snow}mm
        </DashboardSingleItem>
        <DashboardSingleItem icon={<WindIconStyled />}>
          <WindDescription windSpeed={wind_speed} />
        </DashboardSingleItem>
      </DesktopDashboardContent>
    </PageContainer>
  );
};
