import { useState, useEffect, type ReactNode } from "react";
import { LanguageContext, type Lang } from "./LanguageContext";
import { tr } from "../i18n/tr";
import { en } from "../i18n/en";

const STORAGE_KEY = "cdc_user_lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "tr") {
      return saved;
    }
    return "tr";
  });

  const t = lang === "tr" ? tr : en;

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
