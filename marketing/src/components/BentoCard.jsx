import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function BentoCard({
  children,
  className = '',
  colSpan = 1,
  rowSpan = 1,
  delay = 0,
  spotlight = true,
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  
  // Spotlight position
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const colSpanClass = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
  }[colSpan];

  const rowSpanClass = {
    1: 'md:row-span-1',
    2: 'md:row-span-2',
  }[rowSpan];

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalized values from -0.5 to 0.5
    const normalizedX = (e.clientX - centerX) / rect.width;
    const normalizedY = (e.clientY - centerY) / rect.height;
    
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
    
    // Spotlight follows cursor
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`
        relative overflow-hidden
        bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent
        backdrop-blur-xl 
        border border-white/[0.08]
        rounded-3xl 
        p-8 
        shadow-2xl shadow-black/50
        group
        cursor-default
        ${colSpanClass} 
        ${rowSpanClass}
        ${className}
      `}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-[-1px] rounded-3xl bg-gradient-to-r from-red-600/50 via-red-900/30 to-red-600/50 blur-sm" />
      </div>
      
      {/* Spotlight effect */}
      {spotlight && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useTransform(
              [spotlightX, spotlightY],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(220, 38, 38, 0.1), transparent 40%)`
            ),
          }}
        />
      )}

      {/* Corner glow effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-900/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none rounded-3xl"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glass shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

      {/* Content with 3D depth */}
      <div 
        className="relative z-20 h-full flex flex-col"
        style={{ transform: 'translateZ(20px)' }}
      >
        {children}
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
