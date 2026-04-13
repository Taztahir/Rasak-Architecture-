import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  return (
    <div className="hidden lg:block">
      {/* Main architectural crosshair/dot */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div 
          animate={{ 
            scale: isHovering ? 2.5 : 1,
            backgroundColor: isHovering ? "rgba(197, 160, 89, 0.5)" : "#FFFFFF"
          }}
          className="w-1.5 h-1.5 rounded-full"
        />
        
        {/* Technical Crosshairs */}
        <motion.div 
          animate={{ opacity: isHovering ? 1 : 0, rotate: isHovering ? 90 : 0 }}
          className="absolute w-12 h-[1px] bg-architecture-gold/40" 
        />
        <motion.div 
          animate={{ opacity: isHovering ? 1 : 0, rotate: isHovering ? 90 : 0 }}
          className="absolute h-12 w-[1px] bg-architecture-gold/40" 
        />
      </motion.div>
    </div>
  );
};

export default CustomCursor;
