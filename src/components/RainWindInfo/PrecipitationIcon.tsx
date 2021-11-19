import { RainIconStyled, SnowIconStyled } from "./StyledIcons";

type PrecipitationIconProps = {
  rain: number;
  snow: number;
  temperature: number;
};

export const PrecipitationIcon = ({ rain, snow, temperature }: PrecipitationIconProps): JSX.Element => {
  if (snow > 0) {
    return <SnowIconStyled />;
  }
  if (rain > 0) {
    return <RainIconStyled />;
  }
  return temperature > 0 ? <RainIconStyled /> : <SnowIconStyled />;
};
