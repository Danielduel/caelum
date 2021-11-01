import styled from "styled-components";
import { ReactComponent as RainImg } from "../../assets/icons/wi-raindrops.svg";
import { ReactComponent as WindImg } from "../../assets/icons/wi-strong-wind.svg";

export type RainWindInfoProps = {
  windSpeed: number;
  rainProbability: number;
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

const InfoItemUnit = styled.span`
  font-size: 1.5em;
`;

export const RainWindInfo = ({ rainProbability, windSpeed }: RainWindInfoProps): JSX.Element => {
  return (
    <RainWindInfoWrapper>
      <InfoItem>
        <WindImg />
        <InfoItemText>
          <InfoItemValue>{windSpeed}</InfoItemValue>
          <InfoItemUnit>m/s</InfoItemUnit>
        </InfoItemText>
      </InfoItem>
      <InfoItem>
        <RainImg />
        <InfoItemText>
          <InfoItemValue>{rainProbability}</InfoItemValue>
          <InfoItemUnit>mm</InfoItemUnit>
        </InfoItemText>
      </InfoItem>
    </RainWindInfoWrapper>
  );
};
