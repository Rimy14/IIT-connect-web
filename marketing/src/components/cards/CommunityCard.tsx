import React from 'react';
import { UsersIcon, MessageSquareIcon } from 'lucide-react';
import { Badge } from '../ui/Badge';
interface CommunityCardProps {
  name: string;
  type: 'Tutorial Group' | 'Club' | 'Department';
  members: number;
  description: string;
  isJoined?: boolean;
}
export function CommunityCard({
  name,
  type,
  members,
  description,
  isJoined = false
}: CommunityCardProps) {
  const typeColors = {
    'Tutorial Group': 'info',
    Club: 'purple',
    Department: 'success'
  } as const;
  return <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900 flex-1">{name}</h3>
        <Badge variant={typeColors[type]}>{type}</Badge>
      </div>

      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>

      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <UsersIcon className="w-4 h-4" />
          <span>{members} members</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageSquareIcon className="w-4 h-4" />
          <span>Active</span>
        </div>
      </div>

      <button className={`w-full py-2 rounded-lg font-medium transition-colors ${isJoined ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
        {isJoined ? 'View Community' : 'Join Community'}
      </button>
    </div>;
}