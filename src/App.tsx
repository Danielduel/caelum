import "moment/locale/pl";
import React from "react";
import moment from "moment";
import ReactJson from "react-json-view";
import { TodayWeather } from "./components/TodayWeather";
import { AppContainer } from "./components/styled-components/AppContainer";
import { PageContainer } from "./components/styled-components/PageContainer";
import { useOpenWeatherMapOneCall } from "./hooks/useOpenWeatherMapOneCall";

moment.locale("pl");

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
      <PageContainer bgColor={"#afe29d"}>today</PageContainer>
      <PageContainer bgColor={"#9db6e2"}>{rawData && <ReactJson src={rawData} collapsed={true} />}</PageContainer>
    </AppContainer>
  );
};

export default App;
