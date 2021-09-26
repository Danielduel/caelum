import React from "react";
import { WeatherData } from "../models/OpenWeatherAPI";

// "https://api.openweathermap.org/data/2.5/onecall?lat=53.4289&lon=14.553&exclude=minutely,daily,alerts&units=metric&appid=035c2a38881a80dff29561d6b59a2bda";

const openWeatherEndpoint = "https://api.openweathermap.org/data/2.5/onecall";
const appId = "035c2a38881a80dff29561d6b59a2bda";

type OpenWeatherOneCallParams = {
  lat: string;
  lon: string;
  exclude: string[];
  units: "metric";
};

const getUrl = ({ lat, lon, exclude, units }: OpenWeatherOneCallParams) => {
  // TODO helper for that?
  return (
    openWeatherEndpoint +
    "?" +
    `lat=${lat}&` +
    `lon=${lon}&` +
    `exclude=${exclude.join(",")}&` +
    `units=${units}&` +
    `appid=${appId}`
  );
};

function useOpenWeatherMapOneCall(params: OpenWeatherOneCallParams) {
  const url = React.useMemo(() => getUrl(params), [params]);
  const [fetched, setFetched] = React.useState(false);
  const [data, setData] = React.useState<WeatherData | null>(null);

  const fetchData = React.useCallback(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        setFetched(true);
      });
  }, [url, setFetched, setData]);

  return [data, fetched, fetchData] as const;
}

export { useOpenWeatherMapOneCall };
