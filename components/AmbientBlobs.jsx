'use client';

import { motion } from 'framer-motion';

export default function AmbientBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ y: [0, -24, 0], x: [0, 16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-rose/30 blur-3xl dark:bg-rose/15"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-10 top-24 h-64 w-64 rounded-full bg-lavender/30 blur-3xl dark:bg-lavender/15"
      />
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-blush/40 blur-3xl dark:bg-midnightCard/40"
      />
    </div>
  );
}
