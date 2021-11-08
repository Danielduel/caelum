import { StyledClassName } from "../common/helpers";

type FormattedTemperatureProps = StyledClassName & {
  value: number;
};
export const FormattedTemperature = ({ value, className }: FormattedTemperatureProps): JSX.Element => (
  <span className={className}>
    <span>{Math.round(value)}</span>
    <span>°C</span>
  </span>
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
export const FormattedTime = ({ value, className }: FormattedTimeProps): JSX.Element => {
  const date = new Date(value * 1000);
  return (
    <span className={className}>
      {date.getHours()}:{date.getMinutes()}
    </span>
  );
};
