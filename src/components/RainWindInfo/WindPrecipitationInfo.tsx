import styled from "styled-components";
import { CurrentWeatherForecast } from "../../models/OpenWeatherAPI";
import { PrecipitationIcon } from "./PrecipitationIcon";
import { rainAmount, snowAmount } from "../../common/helpers";
import { WindIconStyled } from "./StyledIcons";
import { WindDescription } from "./WindDescription";

const RainWindInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75em;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
`;

const InfoItemText = styled.div`
  height: fit-content;
  font-weight: 500;
  margin-left: 0.5em;
  opacity: 0.8;
`;

const InfoItemValue = styled.span`
  font-size: 2.25em;
`;

const InfoItemValueFraction = styled.span`
  font-size: 1.5em;
`;

const InfoItemUnit = styled.span`
  font-size: 1.5em;
`;

const number2HeadTail = (num: number) => {
  const head = Math.floor(num);
  const _tail = Math.floor((num - head) * 100); // first 2 chars of fraction
  const __tail = "00" + String(_tail); // add characters to prepare value for leading zero/zeros
  const ___tail = __tail.slice(-2); // take first characters from the right
  const tail = ___tail; // set return
  return [head, tail];
};

export type RainPrecipitationInfoProps = {
  currentWeather: Pick<CurrentWeatherForecast, "wind_speed" | "rain" | "snow" | "temp">;
};

export const WindPrecipitationInfo = ({ currentWeather }: RainPrecipitationInfoProps): JSX.Element => {
  const wind = currentWeather.wind_speed;
  const rain = rainAmount(currentWeather);
  const snow = snowAmount(currentWeather);
  const temperature = currentWeather.temp;
  const [windspeedHead, windspeedTail] = number2HeadTail(wind);
  const [rainfallAmountHead, rainfallAmountTail] = number2HeadTail(rain + snow);
  return (
    <RainWindInfoWrapper>
      <InfoItem>
        <WindIconStyled />
        <InfoItemText>
          <InfoItemValue>{windspeedHead}</InfoItemValue>
          {+windspeedTail > 0 && <InfoItemValueFraction>.{windspeedTail}</InfoItemValueFraction>}
          <InfoItemUnit>m/s</InfoItemUnit>
        </InfoItemText>
        <WindDescription windSpeed={wind} />
      </InfoItem>
      <InfoItem>
        <PrecipitationIcon temperature={temperature} rain={rain} snow={snow} />
        <InfoItemText>
          <InfoItemValue>{rainfallAmountHead}</InfoItemValue>
          {+rainfallAmountTail > 0 && <InfoItemValueFraction>.{rainfallAmountTail}</InfoItemValueFraction>}
          <InfoItemUnit>mm</InfoItemUnit>
        </InfoItemText>
      </InfoItem>
    </RainWindInfoWrapper>
  );
};
