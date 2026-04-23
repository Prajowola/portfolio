import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-row">
        <p>© {new Date().getFullYear()} Prajawola Adhikari. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:adhikariprajawolla@gmail.com" aria-label="Email"><Mail size={16} /></a>
          <a href="https://www.linkedin.com/in/prajawolla-adhikari-597888335/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
          <a href="https://www.instagram.com/prajowola_adhikary" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
