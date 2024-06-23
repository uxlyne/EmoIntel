import React from 'react';
import './LayerInfoBox.css'; // Ensure you have a CSS file for styling

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

const LayerInfoBox = ({ selectedLayer }) => {
  const { name, description } = layerDetails[selectedLayer];
  return (
    <div className="layer-info-box">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default LayerInfoBox;

