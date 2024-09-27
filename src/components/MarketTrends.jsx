// src/components/MarketTrends.jsx
import React from 'react';

const MarketTrends = () => {
  return (
    <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Market Snapshot</h2>
      <div className="grid md:grid-cols-2 gap-6 text-center">
        <div>
          <p className="text-6xl font-extrabold text-purple-700 mb-2">0</p>
          <p className="text-lg">New Property Listings in Last 14 Days</p>
        </div>
        <div>
          <p className="text-6xl font-extrabold text-purple-700 mb-2">2</p>
          <p className="text-lg">Recently Sold Properties</p>
        </div>
      </div>
      {/* Additional market information can be added here */}
    </section>
  );
};

export default MarketTrends;
