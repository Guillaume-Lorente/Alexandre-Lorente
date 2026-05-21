'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (fr: string, en: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('fr');

  const t = (fr: string, en: string) => {
    return lang === 'fr' ? fr : en;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLang must be used inside LanguageProvider');
  }

  return context;
}