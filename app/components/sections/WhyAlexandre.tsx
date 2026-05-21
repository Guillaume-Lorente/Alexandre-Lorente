'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/app/context/LanguageContext';

export default function WhyAlexandre() {
  const { t } = useLang();

  const reasons = [
    {
      titleFr: 'Une pédagogie claire',
      titleEn: 'Clear teaching',
      textFr:
        'Des conseils simples, précis et adaptés pour comprendre, progresser et prendre confiance.',
      textEn:
        'Simple, precise and adapted guidance to understand, improve and build confidence.',
    },
    {
      titleFr: 'Un rythme adapté',
      titleEn: 'Your own pace',
      textFr:
        'Chaque session s’ajuste à votre niveau, vos sensations et vos objectifs du moment.',
      textEn:
        'Each session adapts to your level, your feelings and your goals for the day.',
    },
    {
      titleFr: 'Une vraie culture montagne',
      titleEn: 'Real mountain culture',
      textFr:
        'Une approche ancrée dans l’environnement alpin, entre plaisir, sécurité et découverte.',
      textEn:
        'An approach rooted in the alpine environment, combining enjoyment, safety and discovery.',
    },
  ];

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
              {t('Pourquoi Alexandre', 'Why Alexandre')}
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              {t(
                'Progresser sans pression, avec confiance',
                'Progress without pressure, with confidence'
              )}
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65">
              {t(
                'L’idée n’est pas seulement d’enchaîner les descentes, mais de construire une expérience où chaque conseil aide vraiment à se sentir mieux sur la neige.',
                'The idea is not just to ski more runs, but to build an experience where each piece of advice truly helps you feel better on snow.'
              )}
            </p>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.titleFr}
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
                      {t(reason.titleFr, reason.titleEn)}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-relaxed text-white/60">
                      {t(reason.textFr, reason.textEn)}
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