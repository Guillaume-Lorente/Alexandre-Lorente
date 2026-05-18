'use client';

import { useLang } from '@/app/context/LanguageContext';

const reasons = [
  {
    frTitle: 'Approche personnalisée',
    enTitle: 'Personalized approach',
    frText:
      'Chaque cours est adapté à votre niveau, vos objectifs et votre manière d’apprendre.',
    enText:
      'Every lesson is tailored to your level, goals and way of learning.',
  },
  {
    frTitle: 'Connaissance du domaine',
    enTitle: 'Local mountain knowledge',
    frText:
      'Une approche locale de Tignes et Val d’Isère pour profiter pleinement du domaine.',
    enText:
      'A local approach to Tignes and Val d’Isère to fully enjoy the mountains.',
  },
  {
    frTitle: 'Pédagogie & confiance',
    enTitle: 'Teaching & confidence',
    frText:
      'Une progression dans une ambiance conviviale, rassurante et motivante.',
    enText:
      'Progress in a friendly, supportive and motivating environment.',
  },
];

export default function WhyAlexandre() {
  const { t } = useLang();

  return (
    <section className="bg-[#0B1725] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#5B8DB8]">
            {t('Pourquoi Alexandre', 'Why Alexandre')}
          </p>

          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            {t(
              'Progresser avec confiance, à votre rythme',
              'Progress with confidence, at your own pace'
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8"
            >
              <span className="mb-8 block text-sm text-white/40">
                0{index + 1}
              </span>

              <h3 className="text-2xl font-semibold">
                {t(reason.frTitle, reason.enTitle)}
              </h3>

              <p className="mt-5 leading-relaxed text-white/70">
                {t(reason.frText, reason.enText)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}