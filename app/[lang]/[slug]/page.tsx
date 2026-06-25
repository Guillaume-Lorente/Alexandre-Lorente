import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, isLocale, SITE_URL, SAME_AS } from '../../i18n/config';
import { getDictionary } from '../../i18n/dictionaries';
import {
  contentSlugs,
  pageFromSlug,
  localizedPath,
  alternatesFor,
  ogImages,
  landingKeys,
  type PageKey,
  type LandingKey,
} from '../../i18n/routing';

import ActivitiesContent from '../../components/pages/ActivitiesContent';
import AboutContent from '../../components/pages/AboutContent';
import ContactContent from '../../components/pages/ContactContent';
import LandingContent from '../../components/pages/LandingContent';

// Pre-render every localized slug for every locale.
export function generateStaticParams() {
  return locales.flatMap((lang) =>
    contentSlugs(lang).map((slug) => ({ lang, slug }))
  );
}

export const dynamicParams = false;

const isLanding = (page: PageKey): page is LandingKey =>
  (landingKeys as PageKey[]).includes(page);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};

  const page = pageFromSlug(lang, slug);
  if (!page || page === 'home') return {};

  const dict = await getDictionary(lang);
  const meta = dict.meta[page];

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localizedPath(page, lang),
      languages: alternatesFor(page),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: localizedPath(page, lang),
      images: ogImages(lang),
    },
  };
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const page = pageFromSlug(lang, slug);
  if (!page || page === 'home') notFound();

  if (page === 'activities') return <ActivitiesContent />;
  if (page === 'about') return <AboutContent />;
  if (page === 'contact') return <ContactContent />;

  if (isLanding(page)) {
    const dict = await getDictionary(lang);
    const meta = dict.meta[page];
    const t = dict.landing[page];
    const url = `${SITE_URL}${localizedPath(page, lang)}`;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${url}#service`,
          name: t.h1,
          description: meta.description,
          url,
          serviceType: t.eyebrow,
          areaServed: [
            { '@type': 'Place', name: 'Tignes' },
            { '@type': 'Place', name: "Val d'Isère" },
          ],
          provider: {
            '@type': 'Person',
            '@id': `${SITE_URL}/#alexandre`,
            name: 'Alexandre Lorente',
            knowsLanguage: ['fr', 'en'],
            sameAs: SAME_AS,
          },
          availableLanguage: ['fr', 'en'],
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: dict.nav.home,
              item: `${SITE_URL}${localizedPath('home', lang)}`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: t.eyebrow,
              item: url,
            },
          ],
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LandingContent landingKey={page} />
      </>
    );
  }

  notFound();
}
