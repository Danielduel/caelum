import styled from "styled-components";
import moment from "moment";

const DashboardClockWrapper = styled.div`
  font-size: 6rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const DashboardClock = () => {
  const currentHour = moment().format("HH:mm");
  return <DashboardClockWrapper>{currentHour}</DashboardClockWrapper>;
};
