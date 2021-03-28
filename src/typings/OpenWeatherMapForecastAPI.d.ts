export type ResponseData = {
  hourly: HourlyItem[];
};

export type HourlyItem = {
  temp: number;
  dt: number;
  feels_like: number;
  weather: [WeatherItem];
};

export type WeatherItem = {
  main: string;
  icon: string;
};
