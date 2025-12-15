import React from 'react';
import { BookOpenIcon, ClockIcon, UsersIcon, MapPinIcon } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
interface KuppiCardProps {
  title: string;
  subject: string;
  organizer: string;
  organizerAvatar?: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  maxParticipants: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}
export function KuppiCard({
  title,
  subject,
  organizer,
  organizerAvatar,
  date,
  time,
  location,
  participants,
  maxParticipants,
  level
}: KuppiCardProps) {
  const levelColors = {
    Beginner: 'success',
    Intermediate: 'warning',
    Advanced: 'purple'
  } as const;
  return <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <div className="flex items-center gap-2">
            <BookOpenIcon className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{subject}</span>
          </div>
        </div>
        <Badge variant={levelColors[level]}>{level}</Badge>
      </div>

      <div className="space-y-2 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <ClockIcon className="w-4 h-4" />
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
          <span>
            {participants}/{maxParticipants} participants
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <Avatar src={organizerAvatar} size="sm" />
          <span className="text-sm text-gray-700">{organizer}</span>
        </div>
        <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
          Join Session
        </button>
      </div>
    </div>;
}