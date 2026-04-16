import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import PortfolioImage from '../assets/Image1.jpeg'
import PortfolioImage2 from '../assets/Image2.jpeg'
import PortfolioImage3 from '../assets/Image3.jpeg'
import PortfolioImage4 from '../assets/Image4.jpeg'
import PortfolioImage5 from '../assets/Image5.jpeg'
import PortfolioImage6 from '../assets/Image6.jpeg'
import PortfolioImage7 from '../assets/Image7.jpeg'
import PortfolioImage8 from '../assets/Image8.jpeg'
import PortfolioImage9 from '../assets/Image9.jpeg'
import PortfolioImage10 from '../assets/Image10.jpeg'
import PortfolioImage11 from '../assets/Image11.jpeg'
import PortfolioImage12 from '../assets/Image12.jpeg'
import PortfolioImage13 from '../assets/Image13.jpeg'
import PortfolioImage14 from '../assets/Image14.jpeg'
import PortfolioImage15 from '../assets/Image15.jpeg'
import PortfolioImage16 from '../assets/Image16.jpeg'
import PortfolioImage17 from '../assets/Image17.jpeg'
import PortfolioImage18 from '../assets/Image18.jpeg'
import PortfolioImage19 from '../assets/Image19.jpeg'
import PortfolioImage20 from '../assets/Image20.jpeg'
import PortfolioImage21 from '../assets/Image21.jpeg'

const projects = [
  {
    id: 1,
    title: "Lumina Residential",
    image: PortfolioImage,
    relatedImages: [
      PortfolioImage2,
      PortfolioImage3,
      PortfolioImage4
    ]
  },
  {
    id: 2,
    title: "Nexus Corporate Hub",
    image: PortfolioImage5,
    relatedImages: [
      PortfolioImage6,
      PortfolioImage7,
      PortfolioImage8
    ]
  },
  {
    id: 3,
    title: "Emerald Villa Interior",
    image: PortfolioImage9,
    relatedImages: [
      PortfolioImage10,
      // PortfolioImage14,
      // PortfolioImage16
    ]
  },
  {
    id: 4,
    title: "Skyline Manor",
    image: PortfolioImage13,
    relatedImages: [
      PortfolioImage11,
      PortfolioImage15,
      PortfolioImage12
    ]
  },
  {
    id: 5,
    title: "The Atrium Mall",
    image: PortfolioImage17,
    relatedImages: [
      PortfolioImage14,
      PortfolioImage19,
      PortfolioImage16
    ]
  },
  {
    id: 6,
    title: "Oakwood Sustainable Home",
    image: PortfolioImage21,
    relatedImages: [
      PortfolioImage18,
      // PortfolioImage19,
      PortfolioImage20
    ]
  },
];

const PortfolioItem = ({ project, onOpen }: { project: any, onOpen: (p: any) => void }) => {
  return (
    <div
      className="relative group cursor-pointer overflow-hidden"
      onClick={() => onOpen(project)}
    >
      <div className="aspect-[4/5] w-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-300"
        />
        <div className="absolute inset-0 bg-architecture-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="px-6 py-2 border border-white text-white text-[10px] uppercase tracking-widest bg-black/20 backdrop-blur-sm">
            View Project
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className=" py-32 md:py-64 relative overflow-hidden">
      {/* Background Decorative Title */}
      <div className="absolute top-0 right-0 p-32 hidden lg:block opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[15rem] font-display font-black leading-none uppercase tracking-tighter rotate-90 origin-top-right">
          Portfolio
        </h2>
      </div>

      <div className="section-container relative z-10">
        <div className="mb-24 md:mb-48 border-l-8 border-architecture-gold pl-8 md:pl-16">
          <span className="text-architecture-gold font-display font-medium tracking-[0.4em] uppercase text-[10px] md:text-xs mb-2 md:mb-4 block">Selected Works</span>
          <h2 className="text-4xl md:text-7xl lg:text-[6rem] leading-[0.9] font-black uppercase tracking-tighter">
            Architectural <br />
            <span className="italic font-light font-display lowercase opacity-50">Impact</span>
          </h2>
        </div>

        {/* Stable Grid (Graph) Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project) => (
            <PortfolioItem key={project.id} project={project} onOpen={setSelectedProject} />
          ))}
        </div>

        <div className="mt-24 md:mt-48 flex flex-col items-center">
          <div className="w-[1px] h-16 md:h-32 bg-architecture-gold/30 mb-8" />
          <button className="text-xs md:text-sm uppercase tracking-[0.4em] font-bold text-architecture-charcoal/40 hover:text-architecture-gold transition-colors">
            Load Master Archive
          </button>
        </div>
      </div>

      {/* Static Modal (No Animation) */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-24 bg-architecture-charcoal/90 backdrop-blur-md">
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setSelectedProject(null)}
          />

          <div
            className="relative w-full max-w-7xl max-h-[85vh] overflow-y-auto bg-architecture-offwhite p-6 md:p-12 lg:p-20 shadow-2xl gallery-modal scrollbar-hide"
            data-lenis-prevent
          >
            {/* Sticky Close Button */}
            <div className="sticky top-0 right-0 z-[60] flex justify-end pb-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="backdrop-blur-md p-4 rounded-full text-architecture-charcoal hover:text-architecture-gold transition-all duration-300 shadow-lg border border-architecture-gold/20"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              {/* Main Image */}
              <div className="lg:col-span-7">
                <div className="aspect-[4/5] w-full overflow-hidden shadow-lg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Related Images Sidebar */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="mb-12">
                  <div className="text-[10px] text-architecture-gold font-bold uppercase tracking-[0.4em] mb-4">Project detail</div>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                    {selectedProject.title}
                  </h3>
                  <div className="w-16 h-[2px] bg-architecture-gold" />
                </div>

                <div className="grid grid-cols-1 gap-8 md:gap-12">
                  {selectedProject.relatedImages.map((img: string, i: number) => (
                    <div key={i} className="aspect-[16/9] w-full overflow-hidden bg-architecture-silver/10 shadow-md">
                      <img
                        src={img}
                        alt={`Related detail ${i + 1}`}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
