import SectionTitle from '@/components/SectionTitle';

const projects = [
  {
    title: 'Social Media Campaign Concept',
    objective: 'Increase adoption of a digital payment product among students.',
    audience: 'College students and young first-time digital payment users.',
    strategy: 'Short-form social content + campus ambassadors + incentive-driven calls-to-action.'
  },
  {
    title: 'Brand Awareness Content Series',
    objective: 'Boost youth engagement and recurring content interaction.',
    audience: 'Social-first youth audience in Pokhara.',
    strategy: 'Recurring poster/reel formats, story polls, and visual storytelling hooks.'
  },
  {
    title: 'SEO & Web Visibility Project',
    objective: 'Improve discoverability for a campaign landing experience.',
    audience: 'Users searching category keywords and brand-related queries.',
    strategy: 'Keyword mapping, on-page structure, and metadata optimization.'
  }
];

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="shell">
        <SectionTitle eyebrow="Projects" title="Marketing case-study style project portfolio" subtitle="Replace these placeholders with your real campaign case studies over time." />
        <div className="grid-3">
          {projects.map((project) => (
            <article key={project.title} className="glass card">
              <h3>{project.title}</h3>
              <p className="small"><strong>Objective:</strong> {project.objective}</p>
              <p className="small"><strong>Target Audience:</strong> {project.audience}</p>
              <p className="small"><strong>Strategy:</strong> {project.strategy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
