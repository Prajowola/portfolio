import { Instagram, Linkedin, Mail } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

export default function ContactPage() {
  return (
    <section className="pb-20">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Contact Me"
          title="Let’s connect"
          subtitle="Open to internships, graduate opportunities, and entry-level digital marketing roles."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="glass-card space-y-4 p-7 text-sm text-plum/85">
            <h3 className="text-xl font-semibold text-plum">Contact Information</h3>
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

          <form className="glass-card space-y-4 p-7">
            <h3 className="text-xl font-semibold text-plum">Send a Message</h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-plum/20 bg-white/80 px-4 py-3 text-sm outline-none ring-0 transition focus:border-plum/40"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-plum/20 bg-white/80 px-4 py-3 text-sm outline-none ring-0 transition focus:border-plum/40"
            />
            <textarea
              rows="5"
              placeholder="Tell me about the role or project"
              className="w-full rounded-xl border border-plum/20 bg-white/80 px-4 py-3 text-sm outline-none ring-0 transition focus:border-plum/40"
            />
            <button
              type="button"
              className="w-full rounded-full bg-gradient-to-r from-rose to-lavender px-5 py-3 text-sm font-semibold text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
