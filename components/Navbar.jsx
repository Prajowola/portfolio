'use client';

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Certifications', 'Contact'];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(1100px,92%)] items-center justify-between rounded-full border border-white/60 bg-white/70 px-5 py-3 shadow-lg backdrop-blur">
      <a href="#home" className="text-sm font-bold tracking-wide text-plum">Prajawola.</a>
      <nav className="hidden gap-4 lg:flex">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-xs font-medium text-plum/80 transition hover:text-plum">
            {link}
          </a>
        ))}
      </nav>
      <a href="#contact" className="rounded-full bg-gradient-to-r from-rose to-lavender px-4 py-2 text-xs font-semibold text-white shadow-glow">Let&apos;s Talk</a>
    </header>
  );
}
