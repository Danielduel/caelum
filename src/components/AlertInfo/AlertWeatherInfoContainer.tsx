import React, { useState } from "react";
import { AlertInfo } from "./AlertInfo";
import { AlertsInfo } from "../../models/OpenWeatherAPI";
import styled from "styled-components";

export type AlertWeatherInfoContainerProps = {
  alert: AlertsInfo | undefined;
  children: React.ReactNode;
};

const OuterContentContainer = styled.div`
  flex: 1;
`;

export const AlertWeatherInfoContainer = ({ alert, children }: AlertWeatherInfoContainerProps): JSX.Element => {
  const [alertOpen, setAlertOpen] = useState(false);
  return (
    <OuterContentContainer>
      {alert && (
        <AlertInfo
          header={alert.tags[0]}
          description={alert.description}
          setAlertOpen={setAlertOpen}
          alertOpen={alertOpen}
        />
      )}
      {alertOpen ? null : children}
    </OuterContentContainer>
  );
};
