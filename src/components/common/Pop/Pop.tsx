import styled, { css } from "styled-components";
import { StyledClassName } from "../../../common/helpers";
import dropletIcon from "./droplet-icon.svg";

const PopWrapper = styled.div`
  position: relative;
`;
const PopFill = styled.div`
  line-height: 0;
  display: inline-block; /* Nongreedy space */
  mix-blend-mode: multiply;
  background: transparent;
`;
type PopIconWrapperProps = { popValue: number };
const linearGradientWithPopValue = ({ popValue }: PopIconWrapperProps) => {
  const wetColor = "cyan";
  const dryColor = "#eee";
  if (popValue <= 0) {
    return css`
      background: ${dryColor};
    `;
  }
  if (popValue >= 100) {
    return css`
      background: ${wetColor};
    `;
  }
  const gradientOffset = 5;
  const gradientDistance = 10;
  const minStop = Math.ceil(Math.max(Math.min(popValue - gradientOffset - gradientDistance / 2, 100), 0));
  const maxStop = Math.ceil(Math.max(Math.min(popValue - gradientOffset + gradientDistance / 2, 100), 0));
  return css`
    background: linear-gradient(
      0deg,
      ${wetColor} 0%,
      ${wetColor} ${minStop}%,
      ${dryColor} ${maxStop}%,
      ${dryColor} 100%
    );
  `;
};
const PopIconWrapper = styled.div`
  mix-blend-mode: screen;
  isolation: isolate;
  ${linearGradientWithPopValue}
`;
const PopIcon = styled.img`
  mix-blend-mode: screen;
  background: white;
  width: 4em;
`;
const PopText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

type PopProps = StyledClassName & {
  pop: number;
};
const Pop = ({ pop, className }: PopProps) => {
  const popValue = Math.ceil(pop * 100);
  return (
    <PopWrapper className={className}>
      <PopFill>
        <PopIconWrapper popValue={popValue}>
          <PopIcon src={dropletIcon} />
        </PopIconWrapper>
      </PopFill>
      <PopText>{popValue}%</PopText>
    </PopWrapper>
  );
};

export { Pop };
