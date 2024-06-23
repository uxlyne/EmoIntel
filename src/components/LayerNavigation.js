import React from 'react';
import './LayerNavigation.css'; // Ensure this is imported

const layers = [
  'Physical Layer',
  'Energy Layer',
  'Emotional Layer',
  'Mental Layer',
  'Social Layer',
  'Identity Layer',
  'Spiritual Layer',
  'Life Plan Layer'
];

const LayerNavigation = ({ selectedLayer, setSelectedLayer }) => {
  return (
    <div className="layer-navigation">
      {layers.map((layer, index) => (
        <div
          key={index}
          className={`layer-dot ${selectedLayer === index ? 'active' : ''}`}
          onClick={() => setSelectedLayer(index)}
          data-layer={layer}
        ></div>
      ))}
    </div>
  );
};

export default LayerNavigation;






