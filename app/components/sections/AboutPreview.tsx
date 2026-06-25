'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useIntl } from '@/app/i18n/IntlProvider';
import { localizedPath } from '@/app/i18n/routing';

export default function AboutPreview() {
  const { lang, dict } = useIntl();
  const t = dict.aboutPreview;

  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-2 lg:col-span-6"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
              {t.eyebrow}
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-[#0B1725] md:text-6xl">
              {t.title}
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#667085]">
              {t.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {t.badges.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#0B1725]/10 px-4 py-2 text-sm font-medium text-[#0B1725]/70"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              href={localizedPath('about', lang)}
              className="mt-10 inline-flex rounded-full bg-[#0B1725] px-7 py-3.5 text-sm font-semibold !text-white transition duration-300 hover:bg-[#14243a]"
            >
              {t.cta}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.9 }}
            className="relative order-1 lg:order-1 lg:col-span-6"
          >
            <div
              role="img"
              aria-label={dict.alt.portrait}
              className="min-h-[620px] rounded-[44px] bg-cover bg-center image-soft"
              style={{ backgroundImage: "url('/images/alexLorente.webp')" }}
            />

            <div className="absolute -bottom-8 left-8 right-8 rounded-[32px] border border-white/20 bg-[#0B1725]/75 p-7 text-white shadow-2xl backdrop-blur-xl md:left-auto md:max-w-sm">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/45">
                {t.philosophyLabel}
              </p>

              <p className="mt-4 text-xl font-semibold leading-snug">
                {t.philosophy}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
