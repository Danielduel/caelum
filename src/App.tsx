import "moment/locale/pl";
import React from "react";
import moment from "moment";
import { AppContainer } from "./components/layouts/AppContainer";
import { TodayWeatherPage } from "./pages/TodayWeatherPage";
import { NextDaysForecastPage } from "./pages/NextDaysForecastPage";
import { ModalRootStyles } from "./portals/ModalRootStyles";
import initI18n from "./common/initI18n";
import { ModalContext, TargetLocationContext } from "./AppContext";

const EN = "en";

moment.locale(EN);
initI18n(EN);

const App: React.FunctionComponent = () => {
  const { isModalOpen } = ModalContext.wrappedHook();
  const { fetched, rawData } = TargetLocationContext.wrappedHook();
  const nextDaysForecastPageRef = React.useRef<HTMLDivElement | null>(null);
  const [alert] = rawData?.alerts || [];

  if (!fetched) {
    return <AppContainer>Loading...</AppContainer>;
  }

  if (!rawData) {
    return <AppContainer>No data</AppContainer>;
  }

  return (
    <AppContainer data-testid={"app-container"}>
      <ModalRootStyles isModalOpen={isModalOpen} />
      <TodayWeatherPage
        nextPageRef={nextDaysForecastPageRef}
        currentWeather={rawData.current}
        hourForecast={rawData.hourly}
        alert={alert}
      />
      <NextDaysForecastPage pageRef={nextDaysForecastPageRef} daily={rawData.daily} />
    </AppContainer>
  );
};

export default App;
