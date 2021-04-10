import React from "react";
import { ReactComponent as GearIcon } from "../atoms/icons/gear/gear.svg";

export type IconTypes = "gear";

type IconProps = {
  type: IconTypes;
};

type SvgReactComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

const icons: Record<IconTypes, SvgReactComponent> = {
  gear: GearIcon
};

const iconType2ReactComponent = (type: IconTypes) => icons[type];

const Icon: React.FunctionComponent<IconProps> = ({ type }: IconProps) => {
  const Component = iconType2ReactComponent(type);
  if (Component) {
    return <Component />;
  }
  return null;
};

export default Icon;
