import { pt } from "./pt";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { Dictionary, Locale, locales, defaultLocale } from "./types";

const dictionaries: Record<Locale, Dictionary> = {
  pt,
  en,
  es,
  fr,
};

export function getDictionary(locale?: string): Dictionary {
  if (locale && (locales as string[]).includes(locale)) {
    return dictionaries[locale as Locale];
  }
  return dictionaries[defaultLocale];
}

export * from "./types";
export { locales, defaultLocale };
