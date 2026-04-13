import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layout, FileText, PenTool, HardHat } from 'lucide-react';

const services = [
  {
    title: "Interior Design",
    description: "Creating transformative spaces that balance aesthetics with functional excellence. We specialize in bespoke residential and high-performance commercial interiors.",
    icon: <Layout className="w-8 h-8" />,
    features: ["Bespoke Furniture", "Space Optimization", "Material Curation"],
    offset: 0
  },
  {
    title: "Land Documentation",
    description: "Expert guidance through the complexities of land property documentation. We manage survey plans, C of O processing, and comprehensive land searches.",
    icon: <FileText className="w-8 h-8" />,
    features: ["Survey Verification", "Title Processing", "Regulatory Compliance"],
    offset: 40
  },
  {
    title: "Building Design",
    description: "Conceptualizing architectural masterpieces through precision planning. Our designs bridge the gap between imagination and structural reality.",
    icon: <PenTool className="w-8 h-8" />,
    features: ["3D Visualization", "Structural Planning", "Sustainable Design"],
    offset: -20
  },
  {
    title: "Construction Management",
    description: "From groundbreaking to final handover. We implement our designs with rigorous attention to detail, ensuring safety, quality, and technical integrity.",
    icon: <HardHat className="w-8 h-8" />,
    features: ["Project Supervision", "Material Sourcing", "Exterior & Interior Builds"],
    offset: 20
  }
];

const Services: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);

  return (
    <section id="services" ref={containerRef} className="bg-white py-64 relative overflow-hidden">
      {/* Decorative Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-architecture-charcoal" />
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-architecture-charcoal" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-architecture-charcoal" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-48 gap-12">
          <motion.div
            style={{ y: titleY }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-architecture-gold font-display font-medium tracking-[0.4em] uppercase text-xs">01 / Services</span>
              <div className="w-12 h-[1px] bg-architecture-gold/30" />
            </div>
            <h2 className="text-4xl md:text-[5rem] leading-[0.95] mb-8 font-black tracking-tighter uppercase">
              Foundational <br />
              <span className="text-architecture-gold italic font-display font-light normal-case">Architectural</span> Solutions
            </h2>
          </motion.div>

          <div className="lg:max-w-xs pt-12">
            <p className="text-sm text-architecture-charcoal/50 leading-relaxed uppercase tracking-wider font-medium">
              We operate at the intersection of technical precision and creative vision, delivering end-to-end architectural services.
            </p>
          </div>
        </div>

        {/* Asymmetric Grid Arrangement (Webflow Vibe) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mt-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: service.offset }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "circOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="group p-4 md:p-8 relative h-full flex flex-col"
            >
              {/* Technical Marker */}
              <div className="absolute -top-4 -left-4 text-[8px] font-bold text-architecture-gold opacity-0 group-hover:opacity-100 transition-opacity">
                Ref: {index + 1}
              </div>

              <div className="bg-architecture-offwhite p-32 flex flex-col h-full border border-architecture-silver/5 hover:border-architecture-gold/20 transition-all duration-500 shadow-sm hover:shadow-2xl">
                <div className="text-architecture-gold mb-8 group-hover:rotate-[360deg] transition-transform duration-700">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-architecture-gold transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-architecture-charcoal/60 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="space-y-3 mt-auto">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className="w-4 h-[1px] bg-architecture-gold origin-left"
                      />
                      <span className="text-[9px] uppercase tracking-[0.2em] text-architecture-charcoal/40 font-bold">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Corner Lines */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-architecture-gold/10 group-hover:border-architecture-gold transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Global Technical Progress Line */}
        <div className="mt-64 relative">
          <div className="absolute inset-0 h-[10px] bg-architecture-offwhite" />
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="absolute inset-0 h-[10px] bg-architecture-gold origin-left opacity-20"
          />
          <div className="relative flex justify-between px-4 py-8">
            <span className="text-[10px] uppercase tracking-widest text-architecture-charcoal/30">Phase Analysis</span>
            <span className="text-[10px] uppercase tracking-widest text-architecture-charcoal/30">Implementation Cycle</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
