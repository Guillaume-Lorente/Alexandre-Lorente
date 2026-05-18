'use client';

import Link from 'next/link';
import { useLang } from '@/app/context/LanguageContext';

export default function FinalCTA() {
  const { t } = useLang();

  return (
    <section className="bg-[#0B1725] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#5B8DB8]">
          {t('Réserver', 'Book')}
        </p>

        <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
          {t(
            'Prêt à découvrir Tignes & Val d’Isère autrement ?',
            'Ready to experience Tignes & Val d’Isère differently?'
          )}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          {t(
            'Contactez-moi directement pour organiser une session adaptée à votre niveau, vos envies et les conditions du moment.',
            'Contact me directly to organize a session adapted to your level, goals and current conditions.'
          )}
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-[#0B1725] transition hover:bg-white/90"
        >
          {t('Contacter Alexandre', 'Contact Alexandre')}
        </Link>
      </div>
    </section>
  );
}