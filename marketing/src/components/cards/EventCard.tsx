import React from 'react';
import { CalendarIcon, MapPinIcon, UsersIcon } from 'lucide-react';
import { Badge } from '../ui/Badge';
interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  attendees: number;
  category: string;
  image?: string;
}
export function EventCard({
  title,
  date,
  time,
  location,
  organizer,
  attendees,
  category,
  image
}: EventCardProps) {
  return <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 flex-1">{title}</h3>
          <Badge variant="info">{category}</Badge>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" />
            <span>
              {date} at {time}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <UsersIcon className="w-4 h-4" />
            <span>{attendees} attending</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-600">by {organizer}</span>
          <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
            View Details
          </button>
        </div>
      </div>
    </div>;
}