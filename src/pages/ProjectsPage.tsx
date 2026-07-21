import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { ExternalLink, X, Play, ArrowLeft } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function ProjectsPage() {
  const [activeMedia, setActiveMedia] = useState<{ url: string; title: string; isVideo: boolean } | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Categories extracted from projects
  const categories = [
    { label: 'All Projects', value: 'All' },
    { label: 'Live Projects', value: 'Live Project' },
    { label: 'Practice Projects', value: 'Practice Project' },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-surface-bg text-neutral-dark selection:bg-primary/10 selection:text-primary relative min-h-screen flex flex-col">
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-[8%] h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute top-[42%] right-[-8rem] h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <Header activeSection="projects" />

      {/* Main Content */}
      <main className="relative z-10 flex-grow pt-32 pb-24 max-w-7xl mx-auto px-6 w-full">
        {/* Navigation back home */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-muted hover:text-primary font-semibold transition-colors group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="space-y-4 mb-12">
          <p className="text-[11px] font-bold text-neutral-muted tracking-[0.2em] uppercase font-sans">
            Selected Portfolio
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-dark tracking-tight">
            All Projects
          </h1>
          <p className="text-neutral-muted max-w-2xl font-light text-base leading-relaxed">
            A comprehensive showcase of applications, platforms, and templates I've built, focusing on clean architecture, modern user experiences, and SEO performance.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-outline-variant/30">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                selectedCategory === category.value
                  ? 'bg-primary border-primary text-white shadow-md shadow-primary/20'
                  : 'bg-white border-outline-variant/60 text-neutral-muted hover:text-neutral-dark hover:border-neutral-muted/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-1">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col md:flex-row bg-white border border-outline-variant/60 rounded-2xl overflow-hidden shadow-sm hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                {/* Video/Image Preview — click to open lightbox */}
                <div className="md:w-2/5 bg-[#F8FAFC] p-5 border-b md:border-b-0 md:border-r border-outline-variant/40 flex items-center justify-center">
                  <div
                    className="relative w-full overflow-hidden rounded-xl border border-outline-variant bg-white shadow-xl cursor-pointer group/video"
                    onClick={() =>
                      setActiveMedia({
                        url: project.videoUrl || project.imageUrl || '',
                        title: project.title,
                        isVideo: !!project.videoUrl,
                      })
                    }
                  >
                    {/* Fake browser chrome */}
                    <div className="h-8 border-b bg-gray-50 flex items-center px-3 gap-1.5 select-none">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>

                    {/* Preview content */}
                    {project.videoUrl ? (
                      <video
                        src={project.videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full aspect-video object-cover transition-transform duration-500 group-hover/video:scale-105"
                      />
                    ) : (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full aspect-video object-contain bg-[#090d16] transition-transform duration-500 group-hover/video:scale-105"
                      />
                    )}

                    {/* Play / Zoom button overlay */}
                    <div className="absolute inset-0 top-8 flex items-center justify-center bg-neutral-dark/0 group-hover/video:bg-neutral-dark/30 transition-all duration-300">
                      <div className="opacity-0 scale-90 group-hover/video:opacity-100 group-hover/video:scale-100 transition-all duration-300 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full border border-primary/10 shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200">
                        {project.videoUrl ? (
                          <Play size={20} className="text-primary fill-primary" />
                        ) : (
                          <ExternalLink size={20} className="text-primary" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 md:p-10 flex flex-col justify-center flex-grow">
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold text-primary tracking-wider uppercase font-sans">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-dark group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-muted font-sans font-light leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-surface-bg/80 text-neutral-muted text-[10px] font-bold uppercase tracking-wider rounded border border-outline-variant"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-6 items-center pt-6 border-t border-outline-variant/50 mt-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-dark hover:text-primary font-semibold text-sm tracking-wide flex items-center gap-1.5 transition-colors"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-dark hover:text-primary font-semibold text-sm tracking-wide flex items-center gap-1.5 transition-colors"
                    >
                      GitHub <FaGithub size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      <Footer />

      {/* ── Media Lightbox Modal ── */}
      {typeof window !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {activeMedia && (
              <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setActiveMedia(null)}
                  className="absolute inset-0 bg-neutral-dark/80 backdrop-blur-md"
                />

                {/* Modal content */}
                <motion.div
                  initial={{ scale: 0.92, opacity: 0, y: 24 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.92, opacity: 0, y: 24 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                  className="relative w-full max-w-4xl"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setActiveMedia(null)}
                    className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    Close <X size={18} />
                  </button>

                  {/* Browser chrome frame */}
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <div className="h-9 bg-[#1e1e1e] flex items-center px-4 gap-2 select-none">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="ml-3 text-white/30 text-xs font-mono truncate max-w-xs">
                        {activeMedia.title}
                      </span>
                    </div>

                    {activeMedia.isVideo ? (
                      <video
                        src={activeMedia.url}
                        autoPlay
                        controls
                        loop
                        playsInline
                        className="w-full aspect-video bg-black"
                      />
                    ) : (
                      <img
                        src={activeMedia.url}
                        alt={activeMedia.title}
                        className="w-full aspect-video object-contain bg-black"
                      />
                    )}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
