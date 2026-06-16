'use client';

import SectionTitle from '@/components/SectionTitle';
import FadeIn from '@/components/FadeIn';

const projects = [
  {
    title: 'Social Media Campaign Concept',
    objective: 'Increase adoption of a digital payment product among students.',
    audience: 'College students and young first-time digital payment users.',
    strategy: 'Short-form social content + campus ambassadors + incentive-driven calls-to-action.',
    contentApproach: 'Reels, testimonial snippets, poster carousels, and event-based story formats.',
    expectedOutcome: 'Higher awareness, increased trial sign-ups, and stronger month-over-month student engagement.',
    skillsUsed: ['Campaign Planning', 'Content Strategy', 'Audience Targeting']
  },
  {
    title: 'Brand Awareness Content Series',
    objective: 'Boost youth engagement and recurring content interaction.',
    audience: 'Social-first youth audience in Pokhara.',
    strategy: 'Recurring poster/reel formats, story polls, and visual storytelling hooks.',
    contentApproach: 'Weekly themes with static and video assets mapped to engagement goals.',
    expectedOutcome: 'Improved engagement rate consistency and stronger audience recall.',
    skillsUsed: ['Visual Branding', 'Social Content', 'Storytelling']
  },
  {
    title: 'SEO & Web Visibility Project',
    objective: 'Improve discoverability for a campaign landing experience.',
    audience: 'Users searching category keywords and brand-related queries.',
    strategy: 'Keyword mapping, on-page structure, and metadata optimization.',
    contentApproach: 'Search-intent-aligned page copy, structured headings, and SEO-friendly media tags.',
    expectedOutcome: 'Better organic impressions, stronger click-through intent, and improved discoverability.',
    skillsUsed: ['SEO Basics', 'On-Page Optimization', 'Keyword Research']
  }
];

export default function ProjectsPage() {
  return (
    <section className="pb-20">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Projects"
          title="Marketing case-study portfolio"
          subtitle="Selected campaign concepts presented in a structured case-study format."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={0.1 * i}>
              <article className="glass-card h-full p-6 transition hover:-translate-y-1.5">
                <h3 className="text-xl font-semibold text-plum dark:text-white">{project.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-plum/85 dark:text-white/80">
                  <li><strong className="text-plum dark:text-white">Objective:</strong> {project.objective}</li>
                  <li><strong className="text-plum dark:text-white">Target Audience:</strong> {project.audience}</li>
                  <li><strong className="text-plum dark:text-white">Strategy:</strong> {project.strategy}</li>
                  <li><strong className="text-plum dark:text-white">Content Approach:</strong> {project.contentApproach}</li>
                  <li><strong className="text-plum dark:text-white">Expected Outcome:</strong> {project.expectedOutcome}</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skillsUsed.map((skill) => (
                    <span key={skill} className="rounded-full bg-plum/10 px-3 py-1 text-xs font-medium text-plum/85 dark:bg-white/10 dark:text-white/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
