import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { src: '/imgs/Gemini_Generated_Image_ujxpequjxpequjxp.png', alt: 'IIT Connect', name: 'IIT Connect' },
  { src: '/imgs/IIT 30 years Logo.gif', alt: 'IIT 30 Years', name: 'IIT' },
  { src: '/imgs/image.png', alt: 'SDGP', name: 'SDGP' },
];

// Duplicate the array for seamless infinite scroll
const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

export function LogoBanner() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent" />
      
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-10" />
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 relative z-20"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
          Proudly Part Of
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white/80">
          The IIT Ecosystem
        </h3>
      </motion.div>

      {/* Logo Marquee */}
      <div className="relative">
        {/* Left gradient mask */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            className="flex gap-8 md:gap-16 items-center"
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 group relative"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Logo container */}
                  <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center p-4 group-hover:border-red-500/30 transition-all duration-300 group-hover:scale-105">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  
                  {/* Label */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-gray-400 whitespace-nowrap">{logo.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gray-600/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
