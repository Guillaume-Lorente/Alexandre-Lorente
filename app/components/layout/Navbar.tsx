'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useIntl } from '@/app/i18n/IntlProvider';
import { localizedPath, switchLocaleHref } from '@/app/i18n/routing';

export default function Navbar() {
  const { lang, dict } = useIntl();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = currentScrollY - lastScrollY;

          setIsScrolled(currentScrollY > 40);

          if (currentScrollY < 120) {
            setIsHidden(false);
          } else if (scrollDifference > 4) {
            setIsHidden(true);
          } else if (scrollDifference < -4) {
            setIsHidden(false);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: localizedPath('activities', lang), label: dict.nav.activities },
    { href: localizedPath('about', lang), label: dict.nav.about },
    { href: localizedPath('contact', lang), label: dict.nav.contact },
  ];

  const homeHref = localizedPath('home', lang);
  const contactHref = localizedPath('contact', lang);
  const otherLocale = lang === 'fr' ? 'en' : 'fr';
  const switchHref = switchLocaleHref(pathname, otherLocale);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed left-0 top-4 z-50 w-full px-4 transition-all duration-700 ease-out ${
        isHidden ? '-translate-y-32 opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full glass-dark px-5 py-3 backdrop-blur-xl transition-all duration-500 md:px-6 ${
          isScrolled
            ? 'border-white/10 bg-[#0B1725]/85 shadow-2xl'
            : 'border-white/5 bg-[#0B1725]/35 shadow-none'
        }`}
      >
        <Link
          href={homeHref}
          onClick={closeMenu}
          className="!text-white text-base font-semibold tracking-wide transition hover:opacity-80 md:text-lg"
        >
          Alexandre Lorente
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                isActive(link.href)
                  ? '!bg-white/10 !text-white'
                  : '!text-white/65 hover:!bg-white/5 hover:!text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            href={switchHref}
            hrefLang={otherLocale}
            className="!text-white text-sm font-semibold transition duration-300 hover:!text-white/70"
          >
            {dict.nav.switchLanguage}
          </Link>

          <Link
            href={contactHref}
            className="rounded-full !bg-white px-5 py-2.5 text-sm font-semibold !text-[#0B1725] transition duration-300 hover:scale-[1.02] hover:!bg-white/90"
          >
            {dict.nav.cta}
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 !text-white transition hover:bg-white/10 md:hidden"
          aria-label={dict.nav.openMenu}
        >
          <span className="text-xl leading-none">{isOpen ? '×' : '☰'}</span>
        </button>
      </div>

      <div
        className={`mx-auto mt-3 max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0B1725]/95 !text-white shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? 'max-h-[420px] translate-y-0 opacity-100'
            : 'max-h-0 -translate-y-2 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-3 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              onClick={closeMenu}
              href={link.href}
              className={`rounded-2xl px-4 py-3 text-lg font-medium transition ${
                isActive(link.href)
                  ? '!bg-white/10 !text-white'
                  : '!text-white/75 hover:!bg-white/5 hover:!text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            onClick={closeMenu}
            href={switchHref}
            hrefLang={otherLocale}
            className="mt-2 w-fit px-4 py-2 !text-white/70 text-sm font-semibold"
          >
            {dict.nav.switchLanguage}
          </Link>

          <Link
            onClick={closeMenu}
            href={contactHref}
            className="mt-2 rounded-full !bg-white px-5 py-3 text-center text-sm font-semibold !text-[#0B1725]"
          >
            {dict.nav.ctaLong}
          </Link>
        </nav>
      </div>
    </header>
  );
}
