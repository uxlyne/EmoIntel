import React from 'react';
import './AuraVisualizer.css';

const AuraVisualizer = ({ coreEmotion, middleEmotion, outerEmotion }) => {
  return (
    <div className="container">
      <div className="glass-dome">
        <div
          className="aura-core"
          style={{ backgroundColor: coreEmotion }}
        ></div>
        <div
          className="aura-middle"
          style={{ backgroundColor: middleEmotion }}
        ></div>
        <div
          className="aura-outer"
          style={{ backgroundColor: outerEmotion }}
        ></div>
        <div className="particles"></div>
      </div>
    </div>
  );
};

export default AuraVisualizer;





