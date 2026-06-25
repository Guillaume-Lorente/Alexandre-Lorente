'use client';

import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { useIntl } from '@/app/i18n/IntlProvider';
import { getWhatsappUrl } from '@/app/lib/contact';

export default function AboutContent() {
  const { dict } = useIntl();
  const t = dict.aboutPage;

  return (
    <main className="bg-[#F8FAFC] text-[#0B1725]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1725] px-6 pb-28 pt-44 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80 image-soft"
          style={{ backgroundImage: "url('/images/montagne2.webp')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725] via-[#0B1725]/80 to-[#0B1725]/30" />

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

      {/* Quote */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[40px] bg-[#F8FAFC] p-10 md:p-16">
            <p className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#0B1725] md:text-5xl">
              “{t.quote}”
            </p>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-[#5B8DB8]">
              Alexandre Lorente
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white px-6 pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div
              role="img"
              aria-label={dict.alt.portrait}
              className="min-h-[55vh] rounded-[44px] bg-cover bg-center image-soft md:min-h-[680px]"
              style={{ backgroundImage: "url('/images/alexLorente.webp')" }}
            />
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
              {t.storyEyebrow}
            </p>

            <div className="mt-8 space-y-8 text-lg leading-relaxed text-[#667085]">
              {t.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Immersive block */}
      <section className="px-6 pb-28">
        <div
          className="relative overflow-hidden rounded-[48px] bg-cover bg-center image-soft"
          style={{ backgroundImage: "url('/images/freeride.webp')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725]/90 via-[#0B1725]/30 to-transparent" />

          <div className="relative flex min-h-[520px] items-end p-8 md:min-h-[680px] md:p-14">
            <div className="max-w-3xl text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
                {t.immersiveEyebrow}
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
                {t.immersiveTitle}
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
                {t.immersiveText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching */}
      <section className="bg-[#0B1725] px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
              {t.teachingEyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              {t.teachingTitle}
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {t.teaching.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8"
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p className="mt-5 leading-relaxed text-white/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution 2 */}
      <section className="bg-white px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
            Évolution 2
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            {t.evolutionTitle}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[#667085]">
            {t.evolutionText}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-5xl rounded-[44px] bg-[#0B1725] px-10 py-20 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
            {t.ctaEyebrow}
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            {t.ctaTitle}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            {t.ctaText}
          </p>

          <a
            href={getWhatsappUrl(dict.whatsapp.about)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full !bg-white px-8 py-4 text-sm font-semibold !text-[#0B1725] transition duration-300 hover:scale-[1.02]"
          >
            {t.cta}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
