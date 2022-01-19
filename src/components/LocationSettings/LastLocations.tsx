import styled from "styled-components";
import { CrosshairsIcon } from "../Icon/Icons";
import { City } from "../../assets/mock/mockCities";

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
  return (
    <LastLocationsItemWrapper>
      <CrosshairsIconStyled />
      <span>{location?.name}</span>
    </LastLocationsItemWrapper>
  );
};

type LastLocationsProps = {
  locations: City[];
};

export const LastLocations = ({ locations }: LastLocationsProps): JSX.Element => {
  // localStorage.setItem(
  //   "LAST_LOCATIONS",
  //   JSON.stringify([
  //     city("Berlin", "52.520008", "13.404954"),
  //     city("London", "51.507351", "-0.127758"),
  //     city("Tokyo (東京都)", "35.4929552", "137.5268034"),
  //     city("Hong Kong (香港)", "22.3531282", "113.847517")
  //   ])
  // );
  // const lastLocations: City[] = JSON.parse(localStorage.getItem("LAST_LOCATIONS") || "[]");
  const [city1, city2, city3, city4] = locations;
  return (
    <LastLocationsContainer>
      <LastLocationsHeader>Last locations:</LastLocationsHeader>
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
