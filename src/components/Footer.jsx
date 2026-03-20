import { Github, Linkedin, Twitter } from 'lucide-react';

const socials = [
  { icon: Twitter, href: 'https://x.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/auralislabs2025', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} auralislabs. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="icon-float w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-accent hover:border-accent/30 transition-all duration-200"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
