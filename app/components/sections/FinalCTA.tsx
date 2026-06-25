'use client';

import { motion } from 'framer-motion';
import { useIntl } from '@/app/i18n/IntlProvider';
import { getWhatsappUrl } from '@/app/lib/contact';

export default function FinalCTA() {
  const { dict } = useIntl();
  const t = dict.finalCta;

  return (
    <section className="relative overflow-hidden bg-[#0B1725] py-32 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35 image-soft"
        style={{ backgroundImage: "url('/images/finalCTA.webp')" }}
      />

      <div className="absolute inset-0 bg-[#0B1725]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725] via-[#0B1725]/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]"
        >
          {t.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.85, delay: 0.08 }}
          className="mx-auto max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl"
        >
          {t.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.85, delay: 0.16 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.85, delay: 0.24 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={getWhatsappUrl(dict.whatsapp.home)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full !bg-white px-9 py-4 text-sm font-semibold !text-[#0B1725] transition duration-300 hover:scale-[1.02] hover:!bg-white/90"
          >
            {t.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
