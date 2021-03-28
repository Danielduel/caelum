import React from 'react';
import './App.css';

const url = "https://api.openweathermap.org/data/2.5/onecall?lat=53.4289&lon=14.553&exclude=minutely,daily,alerts&units=metric&appid=035c2a38881a80dff29561d6b59a2bda";
const iconUrl = code => `http://openweathermap.org/img/wn/${code}.png`;

const transformData = responseData => {
  return responseData.hourly.map(data => {
    return {
      formattedDate: (new Date(data.dt * 1000)).toLocaleString("pl-PL"),
      temp: data.temp,
      tempFeel: data.feels_like,
      weather: data.weather[0].main,
      icon: iconUrl(data.weather[0].icon),
    };
  });
}

const WeatherRow = ({formattedDate, temp, weather, tempFeel, icon}) => (
  <tr className={formattedDate.includes("06:00:00") ? "marszowagodzina" : ""}
      key={formattedDate}>
    <td>{formattedDate}</td>
    <td>temp. {temp}<span>&#8451;</span> ({tempFeel}<span>&#8451;</span>)</td>
    <td className={weather === "Rain" ? "rain" : ""}>{weather}</td>
    <td><img src={icon} alt="weather-icon"/></td>
  </tr>
);

const WeatherTable = data => (
  <table>
    <tbody>
    {data.map(WeatherRow)}
    </tbody>
  </table>
)

const App = () => {
  const [fetched, setFetched] = React.useState(false);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        setData(transformData(responseData));
        setFetched(true);
      });
  }, []);

  return (
    <div className="app-container"
         style={{backgroundImage: "url(img/background.jpg)"}}>
      {!fetched && "Loading..."}
      {fetched && WeatherTable(data)}
    </div>
  );
}

export default App;
