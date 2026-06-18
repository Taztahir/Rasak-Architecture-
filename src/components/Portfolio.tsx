import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';

import PortfolioImage from '../assets/Image1.jpeg';
import PortfolioImage2 from '../assets/Image2.jpeg';
import PortfolioImage3 from '../assets/Image3.jpeg';
import PortfolioImage4 from '../assets/Image4.jpeg';
import PortfolioImage5 from '../assets/Image5.jpeg';
import PortfolioImage6 from '../assets/Image6.jpeg';
import PortfolioImage7 from '../assets/Image7.jpeg';
import PortfolioImage8 from '../assets/Image8.jpeg';
import DocumentationImage from '../assets/Documentation1.jpeg';
import DocumentationImage2 from '../assets/Documentation2.jpeg';
import DocumentationImage3 from '../assets/Documentation3.jpeg';
import ExteriorImage from '../assets/RENDER1.jpeg';
import ExteriorImage2 from '../assets/RENDER2.jpeg';
import ExteriorImage3 from '../assets/RENDER3.jpeg';

// Import your video files here (replace with your actual video paths)
import ProjectVideo4 from '../assets/Videoatsite.mp4';
import ProjectVideo6 from '../assets/Videoatwork.mp4';

// // Optional: Custom thumbnail images to display on the portfolio grid for videos
import Video4Thumbnail from '../assets/VideoThumbnail.jpeg';
import Video6Thumbnail from '../assets/VideoThumbnail2.jpeg';

interface Project {
  id: number;
  type: 'image' | 'video';
  gallery: string[];
  thumbnail?: string; // Optional custom thumbnail for video grid display
}

const projects: Project[] = [
  { id: 1, type: 'image', gallery: [PortfolioImage, PortfolioImage2, PortfolioImage3, PortfolioImage4] },
  { id: 2, type: 'image', gallery: [PortfolioImage5, PortfolioImage6, PortfolioImage7, PortfolioImage8] },
  { id: 3, type: 'image', gallery: [DocumentationImage, DocumentationImage2, DocumentationImage3] },
  {
    id: 4,
    type: 'video',
    gallery: [ProjectVideo4],
    thumbnail: Video4Thumbnail // Grid cover image
  },
  { id: 5, type: 'image', gallery: [ExteriorImage, ExteriorImage2, ExteriorImage3] },
  {
    id: 6,
    type: 'video',
    gallery: [ProjectVideo6],
    thumbnail: Video6Thumbnail // Grid cover image
  },
];

// ── Modal Lightbox ───────────────────────────────────────────────────────────
const Modal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const [activeIndex, useStateActiveIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    useStateActiveIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    useStateActiveIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-12 select-none"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-[210]"
        aria-label="Close modal"
      >
        <X size={24} strokeWidth={1.5} />
      </button>

      {/* Main Content Container */}
      <div className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center">
        {project.type === 'video' ? (
          <video
            src={project.gallery[activeIndex]}
            controls
            autoPlay
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()} // Keeps video layout clicks from closing modal
          />
        ) : (
          <img
            src={project.gallery[activeIndex]}
            alt=""
            className="max-w-full max-h-full object-contain pointer-events-none"
          />
        )}

        {/* Navigation Controls (Only shows if there's more than 1 item) */}
        {project.gallery.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-0 p-3 text-white/50 hover:text-white transition-colors"
              aria-label="Previous item"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 p-3 text-white/50 hover:text-white transition-colors"
              aria-label="Next item"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>
          </>
        )}
      </div>

      {/* Mini Thumbnails Strip */}
      {project.gallery.length > 1 && (
        <div
          className="flex gap-2 mt-8 overflow-x-auto max-w-full px-4 scrollbar-none"
          onClick={(e) => e.stopPropagation()}
        >
          {project.gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => useStateActiveIndex(idx)}
              className={`w-14 h-14 flex-shrink-0 transition-all duration-200 ${idx === activeIndex ? 'opacity-100 ring-1 ring-white' : 'opacity-40 hover:opacity-70'
                }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
};

// ── Portfolio Grid ───────────────────────────────────────────────────────────
const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="justify-center items-center py-16">
          <h2 className="text-center text-3xl md:text-4xl font-playfair font-semibold text-stone-900 mb-12 animate-fade-in">
            OUR PORTFOLIO
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => {
            const coverSrc = project.type === 'video' ? (project.thumbnail || project.gallery[0]) : project.gallery[0];

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-[4/3] bg-neutral-100 overflow-hidden cursor-pointer"
              >
                {/* Fallback frame configuration if video has no thumbnail image */}
                {project.type === 'video' && !project.thumbnail ? (
                  <video
                    src={coverSrc}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={coverSrc}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                )}

                {/* Play Button Indicator over video grids */}
                {project.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-black/40 backdrop-blur-sm p-4 rounded-full text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                )}

                {/* Darken fade effect on hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Rendering */}
      <AnimatePresence>
        {selectedProject && (
          <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;