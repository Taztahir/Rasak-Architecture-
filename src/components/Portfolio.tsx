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

// Project 4 images
// import P4Image1 from '../assets/Image9.jpeg';
import P4Image2 from '../assets/Site.jpeg';
import P4Image3 from '../assets/Site2.jpeg';

// Project 6 images
// import P6Image1 from '../assets/Image12.jpeg';
// import P6Image2 from '../assets/Image13.jpeg';
// import P6Image3 from '../assets/Image14.jpeg';

// Videos
import ProjectVideo4 from '../assets/Videoatsite.mp4';
import ProjectVideo6 from '../assets/Videoatwork.mp4';

// Grid cover thumbnails for video projects
import Video4Thumbnail from '../assets/VideoThumbnail.jpeg';
import Video6Thumbnail from '../assets/VideoThumbnail2.jpeg';

// ── Types ─────────────────────────────────────────────────────────────────────
interface GalleryItem {
  src: string;
  type: 'image' | 'video';
}

interface Project {
  id: number;
  cover: string; // image shown on the grid
  gallery: GalleryItem[];
}

// ── Data ──────────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: 1,
    cover: PortfolioImage,
    gallery: [
      { src: PortfolioImage, type: 'image' },
      { src: PortfolioImage2, type: 'image' },
      { src: PortfolioImage3, type: 'image' },
      { src: PortfolioImage4, type: 'image' },
    ],
  },
  {
    id: 2,
    cover: PortfolioImage5,
    gallery: [
      { src: PortfolioImage5, type: 'image' },
      { src: PortfolioImage6, type: 'image' },
      { src: PortfolioImage7, type: 'image' },
      { src: PortfolioImage8, type: 'image' },
    ],
  },
  {
    id: 3,
    cover: DocumentationImage,
    gallery: [
      { src: DocumentationImage, type: 'image' },
      { src: DocumentationImage2, type: 'image' },
      { src: DocumentationImage3, type: 'image' },
    ],
  },
  {
    id: 4,
    cover: Video4Thumbnail,            // cover image shown on the grid
    gallery: [
      { src: Video4Thumbnail, type: 'image' },
      { src: P4Image2, type: 'image' },
      { src: P4Image3, type: 'image' },
      { src: ProjectVideo4, type: 'video' }, // video accessible inside modal
    ],
  },
  {
    id: 5,
    cover: ExteriorImage,
    gallery: [
      { src: ExteriorImage, type: 'image' },
      { src: ExteriorImage2, type: 'image' },
      { src: ExteriorImage3, type: 'image' },
    ],
  },
  {
    id: 6,
    cover: Video6Thumbnail,            // cover image shown on the grid
    gallery: [
      { src: Video6Thumbnail, type: 'image' },
      // { src: P6Image2, type: 'image' },
      // { src: P6Image3, type: 'image' },
      { src: ProjectVideo6, type: 'video' }, // video accessible inside modal
    ],
  },
];

// ── Modal Lightbox ────────────────────────────────────────────────────────────
const Modal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = project.gallery[activeIndex];

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prev = (e: React.MouseEvent) => {
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
      role="dialog"
      aria-modal="true"
      aria-label="Project gallery"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-[210]"
        aria-label="Close modal"
      >
        <X size={24} strokeWidth={1.5} />
      </button>

      {/* Main Media */}
      <div
        className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {activeItem.type === 'video' ? (
          <video
            key={activeItem.src}
            src={activeItem.src}
            controls
            autoPlay
            className="max-w-full max-h-full object-contain rounded"
          />
        ) : (
          <img
            key={activeItem.src}
            src={activeItem.src}
            alt=""
            className="max-w-full max-h-full object-contain pointer-events-none"
          />
        )}

        {/* Navigation arrows */}
        {project.gallery.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-0 p-3 text-white/50 hover:text-white transition-colors"
              aria-label="Previous item"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 p-3 text-white/50 hover:text-white transition-colors"
              aria-label="Next item"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Strip */}
      {project.gallery.length > 1 && (
        <div
          className="flex gap-2 mt-8 overflow-x-auto max-w-full px-4 scrollbar-none"
          onClick={(e) => e.stopPropagation()}
        >
          {project.gallery.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={item.type === 'video' ? 'Play video' : `View image ${idx + 1}`}
              className={`relative w-14 h-14 flex-shrink-0 overflow-hidden transition-all duration-200 ${idx === activeIndex
                ? 'opacity-100 ring-1 ring-white'
                : 'opacity-40 hover:opacity-70'
                }`}
            >
              {item.type === 'video' ? (
                /* Video thumbnail: show cover of the project with a play badge */
                <>
                  <img
                    src={project.cover}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Play size={16} fill="white" color="white" />
                  </span>
                </>
              ) : (
                <img src={item.src} alt="" className="w-full h-full object-cover" />
              )}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
};

// ── Portfolio Grid ────────────────────────────────────────────────────────────
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
          {projects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[4/3] bg-neutral-100 overflow-hidden cursor-pointer"
              aria-label={`Open project ${project.id}`}
            >
              {/* Cover image — always an image for every project */}
              <img
                src={project.cover}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />



              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;