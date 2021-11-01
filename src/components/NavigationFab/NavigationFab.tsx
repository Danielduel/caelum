import styled from "styled-components";
import { BarsIcon, CrosshairsIcon } from "../Icon/Icons";

const NavigationFabContainer = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BarsIconStyled = styled(BarsIcon)`
  width: 1.75em;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-right: 1em;
`;

const LocationText = styled.div`
  font-weight: 500; // superbold
  font-size: 1.125em;
`;

const CrosshairsIconStyled = styled(CrosshairsIcon)`
  width: 1.25em;
  padding-right: 0.25em;
`;

const NavigationFab = () => {
  return (
    <NavigationFabContainer>
      <LocationContainer>
        <CrosshairsIconStyled />
        <LocationText>Szczecin</LocationText>
      </LocationContainer>
      <BarsIconStyled />
    </NavigationFabContainer>
  );
};

export { NavigationFab };
