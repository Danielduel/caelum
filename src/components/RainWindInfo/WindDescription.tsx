import styled from "styled-components";
import { StyledClassName } from "../../common/helpers";

export type WindDescriptionProps = StyledClassName & {
  windSpeed: number;
};

export type WindSpeedDescription = {
  min: number;
  max: number;
  label: string;
};

const WindSpeedValues: WindSpeedDescription[] = [
  { min: 0, max: 0.499, label: "no wind" },
  { min: 0.5, max: 5.399, label: "light wind" },
  { min: 5.4, max: 7.999, label: "medium wind" },
  { min: 8, max: 13.799, label: "strong wind" },
  { min: 13.8, max: 16.999, label: "very strong wind" },
  { min: 17, max: 20.799, label: "storm" },
  { min: 20.8, max: 24.499, label: "strong storm" },
  { min: 24.5, max: 29.999, label: "violent storm" },
  { min: 30, max: 1000, label: "hurricane" }
];

export const WindDescriptionWrapper = styled.span``;

export const WindDescription = ({ windSpeed, className }: WindDescriptionProps): JSX.Element => {
  const item = WindSpeedValues.find(({ min, max }) => windSpeed >= min && windSpeed < max);
  const { label } = item || WindSpeedValues[0];
  return <WindDescriptionWrapper className={className}>({label})</WindDescriptionWrapper>;
};
