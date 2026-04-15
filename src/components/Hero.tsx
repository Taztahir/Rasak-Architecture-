import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Building3D from './Building3D';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  // Webflow-style Parallax & Scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const headingWords = "Defining Space, Creating Legacy.".split(" ");

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-architecture-offwhite"
    >
      {/* Dynamic Background Technical Grid (Webflow Vibe) */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 right-0 w-2/3 h-2/3 opacity-[0.03] pointer-events-none"
      >
        <div className="absolute inset-0 border-l border-b border-architecture-charcoal/40" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>

      {/* Floating Background Label */}
      <motion.div
        style={{ x: y2, opacity: 0.02 }}
        className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left hidden lg:block"
      >
        <span className="text-[200px] font-display font-black whitespace-nowrap uppercase tracking-tighter">
          ARCHITECTURAL STUDIO
        </span>
      </motion.div>

      <div className="section-container relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* Text Content Area */}
        <div className="lg:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            style={{ y: y2 }}
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-[2px] bg-architecture-gold animate-line" />
              <span className="text-architecture-gold font-display font-medium tracking-[0.4em] uppercase text-xs">
                Excellence in Design
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] mb-12 leading-[0.9] font-bold tracking-tighter">
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: "backOut" }}
                  className="inline-block mr-4"
                >
                  {word === "Creating" ? (
                    <span className="text-architecture-gold italic font-light font-display">Creating</span>
                  ) : word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-xl text-architecture-charcoal/60 mb-16 max-w-xl leading-relaxed mt-8"
            >
              JR Design and Build  brings technical precision to visionary design. We combine advanced documentation with structural implementation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-12 items-center lg:items-start"
            >
              <a href="#portfolio" className="btn-primary w-full sm:w-auto group relative overflow-hidden inline-block text-center">
                <span className="relative z-10">Explore Portfolio</span>
                <motion.div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
              </a>
              <a href="#services" className="text-architecture-charcoal font-display uppercase text-xs tracking-[0.3em] hover:text-architecture-gold transition-colors flex items-center gap-4 py-8">
                Our Services <div className="w-8 h-[1px] bg-architecture-gold" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* 3D Visual Area (Webflow Arrangement) */}
        <div className="lg:col-span-5 relative mt-32 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
            style={{ rotate, y: y1 }}
            className="w-full h-[600px] glass-card border-architecture-silver/10 bg-white/40 p-0 relative shadow-2xl"
          >
            <div className="absolute top-12 left-12 z-20">
              <div className="text-[10px] text-architecture-charcoal/40 uppercase tracking-[0.4em] mb-2 font-bold">Tech-Spec v2.4</div>
              <div className="flex gap-2">
                <div className="w-16 h-[1px] bg-architecture-gold/30" />
                <div className="w-4 h-[1px] bg-architecture-gold" />
              </div>
            </div>

            <div className="w-full h-full relative z-10">
              <Building3D />
            </div>

            {/* Floating Technical Annotation (Webflow Style) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 top-1/3 bg-architecture-charcoal text-white p-12 py-16 text-center z-20 min-w-[120px]"
            >
              <div className="text-[10px] uppercase tracking-widest text-architecture-gold mb-1 font-bold">Concept A-12</div>
              <div className="text-[8px] uppercase tracking-widest text-architecture-silver/50">Residential Dev.</div>
            </motion.div>
          </motion.div>

          {/* Background Decorative Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-architecture-silver/5 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-architecture-silver/10 rounded-full pointer-events-none" />
        </div>
      </div>

      {/* Scroll indicator (Webflow) */}
      <motion.div
        style={{ opacity: opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden lg:flex"
      >
        <div className="text-[8px] uppercase tracking-[0.5em] text-architecture-charcoal/40 font-bold">Scroll to Explore</div>
        <div className="w-[1px] h-12 bg-architecture-gold/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
