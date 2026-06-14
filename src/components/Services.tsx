import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Layout, FileText, PenTool, HardHat, ArrowRight } from 'lucide-react';
import ServiceImage1 from '../assets/Image21.jpeg';
import ServiceImage2 from '../assets/Documentation2.jpeg';
import ServiceImage3 from '../assets/RENDER2.jpeg';
import ServiceImage4 from '../assets/BUNGALOWSCENE2.jpeg';

const services = [
  {
    title: "Interior Design",
    description: "Creating transformative spaces that balance aesthetics with functional excellence. We specialize in bespoke residential and high-performance commercial interiors.",
    icon: <Layout className="w-8 h-8" />,
    features: ["Bespoke Furniture", "Space Optimization", "Material Curation"],
    image: ServiceImage1
  },
  {
    title: "Land Documentation",
    description: "Expert guidance through the complexities of land property documentation. We manage survey plans, C of O processing, and comprehensive land searches.",
    icon: <FileText className="w-8 h-8" />,
    features: ["Survey Verification", "Title Processing", "Regulatory Compliance"],
    image: ServiceImage2
  },
  {
    title: "Architectural Design",
    description: "Conceptualizing architectural masterpieces through precision planning. Our designs bridge the gap between imagination and structural reality.",
    icon: <PenTool className="w-8 h-8" />,
    features: ["3D Visualization", "Structural Planning", "Sustainable Design"],
    image: ServiceImage3
  },
  {
    title: "Construction Management",
    description: "From groundbreaking to final handover. We implement our designs with rigorous attention to detail, ensuring safety, quality, and technical integrity.",
    icon: <HardHat className="w-8 h-8" />,
    features: ["Project Supervision", "Material Sourcing", "Exterior & Interior Builds"],
    image: ServiceImage4
  }
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const titleYVal = shouldReduceMotion ? 0 : titleY;

  return (
    <section id="services" ref={containerRef} className="bg-white py-48 relative overflow-hidden">
      {/* Decorative Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-architecture-charcoal" />
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-architecture-charcoal" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-architecture-charcoal" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10 lg:mb-40 gap-12">
          <motion.div
            style={{ y: titleYVal }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-architecture-gold font-display font-medium tracking-[0.4em] uppercase text-xs">01 / Services</span>
              <div className="w-12 h-[1px] bg-architecture-gold/30" />
            </div>
            <h2 className="text-4xl md:text-6xl leading-[0.95] mb-8 font-black tracking-tighter uppercase font-display">
              Foundational <br />
              <span className="text-architecture-gold italic font-display font-light normal-case">Architectural</span> Solutions
            </h2>
          </motion.div>

          <div className="lg:max-w-xs">
            <p className="text-sm text-architecture-charcoal/50 leading-relaxed uppercase tracking-wider font-medium">
              We operate at the intersection of technical precision and creative vision, delivering end-to-end architectural services.
            </p>
          </div>
        </div>

        {/* Service Layouts */}
        {shouldReduceMotion ? (
          /* Static Grid Layout for Reduced Motion preference */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative w-full h-[520px] overflow-hidden border border-architecture-silver/10 bg-architecture-charcoal text-white"
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt=""
                    className="w-full h-full object-cover filter grayscale opacity-25"
                  />
                  <div className="absolute inset-0 bg-architecture-charcoal/80 z-10" />
                </div>

                {/* Content */}
                <div className="relative z-20 w-full h-full flex flex-col justify-between p-8">
                  {/* Header */}
                  <div className="flex justify-between items-start w-full">
                    <div className="flex items-center gap-4">
                      <span className="text-architecture-gold font-display text-sm tracking-widest font-bold">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <div className="w-6 h-[1px] bg-architecture-gold/40" />
                      <h3 className="text-base font-display uppercase tracking-[0.2em] font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <div className="text-architecture-gold">
                      {service.icon}
                    </div>
                  </div>

                  {/* Description & Features */}
                  <div className="my-auto">
                    <p className="text-sm text-white/70 leading-relaxed mb-6 font-sans">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-[2px] bg-architecture-gold" />
                          <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-display">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center w-full border-t border-white/10 pt-4">
                    <a
                      href="#contact"
                      className="text-[10px] uppercase tracking-[0.3em] text-architecture-gold hover:text-white transition-colors font-bold flex items-center gap-2"
                    >
                      Start Project <ArrowRight size={12} />
                    </a>
                    <span className="text-[8px] text-white/30 uppercase tracking-[0.2em]">
                      JR DESIGN & BUILD
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Premium Interactive Expanding Accordion Layout */
          <>
            {/* Desktop Horizontal Accordion */}
            <div className="hidden lg:flex w-full h-[600px] bg-architecture-charcoal relative overflow-hidden border border-architecture-silver/10 mt-24">
              {services.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={service.title}
                    onClick={() => setActiveIndex(index)}
                    className={`relative h-full transition-all duration-700 ease-out overflow-hidden border-r border-architecture-silver/10 last:border-r-0 cursor-pointer ${isActive ? 'w-[55%]' : 'w-[15%] hover:bg-white/5'
                      }`}
                    role="tabpanel"
                    aria-expanded={isActive}
                  >
                    {/* Background Image with Zoom */}
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt=""
                        animate={{
                          scale: isActive ? 1.08 : 1.0,
                          opacity: isActive ? 0.35 : 0.15
                        }}
                        transition={{ duration: isActive ? 8 : 0.5, ease: "easeOut" }}
                        className="w-full h-full object-cover filter grayscale"
                      />
                      <div className="absolute inset-0 bg-architecture-charcoal/80 z-10 transition-colors duration-500" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:30px_30px] z-12 pointer-events-none" />
                    </div>

                    {/* Content Wrapper */}
                    <div className="relative z-20 w-full h-full flex flex-col justify-between p-12">
                      {isActive ? (
                        <>
                          {/* Header */}
                          <div className="flex justify-between items-start w-full">
                            <div className="flex items-center gap-4">
                              <span className="text-architecture-gold font-display text-sm tracking-widest font-bold">
                                {(index + 1).toString().padStart(2, '0')}
                              </span>
                              <div className="w-8 h-[1px] bg-architecture-gold/40" />
                              <h3 className="text-lg font-display uppercase tracking-[0.2em] font-bold text-white">
                                {service.title}
                              </h3>
                            </div>
                            <div className="text-architecture-gold animate-pulse">
                              {service.icon}
                            </div>
                          </div>

                          {/* Body */}
                          <div className="max-w-xl my-auto">
                            <p className="text-base text-white/80 leading-relaxed mb-8 font-sans">
                              {service.description}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                              {service.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                  <div className="w-2 h-[2px] bg-architecture-gold" />
                                  <span className="text-xs uppercase tracking-widest text-white/60 font-bold font-display">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Footer */}
                          <div className="flex justify-between items-center w-full border-t border-white/10 pt-6">
                            <a
                              href="#contact"
                              className="text-xs uppercase tracking-[0.3em] text-architecture-gold hover:text-white transition-colors font-bold flex items-center gap-2 group/btn"
                            >
                              Start Project <ArrowRight size={14} className="transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                            </a>
                            <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
                              JR DESIGN & BUILD
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col justify-between items-center h-full py-6">
                          <span className="text-sm font-display font-medium text-architecture-gold tracking-widest">
                            {(index + 1).toString().padStart(2, '0')}
                          </span>
                          <div className="h-64 flex items-center justify-center">
                            <h3 className="text-sm font-display font-bold uppercase tracking-[0.3em] whitespace-nowrap -rotate-90 origin-center text-white/40">
                              {service.title}
                            </h3>
                          </div>
                          <div className="text-architecture-gold opacity-40">
                            {service.icon}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Vertical Accordion */}
            <div className="lg:hidden flex flex-col w-full gap-4 mt-12">
              {services.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={service.title}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-full transition-all duration-500 ease-out overflow-hidden border border-architecture-silver/10 rounded-none bg-architecture-charcoal ${isActive ? 'h-[440px]' : 'h-[72px] cursor-pointer hover:bg-white/5'
                      }`}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                      <img
                        src={service.image}
                        alt=""
                        className={`w-full h-full object-cover filter grayscale transition-all duration-[8000ms] ${isActive ? 'scale-108 opacity-35' : 'scale-100 opacity-15'
                          }`}
                      />
                      <div className="absolute inset-0 bg-architecture-charcoal/85 z-10" />
                    </div>

                    {/* Content Wrapper */}
                    <div className="relative z-20 w-full h-full flex flex-col justify-between p-6">
                      {/* Header */}
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-4">
                          <span className="text-architecture-gold font-display text-sm tracking-widest font-bold">
                            {(index + 1).toString().padStart(2, '0')}
                          </span>
                          <div className="w-6 h-[1px] bg-architecture-gold/40" />
                          <h3 className="text-sm font-display uppercase tracking-[0.2em] font-bold text-white">
                            {service.title}
                          </h3>
                        </div>
                        <div className="text-architecture-gold scale-75">
                          {service.icon}
                        </div>
                      </div>

                      {/* Expanded body content */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className="flex-grow flex flex-col justify-between mt-6"
                        >
                          <p className="text-sm text-white/70 leading-relaxed mb-6 font-sans">
                            {service.description}
                          </p>

                          <div className="grid grid-cols-1 gap-2 mb-6">
                            {service.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div className="w-2 h-[2px] bg-architecture-gold" />
                                <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold font-display">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="flex justify-between items-center w-full border-t border-white/10 pt-4 mt-auto">
                            <a
                              href="#contact"
                              className="text-[10px] uppercase tracking-[0.3em] text-architecture-gold hover:text-white transition-colors font-bold flex items-center gap-2"
                            >
                              Start Project <ArrowRight size={12} />
                            </a>
                            <span className="text-[8px] text-white/30 uppercase tracking-[0.2em]">
                              JR DESIGN & BUILD
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Services;
