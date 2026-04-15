import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-64 relative overflow-hidden">
      {/* Dynamic Background Technical Detail */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-architecture-silver/10 hidden lg:block" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        viewport={{ once: true }}
        className="section-container relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32">

          {/* Contact Info Header */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-architecture-gold font-display font-medium tracking-[0.5em] uppercase text-xs">03 / Connect</span>
              <div className="w-12 h-[1px] bg-architecture-gold/30" />
            </div>
            <h2 className="text-5xl md:text-[5.5rem] leading-[0.9] font-black uppercase tracking-tighter mb-16">
              Let's Build <br />
              <span className="text-architecture-gold italic font-light font-display lowercase opacity-50">together</span>
            </h2>

            <div className="space-y-16">
              {[
                { icon: <Mail size={18} />, label: "Email Inquiry", val: "Hardeybayurjnr31@gmail.com", href: "mailto:Hardeybayurjnr31@gmail.com" },
                { icon: <Phone size={18} />, label: "Direct Line", val: "09066791399", href: "tel:09066791399" },
                { icon: <MapPin size={18} />, label: "Studio", val: "Ojo Local Government Secretariat", href: "https://www.google.com/maps/search/Ojo+Local+Government+Secretariat+Olojo+Drive+Lagos+Nigeria" }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-8 group cursor-pointer"
                >
                  <div className="w-12 h-12 border border-architecture-gold/20 flex items-center justify-center text-architecture-gold group-hover:bg-architecture-gold group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-architecture-charcoal/40 mb-1 font-bold">{item.label}</div>
                    <div className="text-lg font-display uppercase tracking-wider group-hover:text-architecture-gold transition-colors">{item.val}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-24 p-24 border-l-4 border-architecture-gold bg-architecture-offwhite/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-[0.05] pointer-events-none">
                <FileText size={80} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest mb-2">Land Documentation</div>
              <p className="text-[10px] text-architecture-charcoal/60 leading-relaxed uppercase tracking-wider max-w-xs">
                Specialized in Survey Plans, C of O, and Land Search verification. State 'Land Docs' in your message.
              </p>
            </div>
          </div>

          {/* Contact Form Area (Webflow Grid) */}
          <div className="lg:col-span-7">
            <div className="glass-card bg-white border-architecture-silver/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-12 md:p-48">
              <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="group relative">
                    <input type="text" className="w-full bg-transparent border-b-2 border-architecture-silver/10 py-4 focus:border-architecture-gold outline-none transition-colors peer placeholder-transparent" id="name" placeholder="Name" />
                    <label htmlFor="name" className="absolute left-0 top-0 text-[10px] uppercase tracking-widest text-architecture-charcoal/40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-architecture-gold pointer-events-none font-bold">Full Name</label>
                  </div>
                  <div className="group relative">
                    <input type="email" className="w-full bg-transparent border-b-2 border-architecture-silver/10 py-4 focus:border-architecture-gold outline-none transition-colors peer placeholder-transparent" id="email" placeholder="Email" />
                    <label htmlFor="email" className="absolute left-0 top-0 text-[10px] uppercase tracking-widest text-architecture-charcoal/40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-architecture-gold pointer-events-none font-bold">Email Address</label>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-architecture-charcoal/40 font-bold">Service Category</label>
                  <div className="flex flex-wrap gap-4">
                    {["Design", "Construction", "Interior", "Land Docs"].map(opt => (
                      <button key={opt} type="button" className="px-16 py-8 border border-architecture-silver/10 text-[10px] uppercase tracking-widest hover:border-architecture-gold hover:text-architecture-gold transition-all">
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="group relative">
                  <textarea rows={4} className="w-full bg-transparent border-b-2 border-architecture-silver/10 py-4 focus:border-architecture-gold outline-none transition-colors peer placeholder-transparent resize-none" id="msg" placeholder="Message"></textarea>
                  <label htmlFor="msg" className="absolute left-0 top-0 text-[10px] uppercase tracking-widest text-architecture-charcoal/40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-architecture-gold pointer-events-none font-bold">Message Details</label>
                </div>

                <button className="w-full bg-architecture-charcoal text-white p-5 uppercase text-xs tracking-[0.5em] font-bold hover:bg-architecture-gold transition-all flex items-center justify-center gap-6 group">
                  Submit Proposal <Send size={14} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

// Internal Import helper
const FileText = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

export default Contact;
