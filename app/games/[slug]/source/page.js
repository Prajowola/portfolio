import Link from 'next/link';
import { ArrowLeft, Download, Gamepad2 } from 'lucide-react';
import { games } from '@/lib/content';

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export function generateMetadata({ params }) {
  const game = games.find((g) => g.slug === params.slug);
  return {
    title: game ? `${game.title} — source code | Prajowola Adhikari` : 'Source code | Prajowola Adhikari'
  };
}

export default function SourcePage({ params }) {
  const game = games.find((g) => g.slug === params.slug);

  if (!game) {
    return (
      <section className="pb-20">
        <div className="section-shell max-w-3xl text-center">
          <p className="text-plum dark:text-white">Game not found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-20">
      <div className="section-shell max-w-3xl">
        <Link
          href="/projects"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-plum/70 transition hover:text-plum dark:text-white/60 dark:hover:text-white"
        >
          <ArrowLeft size={15} /> Back to Projects
        </Link>

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-plum/70 dark:text-lavender/70">Source code</p>
        <h1 className="mt-2 text-3xl font-semibold text-plum dark:text-white md:text-4xl">{game.title}</h1>
        <p className="mt-2 text-plum/75 dark:text-white/70">{game.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={game.sourceFile}
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose to-lavender px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105"
          >
            <Download size={16} /> Download source code
          </a>
          <Link
            href={`/games/${game.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-plum/25 bg-white/70 px-6 py-3 text-sm font-semibold text-plum transition hover:-translate-y-0.5 dark:border-white/15 dark:bg-midnightCard/70 dark:text-white"
          >
            <Gamepad2 size={16} /> Play it here
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="glass-card p-6">
            <h2 className="text-lg font-semibold text-plum dark:text-white">Built with</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {game.languages.map((lang) => (
                <span key={lang} className="rounded-full bg-plum/10 px-3 py-1 text-xs font-medium text-plum/85 dark:bg-white/10 dark:text-white/80">
                  {lang}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-plum/75 dark:text-white/70">
              The download is a single self-contained <code>.html</code> file — all the markup, styling, and game logic
              live in one place, with no libraries or build tools.
            </p>
          </article>

          <article className="glass-card p-6">
            <h2 className="text-lg font-semibold text-plum dark:text-white">Main features</h2>
            <ul className="mt-4 space-y-2 text-sm text-plum/80 dark:text-white/75">
              {game.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose dark:bg-lavender" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="glass-card mt-5 p-6">
          <h2 className="text-lg font-semibold text-plum dark:text-white">How to run it on your device</h2>
          <ol className="mt-4 space-y-2 text-sm text-plum/80 dark:text-white/75">
            <li className="flex gap-2"><span className="font-semibold text-plum dark:text-white">1.</span> Click <strong>Download source code</strong> above to save the <code>.html</code> file.</li>
            <li className="flex gap-2"><span className="font-semibold text-plum dark:text-white">2.</span> Double-click the file (or right-click → Open with → your browser).</li>
            <li className="flex gap-2"><span className="font-semibold text-plum dark:text-white">3.</span> The game runs instantly — no installation, no internet connection needed.</li>
            <li className="flex gap-2"><span className="font-semibold text-plum dark:text-white">4.</span> Want to peek inside? Open the same file in any text editor to read and tweak the code.</li>
          </ol>
        </article>
      </div>
    </section>
  );
}
