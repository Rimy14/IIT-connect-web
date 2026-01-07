import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring animation for main cursor
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // Trail springs with increasing delay - define each one individually
  const trail1X = useSpring(cursorX, { damping: 23, stiffness: 275, mass: 0.6 });
  const trail1Y = useSpring(cursorY, { damping: 23, stiffness: 275, mass: 0.6 });
  const trail2X = useSpring(cursorX, { damping: 26, stiffness: 250, mass: 0.7 });
  const trail2Y = useSpring(cursorY, { damping: 26, stiffness: 250, mass: 0.7 });
  const trail3X = useSpring(cursorX, { damping: 29, stiffness: 225, mass: 0.8 });
  const trail3Y = useSpring(cursorY, { damping: 29, stiffness: 225, mass: 0.8 });
  const trail4X = useSpring(cursorX, { damping: 32, stiffness: 200, mass: 0.9 });
  const trail4Y = useSpring(cursorY, { damping: 32, stiffness: 200, mass: 0.9 });
  const trail5X = useSpring(cursorX, { damping: 35, stiffness: 175, mass: 1.0 });
  const trail5Y = useSpring(cursorY, { damping: 35, stiffness: 175, mass: 1.0 });
  const trail6X = useSpring(cursorX, { damping: 38, stiffness: 150, mass: 1.1 });
  const trail6Y = useSpring(cursorY, { damping: 38, stiffness: 150, mass: 1.1 });

  const trailSprings = [
    { x: trail1X, y: trail1Y },
    { x: trail2X, y: trail2Y },
    { x: trail3X, y: trail3Y },
    { x: trail4X, y: trail4Y },
    { x: trail5X, y: trail5Y },
    { x: trail6X, y: trail6Y },
  ];

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Check for hoverable elements
    const handleElementHover = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer') ||
        getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', handleElementHover);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', handleElementHover);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Trail particles */}
      {trailSprings.map((spring, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-[9998] mix-blend-screen"
          style={{
            x: spring.x,
            y: spring.y,
            translateX: '-50%',
            translateY: '-50%',
          }}
        >
          <motion.div
            animate={{
              scale: isVisible ? 1 : 0,
              opacity: isVisible ? (1 - i * 0.15) * 0.6 : 0,
            }}
            transition={{ duration: 0.15 }}
            className="rounded-full"
            style={{
              width: `${Math.max(4, 10 - i)}px`,
              height: `${Math.max(4, 10 - i)}px`,
              background: `radial-gradient(circle, rgba(220, 38, 38, ${0.8 - i * 0.1}) 0%, rgba(220, 38, 38, 0) 70%)`,
            }}
          />
        </motion.div>
      ))}

      {/* Main cursor - outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
          className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center"
          style={{
            boxShadow: isHovering 
              ? '0 0 20px rgba(220, 38, 38, 0.5), 0 0 40px rgba(220, 38, 38, 0.3)' 
              : 'none',
          }}
        >
          {/* Inner dot */}
          <motion.div
            animate={{
              scale: isClicking ? 1.5 : isHovering ? 0 : 1,
              opacity: isHovering ? 0 : 1,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </motion.div>
      </motion.div>

      {/* Glow effect on hover */}
      <motion.div
        className="fixed pointer-events-none z-[9997]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1 : 0,
            opacity: isHovering ? 0.5 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="w-20 h-20 rounded-full bg-red-500 blur-xl"
        />
      </motion.div>
    </>
  );
}
