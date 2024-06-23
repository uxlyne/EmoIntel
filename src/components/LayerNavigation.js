// src/components/LayerNavigation.js
import React from 'react';
import './LayerNavigation.css';

const LayerNavigation = ({ selectedLayer, setSelectedLayer }) => {
  const layers = [
    'Etheric Body', 
    'Emotional Body', 
    'Mental Body', 
    'Astral Body',
    'Etheric Template',
    'Celestial Body',
    'Ketheric Template',
    'Causal Body'
  ];

  return (
    <div className="layer-navigation">
      {layers.map((layer, index) => (
        <div
          key={index}
          className={`layer-dot ${selectedLayer === index ? 'active' : ''}`}
          onClick={() => setSelectedLayer(index)}
        />
      ))}
    </div>
  );
};

export default LayerNavigation;

