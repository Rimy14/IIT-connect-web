import React from 'react';
import { ArrowRightIcon, PlayCircleIcon } from 'lucide-react';
import { Button } from '../ui/Button';
export function Hero() {
  return <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Now Available for IIT Students
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Your University,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-gray-200">
                Connected
              </span>
            </h1>

            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Everything you need for university life in one place. Connect with
              peers, organize study sessions, share resources, and stay updated
              with campus events.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Get Started Free
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <PlayCircleIcon className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold">2,500+</p>
                <p className="text-red-200 text-sm">Active Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-red-200 text-sm">Communities</p>
              </div>
              <div>
                <p className="text-3xl font-bold">1,000+</p>
                <p className="text-red-200 text-sm">Resources Shared</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-4">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" alt="Students collaborating" className="rounded-lg w-full" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-gray-400 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>;
}