import React from 'react';
import './SocialLayer.css';

const SocialLayer = () => {
  return (
    <div className="container">
      <div className="glass-dome">
        <div className="node node-1"></div>
        <div className="node node-2"></div>
        <div className="node node-3"></div>
        <div className="node node-4"></div>
        <div className="connection connection-1"></div>
        <div className="connection connection-2"></div>
        <div className="connection connection-3"></div>
        <div className="connection connection-4"></div>
        <div className="particles"></div>
      </div>
    </div>
  );
};

export default SocialLayer;
