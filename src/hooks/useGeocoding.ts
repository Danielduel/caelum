import { WeatherData } from "../models/OpenWeatherAPI";
import { APP_ID } from "../common/constants";
import { useFetchData } from "./useFetchData";
import React from "react";

const geocodingApiUrl = "https://api.openweathermap.org/geo/1.0/direct";

const getUrl = (cityName: string) => `${geocodingApiUrl}?q=${cityName}&limit=5&appid=${APP_ID}`;

const useGeocoding = (cityName: string) => {
  const url = React.useMemo(() => getUrl(cityName), [cityName]);
  return useFetchData<WeatherData>(url);
};

export { useGeocoding };
