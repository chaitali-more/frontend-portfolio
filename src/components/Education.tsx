import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GraduationCap, Calendar, Star } from 'lucide-react';

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section
      id="education"
      ref={containerRef}
      className="py-24 border-t border-outline-variant/30 bg-surface-bg/30 relative"
    >
    

      {/* Same radial glow as Contact */}
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
          background: 'radial-gradient(circle at 100% 0%, rgba(6,182,212,0.06) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 0% 100%, rgba(15,23,42,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase font-sans text-neutral-dark">
            Education
          </p>
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          whileHover={{ 
            y: -4, 
            borderColor: 'rgba(6, 182, 212, 0.4)',
            boxShadow: '0 0 0 1px rgba(6,182,212,0.2), 0 12px 36px rgba(6,182,212,0.06), 0 2px 8px rgba(0,0,0,0.04)',
          }}
          className="group transition-all flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6 p-6 md:p-8 rounded-2xl"
          style={{
            background: '#ffffff',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'rgba(15,23,42,0.12)',
            boxShadow:
              '0 0 0 1px rgba(15,23,42,0.08), 0 8px 32px rgba(15,23,42,0.05), 0 2px 8px rgba(0,0,0,0.05)',
          }}
        >
          {/* Left — icon + degree info */}
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors"
              style={{
                background: 'rgba(6,182,212,0.08)',
                color: '#06B6D4',
              }}
            >
              <GraduationCap size={28} />
            </div>
            <div>
              <h3
                className="font-display font-bold text-lg md:text-xl"
                style={{ color: '#0F172A' }}
              >
                B.Tech in Computer Science and Engineering (CSE)
              </h3>
              <p className="text-sm md:text-base text-neutral-muted font-sans font-light mt-0.5">
                ITM Universe, Vadodara, Gujarat
              </p>
            </div>
          </div>

          {/* Right — badges */}
          <div className="flex items-center gap-3 md:self-center flex-wrap">
            {/* Score badge */}
            <div
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: 'rgba(6,182,212,0.08)',
                border: '1px solid rgba(6,182,212,0.2)',
                color: '#06B6D4',
              }}
            >
              <Star size={12} fill="currentColor" />
              <span>8.5 CGPA</span>
            </div>

            {/* Date badge */}
            <div
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(15,23,42,0.15)',
                color: '#0F172A',
              }}
            >
              <Calendar size={13} style={{ color: '#06B6D4' }} />
              <span>2017 - 2021</span>
            </div>

            {/* Duration badge */}
            <div
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: 'rgba(6,182,212,0.08)',
                border: '1px solid rgba(6,182,212,0.2)',
                color: '#06B6D4',
              }}
            >
              <span>4 Years</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}