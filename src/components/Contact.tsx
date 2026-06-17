import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa6';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section
      id="contact"
      ref={containerRef}
      className="pb-24 pt-12 relative"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl text-center relative overflow-hidden"
          style={{
            background: '#ffffff',
            border: '1px solid rgba(99, 87, 220, 0.18)',
            boxShadow:
              '0 0 0 1px rgba(99,87,220,0.08), 0 20px 60px rgba(99,87,220,0.10), 0 4px 16px rgba(0,0,0,0.06)',
            padding: '4rem 2rem',
          }}
        >
          {/* Grid background — dark lines on white */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(99,87,220,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,87,220,0.07) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Soft radial purple tint from center */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(99,87,220,0.06) 0%, transparent 70%)',
            }}
          />

          {/* Corner tints */}
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 100% 0%, rgba(192,132,252,0.08) 0%, transparent 60%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 0% 100%, rgba(99,87,220,0.07) 0%, transparent 60%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8 relative z-10 max-w-2xl mx-auto"
          >
            <h2
              className="font-display text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tighter"
              style={{ color: '#1a1a2e' }}
            >
              Let&apos;s Build Something{' '} <br/>
              <span className='text-primary'
              >
                Great Together
              </span>
              
            </h2>

            <p className="text-base text-neutral-muted font-sans font-light leading-relaxed">
              Open to full-time Frontend Developer roles and freelance collaborations. If you're looking for someone who can transform designs into fast, responsive, and pixel-perfect interfaces, let's connect.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                id="email-me-link"
                href="mailto:chaitalicoding@gmail.com"
                className="group relative overflow-hidden bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                <FaEnvelope size={18} />
                Email Me
              </a>
              <a
                id="linkedin-profile-link"
                href="https://www.linkedin.com/in/chaitali-more/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(99,87,220,0.25)',
                  color: '#6357dc',
                }}
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