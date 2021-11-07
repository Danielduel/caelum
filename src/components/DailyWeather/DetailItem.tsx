import styled from "styled-components";
import React from "react";

const DetailItemWrapper = styled.div`
  display: flex;
  margin: 1rem;
  opacity: 0.8;
  font-size: 1.5em;
`;

const DetailItemLabel = styled.div`
  flex: 1;
`;

const DetailItemValue = styled.div``;

export type DetailItemProps = {
  label: string;
  children: React.ReactNode;
};

export const DetailItem = ({ label, children }: DetailItemProps): JSX.Element => {
  return (
    <DetailItemWrapper>
      <DetailItemLabel>{label}</DetailItemLabel>
      <DetailItemValue>{children}</DetailItemValue>
    </DetailItemWrapper>
  );
};
