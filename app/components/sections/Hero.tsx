'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useIntl } from '@/app/i18n/IntlProvider';
import { localizedPath } from '@/app/i18n/routing';
import { getWhatsappUrl } from '@/app/lib/contact';

export default function Hero() {
  const { lang, dict } = useIntl();
  const t = dict.hero;

  return (
    <section className="relative flex min-h-screen overflow-hidden bg-[#0B1725]">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/montagne.webp"
        aria-label={dict.alt.hero}
        className="absolute inset-0 h-full w-full object-cover image-soft"
      >
        <source src="/videos/Hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#0B1725]/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1725]/90 via-[#0B1725]/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725]/75 via-transparent to-[#0B1725]/35" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-end px-6 pb-20 pt-44 md:pb-24">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2 }}
            className="max-w-5xl text-5xl font-semibold tracking-[-0.04em] text-white md:text-7xl lg:text-8xl"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={getWhatsappUrl(dict.whatsapp.home)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-[#0B1725] transition duration-300 hover:scale-[1.02] hover:bg-white/90"
            >
              {t.bookCta}
            </a>

            <Link
              href={localizedPath('activities', lang)}
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-center text-sm font-semibold text-white/80 backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              {t.discoverCta}
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 3 }}
        className="absolute bottom-10 right-10 z-10 hidden max-w-xs rounded-[28px] border border-white/20 bg-[#0B1725]/75 p-6 text-white shadow-2xl backdrop-blur-xl lg:block"
      >
        <p className="text-sm font-medium text-white">{t.badgeTitle}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {t.badges.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-white/45 md:flex">
        <span>{t.explore}</span>
        <span className="h-px w-12 bg-white/25" />
      </div>
    </section>
  );
}
