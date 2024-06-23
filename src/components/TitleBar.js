import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './TitleBar.css';

const TitleBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="title-bar">
      <div className="theme-toggle-container">
        <button onClick={toggleTheme} className={`theme-toggle-button ${theme === 'dark' ? 'dark' : 'light'}`}>
          <div className="toggle-icon">
            {theme === 'dark' ? '🌙' : '☀️'}
          </div>
        </button>
      </div>
      <h1>Emotional Support Guide</h1>
    </div>
  );
};

export default TitleBar;





