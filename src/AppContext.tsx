import React from "react";
import { emptyFn } from "./common/helpers";
import { useTargetLocation } from "./hooks/useTargetLocation";

type AppContextType = {
  defaultLocation: ReturnType<typeof useTargetLocation>;
};

const initialState: AppContextType = {
  defaultLocation: {
    fetched: false,
    i18nName: "Loading...",
    rawData: null,
    setTargetLocation: emptyFn
  }
};

const AppContext = React.createContext(initialState);

const setupAppContextProvider = () => {
  const WrappedAppContextProvider = ({ children }) => {
    const defaultLocation = useTargetLocation();

    const state = {
      defaultLocation
    };

    return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
  };

  return WrappedAppContextProvider;
};

export { setupAppContextProvider };
export default AppContext;
