'use client';

import Link from 'next/link';
import { useIntl } from '@/app/i18n/IntlProvider';
import { localizedPath, landingKeys } from '@/app/i18n/routing';
import { SOCIAL } from '@/app/i18n/config';

export default function Footer() {
  const { lang, dict } = useIntl();

  return (
    <footer className="bg-[#08111f] py-12 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold">Alexandre Lorente</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
            {dict.footer.tagline}
          </p>
          <a
            href={SOCIAL.evolution2}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-[#5B8DB8] transition hover:text-white"
          >
            {dict.footer.profile} →
          </a>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
            {dict.footer.navTitle}
          </p>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            <Link href={localizedPath('activities', lang)}>{dict.nav.activities}</Link>
            <Link href={localizedPath('about', lang)}>{dict.nav.about}</Link>
            <Link href={localizedPath('contact', lang)}>{dict.nav.contact}</Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
            {dict.footer.coursesTitle}
          </p>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            {landingKeys.map((key) => (
              <Link key={key} href={localizedPath(key, lang)}>
                {dict.landing[key].eyebrow}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-white/50">{dict.footer.languages}</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-6 text-sm text-white/35">
        © {new Date().getFullYear()} Alexandre Lorente. {dict.footer.rights}
      </div>
    </footer>
  );
}
