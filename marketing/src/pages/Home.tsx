import React from 'react';
import { BellIcon, CalendarIcon, BookOpenIcon, TrendingUpIcon } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { EventCard } from '../components/cards/EventCard';
import { KuppiCard } from '../components/cards/KuppiCard';
export function Home() {
  return <div className="max-w-7xl mx-auto space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Amal!</h1>
        <p className="text-blue-100">
          Here's what's happening in your university today
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Upcoming Events</span>
            <CalendarIcon className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">8</p>
          <p className="text-xs text-gray-500 mt-1">This week</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Kuppi Sessions</span>
            <BookOpenIcon className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">5</p>
          <p className="text-xs text-gray-500 mt-1">Available now</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Communities</span>
            <TrendingUpIcon className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">12</p>
          <p className="text-xs text-gray-500 mt-1">Joined</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Notifications</span>
            <BellIcon className="w-5 h-5 text-amber-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">3</p>
          <p className="text-xs text-gray-500 mt-1">Unread</p>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          📢 Announcements
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
            <Badge variant="info">Important</Badge>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                OOP Lecture moved to Hall A
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Today at 2:00 PM • Department of Computer Science
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
            <Badge variant="success">New</Badge>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                SDGP Group Formation Deadline Extended
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Due: Friday, 5:00 PM • Academic Office
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
            <Badge variant="purple">Event</Badge>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                Tech Talk: AI in Industry
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Tomorrow at 4:00 PM • IEEE Student Branch
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Kuppi Sessions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Upcoming Kuppi Sessions
          </h2>
          <a href="/kuppi" className="text-sm text-blue-600 font-medium hover:text-blue-700">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <KuppiCard title="Data Structures Revision" subject="CS2023 - Data Structures" organizer="Kasun Perera" date="Today" time="6:00 PM" location="Library Study Room 2" participants={8} maxParticipants={15} level="Intermediate" />

          <KuppiCard title="OOP Past Papers Discussion" subject="CS2024 - OOP" organizer="Nimali Fernando" date="Tomorrow" time="4:00 PM" location="Hall C" participants={12} maxParticipants={20} level="Advanced" />

          <KuppiCard title="Calculus Basics" subject="MA1021 - Mathematics" organizer="Ravindu Silva" date="Friday" time="3:00 PM" location="Tutorial Room 5" participants={5} maxParticipants={10} level="Beginner" />
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Upcoming Events
          </h2>
          <a href="/events" className="text-sm text-blue-600 font-medium hover:text-blue-700">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <EventCard title="Hackathon 2024" date="Dec 15-16" time="9:00 AM" location="Main Auditorium" organizer="Computer Society" attendees={156} category="Competition" image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop" />

          <EventCard title="Career Fair" date="Dec 20" time="10:00 AM" location="Sports Complex" organizer="Career Guidance Unit" attendees={234} category="Career" image="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=200&fit=crop" />

          <EventCard title="Annual Sports Meet" date="Jan 5-7" time="8:00 AM" location="University Grounds" organizer="Sports Council" attendees={412} category="Sports" image="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=200&fit=crop" />
        </div>
      </div>
    </div>;
}