import React from "react";
import styled from "styled-components";
import { ArrowIcon, WarningIcon } from "../Icon/Icons";
import { hexToCssFilter } from "../../common/hexToCssFilter";

export type AlertInfoProps = {
  header: string;
  description: string;
  alertOpen: boolean;
  setAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type AlertContainerProps = {
  open: boolean;
};
const AlertContainer = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(126, 126, 126, 0.5);
  backdrop-filter: blur(2px);
  border-radius: 6px;
  margin: 1em;
  padding: 0.2em 1em;
  max-height: ${({ open }: AlertContainerProps) => (open ? "16rem" : "1.6rem")};
  transition: max-height 1s ease-in-out;
  overflow: hidden;
`;

const AlertHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AlertHeaderContent = styled.div`
  color: rgba(244, 67, 43, 0.8);
  display: flex;
  align-items: center;
`;

const AlertContent = styled.div`
  opacity: 0.8;
  margin: 1em 0.5rem;
  text-align: justify;
`;

type StyledArrowIconProps = {
  open: boolean;
};
const StyledArrowIcon = styled(ArrowIcon)`
  width: 1.4em;
  filter: ${hexToCssFilter("#3c3c3cfc")};
  transform: ${({ open }: StyledArrowIconProps) => (open ? "rotate(180deg)" : "rotate(0deg)")};
`;

const WarningIconStyled = styled(WarningIcon)`
  filter: ${hexToCssFilter("#f4432bcc")};
  margin-right: 1em;
  width: 1.4em;
`;

export const AlertInfo = ({ header, description, setAlertOpen, alertOpen }: AlertInfoProps): JSX.Element => {
  return (
    <AlertContainer open={alertOpen}>
      <AlertHeader>
        <AlertHeaderContent>
          <WarningIconStyled />
          {header}
        </AlertHeaderContent>
        <StyledArrowIcon open={alertOpen} onClick={() => setAlertOpen((prevState) => !prevState)} />
      </AlertHeader>
      <AlertContent>{description}</AlertContent>
    </AlertContainer>
  );
};
