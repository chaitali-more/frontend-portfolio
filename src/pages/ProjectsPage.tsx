import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { ExternalLink, X, Play, Briefcase, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProjectsPage() {
  const [activeMedia, setActiveMedia] = useState<{ url: string; title: string; isVideo: boolean } | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Categories extracted from projects
  const categories = [
    { label: 'All Projects', value: 'All', icon: <Layers size={13} /> },
    { label: 'Live Projects', value: 'Live Project', icon: <Briefcase size={13} /> },
    { label: 'Practice Projects', value: 'Practice Project', icon: <Layers size={13} /> },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] selection:bg-[#06B6D4]/10 selection:text-[#06B6D4] relative min-h-screen flex flex-col">

      <Header activeSection="projects" />

      {/* ── Premium Inner Page Banner ── */}
      <div className="relative pt-32 pb-16 border-b border-slate-100 overflow-hidden bg-[#F8FAFC]">
        {/* Dotted grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        {/* Subtle Cyan glow top-right */}
        <div className="absolute top-0 right-0 w-96 h-72 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 100% 0%, rgba(6,182,212,0.06) 0%, transparent 60%)' }} />
        {/* Subtle slate glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-72 h-56 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 0% 100%, rgba(15,23,42,0.04) 0%, transparent 60%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Banner content */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3 max-w-2xl"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#06B6D4]/20 bg-[#06B6D4]/5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-[#06B6D4] uppercase tracking-widest">Portfolio</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                All Projects
              </h1>
              <p className="text-[#64748B] max-w-xl font-light text-base leading-relaxed">
                A comprehensive showcase of applications, platforms, and templates I've built — focusing on clean architecture, modern user experiences, and SEO performance.
              </p>
            </motion.div>



          </div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-2 mt-8"
          >
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                  selectedCategory === category.value
                    ? 'bg-[#0F172A] border-[#0F172A] text-white shadow-md shadow-[#0F172A]/10'
                    : 'bg-white border-slate-200/60 text-[#64748B] hover:text-[#06B6D4] hover:border-[#06B6D4] hover:bg-[#06B6D4]/5'
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-grow py-16 max-w-7xl mx-auto px-6 w-full">
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
                className="group flex flex-col md:flex-row bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:border-[#06B6D4] hover:shadow-lg hover:shadow-[#06B6D4]/5 transition-all duration-300"
              >
                {/* Video/Image Preview — click to open lightbox */}
                <div className="md:w-2/5 bg-[#F8FAFC] p-5 border-b md:border-b-0 md:border-r border-slate-100 flex items-center justify-center">
                  <div
                    className="relative w-full overflow-hidden rounded-xl border border-slate-100 bg-white shadow-xl cursor-pointer group/video"
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
                    <div className="absolute inset-0 top-8 flex items-center justify-center bg-[#0F172A]/0 group-hover/video:bg-[#0F172A]/30 transition-all duration-300">
                      <div className="opacity-0 scale-90 group-hover/video:opacity-100 group-hover/video:scale-100 transition-all duration-300 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full border border-[#06B6D4]/10 shadow-xl flex items-center justify-center hover:scale-110 active:scale-95">
                        {project.videoUrl ? (
                          <Play size={20} className="text-[#06B6D4] fill-[#06B6D4]/10" />
                        ) : (
                          <ExternalLink size={20} className="text-[#06B6D4]" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 md:p-10 flex flex-col justify-center flex-grow">
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold text-[#06B6D4] tracking-wider uppercase font-sans">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0F172A] group-hover:text-[#06B6D4] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#64748B] font-sans font-light leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[#F8FAFC] text-[#64748B] text-[10px] font-bold uppercase tracking-wider rounded border border-slate-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-6 items-center pt-6 border-t border-slate-100 mt-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0F172A] hover:text-[#06B6D4] font-semibold text-sm tracking-wide flex items-center gap-1.5 transition-colors"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0F172A] hover:text-[#06B6D4] font-semibold text-sm tracking-wide flex items-center gap-1.5 transition-colors"
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
                  className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-md"
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
