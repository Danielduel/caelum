import "moment/locale/pl";
import React from "react";
import moment from "moment";
import { TodayWeather } from "./components/TodayWeather";
import { AppContainer } from "./components/styled-components/AppContainer";
import { PageContainer } from "./components/styled-components/PageContainer";
import { useOpenWeatherMapOneCall } from "./hooks/useOpenWeatherMapOneCall";
import { NextDaysForecast } from "./components/NextDaysForecast";

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
  const [rawData, fetched, fetchData] = useOpenWeatherMapOneCall({
    lat: "53.4289",
    lon: "14.553",
    exclude: ["minutely", "alerts"],
    units: "metric"
  });

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContainer>
      {!fetched && "Loading..."}
      {/*{fetched && <WeatherTable data={data} />}*/}
      <PageContainer>
        {rawData && <TodayWeather currentWeather={rawData.current} hourForecast={rawData.hourly} />}
      </PageContainer>
      <PageContainer bgColor={"#c7e4ed"}>{rawData && <NextDaysForecast daily={rawData.daily} />}</PageContainer>
    </AppContainer>
  );
};

export { weatherIconsConfig };
export default App;
