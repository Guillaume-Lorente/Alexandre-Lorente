'use client';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { getWhatsappUrl } from '../lib/contact';
import { useLang } from '../context/LanguageContext';

export default function ActivitiesPage() {
  const { t } = useLang();

  const whatsappMessage = t(
    'Bonjour Alexandre, je souhaite avoir des informations concernant les activités proposées à Tignes / Val d’Isère.',
    'Hi Alexandre, I would like more information about the activities offered in Tignes / Val d’Isère.'
  );

  return (
    <main className="bg-[#F8FAFC] text-[#0B1725]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1725] px-6 pb-24 pt-44 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 image-soft"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725] via-[#0B1725]/80 to-[#0B1725]/40" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
            {t('Activités', 'Activities')}
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            {t(
              'Ski, snowboard & expériences en montagne',
              'Ski, snowboard & mountain experiences'
            )}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            {t(
              'Chaque session est pensée selon votre niveau, vos objectifs et les conditions du moment pour créer une expérience sur mesure à Tignes et Val d’Isère.',
              'Each session is designed around your level, goals and the current conditions to create a tailored experience in Tignes and Val d’Isère.'
            )}
          </p>
        </div>
      </section>

      {/* Sticky activities nav */}
      <section className="sticky top-24 z-30 bg-[#F8FAFC]/80 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl overflow-x-auto">
          <div className="flex min-w-max gap-3">
            {[
              [t('Ski', 'Ski'), '#ski'],
              [t('Snowboard', 'Snowboard'), '#snowboard'],
              [t('Freeride', 'Freeride'), '#freeride'],
              [t('Freestyle', 'Freestyle'), '#freestyle'],
              [t('Ski de randonnée', 'Ski touring'), '#randonnee'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-[#0B1725]/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#0B1725]/70 transition duration-300 hover:bg-[#0B1725] hover:!text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl space-y-24">
          {/* Ski */}
          <div id="ski" className="grid items-center gap-10 lg:grid-cols-2">
            <div
              className="min-h-[45vh] rounded-[40px] bg-cover bg-center image-soft md:min-h-[360px]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1974&auto=format&fit=crop')",
              }}
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
                01 · {t('Ski', 'Ski')}
              </p>

              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em]">
                {t(
                  'Progresser avec confiance et fluidité',
                  'Progress with confidence and fluidity'
                )}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#667085]">
                {t(
                  'Des premières descentes au perfectionnement technique, chaque session est adaptée à votre niveau, votre rythme et vos objectifs.',
                  'From first turns to technical improvement, each session is adapted to your level, pace and goals.'
                )}
              </p>
            </div>
          </div>

          {/* Snowboard */}
          <div
            id="snowboard"
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <div className="order-2 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
                02 · {t('Snowboard', 'Snowboard')}
              </p>

              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em]">
                {t(
                  'Trouver de nouvelles sensations sur la neige',
                  'Discover new sensations on snow'
                )}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#667085]">
                {t(
                  'Une approche progressive et pédagogique pour gagner en aisance, en contrôle et en confiance sur tous types de terrains.',
                  'A progressive and supportive approach to gain confidence, control and ease on all types of terrain.'
                )}
              </p>
            </div>

            <div
              className="order-1 min-h-[45vh] rounded-[40px] bg-cover bg-center image-soft md:min-h-[360px] lg:order-2"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517825738774-7de9363ef735?q=80&w=1974&auto=format&fit=crop')",
              }}
            />
          </div>

          {/* Immersive image */}
          <div
            className="relative min-h-[360px] overflow-hidden rounded-[48px] bg-cover bg-center image-soft md:min-h-[420px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1974&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725]/85 via-[#0B1725]/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 max-w-2xl text-white md:bottom-10 md:left-10 md:right-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
                {t('Montagne', 'Mountain')}
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] md:mt-5 md:text-5xl">
                {t(
                  'Une autre manière d’explorer la montagne',
                  'Another way to explore the mountains'
                )}
              </h2>
            </div>
          </div>

          {/* Freeride */}
          <div id="freeride" className="grid items-center gap-10 lg:grid-cols-2">
            <div
              className="min-h-[45vh] rounded-[40px] bg-cover bg-center image-soft md:min-h-[360px]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1974&auto=format&fit=crop')",
              }}
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
                03 · {t('Freeride', 'Freeride')}
              </p>

              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em]">
                {t(
                  'Sortir des pistes et découvrir un terrain plus sauvage',
                  'Leave the slopes and discover wilder terrain'
                )}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#667085]">
                {t(
                  'Le freeride dépend des conditions, du niveau et des envies du jour. L’objectif reste toujours le même : évoluer avec sécurité, fluidité et plaisir.',
                  'Freeride depends on conditions, ability and the goals of the day. The objective remains the same: safety, fluidity and enjoyment.'
                )}
              </p>
            </div>
          </div>

          {/* Freestyle */}
          <div
            id="freestyle"
            className="grid items-center gap-10 lg:grid-cols-2"
          >
            <div className="order-2 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
                04 · {t('Freestyle', 'Freestyle')}
              </p>

              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em]">
                {t(
                  'Gagner en style, en technique et en confiance',
                  'Build style, technique and confidence'
                )}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#667085]">
                {t(
                  'Travail des trajectoires, des appuis, des sauts et de la fluidité, avec une progression adaptée à votre niveau et à vos objectifs.',
                  'Work on lines, balance, jumps and fluidity with progression adapted to your level and goals.'
                )}
              </p>
            </div>

            <div
              className="order-1 min-h-[45vh] rounded-[40px] bg-cover bg-center image-soft md:min-h-[360px] lg:order-2"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1974&auto=format&fit=crop')",
              }}
            />
          </div>

          {/* Ski touring */}
          <div
            id="randonnee"
            className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-cover bg-center image-soft md:min-h-[540px] md:rounded-[48px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725]/90 via-[#0B1725]/35 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 max-w-3xl text-white md:bottom-10 md:left-10 md:right-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5B8DB8] md:tracking-[0.28em]">
                05 · {t('Ski de randonnée', 'Ski touring')}
              </p>

              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] md:mt-5 md:text-5xl">
                {t(
                  'Prendre le temps d’explorer la montagne',
                  'Take the time to explore the mountains'
                )}
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:mt-8 md:text-lg">
                {t(
                  'Une expérience plus contemplative, loin du rythme des pistes, selon les conditions et votre niveau.',
                  'A more contemplative experience, away from the pace of the slopes, depending on conditions and your level.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final block */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-[#0B1725] px-10 py-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
            {t('Conseil', 'Advice')}
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            {t(
              'Vous ne savez pas quelle activité choisir ?',
              'Not sure which activity to choose?'
            )}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            {t(
              'Écrivez-moi directement et nous verrons ensemble quelle expérience correspond le mieux à votre niveau et à vos envies.',
              'Send me a message directly and we will decide together which experience best matches your level and goals.'
            )}
          </p>

          <a
            href={getWhatsappUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full !bg-white px-8 py-4 text-sm font-semibold !text-[#0B1725] transition duration-300 hover:scale-[1.02]"
          >
            {t('Me contacter', 'Contact me')}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}