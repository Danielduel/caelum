import styled from "styled-components";
import React from "react";
import { StyledClassName } from "../../common/helpers";

export const DetailItemWrapper = styled.div`
  display: flex;
  margin: 1rem;
  opacity: 0.8;
  font-size: 1.5em;
  align-items: baseline;
`;

const DetailItemLabel = styled.div`
  flex: 1;
  height: fit-content;
`;

const DetailItemValue = styled.div``;

export type DetailItemProps = {
  label: string;
  children: React.ReactNode;
} & StyledClassName;

export const DetailItem = ({ label, children, className }: DetailItemProps): JSX.Element => {
  return (
    <DetailItemWrapper className={className}>
      <DetailItemLabel>{label}</DetailItemLabel>
      <DetailItemValue>{children}</DetailItemValue>
    </DetailItemWrapper>
  );
};
