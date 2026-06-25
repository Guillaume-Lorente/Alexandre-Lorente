import 'server-only';

import type { Locale } from './config';
import type { Dictionary } from './types';

export type { Dictionary };

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import('./dictionaries/fr.json').then((m) => m.default),
  en: () => import('./dictionaries/en.json').then((m) => m.default),
};

export const getDictionary = (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
