import styled from "styled-components";
import backgroundForest from "../../assets/img/background_forest.svg";

export const AppContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow: scroll;
  height: 100vh;
  background-image: url(${backgroundForest});
  background-size: cover;
  background-repeat: no-repeat;
`;
