import styled from "styled-components";

const DashboardSingleItemContainer = styled.div`
  width: 300px;
  height: 100px;
  border-radius: 8px;
  margin: 1rem;
  display: flex;
`;

const IconContainer = styled.div`
  background-color: #c4c4c4;
  border-radius: 8px 0 0 8px;
  opacity: 0.8;
  height: 100%;
  flex: 1;
`;

const ContentContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0 8px 8px 0;
  opacity: 0.6;
  height: 100%;
  flex: 2;
`;

export const DashboardSingleItem = () => {
  return (
    <DashboardSingleItemContainer>
      <IconContainer></IconContainer>
      <ContentContainer></ContentContainer>
    </DashboardSingleItemContainer>
  );
};
