'use client';

import Link from 'next/link';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { useIntl } from '@/app/i18n/IntlProvider';
import { getWhatsappUrl } from '@/app/lib/contact';
import { localizedPath, landingKeys, type LandingKey } from '@/app/i18n/routing';

const heroImage: Record<LandingKey, string> = {
  skiTignes: '/images/montagne.webp',
  skiValdisere: '/images/montagne3.webp',
  snowboard: '/images/snowboard.webp',
  freeride: '/images/freeride.webp',
};

const midImage: Record<LandingKey, string> = {
  skiTignes: '/images/montagne2.webp',
  skiValdisere: '/images/skiRandonnee.webp',
  snowboard: '/images/snowboard2.webp',
  freeride: '/images/freeride2.webp',
};

const altKey: Record<LandingKey, 'ski' | 'snowboard' | 'freeride'> = {
  skiTignes: 'ski',
  skiValdisere: 'ski',
  snowboard: 'snowboard',
  freeride: 'freeride',
};

export default function LandingContent({ landingKey }: { landingKey: LandingKey }) {
  const { lang, dict } = useIntl();
  const t = dict.landing[landingKey];
  const imgAlt = dict.alt[altKey[landingKey]];

  const related = landingKeys.filter((k) => k !== landingKey);

  return (
    <main className="bg-[#F8FAFC] text-[#0B1725]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1725] px-6 pb-24 pt-44 text-white">
        <div
          role="img"
          aria-label={imgAlt}
          className="absolute inset-0 bg-cover bg-center opacity-80 image-soft"
          style={{ backgroundImage: `url('${heroImage[landingKey]}')` }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725] via-[#0B1725]/80 to-[#0B1725]/40" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
            {t.eyebrow}
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            {t.h1}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            {t.intro}
          </p>

          <a
            href={getWhatsappUrl(dict.whatsapp[landingKey])}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full !bg-white px-8 py-4 text-sm font-semibold !text-[#0B1725] transition duration-300 hover:scale-[1.02]"
          >
            {t.cta}
          </a>
        </div>
      </section>

      {/* Content sections */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="space-y-14">
              {t.sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                    {section.title}
                  </h2>
                  <div className="mt-6 space-y-5 text-lg leading-relaxed text-[#667085]">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky highlights + image */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28">
            <div
              role="img"
              aria-label={imgAlt}
              className="min-h-[280px] rounded-[36px] bg-cover bg-center image-soft md:min-h-[340px]"
              style={{ backgroundImage: `url('${midImage[landingKey]}')` }}
            />

            <div className="mt-6 rounded-[32px] border border-[#0B1725]/10 bg-white p-8">
              <h2 className="text-xl font-semibold tracking-[-0.02em]">
                {t.highlightsTitle}
              </h2>
              <ul className="mt-6 space-y-4">
                {t.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-[#667085]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B8DB8]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-[#0B1725] px-10 py-16 text-center text-white">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            {t.ctaTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {t.ctaText}
          </p>
          <a
            href={getWhatsappUrl(dict.whatsapp[landingKey])}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full !bg-white px-8 py-4 text-sm font-semibold !text-[#0B1725] transition duration-300 hover:scale-[1.02]"
          >
            {t.cta}
          </a>
        </div>
      </section>

      {/* Internal links to related lessons */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
            {dict.activitiesPage.lessonsEyebrow}
          </p>
          <h2 className="mb-8 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-[#0B1725] md:text-4xl">
            {dict.activitiesPage.lessonsTitle}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((key) => (
              <Link
                key={key}
                href={localizedPath(key, lang)}
                className="group rounded-[28px] border border-[#0B1725]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#0B1725]">
                  {dict.landing[key].eyebrow}
                </h3>
                <span className="mt-4 inline-block h-px w-12 bg-[#5B8DB8] transition-all duration-300 group-hover:w-20" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
