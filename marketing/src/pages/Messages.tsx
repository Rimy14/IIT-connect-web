import React from 'react';
import { MessageSquareIcon, SearchIcon } from 'lucide-react';
import { Avatar } from '../components/ui/Avatar';
export function Messages() {
  return <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg border border-gray-200 h-[calc(100vh-12rem)] flex">
        {/* Conversations List */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Messages
            </h2>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search conversations..." className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {/* Conversation Items */}
            <div className="p-2 space-y-1">
              <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <Avatar size="md" />
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Kasun Perera
                    </p>
                    <span className="text-xs text-gray-500">2h</span>
                  </div>
                  <p className="text-xs text-gray-600 truncate">
                    See you at the kuppi session!
                  </p>
                </div>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </button>

              <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <Avatar size="md" />
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      CS Tut Group 05
                    </p>
                    <span className="text-xs text-gray-500">5h</span>
                  </div>
                  <p className="text-xs text-gray-600 truncate">
                    Assignment deadline extended
                  </p>
                </div>
              </button>

              <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <Avatar size="md" />
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Nimali Fernando
                    </p>
                    <span className="text-xs text-gray-500">1d</span>
                  </div>
                  <p className="text-xs text-gray-600 truncate">
                    Thanks for the notes!
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <MessageSquareIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Select a conversation
            </h3>
            <p className="text-sm text-gray-600">
              Choose a conversation from the list to start messaging
            </p>
          </div>
        </div>
      </div>
    </div>;
}