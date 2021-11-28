import { AlertsInfo } from "../../models/OpenWeatherAPI";
import React, { useState } from "react";
import styled from "styled-components";
import { ArrowIcon, WarningIcon } from "../Icon/Icons";

export type AlertInfoProps = {
  header: string;
  description: string;
  alertOpen: boolean;
  setAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AlertContainer = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(126, 126, 126, 0.5);
  backdrop-filter: blur(2px);
  border-radius: 6px;
  margin: 1em;
  padding: 0.5em 1em;
  min-height: ${({ open }: { open: boolean }) => (open ? "8rem" : "0")};
  transition: 1s all ease-in-out;
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
  color: rgba(244, 67, 43, 0.8);
  margin: 1em 0;
`;

const StyledArrowIcon = styled(ArrowIcon)`
  width: 1.4em;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  transform: ${({ open }: { open: boolean }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
`;

const WarningIconStyled = styled(WarningIcon)`
  margin-right: 1em;
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
      {alertOpen && <AlertContent>{description}</AlertContent>}
    </AlertContainer>
  );
};
