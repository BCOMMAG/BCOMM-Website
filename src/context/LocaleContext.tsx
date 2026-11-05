"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Dictionary, Locale, locales, defaultLocale, getDictionary } from "@/dictionaries";

interface LocaleContextType {
  locale: Locale;
  dict: Dictionary;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: defaultLocale,
  dict: getDictionary(defaultLocale),
  setLocale: () => {},
});

function getClientInitialLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  // 1. Check URL query param: ?lang=en / ?locale=es
  const params = new URLSearchParams(window.location.search);
  const paramLang = params.get("lang") || params.get("locale");
  if (paramLang && (locales as string[]).includes(paramLang.toLowerCase())) {
    return paramLang.toLowerCase() as Locale;
  }

  // 2. Check Cookie
  const match = document.cookie.match(/(?:^|;\s*)NEXT_LOCALE=([^;]+)/);
  if (match && match[1] && (locales as string[]).includes(match[1].toLowerCase())) {
    return match[1].toLowerCase() as Locale;
  }

  // 3. Check browser language (navigator.language)
  const navLang = navigator.language?.toLowerCase() || "";
  if (navLang.startsWith("pt")) return "pt";
  if (navLang.startsWith("es")) return "es";
  if (navLang.startsWith("fr")) return "fr";
  if (navLang.startsWith("en")) return "en";

  // Fallback for foreign international users
  return "en";
}

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      return getClientInitialLocale();
    }
    return initialLocale || defaultLocale;
  });

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    if (!locales.includes(newLocale)) return;
    setLocaleState(newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
  };

  const dict = getDictionary(locale);

  return (
    <LocaleContext.Provider value={{ locale, dict, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LocaleProvider");
  }
  return context;
}
