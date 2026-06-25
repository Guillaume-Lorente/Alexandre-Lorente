import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, SITE_URL, SAME_AS, YEARS_EXPERIENCE } from '../i18n/config';
import { getDictionary } from '../i18n/dictionaries';
import { localizedPath, alternatesFor, ogImages } from '../i18n/routing';
import { PHONE_INTERNATIONAL } from '../lib/contact';

import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import HomeActivities from '../components/sections/HomeActivities';
import Experience from '../components/sections/Experience';
import WhyAlexandre from '../components/sections/WhyAlexandre';
import AboutPreview from '../components/sections/AboutPreview';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';
import Footer from '../components/layout/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);

  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    alternates: {
      canonical: localizedPath('home', lang),
      languages: alternatesFor('home'),
    },
    openGraph: {
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      url: localizedPath('home', lang),
      images: ogImages(lang),
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  // LocalBusiness + Person structured data — strong signal for local SEO on
  // "ski instructor Tignes / Val d'Isère" style queries.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#alexandre`,
        name: 'Alexandre Lorente',
        jobTitle: lang === 'fr' ? 'Moniteur de ski et snowboard' : 'Ski and snowboard instructor',
        description:
          lang === 'fr'
            ? `Moniteur de ski et snowboard diplômé d'État avec ${YEARS_EXPERIENCE} ans d'expérience à Tignes et Val d'Isère, enseignant au sein d'Évolution 2. Cours privés bilingues sur tout le domaine, piste et hors-piste.`
            : `French State certified ski and snowboard instructor with ${YEARS_EXPERIENCE} years of experience in Tignes and Val d'Isère, teaching with Evolution 2. Bilingual private lessons across the whole area, on and off the piste.`,
        knowsLanguage: ['fr', 'en'],
        knowsAbout: ['Ski', 'Snowboard', 'Freeride', 'Freestyle', 'Ski touring'],
        worksFor: { '@type': 'Organization', name: 'Évolution 2' },
        sameAs: SAME_AS,
        url: `${SITE_URL}${localizedPath('home', lang)}`,
      },
      {
        '@type': 'SportsActivityLocation',
        '@id': `${SITE_URL}/#business`,
        name: 'Alexandre Lorente — Cours de ski & snowboard',
        description: dict.meta.home.description,
        url: `${SITE_URL}${localizedPath('home', lang)}`,
        telephone: `+${PHONE_INTERNATIONAL}`,
        areaServed: [
          { '@type': 'Place', name: 'Tignes' },
          { '@type': 'Place', name: "Val d'Isère" },
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Tignes',
          addressRegion: 'Savoie',
          addressCountry: 'FR',
        },
        provider: { '@id': `${SITE_URL}/#alexandre` },
        makesOffer: [
          'Ski',
          'Snowboard',
          'Freeride',
          'Freestyle',
          lang === 'fr' ? 'Ski de randonnée' : 'Ski touring',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}${localizedPath('home', lang)}#faq`,
        mainEntity: dict.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <HomeActivities />
      <Experience />
      <WhyAlexandre />
      <AboutPreview />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
