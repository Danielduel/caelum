import React from "react";
import { emptyFn } from "./common/helpers";
import { useModal } from "./hooks/useModal";
import { useTargetLocation } from "./hooks/useTargetLocation";

type AppContextType = {
  defaultLocation: ReturnType<typeof useTargetLocation>;
  modal: ReturnType<typeof useModal>;
};

const initialState: AppContextType = {
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
    const defaultLocation = useTargetLocation();
    const modal = useModal();

    const state = {
      defaultLocation,
      modal
    };

    return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
  };

  return WrappedAppContextProvider;
};

export { setupAppContextProvider };
export default AppContext;
