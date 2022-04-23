import styled from "styled-components";
import { WithChildren } from "../../common/helpers";

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
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  height: 100%;
  flex: 1;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 0 8px 8px 0;
  opacity: 0.6;
  height: 100%;
  flex: 2;
`;

type DashboardSingleItemProps = WithChildren & {
  icon: JSX.Element;
};

export const DashboardSingleItem = ({ icon, children }: DashboardSingleItemProps) => {
  return (
    <DashboardSingleItemContainer>
      <IconContainer>{icon}</IconContainer>
      <ContentContainer>{children}</ContentContainer>
    </DashboardSingleItemContainer>
  );
};
