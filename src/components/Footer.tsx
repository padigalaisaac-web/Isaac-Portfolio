import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data/personal';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-secondary border-t border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-border/80">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-base shadow-sm">
                I
              </div>
              <span className="font-extrabold text-heading text-lg tracking-tight">
                Padigala Isaac
              </span>
            </a>
            <p className="mt-2 text-xs sm:text-sm text-body max-w-sm">
              Software Engineer | Full Stack Developer | AI/ML Enthusiast based in Hyderabad, India.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-600" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-border text-slate-600 hover:text-heading hover:border-primary/40 shadow-subtle transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-border text-slate-600 hover:text-heading hover:border-primary/40 shadow-subtle transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalData.email}`}
              className="p-2.5 rounded-xl bg-white border border-border text-slate-600 hover:text-heading hover:border-primary/40 shadow-subtle transition-colors"
              title="Email Padigala Isaac"
              aria-label="Email Padigala Isaac"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-primary text-white hover:bg-primary-700 shadow-sm transition-colors ml-2 focus-visible:ring-2 focus-visible:ring-primary"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} Padigala Isaac. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Built with React, TypeScript &amp; Tailwind CSS</span>
            <span>•</span>
            <span className="text-primary font-semibold">Render Ready</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
