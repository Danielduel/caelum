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
  i18nLabelKey: string;
};

const WindSpeedValues: WindSpeedDescription[] = [
  { min: 0, max: 0.499, i18nLabelKey: "windDescr_1" },
  { min: 0.5, max: 5.399, i18nLabelKey: "windDescr_2" },
  { min: 5.4, max: 7.999, i18nLabelKey: "windDescr_3" },
  { min: 8, max: 13.799, i18nLabelKey: "windDescr_4" },
  { min: 13.8, max: 16.999, i18nLabelKey: "windDescr_5" },
  { min: 17, max: 20.799, i18nLabelKey: "windDescr_6" },
  { min: 20.8, max: 24.499, i18nLabelKey: "windDescr_7" },
  { min: 24.5, max: 29.999, i18nLabelKey: "windDescr_8" },
  { min: 30, max: 1000, i18nLabelKey: "windDescr_9" }
];

export const WindDescriptionWrapper = styled.span``;

export const WindDescription = ({ windSpeed, className }: WindDescriptionProps): JSX.Element => {
  const item = React.useMemo(
    () => WindSpeedValues.find(({ min, max }) => windSpeed >= min && windSpeed < max),
    [windSpeed]
  );
  const defaultWindSpeedValue = arrZero(WindSpeedValues);
  const { i18nLabelKey } = item || defaultWindSpeedValue;
  const { t } = useTranslation();
  return <WindDescriptionWrapper className={className}>({t(i18nLabelKey)})</WindDescriptionWrapper>;
};
