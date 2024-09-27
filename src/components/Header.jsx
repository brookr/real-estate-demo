// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-extrabold mb-4 font-serif">Your Dream Property Awaits</h1>
        <p className="text-2xl mb-8 font-light">Discover personalized investment opportunities curated just for you.</p>
        <button className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
