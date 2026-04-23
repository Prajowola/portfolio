import Link from 'next/link';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { withBasePath } from '@/lib/site';

export default function HomePage() {
  return (
    <section className="section hero">
      <div className="shell hero-grid">
        <div>
          <p className="eyebrow">Digital Marketing Portfolio</p>
          <h1 className="h1">Prajawola Adhikari</h1>
          <p className="sub">Aspiring Digital Marketer · Content Creator · Brand Promotion Enthusiast</p>
          <p className="lead">
            Motivated and detail-oriented Bachelor of Information Management student with a strong foundation in digital marketing, communication, and web technologies. I help brands communicate clearly and engage audiences through strategic digital content.
          </p>

          <div className="row" style={{ marginTop: 18 }}>
            <Link href="/projects" className="btn btn-primary">Explore Projects <ArrowRight size={14} /></Link>
            {/* Replace public/resume.pdf with your real resume file and keep the same filename/path. */}
            <a href={withBasePath('/resume.pdf')} className="btn"><Download size={14} /> Download Resume</a>
            <Link href="/contact" className="btn">Contact Me</Link>
          </div>
        </div>

        <div className="glass card photo-card">
          <p className="eyebrow"><Sparkles size={13} /> Professional Photo</p>
          {/* Replace /public/profile-placeholder.svg with your real profile image. */}
          <img src={withBasePath('/profile-placeholder.svg')} alt="Profile placeholder" className="profile-img" />
          <p className="small">Replace this placeholder with your professional headshot for stronger recruiter impact.</p>
        </div>
      </div>
    </section>
  );
}
