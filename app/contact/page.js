'use client';

import { useState } from 'react';
import { Instagram, Linkedin, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import FadeIn from '@/components/FadeIn';

const FORM_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID';

export default function ContactPage() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="pb-20">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Contact Me"
          title="Let's connect"
          subtitle="Open to internships, graduate opportunities, and entry-level digital marketing roles."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <article className="glass-card h-full space-y-4 p-7 text-sm text-plum/85 dark:text-white/80">
              <h3 className="text-xl font-semibold text-plum dark:text-white">Contact Information</h3>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:adhikariprajawolla@gmail.com" className="hover:underline">adhikariprajawolla@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <Linkedin size={16} />
                <a href="https://www.linkedin.com/in/prajawolla-adhikari-597888335/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram size={16} />
                <a href="https://www.instagram.com/prajowola_adhikary" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
              </p>
            </article>
          </FadeIn>

          <FadeIn delay={0.08}>
            <form onSubmit={handleSubmit} className="glass-card space-y-4 p-7">
              <h3 className="text-xl font-semibold text-plum dark:text-white">Send a Message</h3>

              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-xl border border-plum/20 bg-white/80 px-4 py-3 text-sm text-plum outline-none ring-0 transition focus:border-plum/40 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
              />
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full rounded-xl border border-plum/20 bg-white/80 px-4 py-3 text-sm text-plum outline-none ring-0 transition focus:border-plum/40 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
              />
              <textarea
                rows="5"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role or project"
                className="w-full rounded-xl border border-plum/20 bg-white/80 px-4 py-3 text-sm text-plum outline-none ring-0 transition focus:border-plum/40 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
              />

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose to-lavender px-5 py-3 text-sm font-semibold text-white transition hover:brightness-105 disabled:opacity-70"
              >
                {status === 'loading' && <Loader2 className="animate-spin" size={16} />}
                {status === 'loading' ? 'Sending…' : 'Submit'}
              </button>

              {status === 'success' && (
                <p className="flex items-center gap-2 text-sm text-green-700 dark:text-green-400">
                  <CheckCircle2 size={16} /> Message sent — thank you, I will reply soon.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                  <AlertCircle size={16} /> Something went wrong. Please email me directly instead.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
