import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLocale, isLocale, type Locale } from './app/i18n/config';

const LOCALE_COOKIE = 'NEXT_LOCALE';

// Parse the Accept-Language header and return the best supported locale.
function localeFromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;

  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=');
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split('-')[0];
    if (isLocale(base)) return base;
  }
  return null;
}

function detectLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && isLocale(cookie)) return cookie;
  return localeFromAcceptLanguage(request.headers.get('accept-language')) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already prefixed with a supported locale -> let it through, but keep the
  // cookie in sync so the choice persists across visits.
  const segments = pathname.split('/');
  const first = segments[1];
  if (isLocale(first)) {
    const response = NextResponse.next();
    if (request.cookies.get(LOCALE_COOKIE)?.value !== first) {
      response.cookies.set(LOCALE_COOKIE, first, { path: '/', maxAge: 60 * 60 * 24 * 365 });
    }
    return response;
  }

  // No locale prefix -> redirect to the detected locale, preserving the path.
  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  const response = NextResponse.redirect(url);
  response.cookies.set(LOCALE_COOKIE, locale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
  return response;
}

export const config = {
  // Run on everything except Next internals, static assets and files with an
  // extension (images, videos, robots.txt, sitemap.xml, etc.).
  matcher: ['/((?!_next|.*\\..*).*)'],
};
