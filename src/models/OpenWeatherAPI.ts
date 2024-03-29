/**
 * API docs: https://openweathermap.org/api/one-call-api
 */

export type WeatherData = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeatherForecast;
  minutely: MinuteWeatherForecast[];
  hourly: HourWeatherForecast[];
  daily: DayWeatherForecast[];
  alerts: AlertsInfo[];
};

export type CurrentWeatherForecast = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  clouds: number;
  uvi: number;
  visibility: number;
  wind_speed: number;
  wind_gust?: number;
  wind_deg: number;
  rain?: PrecipitationInfo;
  snow?: PrecipitationInfo;
  weather: [WeatherInfo];
};

export type MinuteWeatherForecast = {
  dt: number;
  precipitation: number;
};

export type HourWeatherForecast = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_gust?: number;
  wind_deg: number;
  pop: number;
  rain?: PrecipitationInfo;
  snow?: PrecipitationInfo;
  weather: [WeatherInfo];
};

export type DayWeatherForecast = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: TemperatureInfo;
  feels_like: FeelsLikeInfo[];
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_gust?: number;
  wind_deg: number;
  clouds: number;
  uvi: number;
  pop: number;
  rain?: number;
  snow?: number;
  weather: [WeatherInfo];
};

export type WeatherInfo = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type PrecipitationInfo = {
  "1h": number;
};

export type TemperatureInfo = {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
};

export type FeelsLikeInfo = {
  day: number;
  night: number;
  eve: number;
  morn: number;
};

export type AlertsInfo = {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
};
