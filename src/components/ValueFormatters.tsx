export const FormattedTemperature = (props: { value: number }) => <span>{Math.round(props.value)} °C</span>;

export const FormattedHour = (props: { value: number }) => {
  const hour = new Date(props.value * 1000).getHours().toString();
  return <span>{hour.padStart(2, "0")}:00</span>;
};
