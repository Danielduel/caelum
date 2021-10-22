import styled from "styled-components";
import backgroundForest from "../../assets/img/background_forest.svg";

export const PageContainer = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  background-image: url(${backgroundForest});
  background-size: cover;
  background-repeat: no-repeat;
`;
