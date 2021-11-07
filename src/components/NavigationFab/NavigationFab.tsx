import React from "react";
import styled from "styled-components";
import { Modal } from "../Modal/Modal";
import { BarsIcon, CrosshairsIcon } from "../Icon/Icons";
import { ModalCloseButton } from "../Modal/ModalCloseButton";
import { useAppContextDefaultLocation } from "../../hooks/useAppContextDefaultLocation";

const NavigationFabContainer = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const BarsIconStyled = styled(BarsIcon)`
  width: 1.75em;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-right: 1em;
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

// TODO - remove
const city = (name: string, lat: string, lon: string) => ({ name, lat, lon });
const mockCities = [
  city("Szczecin", "53.428543", "14.552812"),
  city("Szydłowo", "53.1620341", "16.5942987"),
  city("Warsaw", "52.237049", "21.017532"),
  city("Berlin", "52.520008", "13.404954"),
  city("London", "51.507351", "-0.127758"),
  city("Tokyo (東京都)", "35.4929552", "137.5268034"),
  city("Hong Kong (香港)", "22.3531282", "113.847517")
];

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
        <BarsIconStyled />
      </NavigationFabContainer>
      <Modal visible={open}>
        <ModalCloseButton onClick={() => setOpen(false)} />
        {mockCities.map(
          ({ name, lat, lon }) =>
            name !== i18nName && (
              <div key={`${lat}/${lon}`}>
                <button
                  onClick={() => {
                    // don't do that in normal code btw
                    setOpen(false);
                    setTargetLocation(name, lat, lon);
                  }}
                >
                  <h4>{name}</h4>
                </button>
              </div>
            )
        )}
      </Modal>
    </>
  );
};

export { NavigationFab };
