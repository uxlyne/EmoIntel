import React, { useState } from 'react';
import AuraVisualizer from './components/AuraVisualizer';
import EmotionalInput from './components/EmotionalInput';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const [coreEmotion, setCoreEmotion] = useState('#ff6a6a');
  const [middleEmotion, setMiddleEmotion] = useState('#66ccff');
  const [outerEmotion, setOuterEmotion] = useState('#cc99ff');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.className = theme === 'light' ? 'dark-mode' : 'light-mode';
  };

  return (
    <div className={`App ${theme}`}>
      <h1>Emotional Aura</h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="content">
        <EmotionalInput
          setCoreEmotion={setCoreEmotion}
          setMiddleEmotion={setMiddleEmotion}
          setOuterEmotion={setOuterEmotion}
        />
        <AuraVisualizer
          coreEmotion={coreEmotion}
          middleEmotion={middleEmotion}
          outerEmotion={outerEmotion}
        />
      </div>
    </div>
  );
};

export default App;






