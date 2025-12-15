import React from 'react';
import { FileTextIcon, DownloadIcon, EyeIcon, ThumbsUpIcon } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
interface ResourceCardProps {
  title: string;
  type: string;
  subject: string;
  uploader: string;
  uploaderAvatar?: string;
  uploadDate: string;
  downloads: number;
  views: number;
  likes: number;
  fileSize: string;
}
export function ResourceCard({
  title,
  type,
  subject,
  uploader,
  uploaderAvatar,
  uploadDate,
  downloads,
  views,
  likes,
  fileSize
}: ResourceCardProps) {
  return <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
          <FileTextIcon className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 mb-1 truncate">{title}</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="info">{type}</Badge>
            <Badge variant="default">{subject}</Badge>
            <span className="text-xs text-gray-500">{fileSize}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
        <div className="flex items-center gap-1">
          <DownloadIcon className="w-4 h-4" />
          <span>{downloads}</span>
        </div>
        <div className="flex items-center gap-1">
          <EyeIcon className="w-4 h-4" />
          <span>{views}</span>
        </div>
        <div className="flex items-center gap-1">
          <ThumbsUpIcon className="w-4 h-4" />
          <span>{likes}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <Avatar src={uploaderAvatar} size="sm" />
          <div className="text-sm">
            <p className="text-gray-700 font-medium">{uploader}</p>
            <p className="text-gray-500 text-xs">{uploadDate}</p>
          </div>
        </div>
        <button className="text-sm text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
          <DownloadIcon className="w-4 h-4" />
          Download
        </button>
      </div>
    </div>;
}