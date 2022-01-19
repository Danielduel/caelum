// TODO - remove
export type City = { name: string; lat: string; lon: string };
export const city = (name: string, lat: string, lon: string) => ({ name, lat, lon });
export const mockCities: City[] = [
  city("Szczecin", "53.428543", "14.552812"),
  city("Szydłowo", "53.1620341", "16.5942987"),
  city("Warsaw", "52.237049", "21.017532"),
  city("Berlin", "52.520008", "13.404954"),
  city("London", "51.507351", "-0.127758"),
  city("Tokyo (東京都)", "35.4929552", "137.5268034"),
  city("Hong Kong (香港)", "22.3531282", "113.847517")
];
