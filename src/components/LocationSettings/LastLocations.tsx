import styled from "styled-components";
import { CrosshairsIcon } from "../Icon/Icons";
import { useTranslation } from "react-i18next";
import { GeoLocation } from "../../models/GeocodingAPI";

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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LastLocationsItemWrapper = styled.div`
  flex: 1;
  padding: 5px 10px;
  margin: 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 16px;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CrosshairsIconStyled = styled(CrosshairsIcon)`
  width: 1.25em;
  padding-right: 0.25em;
`;

type LastLocationsItemProps = {
  location: GeoLocation | undefined;
  setLocation: (location: GeoLocation) => void;
};

const LastLocationsItem = ({ location, setLocation }: LastLocationsItemProps): JSX.Element => {
  if (!location) {
    return <></>;
  }
  return (
    <LastLocationsItemWrapper onClick={() => setLocation(location)}>
      <CrosshairsIconStyled />
      <div>{location.name}</div>
    </LastLocationsItemWrapper>
  );
};

type LastLocationsProps = {
  locations: GeoLocation[];
  setLocation: (location: GeoLocation) => void;
};

export const LastLocations = ({ locations, setLocation }: LastLocationsProps): JSX.Element => {
  const [city1, city2, city3, city4] = locations;
  const { t } = useTranslation();
  return (
    <LastLocationsContainer>
      {!!locations.length && <LastLocationsHeader>{t("lastLocations")}</LastLocationsHeader>}
      <LastLocationsRow>
        <LastLocationsItem setLocation={setLocation} location={city1} />
        <LastLocationsItem setLocation={setLocation} location={city2} />
      </LastLocationsRow>
      <LastLocationsRow>
        <LastLocationsItem setLocation={setLocation} location={city3} />
        <LastLocationsItem setLocation={setLocation} location={city4} />
      </LastLocationsRow>
    </LastLocationsContainer>
  );
};
