'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { withBasePath } from '@/lib/site';

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Certifications', 'Contact'];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const targets = links.map((l) => document.getElementById(l.toLowerCase())).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-35% 0px -55% 0px' });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav glass">
      <div className="nav-row">
        <a className="brand" href="#home">Prajawola.</a>

        <nav className="nav-links">
          {links.map((link) => {
            const id = link.toLowerCase();
            return (
              <a key={link} href={`#${id}`} className={active === id ? 'active' : ''}>{link}</a>
            );
          })}
        </nav>

        <a className="btn btn-primary" href={withBasePath('/resume.pdf')}>Resume</a>

        <button className="mobile-btn" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu glass">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>
          ))}
        </div>
      )}
    </header>
  );
}
