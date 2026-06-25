'use client';

import { motion } from 'framer-motion';
import { useIntl } from '@/app/i18n/IntlProvider';

export default function FAQ() {
  const { dict } = useIntl();
  const t = dict.faq;

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
            {t.eyebrow}
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#0B1725] md:text-6xl">
            {t.title}
          </h2>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#667085]">
            {t.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 lg:col-span-8 md:grid-cols-2">
          {t.items.map((item, index) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="rounded-[28px] border border-[#0B1725]/5 bg-white p-7 luxury-border transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#0B1725]">
                {item.q}
              </h3>

              <p className="mt-4 leading-relaxed text-[#667085]">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
