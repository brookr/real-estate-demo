// src/App.jsx
import React from 'react';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import PropertyDetails from './components/PropertyDetails';
import MarketTrends from './components/MarketTrends';
import PropertyList from './components/PropertyList';
import AgentContact from './components/AgentContact';

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
