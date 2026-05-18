'use client';

import Link from 'next/link';
import { useLang } from '@/app/context/LanguageContext';

export default function AboutPreview() {
  const { t } = useLang();

  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center">
        
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#5B8DB8]">
            {t('À propos', 'About')}
          </p>

          <h2 className="max-w-xl text-4xl font-semibold leading-tight text-[#0B1725] md:text-5xl">
            {t(
              'Transmettre le plaisir de la montagne',
              'Sharing the pleasure of the mountains'
            )}
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#667085]">
            <p>
              {t(
                'Passionné par la montagne et les sports de glisse depuis toujours, je vis en montagne depuis l’enfance et j’enseigne aujourd’hui le ski et le snowboard à Tignes et Val d’Isère.',
                'Passionate about the mountains and snow sports from an early age, I have lived in the mountains since childhood and now teach skiing and snowboarding in Tignes and Val d’Isère.'
              )}
            </p>

            <p>
              {t(
                'Ce que j’aime avant tout, c’est transmettre, faire progresser et partager le plaisir de la montagne dans une ambiance conviviale et personnalisée.',
                'What I enjoy most is helping people improve while sharing the pleasure of being in the mountains in a friendly and personalized environment.'
              )}
            </p>
          </div>

          <Link
            href="/a-propos"
            className="mt-10 inline-flex rounded-full bg-[#0B1725] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#14243a]"
          >
            {t('En savoir plus', 'Learn more')}
          </Link>
        </div>

        <div
          className="min-h-[540px] rounded-[32px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1974&auto=format&fit=crop')",
          }}
        />
      </div>
    </section>
  );
}