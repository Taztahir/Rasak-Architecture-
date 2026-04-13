import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-architecture-charcoal text-white py-48">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <div className="flex flex-col mb-8">
              <span className="font-display text-3xl font-bold tracking-[0.2em] uppercase">
                Rasak
              </span>
              <span className="text-[12px] tracking-[0.4em] uppercase text-architecture-gold -mt-1">
                Architecture
              </span>
            </div>
            <p className="text-architecture-silver text-sm max-w-sm leading-relaxed mb-8">
              Multidisciplinary architecture and design studio specializing in sustainable structures, interior masterpieces, and complex land documentation.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-architecture-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-architecture-gold transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-architecture-gold transition-colors">Twitter</a>
            </div>
          </div>

          <div>
            <h4 className="text-architecture-gold text-xs uppercase tracking-widest mb-6 px-4 border-l-2 border-architecture-gold">Navigation</h4>
            <ul className="space-y-4 text-sm text-architecture-silver/70">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-architecture-gold text-xs uppercase tracking-widest mb-6 px-4 border-l-2 border-architecture-gold">Specialties</h4>
            <ul className="space-y-4 text-sm text-architecture-silver/70">
              <li>Interior Design</li>
              <li>Land Documentation</li>
              <li>Structural Design</li>
              <li>Full Implementation</li>
            </ul>
          </div>
        </div>

        <div className="pt-24 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-architecture-silver/40 uppercase tracking-widest">
            © 2026 Rasak Architecture. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] text-architecture-silver/40 uppercase tracking-widest">Privacy Policy</span>
            <span className="text-[10px] text-architecture-silver/40 uppercase tracking-widest">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
