import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link } from 'react-router-dom';
import { Satellite, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const OrbitaInfo = () => {
  const { isDark } = useContext(ThemeContext);

  const orbitTypes = [
    {
      name: 'Low Earth Orbit (LEO)',
      altitude: '160-2000 km',
      uses: 'Earth observation, weather monitoring, communications'
    },
    {
      name: 'Medium Earth Orbit (MEO)',
      altitude: '2000-35786 km',
      uses: 'Navigation systems, communication networks'
    },
    {
      name: 'Geostationary Orbit (GEO)',
      altitude: '35786 km',
      uses: 'Television broadcasting, weather forecasting'
    },
    {
      name: 'Highly Elliptical Orbit (HEO)',
      altitude: 'Varies',
      uses: 'Communications, military surveillance'
    }
  ];

  return (
    <div className={`min-h-screen pt-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark ? 'text-white' : 'text-gray-900'
    }`}>
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold mb-8 text-center ${
            isDark 
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600'
              : 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800'
          }`}
        >
          Orbita Analysis System
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-xl p-8 mb-8 transition-colors duration-300 ${
            isDark ? 'bg-black/50 border border-white/10' : 'bg-white/70 border border-gray-200'
          }`}
        >
          <div className="flex items-center mb-6">
            <Satellite className="w-10 h-10 mr-4 text-blue-500" />
            <h2 className="text-2xl font-semibold">Satellite Orbit Analysis</h2>
          </div>
          
          <div className="space-y-6">
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Orbita is our advanced system for determining the optimal orbit for satellites based on their intended functionality and requirements. By analyzing the satellite's description, we can recommend the most suitable orbital path.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {orbitTypes.map((orbit, index) => (
                <motion.div
                  key={orbit.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-lg transition-colors duration-300 ${
                    isDark ? 'bg-black/30' : 'bg-white/50'
                  }`}
                >
                  <h3 className="text-lg font-semibold mb-3">{orbit.name}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                      <span>Altitude: {orbit.altitude}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></span>
                      <span>Uses: {orbit.uses}</span>
                    </li>
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <Link
                to="/orbita"
                className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isDark
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                Try Orbita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrbitaInfo;