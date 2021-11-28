import "moment/locale/pl";
import React from "react";
import moment from "moment";
import { TodayWeather } from "./pages/TodayWeather";
import { NextDaysForecast } from "./pages/NextDaysForecast";
import { AppContainer } from "./components/layouts/AppContainer";
import { PageContainer } from "./components/layouts/PageContainer";
import { useAppContextDefaultLocation } from "./hooks/useAppContextDefaultLocation";

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
  const nextDaysForecastPageRef = React.useRef<HTMLDivElement | null>(null);
  const { fetched, rawData } = useAppContextDefaultLocation();
  const [alert] = rawData?.alerts || [
    { description: "123", tags: ["asd"], start: 0, end: 0, event: "dfsf", sender_name: "cxz" }
  ];

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
          alert={alert}
        />
      </PageContainer>
      <PageContainer ref={nextDaysForecastPageRef}>
        <NextDaysForecast daily={rawData.daily} />
      </PageContainer>
    </AppContainer>
  );
};

export { weatherIconsConfig };
export default App;
