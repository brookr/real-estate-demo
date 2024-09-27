// src/components/PropertyDetails.jsx
import React from 'react';

const PropertyDetails = () => {
  return (
    <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">5127 S Fountain St</h2>
          <ul className="text-lg leading-relaxed">
            <li><strong>Avg. Days on Market:</strong> 63</li>
            <li><strong>Newest Listing:</strong> 07/25/2024</li>
            <li><strong>Price:</strong> $660,000</li>
            <li><strong>Square Feet:</strong> 1,990</li>
            <li><strong>Bedrooms:</strong> 4</li>
            <li><strong>Bathrooms:</strong> 3/2/0</li>
            <li><strong>Year Built:</strong> 1951</li>
          </ul>
          <button className="mt-6 bg-purple-700 text-white py-2 px-6 rounded-full shadow hover:bg-purple-800 transition duration-300">
            Schedule a Viewing
          </button>
        </div>
        <div>
          <img src="https://via.placeholder.com/500x400" alt="Property" className="rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
