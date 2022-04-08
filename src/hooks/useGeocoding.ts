import { APP_ID } from "../common/constants";
import { useFetchData } from "./useFetchData";
import React from "react";
import { GeoLocation } from "../models/GeocodingAPI";

const geocodingApiUrl = "https://api.openweathermap.org/geo/1.0/direct";

const useGeocoding = () => {
  const getUrl = React.useCallback(
    (cityName: string) => `${geocodingApiUrl}?q=${cityName}&limit=10&appid=${APP_ID}`,
    [geocodingApiUrl, APP_ID]
  );
  return useFetchData<GeoLocation[], [string]>(getUrl);
};

export { useGeocoding };
