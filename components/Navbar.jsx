'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Me', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact Me', href: '/contact' }
];

export default function Navbar() {
  const pathname = usePathname() || '/';
  const normalizedPath = pathname.replace(/^\/portfolio/, '') || '/';

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(1150px,94%)] items-center justify-between gap-3 rounded-full border border-white/60 bg-white/70 px-4 py-3 shadow-lg backdrop-blur transition-colors dark:border-white/10 dark:bg-midnightCard/70 md:px-5">
      <Link href="/" className="shrink-0 text-sm font-bold tracking-wide text-plum dark:text-lavender">
        Prajowola.
      </Link>

      <nav className="flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto px-1 sm:gap-1.5 md:gap-2">
        {navItems.map((item) => {
          const isActive =
            normalizedPath === item.href ||
            (item.href === '/projects' && normalizedPath.startsWith('/games'));

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={`whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-medium transition md:text-sm ${
                isActive
                  ? 'bg-white/90 text-plum shadow-sm dark:bg-white/10 dark:text-lavender'
                  : 'text-plum/80 hover:bg-white/60 hover:text-plum dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-lavender'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex shrink-0 items-center gap-2">
        <ThemeToggle />
        <Link
          href="/contact"
          className="rounded-full bg-gradient-to-r from-rose to-lavender px-4 py-2 text-xs font-semibold text-white shadow-glow transition hover:brightness-105"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </header>
  );
}
