import React from 'react';
import { DoorOpenIcon, UsersIcon, CreditCardIcon, SearchIcon, MapPinIcon, PackageIcon } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
export function Tools() {
  return <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">University Tools</h1>
        <p className="text-gray-600 mt-1">
          Helpful utilities to make university life easier
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Find Empty Halls */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <DoorOpenIcon className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Find Empty Halls
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Check which lecture halls and study rooms are available right now
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between p-2 bg-green-50 rounded">
              <span className="text-sm font-medium text-gray-900">Hall A</span>
              <Badge variant="success">Available</Badge>
            </div>
            <div className="flex items-center justify-between p-2 bg-green-50 rounded">
              <span className="text-sm font-medium text-gray-900">
                Study Room 3
              </span>
              <Badge variant="success">Available</Badge>
            </div>
            <div className="flex items-center justify-between p-2 bg-red-50 rounded">
              <span className="text-sm font-medium text-gray-900">Hall C</span>
              <Badge variant="warning">Occupied</Badge>
            </div>
          </div>

          <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
            View All Halls
          </button>
        </div>

        {/* Group Finder */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <UsersIcon className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Find Group Members
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Looking for SDGP group members or hostel roommates? Post here!
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="text-sm font-medium text-gray-900">
                Looking for SDGP Group
              </p>
              <p className="text-xs text-gray-600 mt-1">
                CS, interested in ML/AI • Posted 2h ago
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="text-sm font-medium text-gray-900">
                Need Hostel Roommate
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Block B, quiet student • Posted 5h ago
              </p>
            </div>
          </div>

          <button className="w-full py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700">
            Browse Requests
          </button>
        </div>

        {/* Payment Status */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <CreditCardIcon className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Payment Status
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Check your fee payment status and download receipts
          </p>

          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Semester Fees</span>
              <Badge variant="success">Paid</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Hostel Fees</span>
              <Badge variant="success">Paid</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Library Fine</span>
              <Badge variant="warning">Pending</Badge>
            </div>
          </div>

          <button className="w-full py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">
            View Details
          </button>
        </div>

        {/* Location Finder */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
            <MapPinIcon className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Campus Locations
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Find buildings, departments, and facilities on campus
          </p>

          <div className="mb-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search locations..." className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
          </div>

          <button className="w-full py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700">
            View Campus Map
          </button>
        </div>

        {/* Lost & Found */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <PackageIcon className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Lost & Found
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Report lost items or claim found items
          </p>

          <div className="space-y-2 mb-4">
            <div className="p-3 bg-red-50 rounded-lg">
              <p className="text-sm font-medium text-gray-900">
                Found: Black Backpack
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Near Library • 1 day ago
              </p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <p className="text-sm font-medium text-gray-900">
                Lost: Student ID Card
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Name: A. Silva • 3 days ago
              </p>
            </div>
          </div>

          <button className="w-full py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700">
            View All Items
          </button>
        </div>

        {/* Payment Reminders */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <CreditCardIcon className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Make Payment
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Pay university fees directly through the app
          </p>

          <div className="space-y-3 mb-4">
            <div className="p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">
                  Library Fine
                </span>
                <span className="text-sm font-bold text-gray-900">Rs. 250</span>
              </div>
              <p className="text-xs text-gray-600">Due: Dec 31, 2024</p>
            </div>
          </div>

          <button className="w-full py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">
            Pay Now
          </button>
        </div>
      </div>
    </div>;
}