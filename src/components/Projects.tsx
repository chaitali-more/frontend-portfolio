import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { projects } from '../data';
import { ExternalLink, X, Play, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const navigate = useNavigate();
  const [activeMedia, setActiveMedia] = useState<{ url: string; title: string; isVideo: boolean } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const visibleProjects = projects.slice(0, 4);

  return (
    <>
      <section
        id="projects"
        ref={containerRef}
        className="py-12 md:py-24 border-t border-outline-variant/30 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-6 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 md:space-y-4"
            >
              <p className="text-[11px] font-bold text-neutral-muted tracking-[0.2em] uppercase font-sans">
                Selected Work
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-dark tracking-tight">
                Building solutions for the modern web.
              </h2>
            </motion.div>
          </div>

          {/* Project Cards */}
          <div className="space-y-6 md:space-y-8">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group flex flex-col md:flex-row bg-white border border-outline-variant/60 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:border-[#06B6D4] hover:shadow-lg hover:shadow-[#06B6D4]/5 transition-all duration-300"
                >
                  {/* Video/Image Preview — click to open lightbox */}
                  <div className="md:w-2/5 bg-[#F8FAFC] p-3.5 sm:p-5 border-b md:border-b-0 md:border-r border-outline-variant/40">
                    <div
                      className="relative overflow-hidden rounded-lg sm:rounded-xl border border-outline-variant bg-white shadow-xl cursor-pointer group/video"
                      onClick={() =>
                        setActiveMedia({
                          url: project.videoUrl || project.imageUrl || '',
                          title: project.title,
                          isVideo: !!project.videoUrl,
                        })
                      }
                    >
                      {/* Fake browser chrome */}
                      <div className="h-7 sm:h-8 border-b bg-gray-50 flex items-center px-3 gap-1.5 select-none">
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
                        <div className="opacity-0 scale-90 group-hover/video:opacity-100 group-hover/video:scale-100 transition-all duration-300 w-12 h-12 sm:w-14 sm:h-14 bg-white/95 backdrop-blur-sm rounded-full border border-[#06B6D4]/10 shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200">
                          {project.videoUrl ? (
                            <Play size={18} className="text-[#06B6D4] fill-[#06B6D4]/10" />
                          ) : (
                            <ExternalLink size={18} className="text-[#06B6D4]" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5 sm:p-8 md:p-10 flex flex-col justify-center flex-grow">
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-neutral-dark group-hover:text-[#06B6D4] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-neutral-muted font-sans font-light leading-relaxed max-w-xl">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-surface-bg text-neutral-muted text-[10px] font-bold uppercase tracking-wider rounded border border-outline-variant"
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
                        className="text-neutral-dark hover:text-[#06B6D4] font-semibold text-sm tracking-wide flex items-center gap-1.5 transition-colors"
                      >
                        Live Demo <ExternalLink size={14} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-dark hover:text-[#06B6D4] font-semibold text-sm tracking-wide flex items-center gap-1.5 transition-colors"
                      >
                        GitHub <FaGithub size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* View All Projects Button */}
          {projects.length > 4 && (
            <div className="flex justify-center mt-12">
              <motion.button
                layout
                onClick={() => navigate('/projects')}
                className="
                  border
                  border-outline-variant
                  bg-white
                  hover:border-[#06B6D4]
                  hover:bg-[#06B6D4]/5
                  hover:text-[#06B6D4]
                  text-neutral-dark
                  px-8
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
                  gap-2
                  transition-all
                  duration-300
                  cursor-pointer
                "
              >
                <span>View All Projects</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>
          )}
        </div>
      </section>

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
    </>
  );
}