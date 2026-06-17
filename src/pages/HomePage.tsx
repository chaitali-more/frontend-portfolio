import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import ExperienceSection from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('hero');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const scrollGlowY = useTransform(scrollYProgress, [0, 1], ['0%', '42%']);
  const scrollGlowScale = useTransform(scrollYProgress, [0, 0.55, 1], [1, 1.18, 1.05]);
  const scrollGlowOpacity = useTransform(scrollYProgress, [0, 0.35, 0.8, 1], [0.32, 0.18, 0.28, 0.14]);

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const targetElement = document.getElementById(hash.slice(1));

    if (targetElement) {
      requestAnimationFrame(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, []);

  useEffect(() => {
    // Elegant IntersectionObserver to track and highlight the currently viewed section
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Triggers midway through visual viewport
      threshold: 0.1,
    };

    const sectionIds = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="bg-surface-bg text-neutral-dark selection:bg-primary/10 selection:text-primary relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: scrollGlowY, scale: scrollGlowScale, opacity: scrollGlowOpacity }}
          className="absolute -top-24 left-[8%] h-80 w-80 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          style={{ y: scrollGlowY, scale: scrollGlowScale }}
          className="absolute top-[42%] right-[-8rem] h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        />
      </div>

      <motion.div
        id="scroll-progress"
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-primary z-50 origin-[0%] pointer-events-none"
      />

      <Header activeSection={activeSection} />

      <main className="relative z-10">
        <Hero />
        <About />
        <ExperienceSection />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}