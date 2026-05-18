'use client';

import { useLang } from '@/app/context/LanguageContext';

export default function Experience() {
  const { t } = useLang();

  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center">
        
        {/* Image */}
        <div
          className="min-h-[520px] rounded-[32px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=1974&auto=format&fit=crop')",
          }}
        />

        {/* Text */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#5B8DB8]">
            {t('L’expérience', 'The experience')}
          </p>

          <h2 className="max-w-xl text-4xl font-semibold leading-tight text-[#0B1725] md:text-5xl">
            {t(
              'Chaque journée en montagne est différente',
              'Every day in the mountains is different'
            )}
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#667085]">
            <p>
              {t(
                'Mon objectif est de proposer une expérience adaptée au niveau, aux envies et au rythme de chacun, dans une approche à la fois pédagogique, humaine et tournée vers le plaisir de la glisse.',
                'My goal is to create an experience adapted to each person’s level, goals and rhythm, with an approach focused on pedagogy, confidence and enjoyment.'
              )}
            </p>

            <p>
              {t(
                'Que ce soit pour découvrir le ski, progresser techniquement ou explorer la montagne autrement, chaque session est pensée pour être à la fois rassurante, enrichissante et agréable.',
                'Whether you want to discover skiing, improve your technique or explore the mountains differently, each session is designed to be both enjoyable and rewarding.'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}