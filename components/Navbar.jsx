'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Me', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact Me', href: '/contact' }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="nav glass">
      <div className="nav-row">
        <Link className="brand" href="/">Prajawola.</Link>
        <nav className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? 'active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
