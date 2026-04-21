'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Mail, MapPin, Phone, Sparkles, Stars, Instagram, Linkedin, PlayCircle, BadgeCheck, CheckCircle2, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SectionTitle from '@/components/SectionTitle';
import { withBasePath } from '@/lib/site';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 }
};

const skillGroups = [
  { title: 'Digital Marketing', items: ['SEO Strategies', 'Content Promotion', 'Brand Awareness', 'Campaign Support'] },
  { title: 'Technical Skills', items: ['HTML', 'CSS', 'JavaScript', 'Web Development'] },
  { title: 'Professional Skills', items: ['Communication', 'Customer Service', 'Sales Strategy', 'Goal-Oriented Mindset', 'Organisation'] },
  { title: 'Tools', items: ['Microsoft Office'] }
];

const projects = [
  {
    title: 'Social Media Campaign Concept',
    goal: 'Increase student adoption of a digital payment product',
    desc: 'A youth-focused campaign blending reels, micro-influencer campus ambassadors, and incentive-driven conversion content.',
    skills: ['Campaign Planning', 'Social Content', 'Audience Targeting']
  },
  {
    title: 'Brand Awareness Content Series',
    goal: 'Improve youth engagement and recurring interactions',
    desc: 'A content cadence of posters, story templates, and short-form video hooks designed to boost retention and shareability.',
    skills: ['Visual Branding', 'Content Strategy', 'Engagement Tactics']
  },
  {
    title: 'SEO & Web Visibility Project',
    goal: 'Improve discoverability and brand reach via web basics',
    desc: 'A practical SEO framework using keyword intent mapping, page architecture, and metadata planning for better visibility.',
    skills: ['SEO Basics', 'On-Page Structure', 'Keyword Research']
  }
];

const caseStudy = ['Objective', 'Target Audience', 'Strategy', 'Content Approach', 'Expected Outcome', 'Tools/Skills Used'];

const highlights = [
  { label: 'Campaign Concepts Built', value: '12+' },
  { label: 'Promotional Assets Created', value: '40+' },
  { label: 'Focus Areas', value: 'SEO • Social • Brand' }
];

const recruiterScan = [
  'Available for internship & graduate roles',
  'Portfolio built around campaign and brand outcomes',
  'Presentation + communication strengths from ambassador experience',
  'Comfortable with both creative and technical workflows'
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Prajawola Adhikari',
  jobTitle: 'Aspiring Digital Marketer',
  email: 'adhikariprajawola@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pokhara'
  },
  alumniOf: 'Kanya Campus Pokhara'
};

