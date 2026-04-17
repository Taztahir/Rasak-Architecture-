import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-32 right-16 md:bottom-32 md:right-32 z-50 group"
          aria-label="Scroll to top"
        >
          {/* Architectural Background Shape */}
          <div className="absolute inset-0 bg-architecture-charcoal group-hover:bg-architecture-gold transition-colors duration-300" />

          {/* Technical Corner Accents */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-architecture-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-architecture-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative p-4 text-white">
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </div>

          {/* Label that appears on hover */}
          <span className="absolute right-full mr-16 top-1/2 -translate-y-1/2 px-12 py-4 bg-architecture-charcoal text-[10px] uppercase tracking-widest text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Back to Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
