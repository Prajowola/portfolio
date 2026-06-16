'use client';

import { Quote } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import FadeIn from '@/components/FadeIn';
import { testimonials } from '@/lib/content';

export default function TestimonialsPage() {
  return (
    <section className="pb-20">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Testimonials"
          title="What collaborators and mentors say"
          subtitle="Feedback from the people I have worked alongside in ambassador, academic, and project settings."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={0.1 * i}>
              <article className="glass-card relative flex h-full flex-col p-7">
                <Quote className="mb-4 text-rose/60 dark:text-lavender/60" size={28} />
                <p className="flex-1 text-sm leading-relaxed text-plum/85 dark:text-white/80">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-rose to-lavender text-sm font-semibold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-plum dark:text-white">{t.name}</p>
                    <p className="text-xs text-plum/70 dark:text-white/60">{t.role}</p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
