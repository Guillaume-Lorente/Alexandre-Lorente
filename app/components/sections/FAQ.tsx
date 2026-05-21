'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/app/context/LanguageContext';

const questions = [
  {
    frQ: 'Où se rejoint-on pour le début du cours ?',
    enQ: 'Where do we meet for the lesson?',
    frA:
      'Je définis avec vous le point de rendez-vous selon votre niveau, votre hébergement et les conditions du moment.',
    enA:
      'I organise the meeting point with you depending on your level, accommodation and current conditions.',
  },
  {
    frQ: 'Faut-il déjà avoir un forfait de ski ?',
    enQ: 'Do I already need a ski pass?',
    frA:
      'Cela dépend du type de session et de votre niveau. Je pourrai vous conseiller avant le cours.',
    enA:
      'It depends on the type of session and your level. I can advise you before the lesson.',
  },
  {
    frQ: 'Peut-on réserver à plusieurs ?',
    enQ: 'Can we book as a group?',
    frA:
      'Oui, je peux organiser des sessions entre amis ou en famille lorsque les niveaux sont compatibles.',
    enA:
      'Yes, I can organise sessions with friends or family when the levels are compatible.',
  },
  {
    frQ: 'Que se passe-t-il en cas de mauvais temps ?',
    enQ: 'What happens in bad weather?',
    frA:
      'J’adapte les sessions aux conditions afin de garantir la meilleure expérience possible en montagne.',
    enA:
      'I adapt the sessions to the conditions to ensure the best possible mountain experience.',
  },
  {
    frQ: 'Quel matériel faut-il prévoir ?',
    enQ: 'What equipment should I bring?',
    frA:
      'Je peux vous conseiller avant la session afin de prévoir un équipement adapté à votre pratique et à la météo.',
    enA:
      'I can advise you before the session so you bring equipment adapted to your activity and the weather.',
  },
  {
    frQ: 'Le hors-piste est-il accessible à tous ?',
    enQ: 'Is off-piste accessible for everyone?',
    frA:
      'Le freeride dépend du niveau technique, des conditions et des objectifs de la journée.',
    enA:
      'Freeride depends on technical level, conditions and the goals of the day.',
  },
];

export default function FAQ() {
  const { t } = useLang();

  return (
    <section className="bg-[#F8FAFC] py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]">
            FAQ
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#0B1725] md:text-6xl">
            {t('Avant de réserver', 'Before booking')}
          </h2>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#667085]">
            {t(
              'Quelques réponses simples pour préparer votre session à Tignes ou Val d’Isère.',
              'A few simple answers to help prepare your session in Tignes or Val d’Isère.'
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 lg:col-span-8 md:grid-cols-2">
          {questions.map((item, index) => (
            <motion.div
              key={item.frQ}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="rounded-[28px] border border-[#0B1725]/5 bg-white p-7 luxury-border transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#0B1725]">
                {t(item.frQ, item.enQ)}
              </h3>

              <p className="mt-4 leading-relaxed text-[#667085]">
                {t(item.frA, item.enA)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}