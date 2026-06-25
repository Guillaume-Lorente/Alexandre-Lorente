'use client';

import Link from 'next/link';
import { useIntl } from '@/app/i18n/IntlProvider';
import { localizedPath } from '@/app/i18n/routing';

const images = [
  'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1974&auto=format&fit=crop',
  '/images/snowboard.webp',
  '/images/freeride.webp',
];

export default function HomeActivities() {
  const { lang, dict } = useIntl();
  const t = dict.homeActivities;
  const href = localizedPath('activities', lang);

  return (
    <section className="bg-[#F8FAFC] pt-20 pb-0">
      <div className="mb-12 px-6">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
            {t.eyebrow}
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.03em] text-[#0B1725] md:text-5xl">
            {t.title}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {t.items.map((activity, index) => (
          <Link
            key={activity.title}
            href={href}
            className="group relative min-h-[460px] overflow-hidden bg-[#0B1725] md:min-h-[560px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${images[index]})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725]/90 via-[#0B1725]/25 to-transparent" />

            <div className="relative z-10 flex h-full min-h-[460px] flex-col justify-end p-8 md:min-h-[560px] md:p-10">
              <h3 className="text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                {activity.title}
              </h3>

              <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
                {activity.desc}
              </p>
              <div className="mt-8 h-px w-16 bg-white/20 transition duration-300 group-hover:w-24 group-hover:bg-white/50" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
