// Maps logical pages to their localized URL slugs and provides helpers to
// build localized paths and language alternates (for hreflang + the language
// switcher). Pure data + functions, safe to import on the server and client.

import { Locale, locales } from './config';

// Logical page identifiers, independent of language.
export type PageKey =
  | 'home'
  | 'activities'
  | 'about'
  | 'contact'
  | 'skiTignes'
  | 'skiValdisere'
  | 'snowboard'
  | 'freeride'
  | 'freestyle'
  | 'skiTouring';

// Dedicated local-SEO landing pages (subset of PageKey).
export type LandingKey =
  | 'skiTignes'
  | 'skiValdisere'
  | 'snowboard'
  | 'freeride'
  | 'freestyle'
  | 'skiTouring';

export const landingKeys: LandingKey[] = [
  'skiTignes',
  'skiValdisere',
  'snowboard',
  'freeride',
  'freestyle',
  'skiTouring',
];

// Localized slug for each page, per locale. `home` has an empty slug.
export const slugs: Record<PageKey, Record<Locale, string>> = {
  home: { fr: '', en: '' },
  activities: { fr: 'activites', en: 'activities' },
  about: { fr: 'a-propos', en: 'about' },
  contact: { fr: 'contact', en: 'contact' },
  skiTignes: { fr: 'cours-ski-tignes', en: 'ski-lessons-tignes' },
  skiValdisere: { fr: 'cours-ski-val-disere', en: 'ski-lessons-val-disere' },
  snowboard: {
    fr: 'cours-snowboard-tignes-val-disere',
    en: 'snowboard-lessons-tignes-val-disere',
  },
  freeride: {
    fr: 'freeride-tignes-val-disere',
    en: 'freeride-tignes-val-disere',
  },
  freestyle: {
    fr: 'cours-freestyle-tignes-val-disere',
    en: 'freestyle-lessons-tignes-val-disere',
  },
  skiTouring: {
    fr: 'ski-de-randonnee-tignes-val-disere',
    en: 'ski-touring-tignes-val-disere',
  },
};

// Reverse lookup: localized slug -> page key, per locale.
const slugToPage: Record<Locale, Record<string, PageKey>> = locales.reduce(
  (acc, locale) => {
    acc[locale] = {};
    (Object.keys(slugs) as PageKey[]).forEach((page) => {
      acc[locale][slugs[page][locale]] = page;
    });
    return acc;
  },
  {} as Record<Locale, Record<string, PageKey>>
);

// Build the absolute (in-app) path for a page in a given locale.
// e.g. localizedPath('about', 'en') -> '/en/about'
export function localizedPath(page: PageKey, locale: Locale): string {
  const slug = slugs[page][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

// Resolve a (locale, slug) pair coming from the URL back to a page key.
// Returns null when the slug does not belong to this locale (-> 404).
export function pageFromSlug(locale: Locale, slug: string): PageKey | null {
  return slugToPage[locale]?.[slug] ?? null;
}

// All localized slugs to statically generate for the [slug] route, per locale,
// excluding `home` (handled by app/[lang]/page.tsx).
export function contentSlugs(locale: Locale): string[] {
  return (Object.keys(slugs) as PageKey[])
    .filter((page) => page !== 'home')
    .map((page) => slugs[page][locale]);
}

// Parse a real pathname (e.g. '/en/about') into its locale and page key.
// Falls back to the home page when the slug is unknown.
import { isLocale, defaultLocale } from './config';

export function parsePathname(pathname: string): { locale: Locale; page: PageKey } {
  const [, maybeLocale, maybeSlug = ''] = pathname.split('/');
  const locale = isLocale(maybeLocale) ? maybeLocale : defaultLocale;
  const page = pageFromSlug(locale, maybeSlug) ?? 'home';
  return { locale, page };
}

// Build the href of the current page in the *other* locale, for the switcher.
export function switchLocaleHref(pathname: string, target: Locale): string {
  const { page } = parsePathname(pathname);
  return localizedPath(page, target);
}

// Language alternates for a page, as { 'fr-FR': '/fr/...', 'en-GB': '/en/...' }
// plus an 'x-default'. Used directly by Metadata.alternates.languages.
import { htmlLang } from './config';

// Shared Open Graph / Twitter image per locale. Spread into every segment's
// `openGraph` because Next replaces (does not deep-merge) the openGraph object.
const ogAlt: Record<Locale, string> = {
  fr: "Alexandre Lorente — Cours de ski & snowboard à Tignes et Val d'Isère",
  en: "Alexandre Lorente — Ski & snowboard lessons in Tignes and Val d'Isère",
};

export function ogImages(locale: Locale) {
  return [
    {
      url: `/og/og-${locale}.jpg`,
      width: 1200,
      height: 630,
      alt: ogAlt[locale],
    },
  ];
}

export function alternatesFor(page: PageKey): Record<string, string> {
  const entries: Record<string, string> = {};
  locales.forEach((locale) => {
    entries[htmlLang[locale]] = localizedPath(page, locale);
  });
  // x-default points to the default-locale version for unmatched audiences.
  entries['x-default'] = localizedPath(page, 'fr');
  return entries;
}
