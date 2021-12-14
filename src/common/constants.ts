export const MODALS = {
  NONE: "",
  LOCATION_MODAL: "LOCATION_MODAL",
  DAY_MODAL: "DAY_MODAL"
} as const;
export type MODAL_NAME = typeof MODALS[keyof typeof MODALS];
