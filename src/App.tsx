import React from "react";
import moment from "moment";
import "moment/locale/pl";
import * as OpenWeatherMapForecastAPI from "./typings/OpenWeatherMapForecastAPI";
import styled from "styled-components";
type Unpacked<T> = T extends (infer U)[] ? U : T;
moment.locale("pl");

const url =
  "https://api.openweathermap.org/data/2.5/onecall?lat=53.4289&lon=14.553&exclude=minutely,daily,alerts&units=metric&appid=035c2a38881a80dff29561d6b59a2bda";
const iconUrl = (code: string) => `http://openweathermap.org/img/wn/${code}.png`;

const transformFormattedDateMnemonic = (date: Date) => {
  return moment(date).calendar();
};

const transformData = (responseData: OpenWeatherMapForecastAPI.ResponseData) => {
  return responseData.hourly.map((data) => {
    return {
      formattedDateMnemonic: transformFormattedDateMnemonic(new Date(data.dt * 1000)),
      formattedDate: new Date(data.dt * 1000).toLocaleString("pl-PL"),
      temp: data.temp,
      tempFeel: data.feels_like,
      weather: data.weather[0].main,
      icon: iconUrl(data.weather[0].icon)
    };
  });
};
type TransformData = ReturnType<typeof transformData>;
type TransformDataItem = Unpacked<TransformData>;

const WeatherRowContainer = styled.div`
  display: grid;
  vertical-align: middle;
  grid-template-areas: "formattedDate temp weather weather-icon";
  grid-template-columns: 1fr 1fr repeat(2, 0fr);
  position: relative;
`;

const WeatherRow = ({ formattedDate, formattedDateMnemonic, temp, weather, tempFeel, icon }: TransformDataItem) => (
  <WeatherRowContainer key={formattedDate}>
    <div>{formattedDate}</div>
    <div>{formattedDateMnemonic}</div>
    <div>
      <span>temp&nbsp;</span>
      {temp}
      <span>&#8451;</span>&nbsp;({tempFeel}
      <span>&#8451;</span>)
    </div>
    <div>{weather}</div>
    <div>
      <img src={icon} alt="weather-icon" />
    </div>
  </WeatherRowContainer>
);

const WeatherContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%; /* columnified flex-grow: 1 */
  font-weight: 600;
  white-space: normal;
  padding: 1rem 0;
`;

const WeatherTable = ({ data }: { data: TransformData | null }) => (
  <WeatherContainer>{data && data.map(WeatherRow)}</WeatherContainer>
);

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
  overflow: hidden;
`;

const App: React.FunctionComponent = () => {
  const [fetched, setFetched] = React.useState(false);
  const [data, setData] = React.useState<TransformData | null>(null);

  React.useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setData(transformData(responseData));
        setFetched(true);
      });
  }, []);

  return (
    <AppContainer>
      {!fetched && "Loading..."}
      {fetched && <WeatherTable data={data} />}
    </AppContainer>
  );
};

export default App;
