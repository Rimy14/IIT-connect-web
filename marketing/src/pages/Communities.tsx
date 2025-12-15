import React, { useState } from 'react';
import { SearchIcon, FilterIcon } from 'lucide-react';
import { CommunityCard } from '../components/cards/CommunityCard';
import { Button } from '../components/ui/Button';
export function Communities() {
  const [activeTab, setActiveTab] = useState<'all' | 'joined' | 'suggested'>('all');
  return <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Communities</h1>
          <p className="text-gray-600 mt-1">
            Connect with your tutorial groups, clubs, and departments
          </p>
        </div>
        <Button>Create Community</Button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search communities..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <Button variant="outline">
          <FilterIcon className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex gap-6">
          {['all', 'joined', 'suggested'].map(tab => <button key={tab} onClick={() => setActiveTab(tab as any)} className={`pb-3 px-1 font-medium capitalize transition-colors ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
              {tab}
            </button>)}
        </div>
      </div>

      {/* Tutorial Groups */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Tutorial Groups
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CommunityCard name="CS Tut Group 05" type="Tutorial Group" members={28} description="Computer Science Tutorial Group 05 - Semester 3" isJoined={true} />

          <CommunityCard name="EE Tut Group 12" type="Tutorial Group" members={25} description="Electrical Engineering Tutorial Group 12" isJoined={false} />

          <CommunityCard name="ME Tut Group 08" type="Tutorial Group" members={30} description="Mechanical Engineering Tutorial Group 08" isJoined={false} />
        </div>
      </div>

      {/* Clubs */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Clubs & Societies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CommunityCard name="IEEE Student Branch" type="Club" members={156} description="Institute of Electrical and Electronics Engineers student chapter" isJoined={true} />

          <CommunityCard name="Computer Society" type="Club" members={203} description="Promoting computing and technology among students" isJoined={true} />

          <CommunityCard name="Robotics Club" type="Club" members={89} description="Building and programming robots, competing in competitions" isJoined={false} />

          <CommunityCard name="Debating Society" type="Club" members={67} description="Developing public speaking and critical thinking skills" isJoined={false} />

          <CommunityCard name="Photography Club" type="Club" members={124} description="Capturing moments and learning photography techniques" isJoined={true} />

          <CommunityCard name="Drama Circle" type="Club" members={78} description="Performing arts, theater productions, and creative expression" isJoined={false} />
        </div>
      </div>

      {/* Departments */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Departments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CommunityCard name="Computer Science & Engineering" type="Department" members={342} description="Official department community for CS students" isJoined={true} />

          <CommunityCard name="Electrical & Electronic Engineering" type="Department" members={298} description="Official department community for EE students" isJoined={false} />

          <CommunityCard name="Mechanical Engineering" type="Department" members={276} description="Official department community for ME students" isJoined={false} />
        </div>
      </div>
    </div>;
}