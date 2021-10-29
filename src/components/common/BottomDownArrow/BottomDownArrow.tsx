import React from "react";
import styled from "styled-components";
import { ArrowIcon } from "../../Icons/ArrowIcon";

const BottomArrowWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledArrowIcon = styled(ArrowIcon)`
  opacity: 0.8;
  width: 3em;
`;

type BottomDownArrowProps = {
  nextPageRef: React.MutableRefObject<HTMLDivElement | null>;
};

const BottomDownArrow = ({ nextPageRef }: BottomDownArrowProps) => {
  const onClick = React.useCallback(() => {
    nextPageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [nextPageRef]);

  return (
    <BottomArrowWrapper>
      <StyledArrowIcon onClick={onClick} />
    </BottomArrowWrapper>
  );
};

export { BottomDownArrow };
