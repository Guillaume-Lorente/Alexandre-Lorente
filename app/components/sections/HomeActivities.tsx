'use client';

import Link from 'next/link';
import { useLang } from '@/app/context/LanguageContext';

const activities = [
  {
    titleFr: 'Ski',
    titleEn: 'Skiing',
    descFr: 'Cours privés, progression technique et plaisir sur les pistes.',
    descEn: 'Private lessons, technical progress and confidence on the slopes.',
    image:
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1974&auto=format&fit=crop',
  },
  {
    titleFr: 'Snowboard',
    titleEn: 'Snowboarding',
    descFr: 'Du débutant au rider confirmé, avec une approche progressive.',
    descEn: 'From beginner to advanced rider, with a progressive approach.',
    image:
      'https://images.unsplash.com/photo-1517825738774-7de9363ef735?q=80&w=1974&auto=format&fit=crop',
  },
  {
    titleFr: 'Autres',
    titleEn: 'More',
    descFr: 'Freeride, freestyle et ski de randonnée selon les conditions.',
    descEn: 'Freeride, freestyle and ski touring depending on conditions.',
    image:
      'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function HomeActivities() {
  const { t } = useLang();

  return (
    <section className="bg-[#F8FAFC] pt-20 pb-0">
      <div className="mb-12 px-6">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
            {t('Activités', 'Activities')}
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.03em] text-[#0B1725] md:text-5xl">
            {t(
              'Ski, snowboard et expériences en montagne',
              'Ski, snowboard and mountain experiences'
            )}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {activities.map((activity) => (
          <Link
            key={activity.titleFr}
            href="/activites"
            className="group relative min-h-[460px] overflow-hidden bg-[#0B1725] md:min-h-[560px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${activity.image})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725]/90 via-[#0B1725]/25 to-transparent" />

            <div className="relative z-10 flex h-full min-h-[460px] flex-col justify-end p-8 md:min-h-[560px] md:p-10">
              <h3 className="text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                {t(activity.titleFr, activity.titleEn)}
              </h3>

              <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
                {t(activity.descFr, activity.descEn)}
              </p>
<div className="mt-8 h-px w-16 bg-white/20 transition duration-300 group-hover:w-24 group-hover:bg-white/50" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}