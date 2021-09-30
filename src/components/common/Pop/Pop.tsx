import styled from "styled-components";
import { StyledClassName } from "../../../common/helpers";
import dropletIcon from "./droplet-icon.svg";

const PopWrapper = styled.div`
  position: relative;
`;
const PopIcon = styled.img`
  opacity: 0.1;
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
  return (
    <PopWrapper className={className}>
      <PopIcon src={dropletIcon} />
      <PopText>{pop * 100}%</PopText>
    </PopWrapper>
  );
};

export { Pop };
