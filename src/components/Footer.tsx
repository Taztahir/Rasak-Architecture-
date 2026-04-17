import Logo from '../assets/Logo.png';

const SocialIcon = ({ d, size = 18 }: { d: string, size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const Footer: React.FC = () => {
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

  return (
    <footer className="bg-architecture-charcoal text-white py-48">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-4">
              <div>
                <img src={Logo} alt="" className="w-48 h-48" />
              </div>
              <div className="flex flex-col mb-8">
                <span className="font-display text-3xl font-bold tracking-[0.2em] uppercase">
                  JR
                </span>
                <span className="text-[12px] tracking-[0.4em] uppercase text-architecture-gold -mt-1">
                  Design and Build
                </span>
              </div>
            </div>
            <p className="text-architecture-silver text-sm max-w-sm leading-relaxed mb-8">
              Multidisciplinary architecture and design studio specializing in sustainable structures, interior masterpieces, and complex land documentation.
            </p>
            <div className="flex gap-6 items-center">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-architecture-silver/20 flex items-center justify-center text-architecture-silver hover:border-architecture-gold hover:text-architecture-gold transition-all duration-300"
                  title={link.name}
                >
                  <SocialIcon d={link.d} />
                </a>
              ))}
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
              <li><a href="#services" className="hover:text-white transition-colors">Interior Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Land Documentation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Structural Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Full Implementation</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-24 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-architecture-silver/40 uppercase tracking-widest">
            © 2026 JR Design and Build. All Rights Reserved.
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
