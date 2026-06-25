// Central i18n configuration shared by server and client code.

export const locales = ['fr', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Canonical, absolute site URL. Used for metadataBase, hreflang, sitemap and
// JSON-LD. Override with NEXT_PUBLIC_SITE_URL in the deploy environment.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alexandre-lorente.fr'
).replace(/\/$/, '');

// Human-readable BCP-47 tags for <html lang> and Open Graph.
export const htmlLang: Record<Locale, string> = {
  fr: 'fr-FR',
  en: 'en-GB',
};

export const ogLocale: Record<Locale, string> = {
  fr: 'fr_FR',
  en: 'en_GB',
};

// Real, verified profiles. Évolution 2 is the professional one (shown in the
// footer); Instagram/Facebook are added to JSON-LD `sameAs` for entity
// disambiguation but kept out of the visible UI.
export const SOCIAL = {
  evolution2: 'https://evolution2.com/moniteurs-prives/alexandre-l?v=911',
  instagram: 'https://www.instagram.com/_alexlorente_/',
  facebook: 'https://www.facebook.com/alex.lorente.90?locale=fr_FR',
};

export const SAME_AS = [SOCIAL.evolution2, SOCIAL.instagram, SOCIAL.facebook];

// Years Alexandre has been teaching — used in copy and structured data.
export const YEARS_EXPERIENCE = 13;
