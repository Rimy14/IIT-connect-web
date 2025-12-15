import React, { useState } from 'react';
import { PlusIcon, SearchIcon, FilterIcon } from 'lucide-react';
import { KuppiCard } from '../components/cards/KuppiCard';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
export function Kuppi() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  return <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kuppi Sessions</h1>
          <p className="text-gray-600 mt-1">
            Organize and join study sessions with your peers
          </p>
        </div>
        <Button onClick={() => setShowCreateForm(!showCreateForm)}>
          <PlusIcon className="w-4 h-4 mr-2" />
          Organize Session
        </Button>
      </div>

      {/* Create Session Form */}
      {showCreateForm && <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Organize a Kuppi Session
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Session Title" placeholder="e.g., Data Structures Revision" />
            <Input label="Subject/Course" placeholder="e.g., CS2023" />
            <Input label="Date" type="date" />
            <Input label="Time" type="time" />
            <Input label="Location" placeholder="e.g., Library Study Room 2" />
            <Input label="Max Participants" type="number" placeholder="15" />
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Level
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={3} placeholder="What will you cover in this session?" />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button>Create Session</Button>
            <Button variant="outline" onClick={() => setShowCreateForm(false)}>
              Cancel
            </Button>
          </div>
        </div>}

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search sessions by subject or topic..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <Button variant="outline">
          <FilterIcon className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 flex-wrap">
        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200">
          All Subjects
        </button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
          Computer Science
        </button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
          Mathematics
        </button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
          Engineering
        </button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
          This Week
        </button>
      </div>

      {/* Sessions List */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Available Sessions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <KuppiCard title="Data Structures Revision" subject="CS2023 - Data Structures" organizer="Kasun Perera" date="Today" time="6:00 PM" location="Library Study Room 2" participants={8} maxParticipants={15} level="Intermediate" />

          <KuppiCard title="OOP Past Papers Discussion" subject="CS2024 - OOP" organizer="Nimali Fernando" date="Tomorrow" time="4:00 PM" location="Hall C" participants={12} maxParticipants={20} level="Advanced" />

          <KuppiCard title="Calculus Basics" subject="MA1021 - Mathematics" organizer="Ravindu Silva" date="Friday" time="3:00 PM" location="Tutorial Room 5" participants={5} maxParticipants={10} level="Beginner" />

          <KuppiCard title="Database Design Workshop" subject="CS3042 - Database Systems" organizer="Tharindu Jayasinghe" date="Saturday" time="2:00 PM" location="Computer Lab 3" participants={15} maxParticipants={25} level="Intermediate" />

          <KuppiCard title="Circuit Analysis Practice" subject="EE2021 - Circuits" organizer="Dilini Wickramasinghe" date="Sunday" time="10:00 AM" location="EE Lab 1" participants={7} maxParticipants={12} level="Beginner" />

          <KuppiCard title="Machine Learning Concepts" subject="CS4062 - ML" organizer="Chamara Bandara" date="Monday" time="5:00 PM" location="Seminar Room A" participants={18} maxParticipants={20} level="Advanced" />
        </div>
      </div>

      {/* My Organized Sessions */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Sessions You're Organizing
        </h2>
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-gray-600">
            You haven't organized any sessions yet
          </p>
          <Button className="mt-4" onClick={() => setShowCreateForm(true)}>
            Organize Your First Session
          </Button>
        </div>
      </div>
    </div>;
}