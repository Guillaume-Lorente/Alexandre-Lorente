'use client';

import Link from 'next/link';
import { useLang } from '@/app/context/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-white"
        >
          Alexandre Lorente
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/activites"
            className="text-sm text-white/90 transition hover:text-white"
          >
            {t('Activités', 'Activities')}
          </Link>

          <Link
            href="/a-propos"
            className="text-sm text-white/90 transition hover:text-white"
          >
            {t('À propos', 'About')}
          </Link>

          <Link
            href="/contact"
            className="text-sm text-white/90 transition hover:text-white"
          >
            {t('Contact', 'Contact')}
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          
          {/* Language switch */}
          <button
            onClick={() =>
              setLang(lang === 'fr' ? 'en' : 'fr')
            }
            className="text-sm font-medium text-white/90 transition hover:text-white"
          >
            {lang === 'fr' ? 'FR / EN' : 'EN / FR'}
          </button>

          {/* CTA */}
          <Link
            href="/contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#0B1725] transition hover:bg-white/90"
          >
            {t('Contacter', 'Contact')}
          </Link>
        </div>
      </div>
    </header>
  );
}