import React, { useState } from 'react';
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

const App = () => {
  const [coreEmotion, setCoreEmotion] = useState('#ff6a6a');
  const [middleEmotion, setMiddleEmotion] = useState('#66ccff');
  const [outerEmotion, setOuterEmotion] = useState('#cc99ff');
  const [selectedLayer, setSelectedLayer] = useState(0); // Default to PhysicalLayer

  const renderLayerVisual = () => {
    console.log('Rendering layer:', selectedLayer);
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
            selectedLayer={selectedLayer} // Pass selectedLayer to EmotionalInput
          />
        </div>
      </div>
    </div>
  );
};

export default App;



































