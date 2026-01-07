import React from 'react';
import { motion } from 'framer-motion';

export function BentoCard({
  children,
  className = '',
  colSpan = 1,
  rowSpan = 1,
  delay = 0,
}) {
  const colSpanClass = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
  }[colSpan];

  const rowSpanClass = {
    1: 'md:row-span-1',
    2: 'md:row-span-2',
  }[rowSpan];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.02 }}
      className={`
        relative overflow-hidden
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        rounded-3xl 
        p-8 
        shadow-2xl shadow-black/50
        group
        ${colSpanClass} 
        ${rowSpanClass}
        ${className}
      `}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-red-900/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </motion.div>
  );
}
