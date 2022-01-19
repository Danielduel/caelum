import React from "react";
import { City } from "../assets/mock/mockCities";

const STORAGE_KEY = "LAST_LOCATIONS";

const useLastLocations = () => {
  const [lastLocations, setLastLocations] = React.useState<City[]>([]);

  React.useEffect(() => {
    const lastLocations: City[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setLastLocations(lastLocations);
  }, []);

  const selectLocation = React.useCallback((location: City) => {
    lastLocations.unshift(location);
    lastLocations.pop();
    setLastLocations(lastLocations);
  }, []);

  return [lastLocations, selectLocation] as const;
};

export { useLastLocations };
