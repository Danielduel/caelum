import React from "react";
import weatherConditionsCsv from "../assets/weather-conditions.csv";
import { arrZero } from "../common/helpers";

export type WeatherIconsConfig = Record<string, string[]>;

const fetchData = async (): Promise<string[][]> => {
  const response = await fetch(weatherConditionsCsv);
  const csv = await response.text();
  const data = csv.split("\n").map((row) => row.split(";"));
  data.shift();
  return data;
};

const transformData = (rawData: string[][]): WeatherIconsConfig => {
  const iconsConfig = {};
  rawData.forEach((item) => {
    const weatherId = arrZero(item);
    iconsConfig[weatherId] = item;
  });
  return iconsConfig;
};

const useWeatherIconsConfig = () => {
  const [weatherIconsConfig, setWeatherIconsConfig] = React.useState<WeatherIconsConfig>({});
  const [fetched, setFetched] = React.useState(false);

  React.useEffect(() => {
    fetchData().then((rawData) => {
      const data = transformData(rawData);
      setWeatherIconsConfig(data);
      setFetched(true);
    });
  }, []);

  return { weatherIconsConfig, fetched } as const;
};

export { useWeatherIconsConfig };
