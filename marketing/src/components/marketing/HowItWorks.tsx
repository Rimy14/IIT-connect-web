import React from 'react';
import { UserPlusIcon, UsersIcon, RocketIcon } from 'lucide-react';
export function HowItWorks() {
  const steps = [{
    icon: UserPlusIcon,
    title: 'Sign Up with IIT Email',
    description: 'Create your verified profile using your official IIT email address. Quick and secure.',
    color: 'red'
  }, {
    icon: UsersIcon,
    title: 'Join Your Communities',
    description: 'Automatically added to your tutorial group. Join clubs, departments, and interest groups.',
    color: 'gray'
  }, {
    icon: RocketIcon,
    title: 'Start Connecting',
    description: 'Organize kuppi sessions, share resources, discover events, and stay connected with your university.',
    color: 'red'
  }];
  return <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of IIT students already using IIT Connect to enhance
            their university experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-red-200 via-gray-200 to-red-200"></div>

          {steps.map((step, index) => {
          const Icon = step.icon;
          const colorClasses = {
            red: 'from-red-500 to-red-600',
            gray: 'from-gray-800 to-black'
          };
          return <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses]} flex items-center justify-center mx-auto mb-6 relative z-10`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-gray-100 z-0">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}