import { StyledClassName } from "../common/helpers";
import styled from "styled-components";

type FormattedTemperatureProps = StyledClassName & {
  value: number;
};

export const FormattedTemperatureValue = styled.span``;

export const FormattedTemperatureUnit = styled.span``;

export const FormattedTemperatureWrapper = styled.span``;

export const FormattedTemperature = ({ value, className }: FormattedTemperatureProps): JSX.Element => (
  <FormattedTemperatureWrapper className={className}>
    <FormattedTemperatureValue>{Math.round(value)}</FormattedTemperatureValue>
    <FormattedTemperatureUnit>°C</FormattedTemperatureUnit>
  </FormattedTemperatureWrapper>
);

type FormattedHourProps = StyledClassName & {
  value: number;
};
export const FormattedHour = ({ value, className }: FormattedHourProps): JSX.Element => {
  const hour = new Date(value * 1000).getHours().toString();
  return <span className={className}>{hour.padStart(2, "0")}:00</span>;
};

type FormattedTimeProps = StyledClassName & {
  value: number;
};

export const FormattedTimeWrapper = styled.span``;

export const FormattedTime = ({ value, className }: FormattedTimeProps): JSX.Element => {
  const date = new Date(value * 1000);
  return (
    <FormattedTimeWrapper className={className}>
      {date.getHours()}:{date.getMinutes()}
    </FormattedTimeWrapper>
  );
};
