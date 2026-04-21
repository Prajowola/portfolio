'use client';

import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="title-wrap"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="title">{title}</h2>
      {subtitle ? <p className="subtitle">{subtitle}</p> : null}
    </motion.div>
  );
}
