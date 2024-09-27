// src/components/PropertyList.jsx
import React from 'react';

const PropertyList = () => {
  const properties = [
    {
      mlsNumber: '2145126',
      address: '72923 RE Undisclosed',
      city: 'Seattle, WA, 98178',
      status: 'Active',
      daysOnMarket: 36,
      yearBuilt: 1946,
      bedrooms: 4,
      bathrooms: '2/0/0',
      sqFt: 1020,
      listPrice: '$850,000',
      description: `An opportunity to own an existing adult family home for less than 1 Million! This property has been in operation for 18 years...`,
      image: 'https://via.placeholder.com/400x300',
    },
    // Add other properties similarly...
  ];

  return (
    <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Current Listings</h2>
      {properties.map((property, index) => (
        <div key={index} className="mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <img src={property.image} alt={property.address} className="rounded-lg shadow-md" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">{property.address}</h3>
              <p className="text-lg mb-1"><strong>MLS Number:</strong> {property.mlsNumber}</p>
              <p className="text-lg mb-1"><strong>Status:</strong> {property.status}</p>
              <p className="text-lg mb-1"><strong>Days on Market:</strong> {property.daysOnMarket}</p>
              <p className="text-lg mb-1"><strong>List Price:</strong> {property.listPrice}</p>
              <p className="text-lg mb-1"><strong>Bedrooms:</strong> {property.bedrooms}</p>
              <p className="text-lg mb-1"><strong>Bathrooms:</strong> {property.bathrooms}</p>
              <p className="text-lg mb-1"><strong>Year Built:</strong> {property.yearBuilt}</p>
              <p className="text-lg mb-1"><strong>Square Feet:</strong> {property.sqFt}</p>
              <p className="text-lg mt-4">{property.description}</p>
              <button className="mt-4 bg-purple-700 text-white py-2 px-6 rounded-full shadow hover:bg-purple-800 transition duration-300">
                View Details
              </button>
            </div>
          </div>
          {index < properties.length - 1 && <hr className="my-8 border-t border-gray-300" />}
        </div>
      ))}
    </section>
  );
};

export default PropertyList;
