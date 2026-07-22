import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa6';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-12 md:py-24 relative"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl sm:rounded-3xl text-center relative overflow-hidden p-6 sm:p-12 md:p-16"
          style={{
            background: '#ffffff',
            border: '1px solid rgba(15, 23, 42, 0.15)',
            boxShadow:
              '0 0 0 1px rgba(15,23,42,0.08), 0 20px 60px rgba(15,23,42,0.06), 0 4px 16px rgba(0,0,0,0.06)',
          }}
        >
          {/* Grid background — dark lines on white */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Soft radial tint from center */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(15,23,42,0.04) 0%, transparent 70%)',
            }}
          />

          {/* Corner tints */}
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 100% 0%, rgba(6,182,212,0.06) 0%, transparent 60%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 0% 100%, rgba(15,23,42,0.05) 0%, transparent 60%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 sm:space-y-8 relative z-10 max-w-2xl mx-auto"
          >
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight"
              style={{ color: '#0F172A' }}
            >
              Let&apos;s Build Something{' '}
              <br className="hidden sm:inline" />
              <span className="text-primary">Great Together</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-muted font-sans font-light leading-relaxed">
              Open to full-time Frontend Developer roles and freelance collaborations. If you're looking for someone who can transform designs into fast, responsive, and pixel-perfect interfaces, let's connect.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto">
              <a
                id="email-me-link"
                href="mailto:chaitalicoding@gmail.com"
                className="w-full sm:w-auto justify-center group relative overflow-hidden bg-[#0F172A] hover:bg-[#06B6D4] text-white px-6 py-3 rounded-xl text-sm font-semibold tracking-wide shadow-lg shadow-[#0F172A]/10 hover:shadow-xl hover:shadow-[#06B6D4]/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer flex items-center gap-2.5"
              >
                <FaEnvelope size={18} />
                Email Me
              </a>
              <a
                id="linkedin-profile-link"
                href="https://www.linkedin.com/in/chaitali-more/"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto justify-center flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide border border-slate-200 hover:border-[#06B6D4] hover:text-[#06B6D4] bg-white text-[#0F172A] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-md cursor-pointer"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}