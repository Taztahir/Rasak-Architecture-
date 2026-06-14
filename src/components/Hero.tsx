import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroImage1 from '../assets/RENDER1.jpeg';
import HeroImage2 from '../assets/BUNGALOWSCENE1.jpeg';
import HeroImage3 from '../assets/RENDER3.jpeg';
import HeroImage4 from '../assets/BUNGALOWSCENE3.jpeg';

const slides = [
  {
    image: HeroImage1,
    tagline: "Excellence in Design",
    title: (
      <>
        Defining Space, <br />
        <span className="text-architecture-gold italic font-light font-display lowercase">Creating</span> Legacy.
      </>
    ),
    description: "JR Design and Build brings technical precision to visionary design. We combine advanced documentation with structural implementation.",
    linkText: "Explore Portfolio",
    linkHref: "#portfolio",
  },
  {
    image: HeroImage2,
    tagline: "Sustainable Living",
    title: (
      <>
        Structural Power, <br />
        <span className="text-architecture-gold italic font-light font-display lowercase">Refined</span> Design.
      </>
    ),
    description: "Engineering eco-friendly residential spaces that blend architectural beauty with permanent environmental durability.",
    linkText: "Our Services",
    linkHref: "#services",
  },
  {
    image: HeroImage3,
    tagline: "Commercial Innovation",
    title: (
      <>
        Sleek Modern <br />
        <span className="text-architecture-gold italic font-light font-display lowercase">Environments</span>.
      </>
    ),
    description: "Creating state-of-the-art retail, commercial layouts, and landmark properties engineered for optimal user engagement.",
    linkText: "Get in Touch",
    linkHref: "#contact",
  },
  {
    image: HeroImage4,
    tagline: "Land Documentation",
    title: (
      <>
        Seamless Approvals, <br />
        <span className="text-architecture-gold italic font-light font-display lowercase">Solid</span> Plans.
      </>
    ),
    description: "Navigating complex building planning and regulatory approvals to secure property rights and ground your construction.",
    linkText: "Our Approach",
    linkHref: "#services",
  }
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll effects for subtle parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const yTextVal = shouldReduceMotion ? 0 : yText;
  const yBgVal = shouldReduceMotion ? 0 : yBg;

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Content transition variants
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const contentVariants: any = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-screen min-h-[650px] overflow-hidden bg-architecture-charcoal"
      aria-roledescription="carousel"
      aria-label="Hero Showcase"
    >
      {/* Background Image Slideshow with cross-fade and zoom */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ scale: shouldReduceMotion ? 1 : 1.05, opacity: 0 }}
            animate={{ scale: shouldReduceMotion ? 1 : 1.1, opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ y: yBgVal }}
            transition={{
              scale: { duration: 6, ease: "linear" },
              opacity: { duration: 1.2 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentIndex].image}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:40px_40px] pointer-events-none z-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85 z-12 pointer-events-none" />
      </div>

      {/* Main Slide Text Content */}
      <div className="relative z-20 w-full h-full flex items-center pt-32">
        <motion.div
          style={{ y: yTextVal }}
          className="max-w-7xl mx-auto px-16 w-full text-white"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="max-w-4xl"
            >
              {/* Tagline */}
              <motion.div variants={contentVariants} className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[2px] bg-architecture-gold" />
                <span className="text-architecture-gold font-display font-medium tracking-[0.4em] uppercase text-xs md:text-sm">
                  {slides[currentIndex].tagline}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={contentVariants}
                className="text-3xl sm:text-6xl md:text-7xl leading-[1.0] font-black uppercase tracking-tighter mb-8 font-display"
              >
                {slides[currentIndex].title}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={contentVariants}
                className="text-base sm:text-lg md:text-xl text-white/70 mb-12 max-w-2xl leading-relaxed font-sans"
              >
                {slides[currentIndex].description}
              </motion.p>

              {/* Actions */}
              <motion.div
                variants={contentVariants}
                className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-center sm:items-start"
              >
                <a
                  href={slides[currentIndex].linkHref}
                  className="bg-white text-architecture-charcoal px-32 py-16 rounded-none hover:bg-architecture-gold hover:text-white transition-all duration-300 uppercase text-xs tracking-widest font-semibold w-full sm:w-auto text-center"
                >
                  {slides[currentIndex].linkText}
                </a>
                <a
                  href="#services"
                  className="text-white font-display uppercase text-xs tracking-[0.3em] hover:text-architecture-gold transition-colors flex items-center gap-4 py-4"
                >
                  Our Services <div className="w-8 h-[1px] bg-architecture-gold" />
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Slide Navigation Controls (Bottom Bar) */}
      <div className="absolute bottom-16 left-0 w-full z-30">
        <div className="max-w-7xl mx-auto px-16 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Slide Counters */}
          <div className="flex items-center gap-4 text-white font-display text-sm tracking-widest font-bold order-2 md:order-1">
            <span className="text-architecture-gold">
              {(currentIndex + 1).toString().padStart(2, '0')}
            </span>
            <span className="opacity-30">/</span>
            <span className="opacity-50">
              {slides.length.toString().padStart(2, '0')}
            </span>
          </div>

          {/* Progress indicators (Clickable Dots/Bars) */}
          <div className="flex gap-4 items-center order-1 md:order-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="h-8 flex items-center justify-center cursor-pointer"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentIndex === index ? "true" : "false"}
              >
                <div className="h-[2px] w-16 bg-white/20 relative overflow-hidden">
                  {currentIndex === index && (
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                      key={currentIndex}
                      className="absolute inset-0 bg-architecture-gold"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Previous / Next buttons */}
          <div className="flex gap-4 order-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 border border-white/20 rounded-none flex items-center justify-center text-white hover:border-architecture-gold hover:text-architecture-gold transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 border border-white/20 rounded-none flex items-center justify-center text-white hover:border-architecture-gold hover:text-architecture-gold transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

