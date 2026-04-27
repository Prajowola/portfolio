import Image from 'next/image';
import Link from 'next/link';

const profileBadges = ['Content Creation', 'SEO Basics', 'Brand Promotion'];

export default function HomePage() {
  return (
    <section className="relative pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10">
        <div className="mx-auto h-56 w-[min(1100px,92%)] rounded-[2.5rem] bg-gradient-to-r from-rose/15 via-white/35 to-lavender/15 blur-2xl" />
      </div>

      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-plum/15 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-plum/70">
            Prajawola Adhikari
          </p>

          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-plum md:text-5xl">
              Aspiring Digital Marketer &amp; Brand Promotion Enthusiast
            </h1>
            <p className="text-lg font-medium leading-relaxed text-plum/85 md:text-xl">
              I help brands connect with people through clear messaging, creative content, and audience-focused digital
              campaigns.
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-plum/75">
              I am a Bachelor of Information Management student with experience in product promotion, content creation,
              presentations, and campaign support. I am passionate about social media marketing, SEO, brand awareness,
              and digital storytelling.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/projects"
              className="rounded-full bg-gradient-to-r from-rose to-lavender px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(123,86,162,0.22)] transition hover:translate-y-[-1px]"
            >
              View Projects
            </Link>
            <Link
              href="/resume.pdf"
              className="rounded-full border border-plum/20 bg-white/75 px-6 py-3 text-sm font-semibold text-plum transition hover:bg-white"
            >
              Download Resume
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-plum/20 bg-white/75 px-6 py-3 text-sm font-semibold text-plum transition hover:bg-white"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <aside className="glass-card mx-auto w-full max-w-md border-white/55 bg-white/55 p-6 md:p-8">
          <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/60">
            <Image
              src="/profile.jpg"
              alt="Portrait of Prajawola Adhikari"
              width={900}
              height={1200}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {profileBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-plum/15 bg-white/85 px-3 py-1 text-xs font-medium tracking-wide text-plum/80"
              >
                {badge}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
