import moment from "moment";
import { WeatherData } from "../models/OpenWeatherAPI";

type Unpacked<T> = T extends (infer U)[] ? U : T;
export type TransformData = ReturnType<typeof transformData>;
export type TransformDataItem = Unpacked<TransformData>;

/**
 * See: https://openweathermap.org/api/one-call-api
 */
const url =
  "https://api.openweathermap.org/data/2.5/onecall?lat=53.4289&lon=14.553&units=metric&appid=035c2a38881a80dff29561d6b59a2bda";

const iconUrl = (code: string) => `http://openweathermap.org/img/wn/${code}.png`;

const transformFormattedDateMnemonic = (date: Date) => {
  return moment(date).calendar();
};

export const transformData = (responseData: WeatherData) => {
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

export const getWeatherData = (): Promise<WeatherData> => fetch(url).then((response) => response.json());
