import React from "react";
import AppContext from "../AppContext";

const useAppContextDefaultLocation = () => {
  const { defaultLocation } = React.useContext(AppContext);
  return defaultLocation;
};

export { useAppContextDefaultLocation };
