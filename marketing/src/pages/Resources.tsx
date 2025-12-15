import React, { useState } from 'react';
import { UploadIcon, SearchIcon, FilterIcon } from 'lucide-react';
import { ResourceCard } from '../components/cards/ResourceCard';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
export function Resources() {
  const [showUploadForm, setShowUploadForm] = useState(false);
  return <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Academic Resources
          </h1>
          <p className="text-gray-600 mt-1">
            Share and access notes, papers, and study materials
          </p>
        </div>
        <Button onClick={() => setShowUploadForm(!showUploadForm)}>
          <UploadIcon className="w-4 h-4 mr-2" />
          Upload Resource
        </Button>
      </div>

      {/* Upload Form */}
      {showUploadForm && <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Upload a Resource
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Title" placeholder="e.g., Data Structures Lecture Notes" />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Lecture Notes</option>
                <option>Past Papers</option>
                <option>Tutorial Sheets</option>
                <option>Lab Reports</option>
                <option>Project Reports</option>
                <option>Other</option>
              </select>
            </div>
            <Input label="Subject/Course" placeholder="e.g., CS2023" />
            <Input label="Academic Year" placeholder="e.g., 2023/2024" />
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={3} placeholder="Brief description of the resource..." />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                File
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
                <UploadIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PDF, DOC, DOCX up to 10MB
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button>Upload Resource</Button>
            <Button variant="outline" onClick={() => setShowUploadForm(false)}>
              Cancel
            </Button>
          </div>
        </div>}

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search resources by title, subject, or course..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <Button variant="outline">
          <FilterIcon className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 flex-wrap">
        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200">
          All Types
        </button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
          Lecture Notes
        </button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
          Past Papers
        </button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
          Tutorial Sheets
        </button>
        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
          Most Downloaded
        </button>
      </div>

      {/* Resources Grid */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Available Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ResourceCard title="Data Structures Complete Notes" type="Lecture Notes" subject="CS2023" uploader="Kasun Perera" uploadDate="2 days ago" downloads={156} views={342} likes={89} fileSize="2.4 MB" />

          <ResourceCard title="OOP Past Paper 2023" type="Past Papers" subject="CS2024" uploader="Nimali Fernando" uploadDate="1 week ago" downloads={234} views={567} likes={123} fileSize="1.8 MB" />

          <ResourceCard title="Calculus Tutorial Solutions" type="Tutorial Sheets" subject="MA1021" uploader="Ravindu Silva" uploadDate="3 days ago" downloads={98} views={201} likes={45} fileSize="3.1 MB" />

          <ResourceCard title="Database Design Lab Manual" type="Lab Reports" subject="CS3042" uploader="Tharindu Jayasinghe" uploadDate="5 days ago" downloads={167} views={389} likes={78} fileSize="4.2 MB" />

          <ResourceCard title="Circuit Analysis Examples" type="Lecture Notes" subject="EE2021" uploader="Dilini Wickramasinghe" uploadDate="1 week ago" downloads={112} views={276} likes={56} fileSize="1.9 MB" />

          <ResourceCard title="ML Algorithms Cheat Sheet" type="Other" subject="CS4062" uploader="Chamara Bandara" uploadDate="4 days ago" downloads={289} views={612} likes={167} fileSize="0.8 MB" />
        </div>
      </div>

      {/* My Uploads */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Your Uploads
        </h2>
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-gray-600">
            You haven't uploaded any resources yet
          </p>
          <Button className="mt-4" onClick={() => setShowUploadForm(true)}>
            Upload Your First Resource
          </Button>
        </div>
      </div>
    </div>;
}