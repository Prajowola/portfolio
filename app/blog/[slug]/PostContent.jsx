'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function PostContent({ post }) {
  return (
    <section className="pb-20">
      <div className="section-shell max-w-3xl">
        <FadeIn>
          <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-plum/70 hover:text-plum dark:text-white/60 dark:hover:text-white">
            <ArrowLeft size={15} /> Back to Insights
          </Link>
        </FadeIn>

        <FadeIn delay={0.05}>
          <span className="mb-4 inline-flex w-fit rounded-full bg-plum/10 px-3 py-1 text-xs font-medium text-plum/85 dark:bg-white/10 dark:text-white/80">
            {post.tag}
          </span>
          <h1 className="text-3xl font-semibold leading-tight text-plum dark:text-white md:text-4xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-xs text-plum/65 dark:text-white/55">
            <span className="flex items-center gap-1"><Calendar size={13} />{formatDate(post.date)}</span>
            <span className="flex items-center gap-1"><Clock size={13} />{post.readTime}</span>
          </div>
        </FadeIn>

        <div className="glass-card mt-8 space-y-5 p-7">
          {post.body.map((paragraph, i) => (
            <FadeIn key={i} delay={0.05 * i}>
              <p className="text-base leading-relaxed text-plum/85 dark:text-white/80">{paragraph}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
