import React from 'react';
import { UsersIcon, BookOpenIcon, FileTextIcon, CalendarIcon, MessageSquareIcon, WrenchIcon, ShieldCheckIcon, BellIcon } from 'lucide-react';
export function Features() {
  const features = [{
    icon: UsersIcon,
    title: 'Communities & Groups',
    description: 'Join tutorial groups, clubs, and departments. Connect with peers who share your interests.',
    gradient: 'from-red-500 to-red-600'
  }, {
    icon: BookOpenIcon,
    title: 'Kuppi Sessions',
    description: 'Organize and discover study sessions. Get credit for helping the community learn together.',
    gradient: 'from-gray-800 to-black'
  }, {
    icon: FileTextIcon,
    title: 'Academic Resources',
    description: 'Share and access notes, past papers, and study materials. Everything organized by course.',
    gradient: 'from-red-600 to-red-700'
  }, {
    icon: CalendarIcon,
    title: 'Events & Announcements',
    description: 'Never miss important events, lecture changes, or deadlines. All updates in one place.',
    gradient: 'from-gray-700 to-gray-900'
  }, {
    icon: MessageSquareIcon,
    title: 'In-App Messaging',
    description: 'Chat with friends, lecturers, and group members. Keep conversations organized by context.',
    gradient: 'from-red-500 to-red-700'
  }, {
    icon: WrenchIcon,
    title: 'University Tools',
    description: 'Find empty halls, group members, check payment status, and access campus maps instantly.',
    gradient: 'from-black to-gray-900'
  }, {
    icon: ShieldCheckIcon,
    title: 'Verified Profiles',
    description: 'Only IIT students and staff with verified email addresses. Professional, safe environment.',
    gradient: 'from-red-600 to-black'
  }, {
    icon: BellIcon,
    title: 'Smart Notifications',
    description: 'Get reminded 15 minutes before lectures. Stay on top of deadlines and important updates.',
    gradient: 'from-gray-800 to-red-700'
  }];
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need in One App
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            IIT Connect brings together all the tools and features you need to
            succeed at university.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
          const Icon = feature.icon;
          return <div key={index} className="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity`}></div>

                <div className={`relative w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>;
        })}
        </div>
      </div>
    </section>;
}