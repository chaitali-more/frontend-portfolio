import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Code2, Globe, Zap, RotateCcw } from 'lucide-react';
import { FaReact } from 'react-icons/fa6';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiShopify, 
  SiFigma, SiGoogle, SiDotnet, SiJavascript, SiHtml5, 
  SiCss, SiBootstrap, SiJquery, SiWordpress, SiGithub 
} from 'react-icons/si';
import resumePdf from '../assets/pdf/chaitali-more-resume.pdf';

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

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [6, -6]), { damping: 25, stiffness: 120 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-6, 6]), { damping: 25, stiffness: 120 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#F8FAFC] overflow-hidden border-b border-slate-100 flex flex-col justify-center min-h-[92vh] md:min-h-screen"
    >
      {/* Subtle blue/purple radial gradient backgrounds */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100/30 via-[#F8FAFC] to-[#F8FAFC]" />
      <div className="absolute top-[20%] left-1/4 w-[450px] h-[450px] bg-slate-200/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-slate-200/5 rounded-full blur-3xl pointer-events-none" />

      {/* Very light dotted grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Very subtle code snippets floating in opacity 0.03 */}
      <div className="absolute top-16 left-8 font-mono text-[9px] text-[#0F172A] opacity-[0.03] select-none pointer-events-none hidden lg:block">
        {"const [wordIndex, setWordIndex] = useState(0);"}
        <br />
        {"useEffect(() => { setWordIndex(index => index + 1) }, 2500);"}
      </div>
      <div className="absolute bottom-24 right-1/3 font-mono text-[9px] text-[#0F172A] opacity-[0.03] select-none pointer-events-none hidden lg:block">
        {"export default function Projects() { const visible = projects.slice(0, 4); }"}
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
              <span className="inline-block relative text-[#0F172A] min-w-[100px] sm:min-w-[170px] md:min-w-[200px] text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="bg-gradient-to-r from-[#0F172A] via-[#06B6D4] to-[#1E293B] bg-clip-text text-transparent font-extrabold block"
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
              Frontend Developer with 4+ years of experience building responsive, accessible and SEO-optimized web applications using React.js, Next.js, JavaScript and modern frontend technologies.
            </motion.p>
          </div>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto"
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
              download="chaitali-more-resume.pdf"
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

        {/* RIGHT COLUMN: Premium Tech Stack Dashboard Browser Mockup */}
        <div className="lg:col-span-6 flex items-center justify-center w-full relative">
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
