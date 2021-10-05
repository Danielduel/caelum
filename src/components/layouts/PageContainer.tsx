import styled from "styled-components";

export const PageContainer = styled.div<{ bgColor?: string }>`
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  background: ${(props) => props.bgColor || "white"};
`;
