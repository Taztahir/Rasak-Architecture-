import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Image as ImageIcon, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/Logo2.PNG';

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
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home', icon: <Home size={18} /> },
    { name: 'Services', href: '#services', icon: <Briefcase size={18} /> },
    { name: 'Portfolio', href: '#portfolio', icon: <ImageIcon size={18} /> },
    { name: 'Contact', href: '#contact', icon: <Phone size={18} /> },
  ];

  const socialLinks = [
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@jrdesignandbuild5?_r=1&_t=ZS-95YL6O7vI0a',
      d: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"
    },
    {
      name: 'X',
      href: 'https://x.com/hardeybayur_jr?s=21',
      d: "M4 4l11.733 16h4.267l-11.733 -16zm0 16l6.768-6.768m2.46-2.46L20 4"
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/abdulrasak05?igsh=MXU0eTZ4YmhpeWJueg%3D%3D&utm_source=qr',
      d: "M2 6a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v12a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4z M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01"
    }
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
    <>
      {/* Topnav with Socials */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-architecture-charcoal/95 border-b border-white/5 flex items-center justify-between px-8 md:px-12 transition-all duration-500 h-10 text-white ${isScrolled ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
          }`}
      >
        <div className="text-[9px] font-mono tracking-[0.25em] uppercase text-white/50">
          Lagos, NG
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-architecture-gold transition-colors p-1"
              title={link.name}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={link.d} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed left-0 w-full z-50 px-3 transition-all duration-500 ${isScrolled
            ? 'top-0 bg-white/90 backdrop-blur-md py-4 px-3 shadow-sm text-architecture-charcoal'
            : 'top-10 bg-transparent py-4 text-white'
          }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <img src={Logo} alt="" className="w-40 h-40 transition-all duration-500" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolled ? 'text-architecture-charcoal' : 'text-white'}`}>
                JRDESIGNANDBUILD
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 lg:space-x-16 items-center">
            {navItems.filter(i => i.name !== 'Contact').map((item) => (
              <a key={item.name} href={item.href} className="nav-link flex items-center gap-2 group">
                <span className="text-architecture-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">/</span>
                {item.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary py-5 px-24 inline-block">Contact</a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden relative z-[60] transition-colors duration-300 ${isMobileMenuOpen || isScrolled ? 'text-architecture-charcoal' : 'text-white'
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Architectural Grid Line Accent */}
        <div className={`h-[1px] bg-architecture-gold/20 absolute bottom-0 left-0 transition-all duration-700 ${isScrolled ? 'w-full' : 'w-0'}`} />
      </nav>

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
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full py-16 text-sm inline-block text-center">Start A Project</a>
                <div className="mt-12 flex justify-between items-center text-[10px] uppercase tracking-widest text-architecture-charcoal/30">
                  <span>Architecture & Design</span>
                  <div className="w-12 h-[1px] bg-architecture-silver/20" />
                  <span>Est 2012</span>
                </div>
              </motion.div>

              {/* Decorative Vertical Text */}
              <div className="absolute right-4 bottom-48 rotate-90 origin-bottom-right opacity-5 pointer-events-none">
                <span className="text-8xl font-display font-bold whitespace-nowrap uppercase tracking-tighter">
                  JR DESIGN AND BUILD
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
