'use client';

import { useLang } from '@/app/context/LanguageContext';

export default function TrustBar() {
  const { t } = useLang();

  const items = [
    {
      fr: 'Moniteur chez Évolution 2',
      en: 'Instructor at Evolution 2',
    },
    {
      fr: 'Tignes & Val d’Isère',
      en: 'Tignes & Val d’Isère',
    },
    {
      fr: 'Ski & Snowboard',
      en: 'Ski & Snowboarding',
    },
    {
      fr: 'Cours privés personnalisés',
      en: 'Personalized private lessons',
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 md:grid-cols-4">
        
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-black/5 bg-[#F8FAFC] px-6 py-8 text-center"
          >
            <p className="text-sm font-medium text-[#0B1725]">
              {t(item.fr, item.en)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}