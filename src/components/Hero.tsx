import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Sparkles, Code, Layout, ArrowRight, CheckCircle } from 'lucide-react';

const proofItems = [
  'Open to Frontend / React Developer roles',
  'React.js · Next.js · Tailwind CSS',
  "Responsive Designs",
  'Figma to Code · Pixel Perfect UI',
  '200+ Projects Delivered',
  'SEO & Performance Optimized Builds',
];

export default function Hero() {
  const [balance, setBalance] = useState(50); // 0 = Pure Design, 100 = Pure Engineering
  const [isHovered, setIsHovered] = useState(false);

  // For 3D Tilt Effect on the showcase card using motion values
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth movement
  const rotateX = useSpring(useTransform(y, [-150, 150], [10, -10]), { damping: 25, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-10, 10]), { damping: 25, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

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

  // Determine styles/text based on the active slider range
  const isDesignPrimary = balance < 40;
  const isEngineeringPrimary = balance > 60;
  const isOptimalHarmony = balance >= 40 && balance <= 60;

  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 lg:pt-22 lg:pb-10 bg-white/40 overflow-hidden border-b border-outline-variant/30 flex flex-col justify-center min-h-screen"
    >
      {/* Decorative ambient blurred backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-2xl pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left column: Text Content */}
        <div className="lg:col-span-7 space-y-5 md:space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200/60 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[11px] font-bold text-emerald-800 uppercase tracking-[0.18em]">
              Open to Opportunities
            </p>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-[4rem] font-bold leading-[1.06] tracking-tighter text-neutral-dark max-w-3xl">
        
            Building interfaces
            <br />
            that{' '}
            <span className="inline-block relative min-w-[7.5rem] text-left">
              <AnimatePresence mode="wait">
                {balance > 50 ? (
                  <motion.span
                    key="code-perf"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="text-primary font-mono tracking-tight inline-block"
                  >
                    &lt;perform&gt;
                  </motion.span>
                ) : (
                  <motion.span
                    key="design-perf"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="text-primary font-display inline-block"
                  >
                    perform
                  </motion.span>
                )}
              </AnimatePresence>
            </span>{' '}
            and{' '}
            <span className="inline-block relative min-w-[7.5rem] text-left">
              <AnimatePresence mode="wait">
                {balance > 50 ? (
                  <motion.span
                    key="code-impress"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="text-primary font-mono tracking-tight inline-block"
                  >
                    impress()
                  </motion.span>
                ) : (
                  <motion.span
                    key="design-impress"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="text-primary font-display italic font-extrabold inline-block"
                  >
                    impress.
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base text-neutral-muted max-w-2xl font-sans font-light leading-relaxed">
Frontend Developer with 4+ years of experience building responsive, fast, and user-friendly web applications using HTML, CSS, JavaScript, React.js, Next.js and modern UI technologies.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto">
           <a
  id="see-work-btn"
  href="#projects"
  onClick={(e) => scrollToSection(e, '#projects')}
  className="
    bg-primary
    hover:bg-primary-hover
    text-white
    text-center
    px-7
    py-3.5
    rounded-lg
    text-sm
    font-semibold
    tracking-wide
    shadow-lg
    shadow-primary/20
    hover:shadow-xl
    hover:shadow-primary/30
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
  See My Work
  <ArrowRight
    size={16}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</a>

<a
  id="talk-btn"
  href="#contact"
  onClick={(e) => scrollToSection(e, '#contact')}
  className="
    border
    border-outline-variant
    bg-white
    hover:border-primary
    hover:bg-primary-container
    hover:text-primary
    text-neutral-dark
    text-center
    px-7
    py-3.5
    rounded-lg
    text-sm
    font-semibold
    tracking-wide
    shadow-sm
    hover:shadow-md
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
  Get in Touch
</a>
          </div>

          <div className="scroll-depth-card w-full max-w-3xl bg-white/90 border border-outline-variant/70 rounded-2xl shadow-sm p-3 md:p-4">
            <div className="flex flex-wrap gap-2">
              {proofItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant bg-primary-container px-2.5 py-1.5 text-[10px] md:text-[11px] font-semibold text-neutral-dark"
                >
                  <CheckCircle size={13} className="text-primary shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Interactive Visual Showcase Plate */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center gap-4 w-full">
          <motion.div
            id="hero-interactive-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
            style={{
              rotateX: isHovered ? rotateX : 0,
              rotateY: isHovered ? rotateY : 0,
              transformStyle: 'preserve-3d',
            }}
            className="w-full max-w-[320px] h-[320px] lg:max-w-[340px] lg:h-[340px] bg-white rounded-2xl border border-outline-variant/60 shadow-xl overflow-hidden relative cursor-crosshair transition-colors duration-300 flex flex-col justify-between p-5 md:p-8"
          >
            {/* Design Spec Mode layer (balance 0 => highly visible) */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-200"
              style={{ opacity: Math.max(0, 1 - balance / 50) }}
            >
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#dfdfe7_1px,transparent_1px),linear-gradient(to_bottom,#dfdfe7_1px,transparent_1px)] bg-[size:16px_16px] opacity-10" />
              <div className="absolute inset-0 border-[0.5px] border-dashed border-primary/40 m-4 rounded-xl flex flex-col justify-between p-4">
                <span className="absolute -top-1.5 left-4 bg-white px-1 text-[9px] font-mono text-primary font-bold">
                  CONTAINER_GRID: w-320
                </span>
                <span className="absolute -bottom-1.5 right-4 bg-white px-1 text-[9px] font-mono text-primary font-bold">
                  H-320px
                </span>

                {/* Bounding vector markers */}
                <span className="w-1.5 h-1.5 bg-primary border border-white absolute -top-1 -left-1" />
                <span className="w-1.5 h-1.5 bg-primary border border-white absolute -top-1 -right-1" />
                <span className="w-1.5 h-1.5 bg-primary border border-white absolute -bottom-1 -left-1" />
                <span className="w-1.5 h-1.5 bg-primary border border-white absolute -bottom-1 -right-1" />

                {/* Center visual alignment lines */}
                <div className="absolute left-1/2 top-4 bottom-4 border-l border-dashed border-primary/60 opacity-60" />
                <div className="absolute top-1/2 left-4 right-4 border-t border-dashed border-primary/60 opacity-60" />
              </div>
            </div>

            {/* Code Output Terminal Mode (balance 100 => highly visible) */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-200 bg-slate-900"
              style={{ 
                opacity: Math.max(0, (balance - 50) / 50),
                zIndex: balance > 50 ? 20 : 0 
              }}
            >
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[10px] font-mono text-white/40">node server.js</span>
              </div>
              <div className="p-4 font-mono text-[11px] text-emerald-400 space-y-2 overflow-hidden h-[calc(100%-36px)]">
                <p className="text-white/40">&gt;&gt; npm run test:perf</p>
                <div className="text-slate-200">
                  <p>✔ src/App.test.tsx (4.2s)</p>
                  <p className="text-emerald-400">✔ 18 assets optimized successfully.</p>
                </div>
                <p className="text-sky-400">FPS: 60.00 | Thread: Idle</p>
                <p className="text-amber-400">Lighthouse performance: 100%</p>
                <p className="text-white/20">Vitals: CLS: 0.00, FID: 1.2ms</p>
              </div>
            </div>

            {/* Standard Visual Showcase Panel Content */}
            <div 
              className="relative z-10 w-full flex-grow flex flex-col justify-between transition-opacity duration-200" 
              style={{ 
                opacity: balance > 50 ? Math.max(0, 1 - (balance - 50) / 40) : 1,
                pointerEvents: balance > 90 ? 'none' : 'auto',
                transform: 'translateZ(10px)' 
              }}
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-[10px] font-mono text-neutral-muted uppercase tracking-wider">Workspace Live</p>
                  <h4 className="font-display font-bold text-lg text-neutral-dark">React Context Engine</h4>
                </div>
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {balance < 50 ? <Layout size={18} /> : <Code size={18} />}
                </div>
              </div>

              {/* Central morphing shape container */}
              <div className="flex items-center justify-center my-4 h-[120px] relative">
                <motion.div
                  animate={{
                    borderRadius: balance < 35 
                      ? '50% 10% 50% 10%' 
                      : balance > 65 
                        ? '4px' 
                        : '12px',
                    rotate: balance * 1.8,
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 100, damping: 18 }}
                  className="w-24 h-24 bg-gradient-to-tr from-primary-hover to-primary shadow-lg flex items-center justify-center text-white"
                >
                  {balance < 45 && <Layout size={28} className="animate-pulse" />}
                  {balance >= 45 && balance <= 55 && (
                    <Sparkles size={28} className="text-white/90" />
                  )}
                  {balance > 55 && <Code size={28} />}
                </motion.div>
                
                {/* Visual coordinate indicator (Design spec element) */}
                {balance < 35 && (
                  <span className="absolute bottom-0 text-[10px] font-mono text-primary bg-white px-1.5 py-0.5 rounded shadow">
                    R: {balance}deg
                  </span>
                )}
              </div>

              {/* Lower info block */}
              <div className="flex justify-between items-center bg-surface-bg p-3 rounded-xl border border-outline-variant">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[11px] font-sans text-neutral-muted font-medium">Auto compilation static bundle</span>
                </div>
                <span className="text-[11px] font-mono text-neutral-dark font-medium">C: {(100 - balance).toFixed(0)}%</span>
              </div>
            </div>
          </motion.div>

          {/* Balance Slider Box (hidden on mobile) */}
          <div className="hidden xl:block w-full max-w-[340px] space-y-2 mt-1">
            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-muted mb-7">
              <span className={`transition-colors font-semibold ${isDesignPrimary ? 'text-primary' : ''}`}>
                🎨 0% Design
              </span>
              <span className={`transition-colors font-semibold ${isOptimalHarmony ? 'text-primary' : ''}`}>
                ✨ 50-50 Balance
              </span>
              <span className={`transition-colors font-semibold ${isEngineeringPrimary ? 'text-primary' : ''}`}>
                ⚡ 100% Code
              </span>
            </div>
            <div className="relative flex items-center">
              <input
                id="hero-balance-slider"
                type="range"
                min="0"
                max="100"
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
                className="w-full h-1.5 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
              />
              <span
                className="absolute top-1/2 -translate-y-1/2 pointer-events-none uppercase text-[9px] font-bold text-neutral-muted px-1"
                style={{
                  left: `calc(${balance}% + (${10 - balance * 0.2}px))`,
                  transform: 'translate(-50%, -18px)',
                }}
              >
                {balance}%
              </span>
            </div>
            <p className="text-[11px] font-mono text-neutral-muted text-center pt-2 italic">
              {isDesignPrimary && '👉 Preview style guides & bounding layout dimensions.'}
              {isOptimalHarmony && '🎁 Balanced mode: A blend of visual focus and runtime clean code.'}
              {isEngineeringPrimary && '👉 Inspect live unit-test console output.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
