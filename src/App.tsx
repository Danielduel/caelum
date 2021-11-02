import "moment/locale/pl";
import React from "react";
import moment from "moment";
import { TodayWeather } from "./pages/TodayWeather";
import { NextDaysForecast } from "./pages/NextDaysForecast";
import { AppContainer } from "./components/layouts/AppContainer";
import { PageContainer } from "./components/layouts/PageContainer";
import { useOpenWeatherMapOneCall } from "./hooks/useOpenWeatherMapOneCall";
import { Modal } from "./components/Modal/Modal";

moment.locale("pl");
const weatherIconsConfig: Record<string, string[]> = {};

fetch("./weather-conditions.csv")
  .then((res) => res.text())
  .then((res) => {
    const list = res.split("\n").map((row) => row.split(";"));
    list.shift();
    list.forEach((item) => (weatherIconsConfig[item[0]] = item));
  });

const App: React.FunctionComponent = () => {
  const nextDaysForecastPageRef = React.useRef<HTMLDivElement | null>(null);
  const [rawData, fetched, fetchData] = useOpenWeatherMapOneCall({
    lat: "53.4289",
    lon: "14.553",
    exclude: ["minutely", "alerts"],
    units: "metric"
  });

  React.useEffect(() => {
    fetchData();
  }, []);

  if (!fetched) {
    return <AppContainer>Loading...</AppContainer>;
  }

  if (!rawData) {
    return <AppContainer>No data</AppContainer>;
  }

  return (
    <AppContainer>
      <PageContainer>
        <TodayWeather
          nextPageRef={nextDaysForecastPageRef}
          currentWeather={rawData.current}
          hourForecast={rawData.hourly}
        />
      </PageContainer>
      <PageContainer ref={nextDaysForecastPageRef}>
        <Modal visible={true}>Test 123</Modal>
        <NextDaysForecast daily={rawData.daily} />
      </PageContainer>
    </AppContainer>
  );
};

export { weatherIconsConfig };
export default App;
