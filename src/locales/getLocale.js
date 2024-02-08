import { ru_RU } from "./ru_RU";
import { en_EN } from "./en_EN";

export const getLocale = (lang) => {
  if (lang === "en_EN") {
    return en_EN;
  }
  return ru_RU;
};
