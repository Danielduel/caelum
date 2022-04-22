import styled from "styled-components";
import backgroundForest from "../../assets/img/background_forest.svg";

export const AppContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow: scroll;
  height: 100vh;
  background-image: url(${backgroundForest});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const DesktopContainer = styled.div`
  @media (max-width: 599.98px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`;
