import React, { useState } from 'react';
import './EmotionalInput.css';

const EmotionalInput = ({ setCoreEmotion, setMiddleEmotion, setOuterEmotion }) => {
  const [core, setCore] = useState('#ff6a6a');
  const [middle, setMiddle] = useState('#66ccff');
  const [outer, setOuter] = useState('#cc99ff');

  const handleCoreChange = (e) => {
    setCore(e.target.value);
    setCoreEmotion(e.target.value);
  };

  const handleMiddleChange = (e) => {
    setMiddle(e.target.value);
    setMiddleEmotion(e.target.value);
  };

  const handleOuterChange = (e) => {
    setOuter(e.target.value);
    setOuterEmotion(e.target.value);
  };

  return (
    <div className="emotional-input">
      <label>
        Core Emotion Color:
        <input type="color" value={core} onChange={handleCoreChange} />
      </label>
      <label>
        Middle Emotion Color:
        <input type="color" value={middle} onChange={handleMiddleChange} />
      </label>
      <label>
        Outer Emotion Color:
        <input type="color" value={outer} onChange={handleOuterChange} />
      </label>
    </div>
  );
};

export default EmotionalInput;

