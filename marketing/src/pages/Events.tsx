import React from 'react';
import { CalendarIcon, PlusIcon } from 'lucide-react';
import { EventCard } from '../components/cards/EventCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
export function Events() {
  return <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Events</h1>
          <p className="text-gray-600 mt-1">
            Discover and attend university events
          </p>
        </div>
        <Button>
          <PlusIcon className="w-4 h-4 mr-2" />
          Create Event
        </Button>
      </div>

      {/* Calendar View Toggle */}
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
          Grid View
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
          Calendar View
        </button>
      </div>

      {/* Filter by Category */}
      <div className="flex gap-2 flex-wrap">
        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200">
          All Events
        </button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
          Academic
        </button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
          Competition
        </button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
          Career
        </button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
          Sports
        </button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
          Cultural
        </button>
      </div>

      {/* This Week */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">This Week</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <EventCard title="Tech Talk: AI in Industry" date="Today" time="4:00 PM" location="Main Auditorium" organizer="IEEE Student Branch" attendees={89} category="Academic" image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop" />

          <EventCard title="SDGP Presentation Day" date="Tomorrow" time="9:00 AM" location="Seminar Hall Complex" organizer="Department of CS" attendees={156} category="Academic" image="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=200&fit=crop" />

          <EventCard title="Inter-Department Cricket" date="Friday" time="3:00 PM" location="University Grounds" organizer="Sports Council" attendees={67} category="Sports" image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=200&fit=crop" />
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <EventCard title="Hackathon 2024" date="Dec 15-16" time="9:00 AM" location="Main Auditorium" organizer="Computer Society" attendees={156} category="Competition" image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop" />

          <EventCard title="Career Fair" date="Dec 20" time="10:00 AM" location="Sports Complex" organizer="Career Guidance Unit" attendees={234} category="Career" image="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=200&fit=crop" />

          <EventCard title="Annual Cultural Show" date="Dec 28" time="6:00 PM" location="Open Air Theater" organizer="Arts Circle" attendees={312} category="Cultural" image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=200&fit=crop" />

          <EventCard title="Annual Sports Meet" date="Jan 5-7" time="8:00 AM" location="University Grounds" organizer="Sports Council" attendees={412} category="Sports" image="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=200&fit=crop" />

          <EventCard title="Research Symposium" date="Jan 12" time="9:00 AM" location="Conference Hall" organizer="Research Office" attendees={178} category="Academic" image="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=200&fit=crop" />

          <EventCard title="Alumni Meetup" date="Jan 18" time="5:00 PM" location="Alumni Hall" organizer="Alumni Association" attendees={145} category="Career" image="https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=400&h=200&fit=crop" />
        </div>
      </div>

      {/* My Events */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Events You're Attending
        </h2>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <CalendarIcon className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">
                    Tech Talk: AI in Industry
                  </p>
                  <p className="text-sm text-gray-600">Today at 4:00 PM</p>
                </div>
              </div>
              <Badge variant="info">Confirmed</Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <CalendarIcon className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Hackathon 2024</p>
                  <p className="text-sm text-gray-600">Dec 15-16 at 9:00 AM</p>
                </div>
              </div>
              <Badge variant="success">Registered</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>;
}