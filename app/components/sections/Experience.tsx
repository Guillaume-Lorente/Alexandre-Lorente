'use client';

import { motion } from 'framer-motion';
import { useIntl } from '@/app/i18n/IntlProvider';

export default function Experience() {
  const { dict } = useIntl();
  const t = dict.experience;

  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
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

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#0B1725] md:text-6xl">
              {t.title}
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#667085]">
              {t.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.9 }}
            className="relative lg:col-span-7"
          >
            <div
              className="min-h-[620px] rounded-[44px] bg-cover bg-center image-soft"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=1974&auto=format&fit=crop')",
              }}
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-[30px] border border-white/20 bg-[#0B1725]/75 p-6 text-white backdrop-blur-xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/50">
                {t.approachLabel}
              </p>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {t.approach.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4"
                  >
                    <p className="text-sm font-semibold text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
