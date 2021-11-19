import styled, { css } from "styled-components";
import { RainIcon, SnowIcon, WindIcon } from "../Icon/Icons";

const WeatherFactorIcon = css`
  height: 5em;
  width: 5em;
  color: rgba(0, 163, 255, 0.5);
  fill: currentColor;
`;

export const WindIconStyled = styled(WindIcon)`
  ${WeatherFactorIcon}
`;

export const RainIconStyled = styled(RainIcon)`
  ${WeatherFactorIcon}
`;

export const SnowIconStyled = styled(SnowIcon)`
  ${WeatherFactorIcon}
`;
