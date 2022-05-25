import { APP_ID } from "../common/constants";
import { GeoLocation } from "../models/GeocodingAPI";
import { useQuery } from "react-query";

const geocodingApiUrl = "https://api.openweathermap.org/geo/1.0/direct";

const getCityCoordinates = async (cityName: string): Promise<GeoLocation[]> => {
  const url = `${geocodingApiUrl}?q=${cityName}&limit=10&appid=${APP_ID}`;
  const response = await fetch(url);
  return await response.json();
};

const useGeocoding = (cityName: string) =>
  useQuery(["weatherData", cityName], () => getCityCoordinates(cityName), { enabled: false });

export { useGeocoding };
