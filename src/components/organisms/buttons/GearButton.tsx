import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as GearIcon } from "../../atoms/icons/gear/gear.svg";

type GearButtonProps = {
  to: string;
};

const GearButtonWrapper = styled.div`
  position: fixed;
  top: 2rem;
  left: 2rem;
  padding: 0.3rem;
  border: 2px solid black;
  border-radius: 50%;
  background: #bbb;
`;

const IconLink = styled(Link)`
  height: 100%;
  width: 100%;
  display: block;
  line-height: 0;
`;

const GearButton: React.FunctionComponent<GearButtonProps> = ({ to }: GearButtonProps) => {
  return (
    <GearButtonWrapper>
      <IconLink to={to}>
        <GearIcon />
      </IconLink>
    </GearButtonWrapper>
  );
};

export default GearButton;
