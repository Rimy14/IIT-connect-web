import React from 'react';
import { StarIcon } from 'lucide-react';
import { Avatar } from '../ui/Avatar';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Kasun Perera',
      role: 'Computer Science, Year 3',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      content: 'IIT Connect made finding SDGP group members so much easier! I connected with amazing teammates who share my passion for AI.',
      rating: 5
    },
    {
      name: 'Nimali Fernando',
      role: 'Electrical Engineering, Year 2',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      content: 'The kuppi session feature is a game-changer. I organized a study session and 15 people joined! We all aced the exam.',
      rating: 5
    },
    {
      name: 'Ravindu Silva',
      role: 'Mechanical Engineering, Year 4',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      content: 'Finally, all my university stuff in one place! No more searching through 20 WhatsApp groups to find that one important message.',
      rating: 5
    },
    {
      name: 'Tharindu Jayasinghe',
      role: 'Computer Science, Year 3',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
      content: 'The resource sharing feature saved me during finals. Found all the past papers and notes I needed in minutes.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Loved by IIT Students
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what your fellow students are saying about IIT Connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <Avatar src={testimonial.avatar} size="md" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
