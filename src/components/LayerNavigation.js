import React from 'react';
import './LayerNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faBolt, faHeart, faBrain, faUsers, faUserTag, faPrayingHands, faMap } from '@fortawesome/free-solid-svg-icons';

const layers = [
  { name: 'Physical Layer', icon: faLayerGroup },
  { name: 'Energy Layer', icon: faBolt },
  { name: 'Emotional Layer', icon: faHeart },
  { name: 'Mental Layer', icon: faBrain },
  { name: 'Social Layer', icon: faUsers },
  { name: 'Identity Layer', icon: faUserTag },
  { name: 'Spiritual Layer', icon: faPrayingHands },
  { name: 'Life Plan Layer', icon: faMap }
];

const LayerNavigation = ({ selectedLayer, setSelectedLayer }) => {
  return (
    <div className="sidebar-navigation">
      {layers.map((layer, index) => (
        <div
          key={index}
          className={`sidebar-item ${selectedLayer === index ? 'active' : ''}`}
          onClick={() => setSelectedLayer(index)}
        >
          <FontAwesomeIcon icon={layer.icon} className="layer-icon" />
          <span className="layer-label">{layer.name}</span>
        </div>
      ))}
    </div>
  );
};

export default LayerNavigation;












