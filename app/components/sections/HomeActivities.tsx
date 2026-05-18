'use client';

import Link from 'next/link';
import { useLang } from '@/app/context/LanguageContext';

const activities = [
  {
    titleFr: 'Ski privé',
    titleEn: 'Private Ski',
    descFr:
      'Progression, confiance et plaisir sur les pistes.',
    descEn:
      'Improve your technique and confidence on the slopes.',
    image:
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1974&auto=format&fit=crop',
  },
  {
    titleFr: 'Snowboard',
    titleEn: 'Snowboard',
    descFr:
      'Des premières descentes au perfectionnement.',
    descEn:
      'From first turns to advanced riding.',
    image:
      'https://images.unsplash.com/photo-1517825738774-7de9363ef735?q=80&w=1974&auto=format&fit=crop',
  },
  {
    titleFr: 'Freeride & montagne',
    titleEn: 'Freeride & Mountain',
    descFr:
      'Explorer la montagne autrement.',
    descEn:
      'Experience the mountains differently.',
    image:
      'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function HomeActivities() {
  const { t } = useLang();

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-14">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#5B8DB8]">
            {t('Activités', 'Activities')}
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-[#0B1725] md:text-5xl">
            {t(
              'Des expériences adaptées à tous les niveaux',
              'Experiences tailored to every level'
            )}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {activities.map((activity, index) => (
            <Link
              key={index}
              href="/activites"
              className="group relative flex min-h-[500px] overflow-hidden rounded-[32px]"
            >
              
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${activity.image})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="relative z-10 mt-auto p-8">
                
                <h3 className="text-3xl font-semibold text-white">
                  {t(activity.titleFr, activity.titleEn)}
                </h3>

                <p className="mt-4 max-w-sm text-white/80">
                  {t(activity.descFr, activity.descEn)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}