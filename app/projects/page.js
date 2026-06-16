'use client';

import Link from 'next/link';
import { Code2, Gamepad2 } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import FadeIn from '@/components/FadeIn';
import { games } from '@/lib/content';

export default function ProjectsPage() {
  return (
    <section className="pb-20">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Projects"
          title="Games I built with code"
          subtitle="Playable browser games I created from scratch with HTML, CSS, and JavaScript. Play them here, or grab the source code to run on your own device."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game, i) => (
            <FadeIn key={game.slug} delay={0.1 * i}>
              <article className="glass-card flex h-full flex-col p-7 transition hover:-translate-y-1.5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-plum/10 text-2xl dark:bg-white/10">
                    {game.emoji}
                  </span>
                  <h3 className="text-xl font-semibold text-plum dark:text-white">{game.title}</h3>
                </div>

                <p className="mt-4 text-sm font-medium text-plum/85 dark:text-white/80">{game.tagline}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-plum/75 dark:text-white/70">{game.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {game.tech.map((t) => (
                    <span key={t} className="rounded-full bg-plum/10 px-3 py-1 text-xs font-medium text-plum/85 dark:bg-white/10 dark:text-white/80">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-2">
                  <Link
                    href={`/games/${game.slug}`}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-rose to-lavender px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-105"
                  >
                    <Gamepad2 size={16} /> Play game
                  </Link>
                  <Link
                    href={`/games/${game.slug}/source`}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-plum/25 bg-white/70 px-4 py-2.5 text-sm font-semibold text-plum transition hover:-translate-y-0.5 dark:border-white/15 dark:bg-midnightCard/70 dark:text-white"
                  >
                    <Code2 size={16} /> Source code
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
