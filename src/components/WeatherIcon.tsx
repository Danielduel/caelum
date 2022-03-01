import React from "react";
import cn from "classnames";
import { StyledClassName } from "../common/helpers";
import { WeatherInfo } from "../models/OpenWeatherAPI";
import { WeatherIconsConfigContext } from "../AppContext";
import { WeatherIconsConfig } from "../hooks/useWeatherIconsConfig";

const getDayNightIcon = (iconsConfig: WeatherIconsConfig, weatherCode: number) => {
  const now = new Date().getHours();
  if (now > 5 && now < 22) {
    return iconsConfig[weatherCode][3];
  } else {
    return iconsConfig[weatherCode][4];
  }
};

type WeatherIconProps = StyledClassName & {
  weatherCode: number;
};
export const WeatherIcon = ({ weatherCode, className }: WeatherIconProps): JSX.Element => {
  const { weatherIconsConfig, fetched } = WeatherIconsConfigContext.wrappedHook();
  if (!fetched) {
    return <></>;
  }
  const icon = getDayNightIcon(weatherIconsConfig, weatherCode);
  return <i className={cn("wi", icon, className)} />;
};

type WeatherInfoArrWeatherIconProps = StyledClassName & {
  weatherInfoArr: WeatherInfo[];
};
export const WeatherInfoArrWeatherIcon = ({ weatherInfoArr, className }: WeatherInfoArrWeatherIconProps) => {
  const [weatherInfo] = weatherInfoArr;
  return <WeatherIcon weatherCode={weatherInfo.id} className={className} />;
};
