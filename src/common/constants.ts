export const APP_ID = "035c2a38881a80dff29561d6b59a2bda";

export const MODALS = {
  NONE: "",
  LOCATION_MODAL: "LOCATION_MODAL",
  DAY_MODAL: "DAY_MODAL"
} as const;

export type MODAL_NAME = typeof MODALS[keyof typeof MODALS];
