import React, { useState } from 'react';
import AreaChartComponent from './AreaChartComponent';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showGrid, setShowGrid] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleGrid = () => {
    setShowGrid(!showGrid);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <button
        className={`mb-4 p-2 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500`}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
      <button
        className={`mb-4 p-2 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500`}
        onClick={toggleGrid}
      >
        Toggle Grid
      </button>
      <AreaChartComponent isDarkMode={isDarkMode} showGrid={showGrid} />
    </div>
  );
}

export default App;
