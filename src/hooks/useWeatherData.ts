import { APP_ID } from "../common/constants";
import { useQuery } from "react-query";
import { WeatherData } from "../models/OpenWeatherAPI";

const openWeatherEndpoint = "https://api.openweathermap.org/data/2.5/onecall";

type OpenWeatherOneCallParams = {
  lat: string;
  lon: string;
  exclude: string[];
  units: "metric";
};

const getWeatherData = async ({ lat, lon, exclude, units }: OpenWeatherOneCallParams): Promise<WeatherData> => {
  const excluded = exclude.join(",");
  const url = `${openWeatherEndpoint}?lat=${lat}&lon=${lon}&exclude=${excluded}&units=${units}&appid=${APP_ID}`;
  const response = await fetch(url);
  return await response.json();
};

const useWeatherData = (params: OpenWeatherOneCallParams) =>
  useQuery(["weatherData", params], () => getWeatherData(params), { refetchInterval: 1000 * 60 * 10 });

export { useWeatherData };
