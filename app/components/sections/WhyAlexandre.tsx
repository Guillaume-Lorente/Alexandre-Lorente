'use client';

import { motion } from 'framer-motion';
import { useIntl } from '@/app/i18n/IntlProvider';

export default function WhyAlexandre() {
  const { dict } = useIntl();
  const t = dict.why;

  return (
    <section className="relative overflow-hidden bg-[#0B1725] py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(91,141,184,0.22),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
              {t.eyebrow}
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              {t.title}
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65">
              {t.intro}
            </p>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {t.reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.75, delay: index * 0.08 }}
                  className="group grid grid-cols-1 gap-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:bg-white/[0.07] md:grid-cols-[80px_1fr]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-semibold text-white/60 transition duration-300 group-hover:text-white">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.02em]">
                      {reason.title}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-relaxed text-white/60">
                      {reason.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
