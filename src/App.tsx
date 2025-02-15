import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GalaxyClassifier from './pages/GalaxyClassifier';
import AndreShift from './pages/AndreShift';
import ExoHabit from './pages/ExoHabit';
import Orbita from './pages/Orbita';
import About from './pages/About';
import GalaxyInfo from './pages/GalaxyInfo';
import AndreShiftInfo from './pages/AndreShiftInfo';
import ExoHabitInfo from './pages/ExoHabitInfo';
import OrbitaInfo from './pages/OrbitaInfo';

export const ThemeContext = createContext({ isDark: true, toggleTheme: () => {} });

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Router>
        <div className={`min-h-screen transition-colors duration-300 ${
          isDark ? 'bg-space text-white' : 'bg-gradient-to-b from-blue-100 to-white text-gray-900'
        }`}>
          <div className={`stars ${!isDark && 'opacity-30'}`}></div>
          <div className={`twinkling ${!isDark && 'opacity-30'}`}></div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galaxy-classifier" element={<GalaxyClassifier />} />
            <Route path="/andre-shift" element={<AndreShift />} />
            <Route path="/exo-habit" element={<ExoHabit />} />
            <Route path="/orbita" element={<Orbita />} />
            <Route path="/about" element={<About />} />
            <Route path="/galaxy-info" element={<GalaxyInfo />} />
            <Route path="/andre-shift-info" element={<AndreShiftInfo />} />
            <Route path="/exo-habit-info" element={<ExoHabitInfo />} />
            <Route path="/orbita-info" element={<OrbitaInfo />} />
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;