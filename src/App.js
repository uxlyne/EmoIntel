import React, { useState } from 'react';
import AuraVisualizer from './components/AuraVisualizer';
import EmotionalInput from './components/EmotionalInput';
import LayerNavigation from './components/LayerNavigation';
import ChatInterface from './components/ChatInterface';
import TitleBar from './components/TitleBar';
import './App.css';

const App = () => {
  const [coreEmotion, setCoreEmotion] = useState('#ff6a6a');
  const [middleEmotion, setMiddleEmotion] = useState('#66ccff');
  const [outerEmotion, setOuterEmotion] = useState('#cc99ff');
  const [selectedLayer, setSelectedLayer] = useState(0);

  return (
    <div className="App">
      <TitleBar />
      <div className="main-content">
        <ChatInterface />
        <div className="preview-section">
          <LayerNavigation selectedLayer={selectedLayer} setSelectedLayer={setSelectedLayer} />
          <div className="aura-container">
            <AuraVisualizer
              coreEmotion={coreEmotion}
              middleEmotion={middleEmotion}
              outerEmotion={outerEmotion}
            />
          </div>
          <EmotionalInput
            setCoreEmotion={setCoreEmotion}
            setMiddleEmotion={setMiddleEmotion}
            setOuterEmotion={setOuterEmotion}
          />
        </div>
      </div>
    </div>
  );
};

export default App;




















