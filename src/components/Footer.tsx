import React from 'react';
import { Home } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Home className="w-6 h-6" />
            <span className="text-xl font-bold">DreamHaven</span>
          </div>
          <p className="text-gray-400">
            Luxury living made simple with premium rental properties and virtual tours.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Properties</a></li>
            <li><a href="#" className="hover:text-white">Virtual Tours</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Property Management</a></li>
            <li><a href="#" className="hover:text-white">Virtual Viewings</a></li>
            <li><a href="#" className="hover:text-white">Maintenance</a></li>
            <li><a href="#" className="hover:text-white">24/7 Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest properties and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none text-gray-900"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}