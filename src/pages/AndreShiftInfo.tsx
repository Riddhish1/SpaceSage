import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link } from 'react-router-dom';
import { Orbit, ArrowRight } from 'lucide-react';

const AndreShiftInfo = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen pt-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark ? 'text-white' : 'text-gray-900'
    }`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 text-center ${
          isDark 
            ? 'bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-600'
            : 'bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-800'
        }`}>
          AndreShift Analysis System
        </h1>

        <div className={`rounded-xl p-8 mb-8 transition-colors duration-300 ${
          isDark ? 'bg-black/50 border border-white/10' : 'bg-white/70 border border-gray-200'
        }`}>
          <div className="flex items-center mb-6">
            <Orbit className="w-10 h-10 mr-4 text-red-500" />
            <h2 className="text-2xl font-semibold">Understanding Galactic Movement</h2>
          </div>
          
          <div className="space-y-6">
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              The AndreShift system analyzes the movement patterns of the Andromeda galaxy relative to our Milky Way. By measuring radial velocity and distance, we can determine whether Andromeda is approaching or receding from us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-lg transition-colors duration-300 ${
                isDark ? 'bg-black/30' : 'bg-white/50'
              }`}>
                <h3 className="text-lg font-semibold mb-3">Key Parameters</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                    <span>Distance from Andromeda (kpc)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-pink-500 mr-2"></span>
                    <span>Radial Velocity (km/sec)</span>
                  </li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg transition-colors duration-300 ${
                isDark ? 'bg-black/30' : 'bg-white/50'
              }`}>
                <h3 className="text-lg font-semibold mb-3">Movement Analysis</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                    <span>Negative velocity = Approaching</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                    <span>Positive velocity = Receding</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/andre-shift"
                className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 neon-button ${
                  isDark
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-red-500 hover:bg-red-600 text-white'
                }`}
              >
                Try AndreShift
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndreShiftInfo;
