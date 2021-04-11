import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon, { IconTypes } from "../../molecules/Icon";

type LinkIconProps = {
  to: string;
  iconType: IconTypes;
};

const LinkIconWrapper = styled.div`
  position: fixed;
  top: 2rem;
  left: 2rem;
  padding: 0.3rem;
  border: 2px solid black;
  border-radius: 50%;
  background: #bbb;
  z-index: 69;
`;

const IconLink = styled(Link)`
  height: 100%;
  width: 100%;
  display: block;
  line-height: 0;
`;

const LinkIcon: React.FunctionComponent<LinkIconProps> = ({ to, iconType }: LinkIconProps) => {
  return (
    <LinkIconWrapper>
      <IconLink to={to}>
        <Icon type={iconType} />
      </IconLink>
    </LinkIconWrapper>
  );
};

export default LinkIcon;
