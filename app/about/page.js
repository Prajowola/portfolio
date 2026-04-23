import SectionTitle from '@/components/SectionTitle';

const skills = [
  { title: 'Digital Marketing', items: ['SEO Strategies', 'Content Promotion', 'Brand Awareness', 'Campaign Support'] },
  { title: 'Technical Skills', items: ['HTML', 'CSS', 'JavaScript', 'Web Development'] },
  { title: 'Professional Skills', items: ['Communication', 'Customer Service', 'Sales Strategy', 'Goal-Oriented Mindset', 'Organisation'] },
  { title: 'Tools', items: ['Microsoft Office'] }
];

export default function AboutPage() {
  return (
    <section className="section">
      <div className="shell">
        <SectionTitle eyebrow="About Me" title="Recruiter-friendly snapshot of my profile" subtitle="I combine communication, campaign support, and technical awareness to contribute effectively in digital marketing roles." />

        <div className="grid-2">
          {skills.map((group) => (
            <article key={group.title} className="glass card">
              <h3>{group.title}</h3>
              <div className="chips">{group.items.map((item) => <span key={item} className="chip">{item}</span>)}</div>
            </article>
          ))}
        </div>

        <div className="section-tight">
          <div className="glass card">
            <h3>Experience</h3>
            <p className="small"><strong>Product Ambassador Intern — Fonepay</strong> · Pokhara, Gandaki · July 2025 – September 2025</p>
            <ul className="list">
              <li>Represented Fonepay in the college community and improved student-level product awareness.</li>
              <li>Produced promotional videos, posters, and social content for on-campus campaigns.</li>
              <li>Delivered presentations and demonstrations to communicate product value clearly.</li>
            </ul>
          </div>
        </div>

        <div className="grid-2 section-tight">
          <article className="glass card">
            <h3>Education</h3>
            <p className="small"><strong>Bachelor of Information Management</strong></p>
            <p className="small">Kanya Campus Pokhara</p>
            <p className="small">Expected Graduation: November 2026</p>
          </article>
          <article className="glass card">
            <h3>Certifications</h3>
            <ul className="list">
              <li>Certificate of Participation – Amazon AWS UG Women in Tech Meetup</li>
              <li>Workshop Completion – Python and FastAPI</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
