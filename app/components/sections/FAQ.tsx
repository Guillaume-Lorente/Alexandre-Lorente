'use client';

import { useLang } from '@/app/context/LanguageContext';

const questions = [
  {
    frQ: 'Proposez-vous des cours privés ?',
    enQ: 'Do you offer private lessons?',
    frA: 'Oui, les cours sont organisés de manière personnalisée selon votre niveau, vos objectifs et vos envies.',
    enA: 'Yes, lessons are tailored to your level, goals and what you want to experience.',
  },
  {
    frQ: 'Enseignez-vous le snowboard ?',
    enQ: 'Do you teach snowboarding?',
    frA: 'Oui, du niveau débutant au perfectionnement.',
    enA: 'Yes, from beginner level to advanced riding.',
  },
  {
    frQ: 'Les cours sont-ils adaptés aux débutants ?',
    enQ: 'Are lessons suitable for beginners?',
    frA: 'Bien sûr. Les cours sont adaptés à tous les niveaux, y compris aux premières expériences sur neige.',
    enA: 'Absolutely. Lessons are adapted to all levels, including first experiences on snow.',
  },
  {
    frQ: 'Proposez-vous du freeride et du ski de randonnée ?',
    enQ: 'Do you offer freeride and ski touring?',
    frA: 'Oui, selon les conditions, le niveau des participants et les possibilités du moment.',
    enA: 'Yes, depending on conditions, participant level and current possibilities.',
  },
  {
    frQ: 'Où se déroulent les cours ?',
    enQ: 'Where do lessons take place?',
    frA: 'Les cours se déroulent principalement à Tignes et Val d’Isère.',
    enA: 'Lessons mainly take place in Tignes and Val d’Isère.',
  },
  {
    frQ: 'Comment réserver une session ?',
    enQ: 'How can I book a session?',
    frA: 'Le plus simple est de contacter Alexandre directement par WhatsApp, SMS ou téléphone.',
    enA: 'The easiest way is to contact Alexandre directly by WhatsApp, SMS or phone.',
  },
];

export default function FAQ() {
  const { t } = useLang();

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#5B8DB8]">
            FAQ
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#0B1725] md:text-5xl">
            {t(
              'Questions fréquentes',
              'Frequently asked questions'
            )}
          </h2>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className="rounded-[24px] bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#0B1725]">
                {t(item.frQ, item.enQ)}
              </h3>

              <p className="mt-3 leading-relaxed text-[#667085]">
                {t(item.frA, item.enA)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}