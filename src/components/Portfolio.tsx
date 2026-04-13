import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { id: 1, title: "Lumina Residential", location: "Lagos, NG", category: "Residential", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop", size: "lg" },
  { id: 2, title: "Nexus Corporate Hub", location: "Abuja, NG", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop", size: "sm" },
  { id: 3, title: "Emerald Villa Interior", location: "Ikoyi, NG", category: "Interior", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop", size: "sm" },
  { id: 4, title: "Skyline Manor", location: "Victoria Island, NG", category: "Residential", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop", size: "lg" },
  { id: 5, title: "The Atrium Mall", location: "Lekki, NG", category: "Commercial", image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=800&auto=format&fit=crop", size: "sm" },
  { id: 6, title: "Oakwood Sustainable Home", location: "Enugu, NG", category: "Residential", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop", size: "sm" },
  { id: 7, title: "Opal Office Suites", location: "London, UK", category: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop", size: "lg" },
  { id: 8, title: "Azure Coast Resort", location: "Accra, GH", category: "Hospitality", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop", size: "sm" },
  { id: 9, title: "Modernist Retreat", location: "Ogun, NG", category: "Residential", image: "https://images.unsplash.com/photo-1628744276520-63300325856f?q=80&w=800&auto=format&fit=crop", size: "sm" },
  { id: 10, title: "Tech Haven Interior", location: "Yaba, NG", category: "Interior", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop", size: "lg" },
  { id: 11, title: "Royal Palms Estate", location: "Ibadan, NG", category: "Residential", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop", size: "sm" },
  { id: 12, title: "Crystal Plaza", location: "Port Harcourt, NG", category: "Commercial", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop", size: "sm" },
];

const PortfolioItem = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -100 : 100]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative group ${project.size === 'lg' ? 'md:col-span-2' : 'md:col-span-1'}`}
    >
      <div className="overflow-hidden bg-architecture-silver/10 relative aspect-square md:aspect-auto md:h-[500px]">
        {/* Parallax Image */}
        <motion.img 
          src={project.image} 
          alt={project.title}
          style={{ scale: 1.2 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
        />
        
        {/* Technical Mask Overlay (Webflow Vibe) */}
        <div className="absolute inset-0 bg-architecture-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden flex flex-col justify-end p-24">
           <div className="flex justify-between items-center text-white mb-4">
              <span className="text-[10px] uppercase tracking-[0.4em] font-medium">Project Specification</span>
              <div className="flex gap-2">
                 {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-white rounded-full opacity-50" />)}
              </div>
           </div>
           
           <div className="h-[2px] w-0 bg-architecture-gold group-hover:w-full transition-all duration-700 delay-100" />
           
           <div className="mt-8 flex gap-32">
              <div className="flex flex-col">
                 <span className="text-[8px] uppercase text-white/50 mb-1">Status</span>
                 <span className="text-[10px] uppercase text-white">Completed</span>
              </div>
              <div className="flex flex-col">
                 <span className="text-[8px] uppercase text-white/50 mb-1">Client ID</span>
                 <span className="text-[10px] uppercase text-white">R-{project.id}092</span>
              </div>
           </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-start">
        <div>
          <h3 className="text-xl font-display font-bold uppercase tracking-widest group-hover:text-architecture-gold transition-colors">
            {project.title}
          </h3>
          <p className="text-[10px] text-architecture-charcoal/40 uppercase tracking-[0.3em] mt-2">
            {project.location} — {project.category}
          </p>
        </div>
        <div className="text-[3rem] font-black text-architecture-silver/10 leading-none">
          {project.id.toString().padStart(2, '0')}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="bg-architecture-offwhite py-64 relative overflow-hidden">
      {/* Background Decorative Title */}
      <div className="absolute top-0 right-0 p-32 hidden lg:block opacity-[0.03]">
        <h2 className="text-[15rem] font-display font-black leading-none uppercase tracking-tighter rotate-90 origin-top-right">
          Portfolio
        </h2>
      </div>

      <div className="section-container relative z-10">
        <div className="mb-48 border-l-8 border-architecture-gold pl-16">
          <span className="text-architecture-gold font-display font-medium tracking-[0.5em] uppercase text-xs mb-4 block">Selected Works</span>
          <h2 className="text-5xl md:text-[6rem] leading-[0.9] font-black uppercase tracking-tighter">
            Architectural <br />
            <span className="italic font-light font-display lowercase opacity-50">Impact</span>
          </h2>
        </div>

        {/* Dynamic Grid (Webflow Arrangement) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-32">
          {projects.map((project, index) => (
            <PortfolioItem key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-64 flex flex-col items-center">
          <div className="w-[1px] h-32 bg-architecture-gold/30 mb-8" />
          <button className="text-sm uppercase tracking-[0.5em] font-bold text-architecture-charcoal/40 hover:text-architecture-gold transition-colors">
            Load Master Archive
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
