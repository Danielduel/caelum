import styled from "styled-components";
import { DashboardSingleItem } from "../components/desktop/DashboardSingleItem";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TopBarContainer = styled.div`
  height: 2rem;
  background-color: white;
  opacity: 60%;
`;

const DesktopDashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const DesktopDashboardPage = (): JSX.Element => {
  return (
    <PageContainer>
      <TopBarContainer />
      <DesktopDashboardContent>
        <DashboardSingleItem />
        <DashboardSingleItem />
        <DashboardSingleItem />
      </DesktopDashboardContent>
    </PageContainer>
  );
};
