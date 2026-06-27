'use client';

import Link from 'next/link';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { useIntl } from '@/app/i18n/IntlProvider';
import { getWhatsappUrl } from '@/app/lib/contact';
import { localizedPath, landingKeys } from '@/app/i18n/routing';

export default function ActivitiesContent() {
  const { lang, dict } = useIntl();
  const t = dict.activitiesPage;

  return (
    <main className="bg-[#F8FAFC] text-[#0B1725]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1725] px-6 pb-24 pt-44 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80 image-soft"
          style={{ backgroundImage: "url('/images/montagne.webp')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725] via-[#0B1725]/80 to-[#0B1725]/40" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
            {t.eyebrow}
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            {t.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            {t.intro}
          </p>
        </div>
      </section>

      {/* Sticky activities nav */}
      <section className="sticky top-24 z-30 bg-[#F8FAFC]/80 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl overflow-x-auto">
          <div className="flex min-w-max gap-3">
            {[
              [t.nav.ski, '#ski'],
              [t.nav.snowboard, '#snowboard'],
              [t.nav.freeride, '#freeride'],
              [t.nav.freestyle, '#freestyle'],
              [t.nav.touring, '#randonnee'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-[#0B1725]/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#0B1725]/70 transition duration-300 hover:bg-[#0B1725] hover:!text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl space-y-24">
          {/* Ski */}
          <div id="ski" className="grid items-center gap-10 lg:grid-cols-2">
            <div
              role="img"
              aria-label={dict.alt.ski}
              className="min-h-[45vh] rounded-[40px] bg-cover bg-center image-soft md:min-h-[360px]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1974&auto=format&fit=crop')",
              }}
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
                01 · {t.ski.label}
              </p>

              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em]">
                {t.ski.title}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#667085]">
                {t.ski.text}
              </p>
            </div>
          </div>

          {/* Snowboard */}
          <div id="snowboard" className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
                02 · {t.snowboard.label}
              </p>

              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em]">
                {t.snowboard.title}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#667085]">
                {t.snowboard.text}
              </p>
            </div>

            <div
              role="img"
              aria-label={dict.alt.snowboard}
              className="order-1 min-h-[45vh] rounded-[40px] bg-cover bg-center image-soft md:min-h-[360px] lg:order-2"
              style={{ backgroundImage: "url('/images/snowboard.webp')" }}
            />
          </div>

          {/* Immersive image */}
          <div
            className="relative min-h-[360px] overflow-hidden rounded-[48px] bg-cover bg-center image-soft md:min-h-[420px]"
            style={{ backgroundImage: "url('/images/freeride3.webp')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725]/85 via-[#0B1725]/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 max-w-2xl text-white md:bottom-10 md:left-10 md:right-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
                {t.immersive.eyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] md:mt-5 md:text-5xl">
                {t.immersive.title}
              </h2>
            </div>
          </div>

          {/* Freeride */}
          <div id="freeride" className="grid items-center gap-10 lg:grid-cols-2">
            <div
              role="img"
              aria-label={dict.alt.freeride}
              className="min-h-[45vh] rounded-[40px] bg-cover bg-center image-soft md:min-h-[360px]"
              style={{ backgroundImage: "url('/images/freeride2.webp')" }}
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
                03 · {t.freeride.label}
              </p>

              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em]">
                {t.freeride.title}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#667085]">
                {t.freeride.text}
              </p>
            </div>
          </div>

          {/* Freestyle */}
          <div id="freestyle" className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
                04 · {t.freestyle.label}
              </p>

              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em]">
                {t.freestyle.title}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#667085]">
                {t.freestyle.text}
              </p>
            </div>

            <div
              role="img"
              aria-label={dict.alt.freestyle}
              className="order-1 min-h-[45vh] rounded-[40px] bg-cover bg-center image-soft md:min-h-[360px] lg:order-2"
              style={{ backgroundImage: "url('/images/freestyle.webp')" }}
            />
          </div>

          {/* Ski touring */}
          <div
            id="randonnee"
            className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-cover bg-center image-soft md:min-h-[540px] md:rounded-[48px]"
            style={{ backgroundImage: "url('/images/skiRandonnee.webp')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725]/90 via-[#0B1725]/35 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 max-w-3xl text-white md:bottom-10 md:left-10 md:right-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5B8DB8] md:tracking-[0.28em]">
                05 · {t.touring.label}
              </p>

              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] md:mt-5 md:text-5xl">
                {t.touring.title}
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:mt-8 md:text-lg">
                {t.touring.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons by resort & activity (internal links to landing pages) */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
            {t.lessonsEyebrow}
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            {t.lessonsTitle}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {landingKeys.map((key) => (
              <Link
                key={key}
                href={localizedPath(key, lang)}
                className="group flex min-h-[160px] flex-col justify-between rounded-[28px] border border-[#0B1725]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#0B1725]">
                  {dict.landing[key].h1}
                </h3>
                <span className="mt-6 inline-block h-px w-12 bg-[#5B8DB8] transition-all duration-300 group-hover:w-20" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final block */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-[#0B1725] px-10 py-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
            {t.final.eyebrow}
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            {t.final.title}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            {t.final.text}
          </p>

          <a
            href={getWhatsappUrl(dict.whatsapp.activities)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full !bg-white px-8 py-4 text-sm font-semibold !text-[#0B1725] transition duration-300 hover:scale-[1.02]"
          >
            {t.final.cta}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
