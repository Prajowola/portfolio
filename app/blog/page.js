'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import FadeIn from '@/components/FadeIn';
import { posts } from '@/lib/content';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function BlogIndexPage() {
  return (
    <section className="pb-20">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Insights"
          title="Notes on campaigns, content, and strategy"
          subtitle="Short write-ups on what I am learning while building campaign concepts and case studies."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={0.08 * i}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="glass-card flex h-full flex-col p-7 transition hover:-translate-y-1.5">
                  <span className="mb-3 inline-flex w-fit rounded-full bg-plum/10 px-3 py-1 text-xs font-medium text-plum/85 dark:bg-white/10 dark:text-white/80">
                    {post.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-plum dark:text-white">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-plum/80 dark:text-white/75">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-xs text-plum/65 dark:text-white/55">
                    <span className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><Calendar size={13} />{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1"><Clock size={13} />{post.readTime}</span>
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-rose transition group-hover:gap-2 dark:text-lavender">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
