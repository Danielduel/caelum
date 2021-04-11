import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const GridContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: grid;
  grid-template-columns: repeat(4, [col] 1fr);
  grid-template-rows: repeat(3, [row] 1fr);
`;

type GridProps = {
  children?: JSX.Element | JSX.Element[];
};

const Grid: React.FunctionComponent<GridProps> = ({ children }: GridProps) => {
  return (
    <GridWrapper>
      <GridContainer>{children}</GridContainer>
    </GridWrapper>
  );
};

export default Grid;
