import React from "react";
import { GeoLocation } from "../models/GeocodingAPI";

const STORAGE_KEY = "LAST_LOCATIONS";

const insertNewLocation = (lastLocations: GeoLocation[], location: GeoLocation) => {
  const index = lastLocations.findIndex((item) => item.name === location.name);
  if (index >= 0) {
    lastLocations.splice(index, 1);
  } else if (lastLocations.length >= 4) {
    lastLocations.pop();
  }
  lastLocations.unshift(location);
};

const useLastLocations = () => {
  const [lastLocations, setLastLocations] = React.useState<GeoLocation[]>([]);

  React.useEffect(() => {
    const lastLocations: GeoLocation[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setLastLocations(lastLocations);
  }, []);

  const selectLocation = React.useCallback(
    (location: GeoLocation) => {
      insertNewLocation(lastLocations, location);
      setLastLocations([...lastLocations]);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lastLocations));
    },
    [lastLocations, setLastLocations]
  );

  return [lastLocations, selectLocation] as const;
};

export { useLastLocations };
