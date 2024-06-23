import React from 'react';
import './MentalLayer.css';

const MentalLayer = () => {
  return (
    <div className="mental-layer">
      <h2>Mental Layer</h2>
      <div className="mental-words">
        <span className="word" style={{ color: '#FF6347' }}>Thought</span>
        <span className="word" style={{ color: '#4682B4' }}>Idea</span>
        <span className="word" style={{ color: '#32CD32' }}>Concept</span>
        <span className="word" style={{ color: '#FFD700' }}>Mind</span>
        <span className="word" style={{ color: '#8A2BE2' }}>Logic</span>
      </div>
    </div>
  );
};

export default MentalLayer;


