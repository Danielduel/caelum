import React from "react";
import styled from "styled-components";
import { Modal } from "./Modal";
import { head } from "../../common/helpers";
import { CrosshairsIcon } from "../Icon/Icons";
import { ModalCloseButtonWithOffset } from "./ModalCloseButton";
import { City, mockCities } from "../../assets/mock/mockCities";
import { SetTargetLocation } from "../../hooks/useTargetLocation";

type LocationModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  i18nName: string;
  setTargetLocation: SetTargetLocation;
};

const CrosshairsIconStyled = styled(CrosshairsIcon)`
  width: 1.25em;
  padding-right: 0.25em;
`;

const LocationModalInput = styled.input`
  width: 100%;
  margin-top: 3rem;
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

const LocationModalStyled = styled(Modal)`
  min-height: 20rem;
`;

type LocationModalListItemProps = Pick<LocationModalProps, "setOpen" | "setTargetLocation">;
const LocationModalListItem = ({ setOpen, setTargetLocation }: LocationModalListItemProps) => {
  const _LocationModalListItem = ({ name, lat, lon }: City) => {
    return (
      <LocationModalOption
        key={`${lat}/${lon}`}
        onClick={() => {
          // don't do that in normal code btw
          setOpen(false);
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

const LocationModal = ({ open, setOpen, i18nName, setTargetLocation }: LocationModalProps) => {
  const [searchField, setSearchField] = React.useState("");
  const filteredCities = mockCities
    .filter(head(6))
    .filter((city) => city.name !== i18nName)
    .filter((city) => city.name.includes(searchField));
  return (
    <LocationModalStyled visible={open}>
      <ModalCloseButtonWithOffset onClick={() => setOpen(false)} />
      <LocationModalInput onChange={(e) => setSearchField(e.target.value)} value={searchField} />
      <LocationModalListContainer>
        {filteredCities.length > 0
          ? filteredCities.map(LocationModalListItem({ setOpen, setTargetLocation }))
          : "No results"}
      </LocationModalListContainer>
    </LocationModalStyled>
  );
};

export { LocationModal };
