import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../assets/i18n/en.json";

const initI18n = (lng: string) =>
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: enTranslations
      }
    },
    lng,
    fallbackLng: lng,
    interpolation: {
      escapeValue: false
    }
  });

export default initI18n;
