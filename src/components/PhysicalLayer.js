import React from 'react';
import './PhysicalLayer.css';

const PhysicalLayer = () => {
  return (
    <div className="physical-layer">
      <h2>Physical Layer</h2>
      <div className="aura-container">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle className="aura" cx="100" cy="100" r="80" />
        </svg>
      </div>
    </div>
  );
};

export default PhysicalLayer;




