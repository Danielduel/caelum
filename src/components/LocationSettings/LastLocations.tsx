import styled from "styled-components";
import { CrosshairsIcon } from "../Icon/Icons";
import { City } from "../../assets/mock/mockCities";
import { useTranslation } from "react-i18next";

const LastLocationsContainer = styled.div`
  margin-bottom: 1rem;
`;

const LastLocationsHeader = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 1rem;
`;

const LastLocationsRow = styled.div`
  display: flex;
`;

const LastLocationsItemWrapper = styled.div`
  flex: 1;
  padding: 5px;
  white-space: nowrap;
  overflow: hidden;
`;

const CrosshairsIconStyled = styled(CrosshairsIcon)`
  width: 1.25em;
  padding-right: 0.25em;
`;

type LastLocationsItemProps = {
  location: City | undefined;
};

const LastLocationsItem = ({ location }: LastLocationsItemProps): JSX.Element => {
  if (!location) {
    return <LastLocationsItemWrapper />;
  }
  return (
    <LastLocationsItemWrapper>
      <CrosshairsIconStyled />
      <span>{location.name}</span>
    </LastLocationsItemWrapper>
  );
};

type LastLocationsProps = {
  locations: City[];
};

export const LastLocations = ({ locations }: LastLocationsProps): JSX.Element => {
  const [city1, city2, city3, city4] = locations;
  const { t } = useTranslation();
  return (
    <LastLocationsContainer>
      <LastLocationsHeader>{t("lastLocations")}</LastLocationsHeader>
      <LastLocationsRow>
        <LastLocationsItem location={city1} />
        <LastLocationsItem location={city2} />
      </LastLocationsRow>
      <LastLocationsRow>
        <LastLocationsItem location={city3} />
        <LastLocationsItem location={city4} />
      </LastLocationsRow>
    </LastLocationsContainer>
  );
};
