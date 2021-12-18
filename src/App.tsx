import "moment/locale/pl";
import React from "react";
import moment from "moment";
import { AppContainer } from "./components/layouts/AppContainer";
import { useAppContextDefaultLocation } from "./hooks/useAppContextDefaultLocation";
import { TodayWeatherPage } from "./pages/TodayWeatherPage";
import { NextDaysForecastPage } from "./pages/NextDaysForecastPage";
import { ModalRootStyles } from "./portals/ModalRootStyles";
import { useAppContextModal } from "./hooks/useAppContextModal";

moment.locale("en");
const weatherIconsConfig: Record<string, string[]> = {};

fetch("./weather-conditions.csv")
  .then((res) => res.text())
  .then((res) => {
    const list = res.split("\n").map((row) => row.split(";"));
    list.shift();
    list.forEach((item) => (weatherIconsConfig[item[0]] = item));
  });

const App: React.FunctionComponent = () => {
  const { isModalOpen } = useAppContextModal();
  const nextDaysForecastPageRef = React.useRef<HTMLDivElement | null>(null);
  const { fetched, rawData } = useAppContextDefaultLocation();
  const [alert] = rawData?.alerts || [];

  if (!fetched) {
    return <AppContainer>Loading...</AppContainer>;
  }

  if (!rawData) {
    return <AppContainer>No data</AppContainer>;
  }

  return (
    <AppContainer>
      <ModalRootStyles isModalOpen={isModalOpen} />
      <TodayWeatherPage
        nextPageRef={nextDaysForecastPageRef}
        currentWeather={rawData.current}
        hourForecast={rawData.hourly}
        alert={alert}
      />
      <NextDaysForecastPage pageRef={nextDaysForecastPageRef} daily={rawData.daily} />
    </AppContainer>
  );
};

export { weatherIconsConfig };
export default App;
