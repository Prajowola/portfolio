'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AmbientBlobs from '@/components/AmbientBlobs';
import FadeIn from '@/components/FadeIn';

const previewCards = [
  {
    title: 'Audience-First Strategy',
    description: 'Campaign planning grounded in clear messaging, user behavior, and conversion-focused goals.'
  },
  {
    title: 'Content That Connects',
    description: 'Short-form storytelling, brand voice consistency, and creative assets tailored for social platforms.'
  },
  {
    title: 'Growth Mindset Execution',
    description: 'A proactive approach to testing, iteration, and collaboration for continuous campaign improvement.'
  }
];

const stats = [
  { value: '3+', label: 'Campaign concepts shipped' },
  { value: '2', label: 'Months as Fonepay ambassador' },
  { value: '2026', label: 'Expected graduation' }
];

export default function HomePage() {
  return (
    <section className="relative overflow-hidden pb-20">
      <AmbientBlobs />

      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl font-semibold leading-tight text-plum dark:text-white md:text-6xl">
            Prajawola Adhikari
            <span className="mt-3 block text-xl font-medium text-plum/80 dark:text-white/70 md:text-2xl">
              Aspiring Digital Marketer
            </span>
          </h1>

          <p className="gradient-text mt-6 text-xl font-semibold md:text-2xl">
            Creating engaging digital experiences that connect brands with people.
          </p>

          <p className="mt-6 max-w-xl text-base text-plum/80 dark:text-white/70">
            I am a motivated and detail-oriented Bachelor of Information Management student passionate about digital
            campaigns, social content, and strategic brand communication.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-gradient-to-r from-rose to-lavender px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-105"
            >
              View Projects
            </Link>
            <Link
              href="/resume.pdf"
              className="rounded-full border border-plum/25 bg-white/70 px-6 py-3 text-sm font-semibold text-plum transition hover:-translate-y-0.5 dark:border-white/15 dark:bg-midnightCard/70 dark:text-white"
            >
              Download Resume
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-plum/25 bg-white/70 px-6 py-3 text-sm font-semibold text-plum transition hover:-translate-y-0.5 dark:border-white/15 dark:bg-midnightCard/70 dark:text-white"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={0.1 * i}>
                <p className="text-2xl font-semibold text-plum dark:text-lavender">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-plum/70 dark:text-white/60">{stat.label}</p>
              </FadeIn>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card relative overflow-hidden p-8"
        >
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-lavender/40 blur-2xl" />
          <div className="absolute -bottom-8 -left-6 h-32 w-32 rounded-full bg-rose/30 blur-2xl" />
          <div className="relative space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-plum/70 dark:text-lavender/70">Profile</p>
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              src="/profile.jpg"
              alt="Prajawola Adhikari"
              className="mx-auto h-80 w-full max-w-xs rounded-3xl object-cover shadow-glow"
            />
          </div>
        </motion.div>
      </div>

      <div className="section-shell pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          {previewCards.map((card, i) => (
            <FadeIn key={card.title} delay={0.1 * i}>
              <article className="glass-card h-full p-5 transition hover:-translate-y-1">
                <h2 className="text-lg font-semibold text-plum dark:text-white">{card.title}</h2>
                <p className="mt-2 text-sm text-plum/80 dark:text-white/70">{card.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
