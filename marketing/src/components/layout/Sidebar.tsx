import React from 'react';
import { HomeIcon, UsersIcon, BookOpenIcon, FileTextIcon, CalendarIcon, WrenchIcon, UserIcon, MessageSquareIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
export function Sidebar() {
  const location = useLocation();
  const navItems = [{
    path: '/app',
    icon: HomeIcon,
    label: 'Home'
  }, {
    path: '/app/communities',
    icon: UsersIcon,
    label: 'Communities'
  }, {
    path: '/app/kuppi',
    icon: BookOpenIcon,
    label: 'Kuppi Sessions'
  }, {
    path: '/app/resources',
    icon: FileTextIcon,
    label: 'Resources'
  }, {
    path: '/app/events',
    icon: CalendarIcon,
    label: 'Events'
  }, {
    path: '/app/tools',
    icon: WrenchIcon,
    label: 'Tools'
  }, {
    path: '/app/messages',
    icon: MessageSquareIcon,
    label: 'Messages'
  }, {
    path: '/app/profile',
    icon: UserIcon,
    label: 'Profile'
  }];
  return <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600">IIT Connect</h1>
        <p className="text-sm text-gray-600 mt-1">University Hub</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(item => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return <Link key={item.path} to={item.path} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}>
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>;
      })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
            AS
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              Amal Silva
            </p>
            <p className="text-xs text-gray-500 truncate">Computer Science</p>
          </div>
        </div>
      </div>
    </aside>;
}