import React from 'react';
import './PhysicalLayer.css'; // Existing layer-specific CSS
import '../App.css'; // Import the main App.css

const PhysicalLayer = () => {
  return (
    <div className="container">
      <div className="glass-dome">
        <div className="aura-core"></div>
        <div className="aura-middle"></div>
        <div className="aura-outer"></div>
        <div className="particles"></div>
      </div>
    </div>
  );
};

export default PhysicalLayer;






