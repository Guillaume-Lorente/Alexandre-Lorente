'use client';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useLang } from '../context/LanguageContext';
import { getWhatsappUrl } from '../lib/contact';

export default function AboutPage() {
  const { t } = useLang();

  const whatsappMessage = t(
    'Bonjour Alexandre, je souhaite avoir des informations pour organiser une session à Tignes / Val d’Isère.',
    'Hi Alexandre, I would like more information about organising a session in Tignes / Val d’Isère.'
  );

  return (
    <main className="bg-[#F8FAFC] text-[#0B1725]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1725] px-6 pb-28 pt-44 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 image-soft"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1974&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725] via-[#0B1725]/80 to-[#0B1725]/30" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
            {t('À propos', 'About')}
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            {t(
              'La montagne comme manière de vivre et de transmettre',
              'The mountains as a way of living and sharing'
            )}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            {t(
              'Depuis l’enfance, la montagne fait partie de mon quotidien. Aujourd’hui, j’accompagne skieurs et snowboardeurs à Tignes et Val d’Isère avec une approche humaine, progressive et personnalisée.',
              'Since childhood, the mountains have been part of my daily life. Today, I guide skiers and snowboarders in Tignes and Val d’Isère with a human, progressive and personalised approach.'
            )}
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[40px] bg-[#F8FAFC] p-10 md:p-16">
            <p className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#0B1725] md:text-5xl">
              “
              {t(
                'Ce que j’aime avant tout, c’est voir quelqu’un prendre confiance et profiter pleinement de la montagne.',
                'What I enjoy most is seeing someone gain confidence and truly enjoy the mountains.'
              )}
              ”
            </p>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-[#5B8DB8]">
              Alexandre Lorente
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white px-6 pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div
              className="min-h-[55vh] rounded-[44px] bg-cover bg-center image-soft md:min-h-[680px]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=1974&auto=format&fit=crop')",
              }}
            />
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
              {t('Mon parcours', 'My story')}
            </p>

            <div className="mt-8 space-y-8 text-lg leading-relaxed text-[#667085]">
              <p>
                {t(
                  'J’ai grandi au contact de la montagne, du ski et du snowboard. Très tôt, j’ai développé une vraie passion pour les sports de glisse et tout ce qui entoure l’environnement alpin.',
                  'I grew up surrounded by mountains, skiing and snowboarding. Very early on, I developed a deep passion for snow sports and the alpine environment.'
                )}
              </p>

              <p>
                {t(
                  'Aujourd’hui, j’enseigne le ski, le snowboard, le freeride, le freestyle et le ski de randonnée à Tignes et Val d’Isère.',
                  'Today, I teach skiing, snowboarding, freeride, freestyle and ski touring in Tignes and Val d’Isère.'
                )}
              </p>

              <p>
                {t(
                  'Chaque personne a sa manière d’apprendre, ses sensations et ses objectifs. Mon rôle est de créer une expérience adaptée à chacun, dans un cadre rassurant, motivant et toujours tourné vers le plaisir de la glisse.',
                  'Everyone learns differently, with their own sensations and goals. My role is to create an experience adapted to each person in a reassuring, motivating environment always focused on the enjoyment of riding.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive block */}
      <section className="px-6 pb-28">
        <div
          className="relative overflow-hidden rounded-[48px] bg-cover bg-center image-soft"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725]/90 via-[#0B1725]/30 to-transparent" />

          <div className="relative flex min-h-[520px] items-end p-8 md:min-h-[680px] md:p-14">
            <div className="max-w-3xl text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
                {t('La montagne', 'The mountains')}
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
                {t(
                  'Chaque journée en montagne est différente',
                  'Every day in the mountains is different'
                )}
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
                {t(
                  'Les conditions, la neige, la météo et les sensations évoluent constamment. C’est aussi ce qui rend chaque session unique.',
                  'Conditions, snow, weather and sensations constantly evolve. That is also what makes every session unique.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching */}
      <section className="bg-[#0B1725] px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
              {t('Ma manière d’enseigner', 'My way of teaching')}
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              {t(
                'Pédagogie, confiance et progression',
                'Teaching, confidence and progression'
              )}
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                frTitle: 'Pédagogie',
                enTitle: 'Teaching',
                frText:
                  'Des explications simples, progressives et adaptées à votre manière d’apprendre.',
                enText:
                  'Simple, progressive explanations adapted to your way of learning.',
              },
              {
                frTitle: 'Confiance',
                enTitle: 'Confidence',
                frText:
                  'Créer un environnement rassurant pour progresser sans pression.',
                enText:
                  'Creating a reassuring environment to progress without pressure.',
              },
              {
                frTitle: 'Plaisir',
                enTitle: 'Enjoyment',
                frText:
                  'Le plus important reste toujours le plaisir de la glisse et de la montagne.',
                enText:
                  'The most important thing always remains the enjoyment of riding and the mountains.',
              },
            ].map((item) => (
              <div
                key={item.frTitle}
                className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8"
              >
                <h3 className="text-2xl font-semibold">
                  {t(item.frTitle, item.enTitle)}
                </h3>

                <p className="mt-5 leading-relaxed text-white/65">
                  {t(item.frText, item.enText)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution 2 */}
      <section className="bg-white px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
            Évolution 2
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            {t(
              'Un encadrement professionnel et reconnu',
              'A professional and recognised framework'
            )}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[#667085]">
            {t(
              'Diplômé d’État français, j’enseigne aujourd’hui au sein d’Évolution 2 à Tignes et Val d’Isère.',
              'I hold the French State Ski Instructor Diploma and currently teach with Evolution 2 in Tignes and Val d’Isère.'
            )}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-5xl rounded-[44px] bg-[#0B1725] px-10 py-20 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
            {t('Contact', 'Contact')}
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            {t(
              'Envie de découvrir la montagne autrement ?',
              'Would you like to experience the mountains differently?'
            )}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            {t(
              'Écrivez-moi directement pour organiser une session adaptée à votre niveau, vos envies et les conditions du moment.',
              'Send me a message directly to organise a session adapted to your level, goals and current conditions.'
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