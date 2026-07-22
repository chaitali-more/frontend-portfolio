import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Download, Code2 } from 'lucide-react';
import resumePdf from '../assets/pdf/chaitali-more-resume.pdf';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const wasOpen = isOpen;
    setIsOpen(false);
    document.body.style.overflow = '';

    if (href.startsWith('/')) {
      navigate(href);
      return;
    }

    if (location.pathname !== '/') {
      navigate(`/${href}`);
      return;
    }

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const scrollToTarget = () => {
      const target = document.querySelector(href);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    if (wasOpen) {
      setTimeout(scrollToTarget, 60);
    } else {
      scrollToTarget();
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ease-out border-b ${
          isScrolled
            ? 'top-4 max-w-6xl mx-auto px-4 md:px-6 bg-transparent border-transparent'
            : 'top-0 w-full bg-white/60 backdrop-blur-md border-slate-100 px-6 md:px-12'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ease-out flex items-center justify-between w-full border ${
            isScrolled
              ? 'bg-white/85 backdrop-blur-md border-slate-100 rounded-2xl shadow-lg shadow-primary/5 px-6 h-14'
              : 'bg-transparent border-transparent rounded-2xl lg:px-6 h-20 max-w-7xl'
          }`}
        >
          {/* Brand Logo */}
          <a
            id="brand-logo"
            href="#hero"
            className="flex items-center gap-2.5 group"
            onClick={(e) => handleLinkClick(e, '#hero')}
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-primary-hover flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:scale-105 transition-all duration-300">
              <Code2 size={18} className="stroke-[2.5]" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-lg font-display font-extrabold tracking-tight text-neutral-dark group-hover:text-primary transition-colors leading-none">
                Chaitali More
              </span>
              <span className="text-[11px] font-mono font-medium tracking-[1px] text-neutral-muted uppercase mt-0.5">
                Frontend Developer
              </span>
            </div>
          </a>

          {/* ── Desktop Navigation (unchanged) ── */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1 bg-neutral-dark/0 hover:bg-neutral-dark/[0.01] p-1 rounded-xl transition-all duration-300">
              {navLinks.map((link) => (
                <a
                  id={`nav-${link.name.toLowerCase()}`}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs font-sans font-semibold tracking-wider uppercase transition-colors duration-200 relative py-2 px-3.5 rounded-lg ${
                    activeSection === link.name.toLowerCase()
                      ? 'text-[#06B6D4]'
                      : 'text-neutral-muted hover:text-[#06B6D4] hover:bg-[#06B6D4]/5'
                  }`}
                >
                  {link.name}
                  {activeSection === link.name.toLowerCase() && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-[#06B6D4]/5 border border-[#06B6D4]/10 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>
            <div className="w-[1px] h-6 bg-[#0F172A]/20" />
            <button
              id="resume-btn"
              onClick={() => setShowResumeModal(true)}
              className="group relative overflow-hidden bg-[#0F172A] hover:bg-[#06B6D4] text-white px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md shadow-[#0F172A]/10 hover:shadow-lg hover:shadow-[#06B6D4]/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">Resume</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-neutral-dark hover:text-[#06B6D4] transition-colors focus:outline-none cursor-pointer p-1.5 rounded-lg hover:bg-[#06B6D4]/5"
            aria-label="Open Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Off-Canvas Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-neutral-dark/50 backdrop-blur-sm md:hidden"
            />

            {/* Drawer Panel */}
            <motion.div
              key="drawer-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[78vw] max-w-xs bg-white shadow-2xl flex flex-col md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-primary-hover flex items-center justify-center text-white shadow-md shadow-primary/20">
                    <Code2 size={15} className="stroke-[2.5]" />
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border-2 border-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-display font-extrabold tracking-tight text-neutral-dark leading-none">
                      Chaitali More
                    </span>
                    <span className="text-[10px] font-mono font-medium tracking-[1px] text-neutral-muted uppercase mt-0.5">
                      Frontend Developer
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-neutral-muted hover:text-neutral-dark hover:bg-neutral-dark/5 transition-colors cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6">
             
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      id={`mobile-nav-${link.name.toLowerCase()}`}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.055, duration: 0.25 }}
                      className={`flex items-center gap-3 text-sm font-sans font-semibold tracking-wide py-3 px-4 rounded-lg transition-all duration-200 ${
                        activeSection === link.name.toLowerCase()
                          ? 'text-[#06B6D4] bg-[#06B6D4]/8 border-l-[3px] border-[#06B6D4] pl-3.5'
                          : 'text-neutral-muted hover:text-[#06B6D4] hover:bg-[#06B6D4]/5'
                      }`}
                    >
                      {/* Active dot indicator */}
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                          activeSection === link.name.toLowerCase()
                            ? 'bg-[#06B6D4]'
                            : 'bg-neutral-dark/20'
                        }`}
                      />
                      {link.name}
                      
                    </motion.a>
                  ))}
                </div>
              </nav>

              {/* Drawer Footer – Resume CTA */}
              <div className="px-4 py-5 border-t border-slate-100">
                <motion.button
                  id="mobile-resume-btn"
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => setShowResumeModal(true), 200);
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full group relative overflow-hidden bg-[#0F172A] hover:bg-[#06B6D4] text-white py-3.5 rounded-xl font-bold tracking-wider uppercase text-xs cursor-pointer transition-all duration-300 shadow-lg shadow-[#0F172A]/10 flex items-center justify-center gap-2"
                >
                  <FileText size={15} />
                  View Resume
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Resume Option Modal (unchanged) ── */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResumeModal(false)}
              className="absolute inset-0 bg-neutral-dark/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-outline-variant overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                    <FileText size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-neutral-dark leading-tight">  Download Resume</h3>
                    <p className="text-xs text-neutral-muted"> Frontend Developer | UI/UX Enthusiast</p>
                  </div>
                </div>
                <button
                  id="close-resume-modal"
                  onClick={() => setShowResumeModal(false)}
                  className="p-1 hover:bg-surface-bg rounded text-neutral-muted hover:text-neutral-dark cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  id="resume-download-link"
                  href={resumePdf}
                  download="chaitali-more-resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setShowResumeModal(false)}
                  className="flex items-center justify-between p-4 bg-[#06B6D4]/5 hover:bg-[#06B6D4]/10 rounded-xl transition-all duration-200 text-neutral-dark group cursor-pointer text-left"
                >
                  <div className="flex items-center gap-3">
                    <Download className="text-[#06B6D4]" size={20} />
                    <div>
                      <h4 className="font-sans font-semibold text-sm">Download Resume</h4>
                      <p className="text-xs text-neutral-muted">Explore my professional background and expertise.</p>
                    </div>
                  </div>
                  <Download size={16} className="text-neutral-muted group-hover:text-[#06B6D4] transition-colors" />
                </a>
              </div>

            
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}