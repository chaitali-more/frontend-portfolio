import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { stats } from '../data';
import { Award, Zap, Monitor, Sparkles } from 'lucide-react';

const iconsMap: Record<string, React.ReactNode> = {
  '200+': <Award className="text-primary" size={20} />,
  '4+': <Zap className="text-primary" size={20} />,
  '15+': <Monitor className="text-primary" size={20} />,
  'Technologies & Tools': <Monitor className="text-primary" size={20} />,
  '100%': <Sparkles className="text-primary" size={20} />,
};

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-16 md:py-24 border-t border-outline-variant/30 bg-surface-bg/30 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4 md:mb-8"
        >
          <p className="text-[11px] font-bold text-neutral-muted tracking-[0.2em] uppercase font-sans">
            About Me
          </p>
        </motion.div>

        {/* Layout Grid — left scrolls, right sticks */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-16 items-start">

          {/* Left Column: Biography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7 space-y-8"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold leading-tight text-neutral-dark tracking-tight">
              Passionate about turning great design into even better experiences.
            </h2>

            {/* Bio paragraphs with left accent line */}
            <div className="space-y-4 border-l-2 border-primary/20 pl-5">
              <p className="text-base text-neutral-muted font-sans font-light leading-relaxed">
 I'm a Frontend Developer with 4+ years of experience building responsive, user-friendly websites and web applications. I enjoy transforming designs into clean, pixel-perfect interfaces with a strong focus on performance, usability, and accessibility.
</p>
<p className="text-base text-neutral-muted font-sans font-light leading-relaxed">
Over the years, I've delivered 200+ projects across various industries, working with modern technologies and ensuring every project is responsive, optimized, and easy to maintain.
</p>

            </div>

            {/* Skills chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['React.js', 'Tailwind CSS', 'TypeScript', 'Figma',  'Performance',  'SEO'].map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium font-sans px-3 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/15 tracking-wide"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Sticky Stats */}
          <div className="md:col-span-5 md:sticky md:top-28 self-start">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} triggerInView={isInView} />
              ))}
            </div>

            {/* Availability badge below stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-4 flex items-center gap-3 p-4 rounded-xl border border-outline-variant/60 bg-white shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <p className="text-sm text-neutral-muted font-sans">
                <span className="font-semibold text-neutral-dark">Available for work</span> — open to freelance & full-time
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: typeof stats[0];
  index: number;
  triggerInView: boolean;
}

function StatCard({ stat, index, triggerInView }: StatCardProps) {
  const [count, setCount] = useState(0);

  const valueNumber = parseFloat(stat.value.replace(/[^0-9.]/g, '')) || 0;
  const isAward = stat.value === 'A+';

  useEffect(() => {
    if (!triggerInView) return;
    if (isAward) { setCount(100); return; }

    let start = 0;
    const end = valueNumber;
    const totalSteps = (1500) / 30;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { clearInterval(timer); setCount(end); }
      else { setCount(Math.floor(start)); }
    }, 30);

    return () => clearInterval(timer);
  }, [triggerInView, valueNumber, isAward]);

  const outputValue = isAward
    ? 'A+'
    : stat.value.includes('%')
      ? `${count}%`
      : stat.value.includes('+')
        ? `${count}+`
        : stat.value.includes('h')
          ? `${count}h`
          : `${count}`;

  const labels: Record<string, string> = {
    '200+': 'Projects',
    '4+': 'Years Exp',
    '15+': 'Tech & Tools',
    'Technologies & Tools': 'Tech & Tools',
    '100%': 'Responsive UI',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={triggerInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index + 0.2 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white p-5 rounded-xl border border-outline-variant/60 shadow-sm flex flex-col justify-between min-h-[130px] group transition-all cursor-default"
    >
      <div className="p-2 bg-primary/5 group-hover:bg-primary/10 rounded-lg w-fit text-primary transition-colors">
        {iconsMap[stat.label] || <Award size={20} />}
      </div>
      <div>
        <h3 className="font-display text-3xl font-extrabold text-primary mb-0.5 tabular-nums">
          {outputValue}
        </h3>
        <p className="text-[11px] text-neutral-muted font-sans font-semibold uppercase tracking-[0.1em]">
          {labels[stat.label] ?? stat.label}
        </p>
      </div>
    </motion.div>
  );
}