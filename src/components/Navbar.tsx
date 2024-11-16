import React from 'react';
import { Home } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="relative z-10 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 text-white">
          <Home className="w-8 h-8" />
          <span className="text-2xl font-bold">DreamHaven</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-white">
          <a href="#properties" className="hover:text-gray-200">Properties</a>
          <a href="#virtual-tours" className="hover:text-gray-200">Virtual Tours</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
          <button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}