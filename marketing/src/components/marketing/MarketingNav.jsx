import React from 'react';
import { Button } from '../ui/Button';

export function MarketingNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/imgs/Gemini_Generated_Image_ujxpequjxpequjxp.png" alt="IIT Connect Logo" className="w-12 h-12 rounded-lg object-cover" />
            <span className="text-xl font-bold text-gray-900">IIT Connect</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
              Testimonials
            </a>
          </div>

          <div>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
