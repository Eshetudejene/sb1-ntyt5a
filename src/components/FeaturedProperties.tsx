import React from 'react';
import { PropertyCard } from './PropertyCard';

const properties = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    title: "Modern Villa",
    location: "Beverly Hills",
    price: "$5,500"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    title: "Seaside Retreat",
    location: "Malibu",
    price: "$4,200"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    title: "Mountain View Estate",
    location: "Aspen",
    price: "$6,800"
  }
];

export function FeaturedProperties() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Featured Properties</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}