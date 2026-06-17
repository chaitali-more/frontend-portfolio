import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { skillCategories } from '../data';
import { Award, Layers, Hammer, Sparkles } from 'lucide-react';

const columnIcons: Record<string, React.ReactNode> = {
  Core: <Award className="text-primary" size={20} />,
  Frameworks: <Layers className="text-primary" size={20} />,
  Tools: <Hammer className="text-primary" size={20} />,
};

const columnColors: Record<string, { bg: string; text: string; dot: string }> = {
  Core: {
    bg: 'bg-primary-container border-outline-variant hover:bg-primary/10',
    text: 'text-primary',
    dot: 'bg-primary',
  },
  Frameworks: {
    bg: 'bg-primary-container border-outline-variant hover:bg-primary/10',
    text: 'text-primary',
    dot: 'bg-primary',
  },
  Tools: {
    bg: 'bg-surface-bg border-outline-variant hover:bg-primary-container',
    text: 'text-neutral-dark',
    dot: 'bg-primary',
  },
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-24 border-t border-outline-variant/30 bg-surface-bg/30 relative"
    >
      <div className="max-w-7xl mx-auto px-6 scroll-reveal">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[11px] font-bold text-neutral-muted tracking-[0.2em] uppercase">
            Tech Stack
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {skillCategories.map((category, colIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * colIdx + 0.1 }}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-outline-variant/50">
                <span className="p-2 bg-primary-container border border-outline-variant rounded-lg shadow-sm">
                  {columnIcons[category.title] || <Award size={18} />}
                </span>

                <h3 className="font-display font-semibold text-xl text-neutral-dark">
                  {category.title}
                </h3>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => {
                  const styleRef = columnColors[category.title] || {
                    bg: 'bg-neutral-50 border-neutral-100',
                    text: 'text-neutral-700',
                    dot: 'bg-neutral-400',
                  };

                  return (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 25,
                      }}
                      className={`
                        inline-flex items-center gap-1.5
                        px-4 py-2
                        border rounded-full
                        text-sm font-medium
                        transition-all duration-300
                        hover:shadow-md
                        cursor-help
                        ${styleRef.bg}
                        ${styleRef.text}
                      `}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${styleRef.dot}`}
                      />
                      <span>{skill}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Note */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 border-l-4 border-primary pl-5 py-3 pr-4 flex items-center gap-2.5 bg-primary-container rounded-r-xl max-w-4xl"
        >
          <Sparkles
            size={16}
            className="text-primary animate-pulse flex-shrink-0"
          />

          <p className="italic text-neutral-dark text-sm md:text-base font-light">
    Building modern web experiences while exploring the intersection of front-end development and AI.

</p>
        </motion.div>
      </div>
    </section>
  );
}
