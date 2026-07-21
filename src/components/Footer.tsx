import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-outline-variant/30 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">

        {/* Copyright + Sitemap */}
        <p className="text-sm text-neutral-muted flex flex-wrap items-center justify-center sm:justify-start gap-x-1.5 gap-y-1">
          <span>© 2026 Chaitali More. All rights reserved.</span>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <Link
            to="/sitemap"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-semibold text-[#06B6D4] hover:text-[#0891B2] transition-colors"
          >
            Sitemap
          </Link>
        </p>

        {/* Social Icons + Back to Top */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/chaitali-more"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-neutral-muted hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A] transition-all duration-300"
          >
            <FaGithub size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/chaitali-more/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-neutral-muted hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300"
          >
            <FaLinkedin size={16} />
          </a>

          <div className="w-px h-5 bg-slate-200 mx-1" />

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-neutral-muted hover:bg-[#06B6D4] hover:text-white hover:border-[#06B6D4] transition-all duration-300"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
