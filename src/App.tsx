
import "moment/locale/pl";
import React from "react";
import moment from "moment";
import ReactJson from "react-json-view";
import { WeatherData } from "./models/OpenWeatherAPI";
import { TodayWeather } from "./components/TodayWeather";
import { AppContainer } from "./components/styled-components/AppContainer";
import { PageContainer } from "./components/styled-components/PageContainer";
import { getWeatherData, transformData, TransformData } from "./services/WeatherData";

moment.locale("pl");

type UnknownObject = Record<string, unknown>;

const App: React.FunctionComponent = () => {
  const [fetched, setFetched] = React.useState(false);
  const [rawData, setRawData] = React.useState<WeatherData | null>(null);
  const [data, setData] = React.useState<TransformData | null>(null);

  React.useEffect(() => {
    getWeatherData().then((data) => {
      setRawData(data);
      setData(transformData(data));
      setFetched(true);
    });
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
