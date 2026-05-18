'use client';

import Link from 'next/link';
import { useLang } from '@/app/context/LanguageContext';
import { PHONE_DISPLAY } from '@/app/lib/contact';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#08111f] py-12 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">Alexandre Lorente</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
            {t(
              'Moniteur ski & snowboard à Tignes et Val d’Isère.',
              'Ski & snowboard instructor in Tignes and Val d’Isère.'
            )}
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
            Navigation
          </p>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            <Link href="/activites">{t('Activités', 'Activities')}</Link>
            <Link href="/a-propos">{t('À propos', 'About')}</Link>
            <Link href="/contact">{t('Contact', 'Contact')}</Link>
          </div>
        </div>

        <div>
          <p className="mt-3 text-sm text-white/50">
            Français · English
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-6 text-sm text-white/35">
        © {new Date().getFullYear()} Alexandre Lorente. Tous droits réservés.
      </div>
    </footer>
  );
}