export default function HomePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />

      <section id="home" className="relative overflow-hidden pb-20 pt-36 md:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-rose/30 blur-3xl" />
          <div className="absolute right-10 top-24 h-64 w-64 rounded-full bg-lavender/30 blur-3xl" />
          <div className="absolute bottom-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#ffd8ee]/50 blur-3xl" />
        </div>

        <div className="section-shell grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide"><Sparkles size={14} /> Premium Digital Marketing Portfolio</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Prajawola Adhikari
              <span className="mt-3 block text-lg font-medium text-plum/80 md:text-2xl">Aspiring Digital Marketer | Content Creator | Brand Promotion Enthusiast</span>
            </h1>
            <p className="gradient-text mt-6 text-xl font-semibold md:text-3xl">Creating engaging digital experiences that connect brands with people.</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-plum/80">
              Motivated and detail-oriented Bachelor of Information Management student with a foundation in digital marketing, web technologies, communication, and brand promotion. Passionate about creating content, supporting campaigns, and helping brands grow through engaging digital strategies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="group rounded-full bg-gradient-to-r from-rose to-lavender px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.03]">View My Work <ArrowRight size={15} className="ml-1 inline transition group-hover:translate-x-1" /></a>
              <a href={withBasePath('/resume.pdf')} className="rounded-full border border-plum/25 bg-white/80 px-6 py-3 text-sm font-semibold transition hover:bg-white">Download Resume</a>
              <a href="#contact" className="rounded-full border border-plum/25 bg-white/80 px-6 py-3 text-sm font-semibold transition hover:bg-white">Contact Me</a>
            </div>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Instagram, Mail].map((Icon, idx) => (
                <motion.a key={idx} whileHover={{ y: -4, scale: 1.08 }} href="#contact" className="rounded-full border border-white/70 bg-white/70 p-3 text-plum">
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="glass-card relative overflow-hidden p-8">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-lavender/40 blur-2xl" />
            <div className="absolute -bottom-8 -left-6 h-32 w-32 rounded-full bg-rose/30 blur-2xl" />
            <div className="relative space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-plum/70">Brand Snapshot</p>
              <h3 className="text-3xl font-semibold">Creative + Strategic</h3>
              <p className="text-sm text-plum/75">Blending audience insight, campaign creativity, and communication excellence to help brands grow with content that converts.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/70 bg-white/60 p-4">
                    <p className="text-lg font-semibold text-plum">{item.value}</p>
                    <p className="text-xs text-plum/70">{item.label}</p>
                  </div>
                ))}
                <div className="rounded-2xl border border-white/70 bg-white/60 p-4">
                  <p className="text-sm font-semibold">Actively seeking</p>
                  <p className="text-xs text-plum/70">Internship & graduate digital marketing roles</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <motion.div {...reveal} className="glass-card grid gap-4 p-6 md:grid-cols-3">
          {[{ icon: TrendingUp, label: 'Conversion mindset', text: 'Portfolio messaging designed for recruiter decision flow.' }, { icon: Stars, label: 'Brand storytelling', text: 'Content style focused on audience emotion + clarity.' }, { icon: CheckCircle2, label: 'Execution ready', text: 'Prepared to support campaigns from concept to promotion.' }].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/70 p-4">
              <item.icon size={18} className="mb-3" />
              <p className="text-sm font-semibold">{item.label}</p>
              <p className="mt-1 text-xs text-plum/75">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <motion.section id="about" className="section-shell pt-0" {...reveal}>
        <SectionTitle
          eyebrow="About Me"
          title="A marketer with both digital creativity and technical understanding"
          subtitle="I bring a unique mix of information management education, communication confidence, and promotional execution. My focus is helping brands connect with audiences through strategic digital content, social media storytelling, SEO-aware communication, and campaign support."
        />
      </motion.section>

      <section id="skills" className="section-shell pt-0">
        <SectionTitle eyebrow="Skills" title="Capabilities aligned with modern marketing and communication roles" />
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <motion.div key={group.title} whileHover={{ y: -5 }} className="glass-card p-6">
              <h3 className="mb-4 text-xl font-semibold">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-plum/20 bg-white/70 px-3 py-1 text-sm">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell pt-0">
        <SectionTitle eyebrow="Experience" title="Product Ambassador Intern — Fonepay" subtitle="Pokhara, Gandaki | July 2025 – September 2025" />
        <div className="glass-card p-7">
          <ul className="space-y-4 text-sm leading-relaxed text-plum/85">
            <li className="flex gap-3"><Briefcase className="mt-1" size={16} />Represented Fonepay in the college community as a trusted peer ambassador, strengthening brand recognition among student audiences.</li>
            <li className="flex gap-3"><PlayCircle className="mt-1" size={16} />Created short videos, posters, and social content to support campaign awareness and product adoption goals.</li>
            <li className="flex gap-3"><Stars className="mt-1" size={16} />Delivered presentations and product demonstrations that translated technical product value into clear and engaging user benefits.</li>
            <li className="flex gap-3"><ArrowRight className="mt-1" size={16} />Collaborated with the marketing team on on-campus promotional events while maintaining consistent brand messaging.</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="section-shell pt-0">
        <SectionTitle eyebrow="Featured Projects" title="Marketing portfolio concepts with case-study structure" />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article key={project.title} whileHover={{ y: -8 }} className="glass-card group p-6 transition hover:shadow-2xl">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-plum/80">{project.desc}</p>
              <p className="mt-3 text-sm font-semibold">Marketing Goal: <span className="font-normal text-plum/80">{project.goal}</span></p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-plum/10 px-3 py-1 text-xs">{skill}</span>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-dashed border-plum/20 p-3 text-xs text-plum/70">{caseStudy.join(' • ')}</div>
              <button className="mt-5 rounded-full bg-gradient-to-r from-rose to-lavender px-5 py-2 text-sm font-semibold text-white transition group-hover:scale-105">Explore Project</button>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="education" className="section-shell pt-0">
        <SectionTitle eyebrow="Education" title="Bachelor of Information Management" />
        <div className="glass-card p-6">
          <p className="text-lg font-semibold">Kanya Campus Pokhara</p>
          <p className="text-sm text-plum/80">Expected Graduation: November 2026</p>
        </div>
      </section>

      <section id="certifications" className="section-shell pt-0">
        <SectionTitle eyebrow="Certifications" title="Continuous learning for modern digital roles" />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Certificate of Participation – Amazon AWS UG Women in Tech Meetup',
            'Workshop Completion – Python and FastAPI'
          ].map((cert) => (
            <div key={cert} className="glass-card flex items-start gap-3 p-6 text-sm font-medium"><BadgeCheck size={18} className="mt-0.5" />{cert}</div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle eyebrow="Recruiter Quick Scan" title="Why I can add value quickly in marketing teams" />
        <div className="glass-card p-6">
          <ul className="grid gap-3 md:grid-cols-2">
            {recruiterScan.map((item) => (
              <li key={item} className="flex items-start gap-2 rounded-xl bg-white/70 p-3 text-sm"><CheckCircle2 size={16} className="mt-0.5" />{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle eyebrow="Personal Brand" title="“I create campaigns that make brands feel human, relevant, and unforgettable.”" />
      </section>

      <section id="contact" className="section-shell pt-0">
        <SectionTitle eyebrow="Contact" title="Let&apos;s collaborate on your next campaign" subtitle="I am open to internships, graduate opportunities, and entry-level digital marketing roles." />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card space-y-4 p-6 text-sm">
            <p className="flex items-center gap-3"><Mail size={16} /> adhikariprajawola@gmail.com</p>
            <p className="flex items-center gap-3"><Phone size={16} /> 976550972</p>
            <p className="flex items-center gap-3"><MapPin size={16} /> Pokhara</p>
          </div>
          <form className="glass-card space-y-4 p-6" aria-label="contact form">
            <input placeholder="Your Name" className="w-full rounded-xl border border-plum/20 bg-white/80 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose/40" />
            <input type="email" placeholder="Your Email" className="w-full rounded-xl border border-plum/20 bg-white/80 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose/40" />
            <textarea rows="4" placeholder="Tell me about the role or project" className="w-full rounded-xl border border-plum/20 bg-white/80 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose/40" />
            <button className="w-full rounded-full bg-gradient-to-r from-rose to-lavender px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95">Send Message</button>
          </form>
        </div>
      </section>

      <a href="#contact" className="fixed bottom-4 right-4 z-40 rounded-full bg-gradient-to-r from-rose to-lavender px-5 py-3 text-xs font-semibold text-white shadow-glow md:hidden">
        Hire Me
      </a>

      <footer className="border-t border-white/60 py-10 text-center text-sm text-plum/80">
        <p className="font-medium">Prajawola Adhikari — Digital Marketing Portfolio</p>
        <p className="mt-2 text-xs">Designed with strategy, creativity, and recruiter-first storytelling.</p>
      </footer>
    </main>
  );
}
