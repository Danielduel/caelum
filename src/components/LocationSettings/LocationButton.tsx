import React from "react";
import styled from "styled-components";
import { CrosshairsIcon } from "../Icon/Icons";
import { ModalContext, TargetLocationContext } from "../../AppContext";

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

const LocationButton = () => {
  const { openModal } = ModalContext.wrappedHook();
  const { i18nName } = TargetLocationContext.wrappedHook();
  return (
    <>
      <NavigationFabContainer>
        <LocationContainer data-testid={"location-button"} onClick={() => openModal("LOCATION_MODAL")}>
          <CrosshairsIconStyled />
          <LocationText>{i18nName}</LocationText>
        </LocationContainer>
      </NavigationFabContainer>
    </>
  );
};

export { LocationButton };
