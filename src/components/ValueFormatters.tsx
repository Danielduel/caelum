import { StyledClassName } from "../common/helpers";

type FormattedTemperatureProps = StyledClassName & {
  value: number;
  withoutSpace?: boolean;
};
export const FormattedTemperature = ({
  value,
  className,
  withoutSpace = false
}: FormattedTemperatureProps): JSX.Element => (
  <span className={className}>
    {Math.round(value)}
    {!withoutSpace && <>&nbsp;</>}
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
