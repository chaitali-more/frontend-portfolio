import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { experiences } from '../data';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-16 md:py-24 border-t border-outline-variant/30 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 scroll-reveal">
        {/* Label Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <p className="text-[11px] font-bold text-neutral-muted tracking-[0.2em] uppercase font-sans">
            Experience
          </p>
        </motion.div>

        {/* Timeline Stack Container */}
        <div className="relative pl-8 space-y-8 md:space-y-12 border-l border-outline-variant/80 ml-2">
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
      initial={{ opacity: 0, x: 30 }}
      animate={triggerInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 * index + 0.2 }}
      className="relative group scroll-depth-card"
    >
      {/* Timeline Bullet Anchor Dot */}
      <span
        className={`absolute -left-[41px] top-6 w-4 h-4 rounded-full border-4 border-white shadow-md transition-all duration-300 ${
          index === 0 ? 'bg-primary ring-4 ring-primary/20' : 'bg-primary/25 ring-0'
        }`}
      />

      {/* Main card box */}
      <div className="bg-white p-5 md:p-8 rounded-2xl border border-outline-variant/60 shadow-sm hover:shadow-md transition-shadow">
        {/* Card Header information */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4 md:mb-6">
          <div className="space-y-1">
            <h3 className="font-display text-lg md:text-2xl font-bold text-neutral-dark">
              {exp.role}
            </h3>
            <p className="text-primary font-sans font-semibold tracking-wide flex items-center gap-1.5">
              <Briefcase size={16} />
              {exp.company}
            </p>
          </div>

          {/* Period tag pill */}
          <div className="inline-flex items-center gap-1.5 text-xs text-neutral-muted bg-surface-container-low border border-outline-variant/40 px-3.5 py-1.5 rounded-full font-medium sm:self-start">
            <Calendar size={13} className="text-primary" />
            <span>{exp.period}</span>
          </div>
        </div>

        {/* Bullet listing details */}
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5 mb-6">
          {exp.bullets.map((bullet, k) => (
            <li
              key={k}
              className="flex items-start gap-3 text-neutral-muted text-sm font-sans font-light leading-relaxed group/item"
            >
              <CheckCircle
                size={16}
                className="text-primary group-hover/item:scale-110 transition-transform mt-0.5 shrink-0"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Render tags */}
        <div className="flex flex-wrap gap-2 pt-3 md:pt-4 border-t border-outline-variant/50">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-surface-bg text-neutral-dark text-[10px] font-bold uppercase tracking-wider rounded-lg border border-outline-variant"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
