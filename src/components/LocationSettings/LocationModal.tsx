import React from "react";
import styled from "styled-components";
import { head } from "../../common/helpers";
import { CrosshairsIcon } from "../Icon/Icons";
import { City, mockCities } from "../../assets/mock/mockCities";
import { SetTargetLocation } from "../../hooks/useTargetLocation";
import { useAppContextDefaultLocation } from "../../hooks/useAppContextDefaultLocation";
import { DrawerHeader } from "../DrawerHeader/DrawerHeader";
import { useAppContextModal } from "../../hooks/useAppContextModal";

type LocationModalProps = {
  i18nName: string;
  setTargetLocation: SetTargetLocation;
};

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

type LocationModalListItemProps = Pick<LocationModalProps, "setTargetLocation">;

const LocationModalListItem = ({ setTargetLocation }: LocationModalListItemProps) => {
  const { closeModals } = useAppContextModal();
  const _LocationModalListItem = ({ name, lat, lon }: City) => {
    return (
      <LocationModalOption
        key={`${lat}/${lon}`}
        onClick={() => {
          // don't do that in normal code btw
          closeModals();
          setTargetLocation(name, lat, lon);
        }}
      >
        <CrosshairsIconStyled />
        {name}
      </LocationModalOption>
    );
  };
  return _LocationModalListItem;
};

const LocationModal = () => {
  const [searchField, setSearchField] = React.useState("");
  const { setTargetLocation, i18nName } = useAppContextDefaultLocation();
  const filteredCities = mockCities
    .filter(head(6))
    .filter((city) => city.name !== i18nName)
    .filter((city) => city.name.includes(searchField));
  return (
    <LocationWrapper>
      <DrawerHeader title={"Location"} />
      <LocationModalContent>
        <LocationModalInput onChange={(e) => setSearchField(e.target.value)} value={searchField} />
        <LocationModalListContainer>
          {filteredCities.length > 0 ? filteredCities.map(LocationModalListItem({ setTargetLocation })) : "No results"}
        </LocationModalListContainer>
      </LocationModalContent>
    </LocationWrapper>
  );
};

export { LocationModal };
