'use client';

import Link from 'next/link';
import { ArrowRight, Gamepad2 } from 'lucide-react';
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
          subtitle="A set of playable browser games I created from scratch with HTML, CSS, and JavaScript. Click any card to play."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {games.map((game, i) => (
            <FadeIn key={game.slug} delay={0.1 * i}>
              <Link href={`/games/${game.slug}`} className="group block h-full">
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

                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-rose transition group-hover:gap-2 dark:text-lavender">
                    <Gamepad2 size={16} /> Play game <ArrowRight size={14} />
                  </span>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
