'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/app/context/LanguageContext';

export default function Experience() {
  const { t } = useLang();

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
              {t('L’expérience', 'The experience')}
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#0B1725] md:text-6xl">
              {t(
                'Une montagne, plusieurs façons de la vivre',
                'One mountain, many ways to experience it'
              )}
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#667085]">
              <p>
                {t(
                  'Chaque session est pensée comme un moment sur mesure : progresser, prendre confiance, découvrir un terrain ou simplement profiter d’une belle journée en montagne.',
                  'Each session is designed as a tailored moment: to progress, build confidence, discover new terrain or simply enjoy a beautiful day in the mountains.'
                )}
              </p>

              <p>
                {t(
                  'L’objectif est de vous accompagner avec pédagogie, calme et précision, en adaptant le rythme aux conditions, à votre niveau et à vos envies.',
                  'The goal is to guide you with calm, precise and supportive teaching, adapting the pace to the conditions, your level and your goals.'
                )}
              </p>
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
                {t('Approche', 'Approach')}
              </p>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  t('Pédagogie', 'Teaching'),
                  t('Confiance', 'Confidence'),
                  t('Plaisir', 'Enjoyment'),
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4"
                  >
                    <p className="text-sm font-semibold text-white/90">
                      {item}
                    </p>
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