import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Image as ImageIcon, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home', icon: <Home size={18} /> },
    { name: 'Services', href: '#services', icon: <Briefcase size={18} /> },
    { name: 'Portfolio', href: '#portfolio', icon: <ImageIcon size={18} /> },
    { name: 'Contact', href: '#contact', icon: <Phone size={18} /> },
  ];

  const menuVariants: any = {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 400, damping: 40 } },
    open: { x: 0, transition: { type: 'spring', stiffness: 400, damping: 40, staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants: any = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const backdropVariants: any = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-3 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 px-3 shadow-sm' : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-display text-2xl font-bold tracking-[0.2em] uppercase text-architecture-charcoal">
            JR
          </span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-architecture-gold -mt-1">
            Design and Build
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-48 items-center">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link flex items-center gap-2 group">
              <span className="text-architecture-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">/</span>
              {item.name}
            </a>
          ))}
          <button className="btn-primary py-5 px-24">Get Entry</button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-architecture-charcoal relative z-[60]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-architecture-charcoal/20 backdrop-blur-sm z-[51] md:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-[80%] max-w-[400px] bg-white z-[55] md:hidden shadow-2xl flex flex-col p-12"
            >
              {/* Architectural Technical Detail Header */}
              <div className="mt-32 mb-48">
                <div className="w-16 h-[2px] bg-architecture-gold mb-4" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-architecture-charcoal/40">Navigation Menu</span>
              </div>

              <div className="flex flex-col space-y-8">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    variants={itemVariants}
                    className="flex items-center gap-6 py-4 text-2xl font-display font-medium uppercase tracking-widest text-architecture-charcoal hover:text-architecture-gold transition-colors group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-xs text-architecture-gold font-bold opacity-0 group-hover:opacity-100 transition-opacity">/</span>
                    {item.name}
                    <div className="h-[1px] flex-grow bg-architecture-silver/10 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                  </motion.a>
                ))}
              </div>

              <motion.div variants={itemVariants} className="mt-auto pb-12">
                <button className="btn-primary w-full py-16 text-sm">Start A Project</button>
                <div className="mt-12 flex justify-between items-center text-[10px] uppercase tracking-widest text-architecture-charcoal/30">
                  <span>Architecture & Design</span>
                  <div className="w-12 h-[1px] bg-architecture-silver/20" />
                  <span>Est 2012</span>
                </div>
              </motion.div>

              {/* Decorative Vertical Text */}
              <div className="absolute right-4 bottom-48 rotate-90 origin-bottom-right opacity-5 pointer-events-none">
                <span className="text-8xl font-display font-bold whitespace-nowrap uppercase tracking-tighter">
                  RASAK ARCHITECTURE
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Architectural Grid Line Accent */}
      <div className={`h-[1px] bg-architecture-gold/20 absolute bottom-0 left-0 transition-all duration-700 ${isScrolled ? 'w-full' : 'w-0'}`} />
    </nav>
  );
};

export default Navbar;
