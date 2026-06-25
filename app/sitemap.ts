import type { MetadataRoute } from 'next';
import { SITE_URL } from './i18n/config';
import { slugs, localizedPath, alternatesFor, type PageKey } from './i18n/routing';

const abs = (path: string) => `${SITE_URL}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.keys(slugs) as PageKey[];

  return pages.map((page) => {
    const languages = Object.fromEntries(
      Object.entries(alternatesFor(page)).map(([lang, path]) => [lang, abs(path)])
    );

    return {
      url: abs(localizedPath(page, 'fr')),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === 'home' ? 1 : 0.8,
      alternates: { languages },
    };
  });
}
