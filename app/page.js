import Link from 'next/link';

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

export default function HomePage() {
  return (
    <section className="relative overflow-hidden pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-rose/30 blur-3xl" />
        <div className="absolute right-10 top-24 h-64 w-64 rounded-full bg-lavender/30 blur-3xl" />
      </div>

      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Prajawola Adhikari
            <span className="mt-3 block text-xl font-medium text-plum/80 md:text-2xl">
              Aspiring Digital Marketer
            </span>
          </h1>

          <p className="gradient-text mt-6 text-xl font-semibold md:text-2xl">
            Creating engaging digital experiences that connect brands with people.
          </p>

          <p className="mt-6 max-w-xl text-base text-plum/80">
            I am a motivated and detail-oriented Bachelor of Information Management student passionate about digital
            campaigns, social content, and strategic brand communication.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-gradient-to-r from-rose to-lavender px-6 py-3 text-sm font-semibold text-white shadow-glow"
            >
              View Projects
            </Link>
            <Link
              href="/resume.pdf"
              className="rounded-full border border-plum/25 bg-white/70 px-6 py-3 text-sm font-semibold"
            >
              Download Resume
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-plum/25 bg-white/70 px-6 py-3 text-sm font-semibold"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="glass-card relative overflow-hidden p-8">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-lavender/40 blur-2xl" />
          <div className="absolute -bottom-8 -left-6 h-32 w-32 rounded-full bg-rose/30 blur-2xl" />
          <div className="relative space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-plum/70">Profile</p>
            <img
                src="/profile.jpg"
                alt="Prajawola Adhikari"
                className="mx-auto h-80 w-full max-w-xs rounded-3xl object-cover shadow-glow"
             />
          </div>
        </div>
      </div>

      <div className="section-shell pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          {previewCards.map((card) => (
            <article key={card.title} className="glass-card p-5">
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="mt-2 text-sm text-plum/80">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
