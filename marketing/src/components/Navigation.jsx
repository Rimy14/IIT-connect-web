import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 md:px-6 py-3 flex items-center justify-between shadow-lg shadow-black/20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/imgs/Gemini_Generated_Image_ujxpequjxpequjxp.png" 
              alt="IIT Connect Logo" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-cover" 
            />
            <span className="text-white font-bold text-lg md:text-xl tracking-tight">
              IIT Connect
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Community', 'Events', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2 rounded-full font-semibold text-sm hover:from-red-500 hover:to-red-600 transition-all shadow-lg shadow-red-600/25">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-4 right-4 p-4 bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl md:hidden"
        >
          <div className="flex flex-col gap-4">
            {['Features', 'Community', 'Events', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-xl font-bold mt-2">
              Contact Us
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
