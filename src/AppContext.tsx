import React from "react";
import { emptyFn } from "./common/helpers";
import { useModal } from "./hooks/useModal";
import { useTargetLocation } from "./hooks/useTargetLocation";
import { useWeatherIconsConfig } from "./hooks/useWeatherIconsConfig";

type AppContextType = {
  weatherIconsConfig: ReturnType<typeof useWeatherIconsConfig>;
  defaultLocation: ReturnType<typeof useTargetLocation>;
  modal: ReturnType<typeof useModal>;
};

const initialState: AppContextType = {
  weatherIconsConfig: {
    weatherIconsConfig: {},
    fetched: false
  },
  defaultLocation: {
    fetched: false,
    i18nName: "Loading...",
    rawData: null,
    setTargetLocation: emptyFn
  },
  modal: {
    _actualOpenModalName: "",
    isModalOpen: false,
    openModal: emptyFn,
    closeModals: emptyFn
  }
};

const AppContext = React.createContext(initialState);

const setupAppContextProvider = () => {
  const WrappedAppContextProvider = ({ children }) => {
    const weatherIconsConfig = useWeatherIconsConfig();
    const defaultLocation = useTargetLocation();
    const modal = useModal();

    const state = {
      weatherIconsConfig,
      defaultLocation,
      modal
    };

    return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
  };

  return WrappedAppContextProvider;
};

export { setupAppContextProvider };
export default AppContext;
