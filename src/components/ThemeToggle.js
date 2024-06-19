import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {theme === 'light' ? (
        <svg className="icon sun" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" />
          <g stroke="currentColor" strokeLinecap="round" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
      ) : (
        <svg className="icon moon" viewBox="0 0 24 24">
          <path d="M21.64 13.37A9 9 0 0 1 12.71 2a1 1 0 0 0-.91 1.45 7 7 0 1 0 9.76 9.76 1 1 0 0 0 1.45-.91 8.95 8.95 0 0 1-1.37 1.07z" />
        </svg>
      )}
    </div>
  );
};

export default ThemeToggle;

