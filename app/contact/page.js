import SectionTitle from '@/components/SectionTitle';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="section">
      <div className="shell">
        <SectionTitle eyebrow="Contact Me" title="Let’s connect" subtitle="Open to internships, graduate opportunities, and entry-level digital marketing roles." />

        <div className="grid-2">
          <article className="glass card">
            <h3>Contact Information</h3>
            <p className="small"><Mail size={14} /> <a href="mailto:adhikariprajawolla@gmail.com">adhikariprajawolla@gmail.com</a></p>
            <p className="small"><Linkedin size={14} /> <a href="https://www.linkedin.com/in/prajawolla-adhikari-597888335/" target="_blank" rel="noreferrer">LinkedIn Profile</a></p>
            <p className="small"><Instagram size={14} /> <a href="https://www.instagram.com/prajowola_adhikary" target="_blank" rel="noreferrer">Instagram Profile</a></p>
          </article>

          <article className="glass card">
            <h3>Quick Message</h3>
            <p className="small">This is a placeholder contact panel for static hosting. You can later connect this to Formspree, Netlify Forms, or another backend form service.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
