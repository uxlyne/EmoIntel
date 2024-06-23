import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import './EmotionalInput.css';

const layerDetails = [
  { name: 'Physical Layer', description: 'Health and sensations.' },
  { name: 'Energy Layer', description: 'Energetic blueprint and vitality.' },
  { name: 'Emotional Layer', description: 'Emotions and feelings.' },
  { name: 'Mental Layer', description: 'Thoughts and beliefs.' },
  { name: 'Social Layer', description: 'Relationships and connections.' },
  { name: 'Blueprint Layer', description: 'Spiritual template and purpose.' },
  { name: 'Intuition Layer', description: 'Intuition and higher consciousness.' },
  { name: 'Purpose Layer', description: 'Connection to the divine and higher self.' }
];

const EmotionalInput = ({ setCoreEmotion, setMiddleEmotion, setOuterEmotion, selectedLayer }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { name, description } = layerDetails[selectedLayer];

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="controls">
      <button className="toggle-button" onClick={toggleVisibility}>
        <FaInfoCircle size={20} />
      </button>
      {isVisible && (
        <div className="info-section">
          <div className="layer-info">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
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
      )}
    </div>
  );
};

export default EmotionalInput;






