import React from "react";
import styled from "styled-components";
import { arrZero, StyledClassName } from "../../common/helpers";
import { useTranslation } from "react-i18next";

export type WindDescriptionProps = StyledClassName & {
  windSpeed: number;
};

export type WindSpeedDescription = {
  min: number;
  max: number;
  label: string;
};

const WindSpeedValues: WindSpeedDescription[] = [
  { min: 0, max: 0.499, label: "windDescr_1" },
  { min: 0.5, max: 5.399, label: "windDescr_2" },
  { min: 5.4, max: 7.999, label: "windDescr_3" },
  { min: 8, max: 13.799, label: "windDescr_4" },
  { min: 13.8, max: 16.999, label: "windDescr_5" },
  { min: 17, max: 20.799, label: "windDescr_6" },
  { min: 20.8, max: 24.499, label: "windDescr_7" },
  { min: 24.5, max: 29.999, label: "windDescr_8" },
  { min: 30, max: 1000, label: "windDescr_9" }
];

export const WindDescriptionWrapper = styled.span``;

export const WindDescription = ({ windSpeed, className }: WindDescriptionProps): JSX.Element => {
  const item = React.useMemo(
    () => WindSpeedValues.find(({ min, max }) => windSpeed >= min && windSpeed < max),
    [windSpeed]
  );
  const defaultWindSpeedValue = arrZero(WindSpeedValues);
  const { label } = item || defaultWindSpeedValue;
  const { t } = useTranslation();
  return <WindDescriptionWrapper className={className}>({t(label)})</WindDescriptionWrapper>;
};
