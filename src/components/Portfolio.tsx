import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

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
import PortfolioImage11 from '../assets/Image11.jpeg';
import PortfolioImage12 from '../assets/Image12.jpeg';
import PortfolioImage13 from '../assets/Image13.jpeg';
import PortfolioImage15 from '../assets/Image15.jpeg';
import ExteriorImage4 from '../assets/BUNGALOWSCENE1.jpeg';
import ExteriorImage5 from '../assets/BUNGALOWSCENE2.jpeg';
import ExteriorImage6 from '../assets/BUNGALOWSCENE3.jpeg';
import ExteriorImage7 from '../assets/BUNGALOWSCENE4.jpeg';

interface Project {
  id: number;
  gallery: string[];
}

const projects: Project[] = [
  { id: 1, gallery: [PortfolioImage, PortfolioImage2, PortfolioImage3, PortfolioImage4] },
  { id: 2, gallery: [PortfolioImage5, PortfolioImage6, PortfolioImage7, PortfolioImage8] },
  { id: 3, gallery: [DocumentationImage, DocumentationImage2, DocumentationImage3] },
  { id: 4, gallery: [PortfolioImage13, PortfolioImage11, PortfolioImage15, PortfolioImage12] },
  { id: 5, gallery: [ExteriorImage, ExteriorImage2, ExteriorImage3] },
  { id: 6, gallery: [ExteriorImage4, ExteriorImage5, ExteriorImage6, ExteriorImage7] },
];

// ── Modal Lightbox ───────────────────────────────────────────────────────────
const Modal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
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

      {/* Main Image Container */}
      <div className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center">
        <img
          src={project.gallery[activeIndex]}
          alt=""
          className="max-w-full max-h-full object-contain pointer-events-none"
        />

        {/* Navigation Controls */}
        {project.gallery.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-0 p-3 text-white/50 hover:text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 p-3 text-white/50 hover:text-white transition-colors"
              aria-label="Next image"
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
              onClick={() => setActiveIndex(idx)}
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
    <section id='portfolio' className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className='justify-center items-center py-16'>
          <h2 className='text-center text-3xl md:text-4xl font-playfair font-semibold text-stone-900 mb-12 animate-fade-in'>OUR PORTFOLIO</h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[4/3] bg-neutral-100 overflow-hidden cursor-pointer"
            >
              <img
                src={project.gallery[0]}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Subtle hover fade-in overlay */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Rendering */}
      <AnimatePresence>
        {selectedProject && (
          <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;