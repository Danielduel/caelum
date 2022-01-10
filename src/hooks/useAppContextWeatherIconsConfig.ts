import React from "react";
import AppContext from "../AppContext";

const useAppContextWeatherIconsConfig = () => {
  const { weatherIconsConfig } = React.useContext(AppContext);
  return weatherIconsConfig;
};

export { useAppContextWeatherIconsConfig };
