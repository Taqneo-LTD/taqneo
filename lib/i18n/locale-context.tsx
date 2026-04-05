"use client";

import { createContext, useContext, useState, useCallback } from "react";

type Locale = "en" | "ar";

type LocaleContextType = {
  locale: Locale;
  dir: "ltr" | "rtl";
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  dir: "ltr",
  toggleLocale: () => {},
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <LocaleContext value={{ locale, dir, toggleLocale }}>
      {children}
    </LocaleContext>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
