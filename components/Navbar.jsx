'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { withBasePath } from '@/lib/site';

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Certifications', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = links.map((label) => document.getElementById(label.toLowerCase())).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto w-[min(1160px,94%)] rounded-2xl border border-white/60 bg-white/70 px-4 py-3 shadow-lg backdrop-blur md:rounded-full md:px-5">
      <div className="flex items-center justify-between">
        <a href="#home" className="text-sm font-bold tracking-wide text-plum">Prajawola.</a>

        <nav className="hidden gap-4 lg:flex">
          {links.map((link) => {
            const id = link.toLowerCase();
            const isActive = active === id;
            return (
              <a key={link} href={`#${id}`} className={`text-xs font-medium transition ${isActive ? 'text-plum' : 'text-plum/70 hover:text-plum'}`}>
                {link}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={withBasePath('/resume.pdf')} className="hidden rounded-full bg-gradient-to-r from-rose to-lavender px-4 py-2 text-xs font-semibold text-white shadow-glow sm:inline-block">
            Resume
          </a>
          <button className="rounded-lg border border-plum/20 p-2 lg:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle navigation menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-3 grid gap-2 rounded-xl border border-white/60 bg-white/80 p-3 lg:hidden">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-plum/80 hover:bg-white">
              {link}
            </a>
          ))}
          <a href={withBasePath('/resume.pdf')} className="rounded-lg bg-gradient-to-r from-rose to-lavender px-3 py-2 text-center text-sm font-semibold text-white">
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
