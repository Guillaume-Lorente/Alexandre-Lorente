'use client';

// Bridges the server-loaded dictionary to client components (the animated
// sections rely on framer-motion and must stay client). The dictionary is the
// same content already rendered into the HTML, so passing it down is free.

import { createContext, useContext, ReactNode } from 'react';
import type { Locale } from './config';
import type { Dictionary } from './types';
import { PageKey, localizedPath } from './routing';

type IntlContextValue = {
  lang: Locale;
  dict: Dictionary;
};

const IntlContext = createContext<IntlContextValue | undefined>(undefined);

export function IntlProvider({
  lang,
  dict,
  children,
}: {
  lang: Locale;
  dict: Dictionary;
  children: ReactNode;
}) {
  return (
    <IntlContext.Provider value={{ lang, dict }}>
      {children}
    </IntlContext.Provider>
  );
}

export function useIntl() {
  const ctx = useContext(IntlContext);
  if (!ctx) {
    throw new Error('useIntl must be used inside IntlProvider');
  }
  return ctx;
}

// Convenience: build a localized href for a page in the current locale.
export function useLocalizedHref() {
  const { lang } = useIntl();
  return (page: PageKey) => localizedPath(page, lang);
}
