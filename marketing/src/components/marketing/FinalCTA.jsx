import React from 'react';
import { ArrowRightIcon, CheckCircleIcon } from 'lucide-react';
import { Button } from '../ui/Button';

export function FinalCTA() {
  const benefits = [
    'Free for all IIT students',
    'Verified and secure platform',
    'Join 2,500+ active students',
    'Available on web and mobile'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Ready to Transform Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-gray-200">
            University Experience?
          </span>
        </h2>

        <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
          Join thousands of IIT students who are already using IIT Connect to
          stay organized, connected, and successful.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
            Get Started Free
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
            Contact Us
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 justify-center">
              <CheckCircleIcon className="w-5 h-5 text-green-300 flex-shrink-0" />
              <span className="text-sm text-red-100">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
