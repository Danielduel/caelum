import { ReactComponent as RainImg } from "../../assets/icons/fa-raindrops.svg";
import { ReactComponent as SnowImg } from "../../assets/icons/fa-snowflake.svg";

type PrecipitationIconProps = {
  rain: number;
  snow: number;
  temperature: number;
};

export const PrecipitationIcon = ({ rain, snow, temperature }: PrecipitationIconProps): JSX.Element => {
  if (snow > 0) {
    return <SnowImg />;
  }
  if (rain > 0) {
    return <RainImg />;
  }
  return temperature > 0 ? <RainImg /> : <SnowImg />;
};
