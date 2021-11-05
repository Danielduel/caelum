import styled from "styled-components";
import { ReactComponent as RainImg } from "../../assets/icons/wi-raindrops.svg";
import { ReactComponent as WindImg } from "../../assets/icons/wi-strong-wind.svg";

export type RainWindInfoProps = {
  windSpeed: number;
  rain: number;
};

const RainWindInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75em;

  svg {
    height: 5em;
    width: 5em;
    fill: rgba(0, 163, 255, 0.5);
  }
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

export const RainWindInfo = ({ rain, windSpeed }: RainWindInfoProps): JSX.Element => {
  const [windspeedHead, windspeedTail] = number2HeadTail(windSpeed);
  const [rainProbabilityHead, rainProbabilityTail] = number2HeadTail(rain);
  return (
    <RainWindInfoWrapper>
      <InfoItem>
        <WindImg />
        <InfoItemText>
          <InfoItemValue>{windspeedHead}</InfoItemValue>
          {+windspeedTail > 0 && <InfoItemValueFraction>.{windspeedTail}</InfoItemValueFraction>}
          <InfoItemUnit>m/s</InfoItemUnit>
        </InfoItemText>
      </InfoItem>
      <InfoItem>
        <RainImg />
        <InfoItemText>
          <InfoItemValue>{rainProbabilityHead}</InfoItemValue>
          {+rainProbabilityTail > 0 && <InfoItemValueFraction>.{rainProbabilityTail}</InfoItemValueFraction>}
          <InfoItemUnit>mm</InfoItemUnit>
        </InfoItemText>
      </InfoItem>
    </RainWindInfoWrapper>
  );
};
