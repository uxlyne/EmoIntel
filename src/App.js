import React, { useState, useEffect } from 'react';
import { useTheme } from './contexts/ThemeContext'; // Ensure the correct path
import EmotionalInput from './components/EmotionalInput';
import LayerNavigation from './components/LayerNavigation';
import ChatInterface from './components/ChatInterface';
import TitleBar from './components/TitleBar';
import PhysicalLayer from './components/PhysicalLayer';
import EnergyLayer from './components/EnergyLayer';
import EmotionalLayer from './components/EmotionalLayer';
import MentalLayer from './components/MentalLayer';
import SocialLayer from './components/SocialLayer';
import IdentityLayer from './components/IdentityLayer';
import SpiritualLayer from './components/SpiritualLayer';
import LifePlanLayer from './components/LifePlanLayer';
import './App.css';
import './components/LayerNavigation.css';
import './components/EmotionalInput.css';

const layerDetails = [
  { name: 'Physical Layer', description: 'This is the physical layer' },
  { name: 'Energy Layer', description: 'This is the energy layer' },
  { name: 'Emotional Layer', description: 'This is the emotional layer' },
  { name: 'Mental Layer', description: 'This is the mental layer' },
  { name: 'Social Layer', description: 'This is the social layer' },
  { name: 'Identity Layer', description: 'This is the identity layer' },
  { name: 'Spiritual Layer', description: 'This is the spiritual layer' },
  { name: 'Life Plan Layer', description: 'This is the life plan layer' }
];

const App = () => {
  const [coreEmotion, setCoreEmotion] = useState('#ff6a6a');
  const [middleEmotion, setMiddleEmotion] = useState('#66ccff');
  const [outerEmotion, setOuterEmotion] = useState('#cc99ff');
  const [selectedLayer, setSelectedLayer] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const renderLayerVisual = () => {
    switch (selectedLayer) {
      case 0:
        return <PhysicalLayer />;
      case 1:
        return <EnergyLayer />;
      case 2:
        return <EmotionalLayer coreEmotion={coreEmotion} middleEmotion={middleEmotion} outerEmotion={outerEmotion} />;
      case 3:
        return <MentalLayer />;
      case 4:
        return <SocialLayer />;
      case 5:
        return <IdentityLayer />;
      case 6:
        return <SpiritualLayer />;
      case 7:
        return <LifePlanLayer />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <TitleBar />
      <div className="main-content">
        <ChatInterface />
        <div className="preview-section">
          <LayerNavigation selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer} />
          <div className="aura-container">
            {renderLayerVisual()}
          </div>
          <EmotionalInput
            setCoreEmotion={setCoreEmotion}
            setMiddleEmotion={setMiddleEmotion}
            setOuterEmotion={setOuterEmotion}
            layerDetails={layerDetails}
            selectedLayer={selectedLayer}
          />
        </div>
      </div>
    </div>
  );
};

export default App;







































