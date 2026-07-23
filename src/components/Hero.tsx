import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Code2, Globe, Zap, RotateCcw } from 'lucide-react';
import { FaReact } from 'react-icons/fa6';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiShopify, 
  SiFigma, SiGoogle, SiDotnet, SiJavascript, SiHtml5, 
  SiCss, SiBootstrap, SiJquery, SiWordpress, SiGithub 
} from 'react-icons/si';
import resumePdf from '../assets/pdf/more-chaitali-resume.pdf';

const rotatingWords = ['scale.', 'perform.', 'convert.', 'impress.', 'grow.'];

// Full 16 tech stack categorized for the marquee columns
const col1Tech = [
  { name: 'React.js', Icon: FaReact, color: '#61DAFB', cat: 'Framework' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#000000', cat: 'Framework' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', cat: 'Language' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', cat: 'Styling' },
  { name: 'Redux Toolkit', Icon: SiRedux, color: '#764ABC', cat: 'State' },
];

const col2Tech = [
  { name: 'Shopify Liquid', Icon: SiShopify, color: '#96BF48', cat: 'CMS' },
  { name: 'ASP.NET', Icon: SiDotnet, color: '#512BD4', cat: 'Backend' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', cat: 'Language' },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26', cat: 'Language' },
  { name: 'CSS3', Icon: SiCss, color: '#1572B6', cat: 'Styling' },
];

const col3Tech = [
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E', cat: 'Design' },
  { name: 'SEO & Vitals', Icon: SiGoogle, color: '#4285F4', cat: 'Marketing' },
  { name: 'WordPress', Icon: SiWordpress, color: '#21759B', cat: 'CMS' },
  { name: 'Git & GitHub', Icon: SiGithub, color: '#181717', cat: 'DevOps' },
  { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3', cat: 'Styling' },
  { name: 'jQuery', Icon: SiJquery, color: '#0769AD', cat: 'Library' },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  // For 3D Tilt Parallax Effect on the Browser Mockup
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse spotlight tracking
  const spotX = useSpring(0, { damping: 35, stiffness: 90 });
  const spotY = useSpring(0, { damping: 35, stiffness: 90 });

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [6, -6]), { damping: 25, stiffness: 120 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-6, 6]), { damping: 25, stiffness: 120 });

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (heroRef.current && e.touches[0]) {
      const rect = heroRef.current.getBoundingClientRect();
      spotX.set(e.touches[0].clientX - rect.left);
      spotY.set(e.touches[0].clientY - rect.top);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      spotX.set(e.clientX - rect.left);
      spotY.set(e.clientY - rect.top);
    }
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#F8FAFC] overflow-hidden border-b border-slate-100 flex flex-col justify-center min-h-[92vh] md:min-h-screen"
    >
      {/* ── 1. Animated Glowing Gradient Orbs (Vibrant & Visible on Mobile + Desktop) ── */}
      <motion.div
        animate={{
          x: [0, 45, -35, 0],
          y: [0, -40, 25, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-10 left-[5%] sm:left-[10%] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-gradient-to-tr from-[#06B6D4]/30 via-[#38BDF8]/25 to-transparent rounded-full blur-2xl sm:blur-3xl pointer-events-none z-0 opacity-80"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 45, -30, 0],
          scale: [1, 0.85, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[5%] right-[5%] sm:right-[10%] w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] bg-gradient-to-br from-[#6366F1]/20 via-[#06B6D4]/25 to-sky-300/20 rounded-full blur-2xl sm:blur-3xl pointer-events-none z-0 opacity-80"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-radial from-[#06B6D4]/20 via-cyan-100/30 to-transparent rounded-full blur-3xl pointer-events-none z-0"
      />

      {/* ── 2. Interactive Spotlight Glow (Mobile Touch & Desktop Cursor) ── */}
      <motion.div
        className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full blur-2xl z-0"
        style={{
          left: spotX,
          top: spotY,
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(99, 102, 241, 0.12) 40%, transparent 70%)',
        }}
      />

      {/* ── 3. Dotted Grid Overlay with Subtle Contrast ── */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-70 pointer-events-none z-0" />

      {/* ── 5. Ambient Floating Glassmorphic Skill Pills (Subtle, Compact & Balanced) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden md:block">
        {[
          { label: '✨ Pixel-Perfect UI', left: '6%', top: '90%', duration: 12, delay: 0 },
          { label: '🚀 Responsive Design', left: '80%', top: '22%', duration: 15, delay: 1 },
          { label: '⚡ Fast Performance', left: '76%', top: '84%', duration: 14, delay: 2 },
        ].map((p, i) => (
          <motion.div
            key={`hero-floating-pill-${i}`}
            initial={{ opacity: 0.7, y: 0 }}
            animate={{
              y: [-8, 8, -8],
              x: [-4, 4, -4],
              opacity: [0.7, 0.95, 0.7],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
            className="absolute font-sans text-[10px] sm:text-[11px] font-medium text-slate-700 select-none tracking-wide bg-white/70 border border-slate-200/80 shadow-xs backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5"
            style={{ left: p.left, top: p.top }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#06B6D4]" />
            </span>
            <span>{p.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Two-column Hero container */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
        {/* LEFT COLUMN: Text & CTAs */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left items-start space-y-6 md:space-y-8">
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0F172A]/5 border border-[#0F172A]/15 rounded-full shadow-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4]/40 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0F172A]"></span>
            </span>
            <p className="text-[10px] md:text-[11px] font-mono font-bold tracking-wider text-[#0F172A] uppercase">
              Frontend Developer • React • Next.js
            </p>
          </motion.div>

          {/* Large Premium Heading */}
          <div className="space-y-4 md:space-y-5 max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-[3.5rem] lg:leading-[1.12] font-extrabold tracking-tight text-[#0F172A]"
            >
              Hi, I'm Chaitali More.
              <br />
              Building React apps that{' '}
              <span className="inline-block relative text-[#0F172A] min-w-[100px] sm:min-w-[170px] md:min-w-[200px] text-left align-baseline">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="bg-gradient-to-r from-[#0E7490] via-[#0891B2] to-[#0369A1] bg-clip-text text-transparent font-extrabold block pb-3 pt-1 -mb-3"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#64748B] font-sans font-light leading-relaxed max-w-xl"
            >
              Frontend Developer with 4+ years of experience developing responsive, high-performance web applications using React.js and ASP.NET (ASPX). Delivered 200+ projects, improved performance by up to 40%, and achieved 90+ SEO scores.
            </motion.p>
          </div>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-start justify-start w-full sm:w-auto"
          >
            <a
              id="see-work-btn"
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="
                bg-[#0F172A]
                hover:bg-[#06B6D4]
                text-white
                text-center
                px-8
                py-4
                rounded-2xl
                text-sm
                font-bold
                tracking-wider
                uppercase
                shadow-lg
                shadow-[#0F172A]/10
                hover:shadow-xl
                hover:shadow-[#06B6D4]/20
                hover:-translate-y-0.5
                active:translate-y-px
                flex
                items-center
                justify-center
                gap-2
                transition-all
                duration-300
                w-full
                sm:w-auto
                group
                cursor-pointer
              "
            >
              <span>View Projects</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              id="download-resume-btn"
              href={resumePdf}
              download="more-chaitali-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                border-2
                border-slate-200
                bg-transparent
                hover:border-[#06B6D4]
                hover:text-[#06B6D4]
                text-[#0F172A]
                text-center
                px-8
                py-3.5
                rounded-2xl
                text-sm
                font-bold
                tracking-wider
                uppercase
                hover:-translate-y-0.5
                active:translate-y-px
                flex
                items-center
                justify-center
                gap-2
                transition-all
                duration-300
                w-full
                sm:w-auto
                cursor-pointer
              "
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Premium Tech Stack Dashboard Browser Mockup — hidden on mobile & tablet */}
        <div className="hidden lg:flex lg:col-span-6 items-center justify-center w-full relative">
          <motion.div
            ref={cardRef}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="w-full relative max-w-[480px] aspect-[4/3.1] rounded-3xl border border-slate-200/60 bg-white/40 shadow-2xl shadow-slate-100 backdrop-blur-md overflow-hidden flex flex-col group/mockup"
          >
            {/* Interactive Browser Top Bar */}
            <div className="h-10 px-4 bg-slate-50/80 border-b border-slate-200/50 flex items-center justify-between z-20">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 shadow-sm" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 shadow-sm" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80 shadow-sm" />
              </div>
              <div className="bg-white/80 border border-slate-200/40 px-5 py-0.5 rounded-md text-[9px] font-mono text-neutral-muted w-44 text-center truncate select-none shadow-sm flex items-center justify-center gap-1.5">
                <span className="w-1 h-1 bg-[#06B6D4] rounded-full animate-ping" />
                chaitali.dev/stack
              </div>
              <RotateCcw size={11} className="text-slate-400" />
            </div>

            {/* Browser Content Area (Three Infinite Scrolling Marquee Columns) */}
            <div className="flex-grow relative overflow-hidden p-4 grid grid-cols-3 gap-3 bg-white/30 z-10">
              {/* Fade overlays at top and bottom */}
              <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#F8FAFC]/95 to-transparent pointer-events-none z-20" />
              <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#F8FAFC]/95 to-transparent pointer-events-none z-20" />

              {/* Column 1: Scrolls Up */}
              <div className="h-full overflow-hidden relative flex flex-col">
                <div className="flex flex-col gap-3 animate-marquee-up hover:[animation-play-state:paused]">
                  {[...col1Tech, ...col1Tech].map((tech, idx) => {
                    const IconComp = tech.Icon;
                    return (
                      <div
                        key={`col1-${tech.name}-${idx}`}
                        className="p-3 rounded-xl border border-slate-200/50 bg-white shadow-sm flex flex-col items-center justify-center text-center gap-1.5 transition-all duration-300 hover:border-[#06B6D4] hover:shadow-md hover:scale-[1.03] select-none cursor-default"
                      >
                        <IconComp size={22} style={{ color: tech.color }} />
                        <span className="text-[10px] font-bold text-[#0F172A] truncate w-full">{tech.name}</span>
                        <span className="text-[7px] font-mono font-semibold tracking-wider uppercase text-neutral-muted px-1 py-0.5 rounded bg-slate-50 border border-slate-100">{tech.cat}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Column 2: Scrolls Down */}
              <div className="h-full overflow-hidden relative flex flex-col">
                <div className="flex flex-col gap-3 animate-marquee-down hover:[animation-play-state:paused]">
                  {[...col2Tech, ...col2Tech].map((tech, idx) => {
                    const IconComp = tech.Icon;
                    return (
                      <div
                        key={`col2-${tech.name}-${idx}`}
                        className="p-3 rounded-xl border border-slate-200/50 bg-white shadow-sm flex flex-col items-center justify-center text-center gap-1.5 transition-all duration-300 hover:border-[#06B6D4] hover:shadow-md hover:scale-[1.03] select-none cursor-default"
                      >
                        <IconComp size={22} style={{ color: tech.color }} />
                        <span className="text-[10px] font-bold text-[#0F172A] truncate w-full">{tech.name}</span>
                        <span className="text-[7px] font-mono font-semibold tracking-wider uppercase text-neutral-muted px-1 py-0.5 rounded bg-slate-50 border border-slate-100">{tech.cat}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Column 3: Scrolls Up Slow */}
              <div className="h-full overflow-hidden relative flex flex-col">
                <div className="flex flex-col gap-3 animate-marquee-up-slow hover:[animation-play-state:paused]">
                  {[...col3Tech, ...col3Tech].map((tech, idx) => {
                    const IconComp = tech.Icon;
                    return (
                      <div
                        key={`col3-${tech.name}-${idx}`}
                        className="p-3 rounded-xl border border-slate-200/50 bg-white shadow-sm flex flex-col items-center justify-center text-center gap-1.5 transition-all duration-300 hover:border-[#06B6D4] hover:shadow-md hover:scale-[1.03] select-none cursor-default"
                      >
                        <IconComp size={22} style={{ color: tech.color }} />
                        <span className="text-[10px] font-bold text-[#0F172A] truncate w-full">{tech.name}</span>
                        <span className="text-[7px] font-mono font-semibold tracking-wider uppercase text-neutral-muted px-1 py-0.5 rounded bg-slate-50 border border-slate-100">{tech.cat}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
