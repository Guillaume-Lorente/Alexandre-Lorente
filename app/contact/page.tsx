'use client';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useLang } from '../context/LanguageContext';
import { getSmsUrl, getWhatsappUrl } from '../lib/contact';

export default function ContactPage() {
  const { t } = useLang();

  const message = t(
    'Bonjour Alexandre, je souhaite avoir des informations pour réserver une session à Tignes / Val d’Isère.',
    'Hi Alexandre, I would like more information about booking a session in Tignes / Val d’Isère.'
  );

  return (
    <main className="min-h-screen bg-[#0B1725] text-white">
      <Navbar />

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-12 pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 image-soft"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725] via-[#0B1725]/85 to-[#0B1725]/40" />

        <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
              {t('Contact', 'Contact')}
            </p>

            <h1 className="mt-6 max-w-2xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              {t(
                'Organiser une session simplement',
                'Plan a session easily'
              )}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
              {t(
                'Écrivez-moi directement par WhatsApp ou SMS pour échanger sur votre niveau, vos envies et les conditions du moment.',
                'Message me directly on WhatsApp or SMS to discuss your level, goals and current conditions.'
              )}
            </p>
          </div>

          <div className="rounded-[40px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl md:p-8">
            <div className="grid grid-cols-1 gap-4">
              <a
  href={getWhatsappUrl(message)}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-[28px] bg-[#25D366] px-8 py-7 !text-white transition duration-300 hover:scale-[1.01] hover:bg-[#20bd5c]"
>
  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
    WhatsApp
  </p>

  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
    {t('Envoyer un message', 'Send a message')}
  </h2>

  <p className="mt-3 text-sm leading-relaxed text-white/80">
    {t(
      'Le moyen le plus simple et le plus rapide.',
      'The easiest and fastest way.'
    )}
  </p>
</a>

              <a
                href={getSmsUrl(message)}
                className="rounded-[28px] border border-white/10 bg-[#0B1725]/80 px-8 py-7 !text-white transition duration-300 hover:scale-[1.01]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5B8DB8]">
                  SMS
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  {t('Envoyer un SMS', 'Send an SMS')}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {t(
                    'Une alternative simple si vous préférez écrire directement.',
                    'A simple alternative if you prefer to write directly.'
                  )}
                </p>
              </a>
            </div>

            <p className="mt-6 text-center text-sm leading-relaxed text-white/55">
              {t(
                'Réponse dès que possible selon les cours et les conditions en montagne.',
                'Reply as soon as possible depending on lessons and mountain conditions.'
              )}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}