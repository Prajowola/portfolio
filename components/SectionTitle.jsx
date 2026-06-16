'use client';

import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-plum/70 dark:text-lavender/70">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-plum dark:text-white md:text-4xl">{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-base text-plum/75 dark:text-white/70 ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
