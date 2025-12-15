import React from 'react';
import { MessageSquareIcon, UsersIcon, BookOpenIcon, CalendarIcon } from 'lucide-react';
export function Problems() {
  const problems = [{
    icon: MessageSquareIcon,
    title: 'Too Many WhatsApp Groups',
    description: 'Clubs and unions create countless WhatsApp groups daily. Important messages get lost in the noise.',
    color: 'red'
  }, {
    icon: UsersIcon,
    title: 'Finding Group Members is Hard',
    description: 'Struggling to find SDGP teammates or hostel roommates? No central place to connect with the right people.',
    color: 'gray'
  }, {
    icon: BookOpenIcon,
    title: 'Scattered Academic Resources',
    description: 'Notes and past papers are shared randomly across platforms. Hard to find what you need when you need it.',
    color: 'red'
  }, {
    icon: CalendarIcon,
    title: 'Missing Important Updates',
    description: 'Lecture changes, event announcements, and deadlines get buried. You need one place for all university updates.',
    color: 'gray'
  }];
  const colorClasses = {
    red: 'bg-red-100 text-red-600',
    gray: 'bg-gray-900 text-white'
  };
  return <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sound Familiar?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We understand the challenges of university life. That's why we built
            IIT Connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
          const Icon = problem.icon;
          return <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-lg ${colorClasses[problem.color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-sm">{problem.description}</p>
              </div>;
        })}
        </div>
      </div>
    </section>;
}