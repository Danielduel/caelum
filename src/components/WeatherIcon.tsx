import React from "react";
import cn from "classnames";
import { weatherIconsConfig } from "../App";
import { StyledClassName } from "../common/helpers";
import { WeatherInfo } from "../models/OpenWeatherAPI";

const getDayIcon = (weatherCode: number) => weatherIconsConfig[weatherCode][3];
const getNightIcon = (weatherCode: number) => weatherIconsConfig[weatherCode][4];

type WeatherIconProps = StyledClassName & {
  weatherCode: number;
};
export const WeatherIcon = ({ weatherCode, className }: WeatherIconProps): JSX.Element => {
  const now = new Date().getHours();
  const icon = now > 5 && now < 22 ? getDayIcon(weatherCode) : getNightIcon(weatherCode);
  return <i className={cn("wi", icon, className)} />;
};

type WeatherInfoArrWeatherIconProps = StyledClassName & {
  weatherInfoArr: WeatherInfo[];
};
export const WeatherInfoArrWeatherIcon = ({ weatherInfoArr, className }: WeatherInfoArrWeatherIconProps) => {
  const [weatherInfo] = weatherInfoArr;
  return <WeatherIcon weatherCode={weatherInfo.id} className={className} />;
};
