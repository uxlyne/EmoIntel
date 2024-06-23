import React from 'react';
import './EnergyLayer.css';

const EnergyLayer = () => {
  return (
    <div className="container">
      <div className="glass-dome">
        <div
          className="aura-core"
          style={{ backgroundColor: 'rgba(255, 255, 0, 0.7)' }}
        ></div>
        <div
          className="aura-middle"
          style={{ backgroundColor: 'rgba(255, 255, 0, 0.5)' }}
        ></div>
        <div
          className="aura-outer"
          style={{ backgroundColor: 'rgba(255, 165, 0, 0.3)' }}
        ></div>
        <div className="particles"></div>
      </div>
    </div>
  );
};

export default EnergyLayer;

