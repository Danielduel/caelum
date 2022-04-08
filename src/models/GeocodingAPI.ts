export type GeoLocation = {
  name: string;
  country: string;
  state?: string;
  lat: number;
  lon: number;
  local_names: Record<string, string>;
};
