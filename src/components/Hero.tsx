import React from 'react';
import { Search, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 h-[calc(90vh-5rem)] flex items-center">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Find Your Perfect Home Away From Home
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Experience luxury living with our curated selection of premium rental properties, complete with immersive virtual tours.
        </p>
        
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex items-center space-x-2">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Location"
              className="w-full focus:outline-none"
            />
          </div>
          <div className="flex-1 flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-gray-400" />
            <input
              type="date"
              className="w-full focus:outline-none"
            />
          </div>
          <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}