// src/components/AgentContact.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const AgentContact = () => {
  return (
    <section className="bg-white shadow-lg rounded-lg p-8 mb-12 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <img src="https://via.placeholder.com/200" alt="Agent" className="rounded-full shadow-md mx-auto" />
      </div>
      <div className="w-full md:w-2/3 md:pl-8">
        <h2 className="text-3xl font-bold mb-4">Contact Your Agent</h2>
        <p className="text-xl mb-2"><strong>Ashley Dolan</strong></p>
        <p className="text-lg mb-2 flex items-center"><FaMapMarkerAlt className="mr-2 text-purple-700" />West Seattle</p>
        <p className="text-lg mb-2 flex items-center"><FaPhone className="mr-2 text-purple-700" />Office: 206-932-4500 x 6648</p>
        <p className="text-lg mb-2 flex items-center"><FaPhone className="mr-2 text-purple-700" />Direct: 206-953-9063</p>
        <p className="text-lg mb-4 flex items-center"><FaEnvelope className="mr-2 text-purple-700" /> <a href="mailto:ashleydolan@bhhsnwrealestate.com" className="text-purple-600 hover:underline">ashleydolan@bhhsnwrealestate.com</a></p>
        <button className="bg-purple-700 text-white py-2 px-6 rounded-full shadow hover:bg-purple-800 transition duration-300">
          Send a Message
        </button>
      </div>
    </section>
  );
};

export default AgentContact;
