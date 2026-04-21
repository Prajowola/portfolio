'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Mail, MapPin, Phone, Sparkles, Instagram, Linkedin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SectionTitle from '@/components/SectionTitle';
import { withBasePath } from '@/lib/site';

const skills = [
  { title: 'Digital Marketing', items: ['SEO Strategies', 'Content Promotion', 'Brand Awareness', 'Campaign Support'] },
  { title: 'Technical Skills', items: ['HTML', 'CSS', 'JavaScript', 'Web Development'] },
  { title: 'Professional Skills', items: ['Communication', 'Customer Service', 'Sales Strategy', 'Goal-Oriented Mindset', 'Organisation'] },
  { title: 'Tools', items: ['Microsoft Office'] }
];

const projects = [
  {
    title: 'Social Media Campaign Concept',
    desc: 'Promoted digital payment adoption among students using creator-style short video content and incentive hooks.',
    goal: 'Drive awareness + product sign-ups'
  },
  {
    title: 'Brand Awareness Content Series',
    desc: 'Built a recurring visual storytelling series (poster + reels + interactive stories) to increase engagement.',
    goal: 'Improve youth audience retention'
  },
  {
    title: 'SEO & Web Visibility Project',
    desc: 'Mapped search intent and on-page structure to improve organic discoverability for campaign landing pages.',
    goal: 'Increase web visibility'
  }
];

