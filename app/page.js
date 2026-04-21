'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Stars,
  Instagram,
  Linkedin,
  PlayCircle
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import SectionTitle from '@/components/SectionTitle';

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
    desc: 'A youth-focused, short-form campaign concept with reels, influencer campus collabs, and promo funnels.',
    skills: ['Campaign Planning', 'Social Content', 'Audience Targeting']
  },
  {
    title: 'Brand Awareness Content Series',
    goal: 'Improve youth engagement and recurring interactions',
    desc: 'A multi-format poster/video series with recurring themes, interactive polls, and storytelling templates.',
    skills: ['Visual Branding', 'Content Strategy', 'Engagement Tactics']
  },
  {
    title: 'SEO & Web Visibility Project',
    goal: 'Improve discoverability and brand reach via web basics',
    desc: 'A practical website structure and keyword mapping initiative to strengthen organic visibility.',
    skills: ['SEO Basics', 'On-Page Structure', 'Keyword Research']
  }
];

const caseStudy = ['Objective', 'Target Audience', 'Strategy', 'Content Approach', 'Expected Outcome', 'Tools/Skills Used'];

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section id="home" className="relative overflow-hidden pb-20 pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-rose/30 blur-3xl" />
          <div className="absolute right-10 top-24 h-64 w-64 rounded-full bg-lavender/30 blur-3xl" />
        </div>

        <div className="section-shell grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-medium"><Sparkles size={14} /> Personal Brand Portfolio</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Prajawola Adhikari
              <span className="mt-3 block text-xl font-medium text-plum/80 md:text-2xl">Aspiring Digital Marketer | Content Creator | Brand Promotion Enthusiast</span>
            </h1>
            <p className="gradient-text mt-6 text-xl font-semibold md:text-2xl">Creating engaging digital experiences that connect brands with people.</p>
            <p className="mt-6 max-w-xl text-base text-plum/80">
              I am a motivated and detail-oriented Bachelor of Information Management student with a foundation in digital marketing, web technologies, communication, and brand promotion. I am passionate about creating content, supporting campaigns, and helping brands grow through engaging digital strategies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-gradient-to-r from-rose to-lavender px-6 py-3 text-sm font-semibold text-white shadow-glow">View My Work</a>
              <a href="/resume.pdf" className="rounded-full border border-plum/25 bg-white/70 px-6 py-3 text-sm font-semibold">Download Resume</a>
              <a href="#contact" className="rounded-full border border-plum/25 bg-white/70 px-6 py-3 text-sm font-semibold">Contact Me</a>
            </div>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Instagram, Mail].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -4, scale: 1.08 }}
                  href="#contact"
                  className="rounded-full border border-white/70 bg-white/70 p-3 text-plum"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glass-card relative overflow-hidden p-8"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-lavender/40 blur-2xl" />
            <div className="absolute -bottom-8 -left-6 h-32 w-32 rounded-full bg-rose/30 blur-2xl" />
            <div className="relative space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-plum/70">Brand Snapshot</p>
              <h3 className="text-3xl font-semibold">Creative + Strategic</h3>
              <p className="text-sm text-plum/75">Blending audience insight, campaign creativity, and communication excellence to help brands grow with content that converts.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {['Content Campaigns', 'Audience Engagement', 'Brand Promotion', 'Storytelling'].map((point) => (
                  <div key={point} className="rounded-2xl border border-white/70 bg-white/60 p-4 text-sm font-medium">{point}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section-shell">
        <SectionTitle
          eyebrow="About Me"
          title="A marketer with both digital creativity and technical understanding"
          subtitle="I bring a unique mix of information management education, communication confidence, and promotional execution. My focus is on helping brands connect with audiences through strategic digital content, social media storytelling, SEO-aware communication, and campaign support."
        />
      </section>

      <section id="skills" className="section-shell pt-0">
        <SectionTitle eyebrow="Skills" title="Capabilities aligned with modern marketing and communication roles" />
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              whileHover={{ y: -5 }}
              className="glass-card p-6"
            >
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
          <ul className="space-y-4 text-sm text-plum/85">
            <li className="flex gap-3"><Briefcase className="mt-1" size={16} />Represented Fonepay in the college community, acting as a direct brand touchpoint for students and prospects.</li>
            <li className="flex gap-3"><PlayCircle className="mt-1" size={16} />Created short videos, posters, and social content that improved awareness and interest in Fonepay-led promotions.</li>
            <li className="flex gap-3"><Stars className="mt-1" size={16} />Delivered engaging presentations and product demos that translated key features into student-friendly messaging.</li>
            <li className="flex gap-3"><ArrowRight className="mt-1" size={16} />Supported on-campus campaign activities and collaborated with the marketing team to maintain brand consistency.</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="section-shell pt-0">
        <SectionTitle eyebrow="Featured Projects" title="Marketing portfolio concepts with case-study structure" />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article key={project.title} whileHover={{ y: -6 }} className="glass-card p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-plum/80">{project.desc}</p>
              <p className="mt-3 text-sm font-semibold">Marketing Goal: <span className="font-normal text-plum/80">{project.goal}</span></p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-plum/10 px-3 py-1 text-xs">{skill}</span>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-dashed border-plum/20 p-3 text-xs text-plum/70">
                {caseStudy.join(' • ')}
              </div>
              <button className="mt-5 rounded-full bg-gradient-to-r from-rose to-lavender px-5 py-2 text-sm font-semibold text-white">Explore Project</button>
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
            <div key={cert} className="glass-card p-6 text-sm font-medium">{cert}</div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle eyebrow="Why Hire Me" title="Built for impact, ready to grow fast" />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Strong blend of digital communication and technical knowledge',
            'Hands-on promotional and content creation experience',
            'Strong presentation, collaboration, and people skills',
            'Eager to contribute, learn quickly, and grow in digital marketing roles'
          ].map((point) => (
            <div key={point} className="glass-card p-5 text-sm">{point}</div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle eyebrow="Personal Brand" title="“I create campaigns that make brands feel human, relevant, and unforgettable.”" />
      </section>

      <section id="contact" className="section-shell pt-0">
        <SectionTitle eyebrow="Contact" title="Let&apos;s build your next high-performing campaign" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card space-y-4 p-6 text-sm">
            <p className="flex items-center gap-3"><Mail size={16} /> adhikariprajawola@gmail.com</p>
            <p className="flex items-center gap-3"><Phone size={16} /> 976550972</p>
            <p className="flex items-center gap-3"><MapPin size={16} /> Pokhara</p>
          </div>
          <form className="glass-card space-y-4 p-6">
            <input placeholder="Your Name" className="w-full rounded-xl border border-plum/20 bg-white/80 px-4 py-3 text-sm outline-none" />
            <input placeholder="Your Email" className="w-full rounded-xl border border-plum/20 bg-white/80 px-4 py-3 text-sm outline-none" />
            <textarea rows="4" placeholder="Tell me about the role or project" className="w-full rounded-xl border border-plum/20 bg-white/80 px-4 py-3 text-sm outline-none" />
            <button className="w-full rounded-full bg-gradient-to-r from-rose to-lavender px-5 py-3 text-sm font-semibold text-white">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/60 py-10 text-center text-sm text-plum/80">
        <p className="font-medium">Prajawola Adhikari — Digital Marketing Portfolio</p>
        <p className="mt-2 text-xs">Designed with strategy, creativity, and recruiter-first storytelling.</p>
      </footer>
    </main>
  );
}
