import React from "react";
import styled, { css } from "styled-components";
import { WeatherInfo } from "../models/OpenWeatherAPI";

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
export type StyledClassName = { className?: string };
export const head = (num: number) => (_: unknown, index: number) => index < num;
export const skipFirst = () => (_: unknown, index: number) => index !== 0;
export const arrZero = <T>(arr: [T]) => arr[0];
export const weatherZeroId = (weather: [WeatherInfo]) => arrZero(weather).id;
export const weatherZeroDescription = (weather: [WeatherInfo]) => arrZero(weather).description;
