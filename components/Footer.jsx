import { Instagram, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:adhikariprajawolla@gmail.com',
    icon: Mail
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prajawolla-adhikari-597888335/',
    icon: Linkedin
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/prajowola_adhikary',
    icon: Instagram
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/60 py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-plum/80 md:flex-row md:px-10">
        <p>© {new Date().getFullYear()} Prajawola Adhikari. All rights reserved.</p>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-full border border-white/70 bg-white/70 p-2 transition hover:-translate-y-0.5 hover:text-plum"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
