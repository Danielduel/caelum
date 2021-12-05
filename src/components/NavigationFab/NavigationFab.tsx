import React from "react";
import styled from "styled-components";
import { LocationModal } from "../Modal/LocationModal";
import { CrosshairsIcon } from "../Icon/Icons";
import { useAppContextDefaultLocation } from "../../hooks/useAppContextDefaultLocation";

const NavigationFabContainer = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;

const LocationText = styled.div`
  font-weight: 500;
  font-size: 1.125em;
`;

const CrosshairsIconStyled = styled(CrosshairsIcon)`
  width: 1.25em;
  padding-right: 0.25em;
`;

const NavigationFab = () => {
  const [open, setOpen] = React.useState(false);
  const { i18nName, setTargetLocation } = useAppContextDefaultLocation();
  return (
    <>
      <NavigationFabContainer>
        <LocationContainer onClick={() => setOpen(true)}>
          <CrosshairsIconStyled />
          <LocationText>{i18nName}</LocationText>
        </LocationContainer>
        <LocationModal i18nName={i18nName} open={open} setOpen={setOpen} setTargetLocation={setTargetLocation} />
      </NavigationFabContainer>
    </>
  );
};

export { NavigationFab };
