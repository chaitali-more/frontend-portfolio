import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
   <footer className="border-t border-outline-variant/30 py-4">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
    
    <p className="text-sm text-neutral-muted">
      © 2026 Chaitali More. All rights reserved.
    </p>

    <div className="flex items-center gap-5">
   <div className="flex items-center gap-3">
  <a
    href="https://github.com/chaitali-more"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-muted hover:bg-neutral-900 hover:text-white transition-all duration-300"
  >
    <FaGithub size={18} />
  </a>

  <a
    href="https://www.linkedin.com/in/chaitali-more/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-muted hover:bg-neutral-900 hover:text-white transition-all duration-300"
  >
    <FaLinkedin size={18} />
  </a>

  <button
    onClick={scrollToTop}
    aria-label="Back to top"
    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-muted hover:bg-neutral-900 hover:text-white transition-all duration-300"
  >
    <ArrowUp size={18} />
  </button>
</div>
    </div>
  </div>
</footer>
  );
}
