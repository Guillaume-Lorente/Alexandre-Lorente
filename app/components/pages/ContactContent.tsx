'use client';

import Navbar from '../layout/Navbar';
import { useIntl } from '@/app/i18n/IntlProvider';
import { getSmsUrl, getWhatsappUrl } from '@/app/lib/contact';

export default function ContactContent() {
  const { dict } = useIntl();
  const t = dict.contactPage;

  return (
    <main className="min-h-screen bg-[#0B1725] text-white">
      <Navbar />

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-12 pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80 image-soft"
          style={{ backgroundImage: "url('/images/montagne3.webp')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725] via-[#0B1725]/85 to-[#0B1725]/40" />

        <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
              {t.eyebrow}
            </p>

            <h1 className="mt-6 max-w-2xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              {t.title}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
              {t.intro}
            </p>
          </div>

          <div className="rounded-[40px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl md:p-8">
            <div className="grid grid-cols-1 gap-4">
              <a
                href={getWhatsappUrl(dict.whatsapp.contact)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[28px] bg-[#25D366] px-8 py-7 !text-white transition duration-300 hover:scale-[1.01] hover:bg-[#20bd5c]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  WhatsApp
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  {t.whatsappTitle}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {t.whatsappText}
                </p>
              </a>

              <a
                href={getSmsUrl(dict.whatsapp.contact)}
                className="rounded-[28px] border border-white/10 bg-[#0B1725]/80 px-8 py-7 !text-white transition duration-300 hover:scale-[1.01]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5B8DB8]">
                  SMS
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  {t.smsTitle}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {t.smsText}
                </p>
              </a>
            </div>

            <p className="mt-6 text-center text-sm leading-relaxed text-white/55">
              {t.note}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
