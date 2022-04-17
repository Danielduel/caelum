import React from "react";
import { WeatherData } from "../models/OpenWeatherAPI";
import { APP_ID } from "../common/constants";
import { useFetchData } from "./useFetchData";

// "https://api.openweathermap.org/data/2.5/onecall?lat=53.4289&lon=14.553&exclude=minutely,daily,alerts&units=metric&appid=035c2a38881a80dff29561d6b59a2bda";

const openWeatherEndpoint = "https://api.openweathermap.org/data/2.5/onecall";

type OpenWeatherOneCallParams = {
  lat: string;
  lon: string;
  exclude: string[];
  units: "metric";
};

function useOpenWeatherMapOneCall() {
  const getUrl = React.useCallback(
    ({ lat, lon, exclude, units }: OpenWeatherOneCallParams) =>
      `${openWeatherEndpoint}?lat=${lat}&lon=${lon}&exclude=${exclude.join(",")}&units=${units}&appid=${APP_ID}`,
    [openWeatherEndpoint, APP_ID]
  );
  return useFetchData<WeatherData, [OpenWeatherOneCallParams]>(getUrl);
}

export { useOpenWeatherMapOneCall };
