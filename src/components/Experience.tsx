import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { experiences } from '../data';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-12 md:py-24 border-t border-outline-variant/30 bg-white"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6">
        {/* Label Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-12"
        >
          <p className="text-[11px] font-bold text-neutral-muted tracking-[0.2em] uppercase font-sans">
            Experience
          </p>
        </motion.div>

        {/* Timeline Stack Container */}
        <div className="relative pl-3.5 sm:pl-6 md:pl-8 space-y-6 sm:space-y-8 md:space-y-12 border-l border-outline-variant/80 ml-1 sm:ml-2">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={index}
              triggerInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  key?: any;
  exp: typeof experiences[0];
  index: number;
  triggerInView: boolean;
}

function ExperienceCard({ exp, index, triggerInView }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={triggerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index + 0.1 }}
      className="relative group"
    >
      {/* Timeline Bullet Anchor Dot */}
      <span
        className={`absolute -left-[19.5px] sm:-left-[31px] md:-left-[41px] top-4 sm:top-6 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 sm:border-4 border-white shadow-xs transition-all duration-300 ${
          index === 0 ? 'bg-primary ring-2 sm:ring-4 ring-primary/20' : 'bg-primary/30 ring-0'
        }`}
      />

      {/* Main card box */}
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-outline-variant/60 shadow-sm hover:shadow-md transition-shadow">
        {/* Card Header information */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2.5 sm:gap-4 mb-4 md:mb-6">
          <div className="space-y-1">
            <h3 className="font-display text-base sm:text-xl md:text-2xl font-bold text-neutral-dark leading-snug">
              {exp.role}
            </h3>
            <p className="text-primary font-sans text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-1.5">
              <Briefcase size={15} />
              {exp.company}
            </p>
          </div>

          {/* Period tag pill */}
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-neutral-muted bg-surface-container-low border border-outline-variant/40 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full font-medium self-start">
            <Calendar size={12} className="text-primary" />
            <span>{exp.period}</span>
          </div>
        </div>

        {/* Bullet listing details */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-x-8 md:gap-y-3 mb-5 md:mb-6">
          {exp.bullets.map((bullet, k) => (
            <li
              key={k}
              className="flex items-start gap-2.5 sm:gap-3 text-neutral-muted text-xs sm:text-sm font-sans font-light leading-relaxed group/item"
            >
              <CheckCircle
                size={15}
                className="text-primary group-hover/item:scale-110 transition-transform mt-0.5 shrink-0"
              />
              <span className="text-neutral-dark/80">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Render tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 md:pt-4 border-t border-outline-variant/50">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-surface-bg text-neutral-dark text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-md sm:rounded-lg border border-outline-variant"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
