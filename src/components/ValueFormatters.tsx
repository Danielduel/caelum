export const FormattedTemperature = (props: { value: number }): JSX.Element => (
  <span>{Math.round(props.value)} <span>°C</span></span>
);

export const FormattedHour = (props: { value: number }): JSX.Element => {
  const hour = new Date(props.value * 1000).getHours().toString();
  return <span>{hour.padStart(2, "0")}:00</span>;
};
