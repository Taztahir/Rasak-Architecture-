import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import VideoAsset from '../assets/Video.mp4';

const VideoShowcase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // useInView hook triggers when the element comes into the viewport
  const isInView = useInView(videoRef, { margin: "-20%", once: false });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        // Play when scrolled into view
        videoRef.current.play().catch(e => console.log("Video autoplay blocked:", e));
      } else {
        // Pause when scrolled out of view to save resources
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-architecture-charcoal">
      <video
        ref={videoRef}
        className="w-full h-full object-cover opacity-80"
        muted
        loop
        playsInline
        src={VideoAsset}
      />

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-architecture-charcoal/30 flex items-center justify-center pointer-events-none">
        <h2 className="text-white text-xl md:text-8xl lg:text-4xl font-display font-black uppercase tracking-tighter opacity-90 drop-shadow-2xl">
          JR Design and Build
        </h2>
      </div>
    </section>
  );
};

export default VideoShowcase;
