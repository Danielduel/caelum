import styled from "styled-components";
import moment from "moment";
import React from "react";

const DashboardClockWrapper = styled.div`
  font-size: 6rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const DashboardClock = () => {
  const [currentTime, setCurrentTime] = React.useState("");
  React.useEffect(() => {
    const timerHandler = setInterval(() => setCurrentTime(moment().format("HH:mm:ss")), 1000);
    return () => clearInterval(timerHandler);
  }, []);
  return <DashboardClockWrapper>{currentTime}</DashboardClockWrapper>;
};
