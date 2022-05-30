import "moment/locale/pl";
import React from "react";
import moment from "moment";
import { AppContainer, DesktopContainer, MobileContainer } from "./components/layouts/AppContainer";
import { TodayWeatherPage } from "./pages/TodayWeatherPage";
import { NextDaysForecastPage } from "./pages/NextDaysForecastPage";
import { ModalRootStyles } from "./portals/ModalRootStyles";
import initI18n from "./common/initI18n";
import { ModalContext, TargetLocationContext } from "./AppContext";
import { DesktopDashboardPage } from "./pages/DesktopDashboardPage";

const EN = "en";

moment.locale(EN);
initI18n(EN);

const App: React.FunctionComponent = () => {
  const { isModalOpen } = ModalContext.wrappedHook();
  const { data, isFetching } = TargetLocationContext.wrappedHook();
  const nextDaysForecastPageRef = React.useRef<HTMLDivElement | null>(null);
  const [alert] = data?.alerts || [];

  if (isFetching) {
    return <AppContainer>Loading...</AppContainer>;
  }

  if (!data) {
    return <AppContainer>No data</AppContainer>;
  }

  return (
    <>
      <MobileContainer>
        <AppContainer data-testid={"app-container-mobile"}>
          <ModalRootStyles isModalOpen={isModalOpen} />
          <TodayWeatherPage
            nextPageRef={nextDaysForecastPageRef}
            currentWeather={data.current}
            hourForecast={data.hourly}
            alert={alert}
          />
          <NextDaysForecastPage pageRef={nextDaysForecastPageRef} daily={data.daily} />
        </AppContainer>
      </MobileContainer>
      <DesktopContainer>
        <AppContainer data-testid={"app-container-desktop"}>
          <DesktopDashboardPage currentWeather={data.current} />
        </AppContainer>
      </DesktopContainer>
    </>
  );
};

export default App;
