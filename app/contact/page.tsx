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
    <main>
      <section className="relative bg-[#0B1725] px-6 pb-24 pt-40 text-white">
        <Navbar />

        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#5B8DB8]">
            Contact
          </p>

          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            {t(
              'Organiser une session avec Alexandre',
              'Plan a session with Alexandre'
            )}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {t(
              'Le plus simple est de me contacter directement par WhatsApp ou SMS pour échanger sur votre niveau, vos envies et les conditions du moment.',
              'The easiest way is to contact me directly by WhatsApp or SMS to discuss your level, goals and current conditions.'
            )}
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
          <a
            href={getWhatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[32px] bg-[#25D366] p-10 text-white transition hover:scale-[1.01]"
          >
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
              WhatsApp
            </p>

            <h2 className="text-3xl font-semibold">
              {t('Envoyer un message', 'Send a message')}
            </h2>

            <p className="mt-5 leading-relaxed text-white/85">
              {t(
                'Idéal pour une réponse simple et rapide.',
                'Ideal for a simple and quick reply.'
              )}
            </p>
          </a>

          <a
            href={getSmsUrl(message)}
            className="rounded-[32px] bg-[#0B1725] p-10 text-white transition hover:scale-[1.01]"
          >
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-white/50">
              SMS
            </p>

            <h2 className="text-3xl font-semibold">
              {t('Envoyer un SMS', 'Send an SMS')}
            </h2>

            <p className="mt-5 leading-relaxed text-white/70">
              {t(
                'Une alternative rapide si vous préférez écrire directement.',
                'A quick alternative if you prefer to write directly.'
              )}
            </p>
          </a>
        </div>

        <div className="mx-auto mt-12 max-w-3xl px-6 text-center">
          <p className="text-[#667085]">
            {t(
              'Alexandre répond généralement dès que possible, selon les cours et les conditions en montagne.',
              'Alexandre usually replies as soon as possible, depending on lessons and mountain conditions.'
            )}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}