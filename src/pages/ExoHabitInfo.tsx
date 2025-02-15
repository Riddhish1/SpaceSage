import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link } from 'react-router-dom';
import { Plane as Planet, ArrowRight } from 'lucide-react';

const ExoHabitInfo = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen pt-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark ? 'text-white' : 'text-gray-900'
    }`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 text-center ${
          isDark 
            ? 'bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-600'
            : 'bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-800'
        }`}>
          ExoHabit Analysis System
        </h1>

        <div className={`rounded-xl p-8 mb-8 transition-colors duration-300 ${
          isDark ? 'bg-black/50 border border-white/10' : 'bg-white/70 border border-gray-200'
        }`}>
          <div className="flex items-center mb-6">
            <Planet className="w-10 h-10 mr-4 text-green-500" />
            <h2 className="text-2xl font-semibold">Planetary Habitability Analysis</h2>
          </div>
          
          <div className="space-y-6">
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              ExoHabit is our advanced system for analyzing the potential habitability of exoplanets. By examining various atmospheric and environmental parameters, we can assess whether a planet might support life as we know it.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-lg transition-colors duration-300 ${
                isDark ? 'bg-black/30' : 'bg-white/50'
              }`}>
                <h3 className="text-lg font-semibold mb-3">Atmospheric Parameters</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                    <span>CO₂ Percentage</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                    <span>O₂ Percentage</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-cyan-500 mr-2"></span>
                    <span>H₂O Percentage</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                    <span>Atmospheric Pressure</span>
                  </li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg transition-colors duration-300 ${
                isDark ? 'bg-black/30' : 'bg-white/50'
              }`}>
                <h3 className="text-lg font-semibold mb-3">Environmental Factors</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                    <span>Surface Temperature</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
                    <span>Greenhouse Effect</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-teal-500 mr-2"></span>
                    <span>Albedo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/exo-habit"
                className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 neon-button ${
                  isDark
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                Try ExoHabit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExoHabitInfo;
