// src/App.jsx
import React from 'react';
import Header from './components/Header';
import PropertyDetails from './components/PropertyDetails';
import MarketTrends from './components/MarketTrends';
import AgentContact from './components/AgentContact';
import WelcomeMessage from './components/WelcomeMessage';
import PropertyList from './components/PropertyList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <WelcomeMessage />
        <PropertyDetails />
        <MarketTrends />
        <PropertyList />
        <AgentContact />
      </main>
    </div>
  );
}

export default App;
