import styled, { css } from "styled-components";
import { RainIcon, SnowIcon, WindIcon } from "../Icon/Icons";
import { hexToCssFilter } from "../../common/hexToCssFilter";

const WeatherFactorIcon = css`
  filter: ${hexToCssFilter("#000")};
  height: 5em;
  width: 5em;
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
