import { weatherIconsConfig } from "../App";
import React from "react";

const getDayIcon = (weatherCode: number) => weatherIconsConfig[weatherCode][3];
const getNightIcon = (weatherCode: number) => weatherIconsConfig[weatherCode][4];

export const WeatherIcon = (props: { weatherCode: number }): JSX.Element => {
  console.log(weatherIconsConfig);
  const now = new Date().getHours();
  const icon = now > 5 && now < 22 ? getDayIcon(props.weatherCode) : getNightIcon(props.weatherCode);
  return <i className={`wi ${icon}`} />;
};
