'use client';

import Link from 'next/link';
import { ArrowLeft, Code2 } from 'lucide-react';

export default function GameShell({ title, tagline, instructions, sourceSlug, children }) {
  return (
    <section className="pb-20">
      <div className="section-shell max-w-3xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-plum/70 transition hover:text-plum dark:text-white/60 dark:hover:text-white"
          >
            <ArrowLeft size={15} /> Back to Projects
          </Link>
          {sourceSlug && (
            <Link
              href={`/games/${sourceSlug}/source`}
              className="inline-flex items-center gap-2 rounded-full border border-plum/20 bg-white/70 px-4 py-2 text-sm font-medium text-plum transition hover:-translate-y-0.5 dark:border-white/15 dark:bg-midnightCard/70 dark:text-white"
            >
              <Code2 size={15} /> Source code
            </Link>
          )}
        </div>

        <h1 className="text-3xl font-semibold text-plum dark:text-white md:text-4xl">{title}</h1>
        {tagline && <p className="mt-2 text-plum/75 dark:text-white/70">{tagline}</p>}

        <div className="mt-8 flex flex-col items-center">{children}</div>

        {instructions && (
          <p className="mt-6 text-center text-sm text-plum/65 dark:text-white/55">{instructions}</p>
        )}
      </div>
    </section>
  );
}
