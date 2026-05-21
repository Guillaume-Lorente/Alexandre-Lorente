'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/app/context/LanguageContext';
import { getWhatsappUrl } from '@/app/lib/contact';

export default function FinalCTA() {
  const { t } = useLang();

  const whatsappMessage = t(
    'Bonjour Alexandre, je souhaite avoir des informations pour réserver une session à Tignes / Val d’Isère.',
    'Hi Alexandre, I would like more information about booking a session in Tignes / Val d’Isère.'
  );

  return (
    <section className="relative overflow-hidden bg-[#0B1725] py-32 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35 image-soft"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-[#0B1725]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1725] via-[#0B1725]/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#5B8DB8]"
        >
          {t('Réserver', 'Book')}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.85, delay: 0.08 }}
          className="mx-auto max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl"
        >
          {t(
            'Prêt à vivre la montagne autrement ?',
            'Ready to experience the mountains differently?'
          )}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.85, delay: 0.16 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
        >
          {t(
            'Écrivez-moi directement pour organiser une session adaptée à votre niveau, vos envies et les conditions du moment.',
            'Send me a message directly to organise a session adapted to your level, goals and current conditions.'
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.85, delay: 0.24 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={getWhatsappUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full !bg-white px-9 py-4 text-sm font-semibold !text-[#0B1725] transition duration-300 hover:scale-[1.02] hover:!bg-white/90"          >
            {t('Réserver une session', 'Book a session')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}