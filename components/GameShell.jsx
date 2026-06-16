'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function GameShell({ title, tagline, instructions, children }) {
  return (
    <section className="pb-20">
      <div className="section-shell max-w-3xl">
        <Link
          href="/projects"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-plum/70 transition hover:text-plum dark:text-white/60 dark:hover:text-white"
        >
          <ArrowLeft size={15} /> Back to Projects
        </Link>

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
