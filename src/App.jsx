// src/App.jsx (Using Symbolic Icons)

import React, { useState, useEffect } from 'react';
import BioPage from './BioPage.jsx';
import AthleticPage from './AthleticPage.jsx'; 

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSpeedMode, setIsSpeedMode] = useState(false); 

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkMode);
    document.body.classList.toggle("speed-mode", isSpeedMode);
  }, [isDarkMode, isSpeedMode]);

  const PageComponent = isSpeedMode ? AthleticPage : BioPage;

  const toggleSpeed = () => setIsSpeedMode(prev => !prev);
  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <>
      {/* This panel is positioned top-right via CSS */}
      <div className="controls-panel circle-group">
          <button
            className={`control-circle speed-page-toggle ${isSpeedMode ? 'active' : ''}`}
            onClick={toggleSpeed}
            title={isSpeedMode ? 'Switch to Bio (Normal Mode)' : 'Switch to Athletic (Speed Mode)'}
          >
            {isSpeedMode ? '👤' : '⚡'}
          </button>

          <button
            className="control-circle theme-toggle"
            onClick={toggleTheme}
            title="Toggle Dark/Light theme"
          >
            {isDarkMode ? "☀" : "🌙"}
          </button>
      </div>

      <PageComponent isSpeedMode={isSpeedMode} /> 
    </>
  );
}