import styled from "styled-components";

const _IconImg = styled.img``;
const _Icon = (props) => {
  return <_IconImg {...props} />;
};

const createIconFromSrc = (src: string) => (_props) =>
  _Icon({
    ..._props,
    src
  });

import arrowIcon from "../../assets/icons/fa-arrow.svg";
export const ArrowIcon = createIconFromSrc(arrowIcon);

import barsIcon from "../../assets/icons/fa-bars.svg";
export const BarsIcon = createIconFromSrc(barsIcon);

import crosshairsIcon from "../../assets/icons/fa-crosshairs.svg";
export const CrosshairsIcon = createIconFromSrc(crosshairsIcon);
