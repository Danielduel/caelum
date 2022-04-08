import React from "react";
import { useOpenWeatherMapOneCall } from "./useOpenWeatherMapOneCall";

const useTargetLocation = () => {
  const [i18nName, setI18nName] = React.useState<string>("Szczecin");
  const [lat, setLat] = React.useState<string>("53.4289");
  const [lon, setLon] = React.useState<string>("14.553");
  const [rawData, fetched, fetchData] = useOpenWeatherMapOneCall();

  React.useEffect(() => {
    fetchData({
      lat,
      lon,
      exclude: ["minutely"],
      units: "metric"
    });
  }, [fetchData, lat, lon]);

  const setTargetLocation = (i18nName: string, lat: string, lon: string) => {
    setI18nName(i18nName);
    setLat(lat);
    setLon(lon);
  };

  return { rawData, fetched, i18nName, setTargetLocation } as const;
};

export { useTargetLocation };
