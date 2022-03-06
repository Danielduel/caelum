import "moment/locale/pl";
import React from "react";
import moment from "moment";
import { AppContainer } from "./components/layouts/AppContainer";
import { useAppContextDefaultLocation } from "./hooks/useAppContextDefaultLocation";
import { TodayWeatherPage } from "./pages/TodayWeatherPage";
import { NextDaysForecastPage } from "./pages/NextDaysForecastPage";
import { ModalRootStyles } from "./portals/ModalRootStyles";
import { useAppContextModal } from "./hooks/useAppContextModal";
import initI18n from "./common/initI18n";

const EN = "en";

moment.locale(EN);
initI18n(EN);

const App: React.FunctionComponent = () => {
  const { isModalOpen } = useAppContextModal();
  const nextDaysForecastPageRef = React.useRef<HTMLDivElement | null>(null);
  const { fetched, rawData } = useAppContextDefaultLocation();
  const [alert] = rawData?.alerts || [];

  if (!fetched) {
    return <AppContainer data-testid={"app-container"}>Loading...</AppContainer>;
  }

  if (!rawData) {
    return <AppContainer>No data</AppContainer>;
  }

  return (
    <AppContainer>
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
