import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import { locales, isLocale, htmlLang, ogLocale, SITE_URL } from '../i18n/config';
import { getDictionary } from '../i18n/dictionaries';
import { ogImages } from '../i18n/routing';
import { IntlProvider } from '../i18n/IntlProvider';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = await getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.home.title,
      template: '%s · Alexandre Lorente',
    },
    description: dict.meta.home.description,
    applicationName: 'Alexandre Lorente',
    authors: [{ name: 'Alexandre Lorente' }],
    creator: 'Alexandre Lorente',
    openGraph: {
      type: 'website',
      siteName: 'Alexandre Lorente',
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      images: ogImages(lang),
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      images: ogImages(lang),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <html lang={htmlLang[lang]}>
      <body className={inter.className}>
        <IntlProvider lang={lang} dict={dict}>
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}

// Only pre-render the supported locales; anything else 404s.
export const dynamicParams = false;