export default function Page() {
  return (
    <main>
      <Navbar />

      <section id="home" className="hero section">
        <div className="hero-bubble b1" />
        <div className="hero-bubble b2" />
        <div className="shell hero-grid">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="badge glass"><Sparkles size={14} /> Premium Digital Marketing Portfolio</p>
            <h1 className="h1">Prajawola Adhikari</h1>
            <p className="sub">Aspiring Digital Marketer · Content Creator · Brand Promotion Enthusiast</p>
            <p className="gradient">Creating engaging digital experiences that connect brands with people.</p>
            <p className="lead">I am a motivated and detail-oriented Bachelor of Information Management student with a foundation in digital marketing, web technologies, communication, and brand promotion. I&apos;m passionate about creating content, supporting campaigns, and helping brands grow with audience-first strategy.</p>

            <div className="row" style={{ marginTop: 18 }}>
              <a href="#projects" className="btn btn-primary">View My Work <ArrowRight size={14} /></a>
              <a href={withBasePath('/resume.pdf')} className="btn">Download Resume</a>
              <a href="#contact" className="btn">Contact Me</a>
            </div>

            <div className="socials">
              {[Linkedin, Instagram, Mail].map((Icon, i) => (
                <a key={i} className="icon-btn glass" href="#contact"><Icon size={17} /></a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .12 }} className="glass card">
            <p className="eyebrow">Brand Snapshot</p>
            <h3 style={{ marginTop: 0, fontSize: 32 }}>Creative + Strategic</h3>
            <p className="small">Blending campaign thinking, visual storytelling, and communication clarity to build digital marketing outcomes that convert.</p>
            <div className="grid-2" style={{ marginTop: 16 }}>
              {['Campaign Concepts: 12+', 'Promotional Assets: 40+', 'Focus: SEO • Social • Brand', 'Open to internships / graduate roles'].map((x) => (
                <div key={x} className="glass card" style={{ padding: 14, borderRadius: 16 }}>{x}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section section-tight">
        <div className="shell">
          <SectionTitle eyebrow="About Me" title="A marketer with both digital creativity and technical understanding" subtitle="I bring a blend of IT, communication, and marketing capability. My focus is social content, campaign support, brand storytelling, and SEO-aware digital communication." />
        </div>
      </section>

      <section id="skills" className="section section-tight">
        <div className="shell">
          <SectionTitle eyebrow="Skills" title="Capabilities aligned with marketing and communication roles" />
          <div className="grid-2">
            {skills.map((group) => (
              <motion.article key={group.title} whileHover={{ y: -6 }} className="glass card">
                <h3>{group.title}</h3>
                <div className="chips">
                  {group.items.map((item) => <span className="chip" key={item}>{item}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section section-tight">
        <div className="shell">
          <SectionTitle eyebrow="Experience" title="Product Ambassador Intern — Fonepay" subtitle="Pokhara, Gandaki · July 2025 – September 2025" />
          <div className="glass card">
            <ul className="list">
              <li>Represented Fonepay in the college community as a student-facing brand ambassador.</li>
              <li>Created short videos, posters, and social content to support campaign visibility.</li>
              <li>Delivered product demos and presentations to communicate brand value clearly.</li>
              <li>Collaborated with the marketing team to align execution with brand goals.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="section section-tight">
        <div className="shell">
          <SectionTitle eyebrow="Featured Projects" title="Case-study style marketing concepts" />
          <div className="grid-3">
            {projects.map((project) => (
              <motion.article key={project.title} whileHover={{ y: -8 }} className="glass card">
                <h3>{project.title}</h3>
                <p className="small">{project.desc}</p>
                <p className="small"><strong>Marketing goal:</strong> {project.goal}</p>
                <p className="small">Objective • Target Audience • Strategy • Content Approach • Expected Outcome • Tools/Skills</p>
                <button className="btn btn-primary" style={{ marginTop: 10 }}>Explore Project</button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section section-tight">
        <div className="shell">
          <SectionTitle eyebrow="Education" title="Bachelor of Information Management" />
          <div className="glass card">
            <h3 style={{ marginBottom: 4 }}>Kanya Campus Pokhara</h3>
            <p className="small">Expected Graduation: November 2026</p>
          </div>
        </div>
      </section>

      <section id="certifications" className="section section-tight">
        <div className="shell">
          <SectionTitle eyebrow="Certifications" title="Continuous learning for modern digital roles" />
          <div className="grid-2">
            {['Certificate of Participation – Amazon AWS UG Women in Tech Meetup', 'Workshop Completion – Python and FastAPI'].map((cert) => (
              <div className="glass card" key={cert} style={{ display: 'flex', gap: 10, alignItems: 'start' }}>
                <BadgeCheck size={18} />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="shell">
          <SectionTitle eyebrow="Why Hire Me" title="Recruiter-ready value for digital teams" />
          <div className="grid-2">
            {[
              'Strong blend of digital communication and technical understanding',
              'Hands-on promotional and content creation experience',
              'Confident presenter with collaborative communication style',
              'Fast learner ready to contribute in growth-focused teams'
            ].map((point) => <div key={point} className="glass card">{point}</div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-tight">
        <div className="shell">
          <SectionTitle eyebrow="Contact" title="Let’s collaborate on your next campaign" subtitle="Email, call, or message me for internship and graduate opportunities." />
          <div className="grid-2">
            <div className="glass card">
              <p><Mail size={14} /> adhikariprajawola@gmail.com</p>
              <p><Phone size={14} /> 976550972</p>
              <p><MapPin size={14} /> Pokhara</p>
            </div>
            <form className="glass card" aria-label="Contact form">
              <div style={{ display: 'grid', gap: 10 }}>
                <input placeholder="Your Name" style={inputStyle} />
                <input placeholder="Your Email" type="email" style={inputStyle} />
                <textarea rows="4" placeholder="Tell me about the role or project" style={inputStyle} />
                <button className="btn btn-primary" type="button">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell">
          <strong>Prajawola Adhikari — Digital Marketing Portfolio</strong>
          <p>Designed with strategy, storytelling, and recruiter conversion in mind.</p>
        </div>
      </footer>
    </main>
  );
}

const inputStyle = {
  width: '100%',
  border: '1px solid rgba(89,55,107,.2)',
  borderRadius: 12,
  background: 'rgba(255,255,255,.85)',
  padding: '12px 14px',
  font: 'inherit'
};
