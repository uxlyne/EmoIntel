import React from 'react';
import './EmotionalInput.css';

const EmotionalInput = ({ setCoreEmotion, setMiddleEmotion, setOuterEmotion }) => {
  return (
    <div className="controls">
      <div>
        <label>Core Emotion Color:</label>
        <input
          type="color"
          onChange={(e) => setCoreEmotion(e.target.value)}
        />
      </div>
      <div>
        <label>Middle Emotion Color:</label>
        <input
          type="color"
          onChange={(e) => setMiddleEmotion(e.target.value)}
        />
      </div>
      <div>
        <label>Outer Emotion Color:</label>
        <input
          type="color"
          onChange={(e) => setOuterEmotion(e.target.value)}
        />
      </div>
    </div>
  );
};

export default EmotionalInput;



