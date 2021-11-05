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

import dropletIcon from "../../assets/icons/fa-custom-droplet.svg";
export const DropletIcon = createIconFromSrc(dropletIcon);

import closeIcon from "../../assets/icons/fa-close.svg";
export const CloseIcon = createIconFromSrc(closeIcon);

import arrowRightIcon from "../../assets/icons/fa-angle-right.svg";
export const ArrowRightIcon = createIconFromSrc(arrowRightIcon);
