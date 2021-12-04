import styled from "styled-components";
import { cssProp } from "../../common/cssProp";
import { hexToCssFilter } from "../../common/hexToCssFilter";

type _IconImgProps = {
  filter: string;
};
const _IconImg = styled.img<_IconImgProps>`
  ${cssProp("filter", "filter", "")}
`;
const _Icon = (props) => {
  return <_IconImg {...props} />;
};

const createIconFromSrc = (src: string, defaultColor = "#000") => {
  const filter = hexToCssFilter(defaultColor);

  const IconScoped = (_props) =>
    _Icon({
      filter,
      ..._props,
      src
    });

  return IconScoped;
};

import arrowIcon from "../../assets/icons/fa-arrow.svg";
export const ArrowIcon = createIconFromSrc(arrowIcon, "#FFF");

import barsIcon from "../../assets/icons/fa-bars.svg";
export const BarsIcon = createIconFromSrc(barsIcon);

import crosshairsIcon from "../../assets/icons/fa-crosshairs.svg";
export const CrosshairsIcon = createIconFromSrc(crosshairsIcon);

import dropletIcon from "../../assets/icons/fa-custom-droplet.svg";
export const DropletIcon = createIconFromSrc(dropletIcon);

import closeIcon from "../../assets/icons/fa-close.svg";
export const CloseIcon = createIconFromSrc(closeIcon);

import arrowRightIcon from "../../assets/icons/fa-angle-right.svg";
export const ArrowRightIcon = createIconFromSrc(arrowRightIcon);

import rainIcon from "../../assets/icons/fa-raindrops.svg";
export const RainIcon = createIconFromSrc(rainIcon, "#00A3FF80");

import snowIcon from "../../assets/icons/fa-snowflake.svg";
export const SnowIcon = createIconFromSrc(snowIcon, "#00A3FF80");

import windIcon from "../../assets/icons/fa-strong-wind.svg";
export const WindIcon = createIconFromSrc(windIcon, "#00A3FF80");
