import React from "react";
import styled, { css } from "styled-components";
import { CurrentWeatherForecast, DayWeatherForecast, WeatherInfo } from "../models/OpenWeatherAPI";

/*
  Most likely this file will be split in future, just store handy things here
  treat it as constants/common/utils
  if something is more than 3 lines - export to separate file
*/

export const emptyCss = css``;
export const emptyDiv = styled.div``;
export const emptyFn = () => undefined;
export type UnknownObject = Record<string, unknown>;
export type StyledComponentsCss = ReturnType<typeof css>;
export type WithChildren = { children: React.ReactNode };
export type WithForwardRef<T> = { forwardRef?: React.MutableRefObject<T> };
export type WithForwardRefDiv = WithForwardRef<HTMLDivElement | null>;
export type StyledClassName = { className?: string };
export const head = (num: number) => (_: unknown, index: number) => index < num;
export const skipFirst = () => (_: unknown, index: number) => index !== 0;
export const arrZero = <T>(arr: T[]) => arr[0];
export const weatherZeroId = (weather: [WeatherInfo]) => arrZero(weather).id;
export const weatherZeroDescription = (weather: [WeatherInfo]) => arrZero(weather).description;
export const forecastWeatherZeroDescription = (forecast: DayWeatherForecast) =>
  weatherZeroDescription(forecast.weather);
export const rainAmount = (currentWeather: Pick<CurrentWeatherForecast, "rain">): number =>
  currentWeather.rain?.["1h"] || 0;
export const snowAmount = (currentWeather: Pick<CurrentWeatherForecast, "snow">): number =>
  currentWeather.snow?.["1h"] || 0;
export const prop =
  <T, K extends keyof T>(attrName: K, defaultValue = "") =>
  (props: T) => {
    return props[attrName] || defaultValue;
  };
export const debounce = <T extends (...args: any[]) => void>(fn: T, timeout: number): T => {
  let timer: NodeJS.Timeout;
  return ((...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(args), timeout);
  }) as T;
};
export const uniqueBy = <T>(items: T[], compareFn: (item1: T, item2: T) => boolean): T[] =>
  items.filter((item1, idx) => items.findIndex((item2) => compareFn(item1, item2)) == idx);
