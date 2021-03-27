import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const url = "https://api.openweathermap.org/data/2.5/onecall?lat=53.4289&lon=14.553&exclude=minutely,daily,alerts&units=metric&appid=035c2a38881a80dff29561d6b59a2bda";

const transformData = responseData => {
  return responseData.hourly.map(data => {
    return {
      formattedDate: (new Date(data.dt * 1000)).toLocaleString("pl-PL"),
      temp: data.temp,
      weather: data.weather[0].main
    };
  });
}

const WeatherCell = ({ formattedDate, temp, weather }) => (
  <div className={formattedDate.includes("06:00:00") ? "marszowagodzina" : ""}>
    <div>{ formattedDate }</div>
    <div>{ temp }</div>
    <div>{ weather }</div>
  </div>
);

const App = () => {
  const [ fetched, setFetched ] = React.useState(false);
  const [ data, setData ] = React.useState(null);

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
    <div className="App">
      { !fetched && "Loading..." }
      { fetched && data.map(WeatherCell) }
    </div>
  );
}

export default App;
