'use client';

import Link from 'next/link';
import Navbar from '../layout/Navbar';
import { useLang } from '@/app/context/LanguageContext';

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-black">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 pb-20">
        
        <div className="mb-6 w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
          <p className="text-sm text-white/90">
            {t(
              'Moniteur chez Évolution 2 · Tignes & Val d’Isère',
              'Instructor at Evolution 2 · Tignes & Val d’Isère'
            )}
          </p>
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">
          {t(
            'Moniteur de ski & snowboard à Tignes et Val d’Isère',
            'Ski & snowboard instructor in Tignes & Val d’Isère'
          )}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          {t(
            'Cours privés de ski, snowboard, freeride et ski de randonnée adaptés à tous les niveaux.',
            'Private ski, snowboard, freeride and ski touring lessons tailored to all levels.'
          )}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          
          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-4 text-center text-sm font-medium text-[#0B1725] transition hover:bg-white/90"
          >
            {t('Contacter Alexandre', 'Contact Alexandre')}
          </Link>

          <Link
            href="/activites"
            className="rounded-full border border-white/30 px-8 py-4 text-center text-sm font-medium text-white transition hover:bg-white/10"
          >
            {t(
              'Découvrir les activités',
              'Discover activities'
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}