import { Briefcase, GraduationCap, Award } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const skillGroups = [
  { title: 'Digital Marketing', items: ['SEO Strategies', 'Content Promotion', 'Brand Awareness', 'Campaign Support'] },
  { title: 'Technical Skills', items: ['HTML', 'CSS', 'JavaScript', 'Web Development'] },
  { title: 'Professional Skills', items: ['Communication', 'Customer Service', 'Sales Strategy', 'Goal-Oriented Mindset', 'Organization'] },
  { title: 'Tools', items: ['Microsoft Office'] }
];

const certifications = [
  'Certificate of Participation – Amazon AWS UG Women in Tech Meetup',
  'Workshop Completion – Python and FastAPI'
];

export default function AboutPage() {
  return (
    <section className="pb-20">
      <div className="section-shell space-y-10">
        <SectionTitle
          eyebrow="About Me"
          title="Recruiter-friendly snapshot of my profile"
          subtitle="I combine communication, campaign support, and technical awareness to contribute effectively in digital marketing roles."
        />

        <div className="glass-card p-7">
          <p className="text-base leading-relaxed text-plum/85">
            I am currently pursuing a Bachelor of Information Management at Kanya Campus Pokhara. My focus is on blending
            digital creativity with practical execution across social media campaigns, promotional storytelling, and
            audience engagement.
          </p>
        </div>

        <section>
          <SectionTitle eyebrow="Skills" title="Capabilities aligned with modern marketing roles" />
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="glass-card p-6">
                <h3 className="mb-4 text-xl font-semibold">{group.title}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-plum/20 bg-white/75 px-3 py-1.5 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="Experience" title="Product Ambassador Intern — Fonepay" subtitle="Pokhara, Gandaki | July 2025 – September 2025" />
          <article className="glass-card p-7">
            <ul className="space-y-4 text-sm text-plum/85">
              <li className="flex gap-3"><Briefcase className="mt-1" size={16} />Represented Fonepay in the college community and improved student-level product awareness.</li>
              <li className="flex gap-3"><Briefcase className="mt-1" size={16} />Produced promotional videos, posters, and social content for on-campus campaigns.</li>
              <li className="flex gap-3"><Briefcase className="mt-1" size={16} />Delivered presentations and demonstrations to communicate product value clearly.</li>
            </ul>
          </article>
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="glass-card p-7">
            <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold"><GraduationCap size={18} />Education</h3>
            <p className="text-sm text-plum/85"><strong>Bachelor of Information Management</strong></p>
            <p className="text-sm text-plum/80">Kanya Campus Pokhara</p>
            <p className="text-sm text-plum/80">Expected Graduation: November 2026</p>
          </article>

          <article className="glass-card p-7">
            <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold"><Award size={18} />Certifications</h3>
            <ul className="space-y-2 text-sm text-plum/85">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
