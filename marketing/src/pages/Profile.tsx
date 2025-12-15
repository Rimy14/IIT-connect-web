import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, CalendarIcon, EditIcon, SettingsIcon } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Avatar } from '../components/ui/Avatar';
export function Profile() {
  return <div className="max-w-5xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <div className="px-6 pb-6">
          <div className="flex items-end justify-between -mt-16 mb-4">
            <Avatar size="lg" className="border-4 border-white w-32 h-32" />
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <EditIcon className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline" size="sm">
                <SettingsIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">Amal Silva</h1>
              <Badge variant="info">Student</Badge>
              <Badge variant="success">Verified</Badge>
            </div>
            <p className="text-gray-600">
              Computer Science & Engineering • Year 3
            </p>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Personal Information
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <MailIcon className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-gray-600">Email</p>
                <p className="text-gray-900 font-medium">
                  amal.silva@iit.ac.lk
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <PhoneIcon className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-gray-600">Phone</p>
                <p className="text-gray-900 font-medium">+94 77 123 4567</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <MapPinIcon className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-gray-600">Location</p>
                <p className="text-gray-900 font-medium">Colombo, Sri Lanka</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <CalendarIcon className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-gray-600">Joined</p>
                <p className="text-gray-900 font-medium">September 2022</p>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Academic Information
          </h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Department</p>
              <p className="text-gray-900 font-medium">
                Computer Science & Engineering
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Tutorial Group</p>
              <p className="text-gray-900 font-medium">CS Tut Group 05</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Student ID</p>
              <p className="text-gray-900 font-medium">2022/CS/123</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Academic Year</p>
              <p className="text-gray-900 font-medium">
                2023/2024 - Semester 1
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Communities */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          My Communities
        </h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="info">CS Tut Group 05</Badge>
          <Badge variant="purple">IEEE Student Branch</Badge>
          <Badge variant="purple">Computer Society</Badge>
          <Badge variant="purple">Photography Club</Badge>
          <Badge variant="success">CS Department</Badge>
        </div>
      </div>

      {/* Activity Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">12</p>
          <p className="text-sm text-gray-600 mt-1">Kuppi Sessions Attended</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-purple-600">8</p>
          <p className="text-sm text-gray-600 mt-1">Resources Shared</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-green-600">5</p>
          <p className="text-sm text-gray-600 mt-1">Events Attended</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-amber-600">234</p>
          <p className="text-sm text-gray-600 mt-1">Contribution Points</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                Joined{' '}
                <span className="font-medium">Data Structures Revision</span>{' '}
                kuppi session
              </p>
              <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                Uploaded <span className="font-medium">OOP Lecture Notes</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">1 day ago</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                Registered for{' '}
                <span className="font-medium">Hackathon 2024</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">3 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}