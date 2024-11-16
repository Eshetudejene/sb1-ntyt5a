import React from 'react';

export function VirtualTours() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Virtual Tours Available</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience our properties from anywhere in the world with our immersive 3D virtual tours.
            Walk through each room as if you were there in person.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <p className="text-xl mb-6">
            Our 3D virtual tour feature is currently being updated.
            Contact us to schedule a personalized virtual viewing session.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Schedule Virtual Tour
          </button>
        </div>
      </div>
    </section>
  );
}