import React from "react";
import styled from "styled-components";
import { head } from "../../common/helpers";
import { CrosshairsIcon } from "../Icon/Icons";
import { City, mockCities } from "../../assets/mock/mockCities";
import { useAppContextDefaultLocation } from "../../hooks/useAppContextDefaultLocation";
import { DrawerHeader } from "../DrawerHeader/DrawerHeader";
import { useAppContextModal } from "../../hooks/useAppContextModal";
import { LastLocations } from "./LastLocations";
import { useLastLocations } from "../../hooks/useLastLocations";

const LocationWrapper = styled.div``;

const LocationModalContent = styled.div`
  padding: 1rem;
`;

const CrosshairsIconStyled = styled(CrosshairsIcon)`
  width: 1.25em;
  padding-right: 0.25em;
`;

const LocationModalInput = styled.input`
  width: 100%;
  margin-top: 2rem;
  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  font-size: 1rem;
  box-sizing: border-box;
`;

const LocationModalListContainer = styled.div`
  padding: 1rem 0.75rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  margin-top: 0.5rem;
`;

const LocationModalOption = styled.div`
  padding: 0.25rem 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
`;

type LocationModalListItemProps = {
  setLocation: (location: City) => void;
};

const LocationModalListItem = ({ setLocation }: LocationModalListItemProps) => {
  const _LocationModalListItem = (city: City) => {
    return (
      <LocationModalOption key={`${city.lat}/${city.lon}`} onClick={() => setLocation(city)}>
        <CrosshairsIconStyled />
        {city.name}
      </LocationModalOption>
    );
  };
  return _LocationModalListItem;
};

const LocationModal = () => {
  const [searchField, setSearchField] = React.useState("");
  const { setTargetLocation, i18nName } = useAppContextDefaultLocation();
  const { closeModals } = useAppContextModal();
  const [lastLocations, selectLastLocation] = useLastLocations();

  const filteredCities = mockCities
    .filter(head(6))
    .filter((city) => city.name !== i18nName)
    .filter((city) => city.name.includes(searchField));

  const setLocation = React.useCallback(
    (location: City) => {
      setTargetLocation(location.name, location.lat, location.lon);
      selectLastLocation(location);
      closeModals();
    },
    [setTargetLocation, selectLastLocation, closeModals]
  );

  return (
    <LocationWrapper>
      <DrawerHeader title={"Location"} />
      <LocationModalContent>
        <LastLocations locations={lastLocations} />
        <LocationModalInput onChange={(e) => setSearchField(e.target.value)} value={searchField} />
        <LocationModalListContainer>
          {filteredCities.length > 0 ? filteredCities.map(LocationModalListItem({ setLocation })) : "No results"}
        </LocationModalListContainer>
      </LocationModalContent>
    </LocationWrapper>
  );
};

export { LocationModal };
