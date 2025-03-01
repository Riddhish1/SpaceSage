import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link } from 'react-router-dom';
import { Salad as GalaxySpiral, ArrowRight } from 'lucide-react';

const GalaxyInfo = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen pt-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark ? 'text-white' : 'text-gray-900'
    }`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 text-center ${
          isDark 
            ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600'
            : 'bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-800'
        }`}>
          Galaxy Classification System
        </h1>

        <div className={`rounded-xl p-8 mb-8 transition-colors duration-300 ${
          isDark ? 'bg-black/50 border border-white/10' : 'bg-white/70 border border-gray-200'
        }`}>
          <div className="flex items-center mb-6">
            <GalaxySpiral className="w-10 h-10 mr-4 text-purple-500" />
            <h2 className="text-2xl font-semibold">How It Works</h2>
          </div>
          
          <div className="space-y-6">
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Our Galaxy Classification System uses state-of-the-art machine learning to analyze and classify galaxies based on their morphological features. The system can identify:
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: 'Spiral Galaxies', desc: 'Characterized by spiral arms and central bulge' },
                { type: 'Elliptical Galaxies', desc: 'Smooth, featureless appearance' },
                { type: 'Lenticular Galaxies', desc: 'Disk without spiral arms' },
                { type: 'Irregular Galaxies', desc: 'No definite shape or structure' },
                { type: 'Round Elliptical', desc: 'Nearly circular shape with little elongation' },
                { type: 'In-between Elliptical', desc: 'Intermediate shape between round and cigar-like' },
                { type: 'Cigar-shaped Elliptical', desc: 'Highly elongated elliptical structure' },
                { type: 'Edge-on Spiral', desc: 'Spiral galaxy viewed from the side' },
                { type: 'Unbarred Spiral', desc: 'Spiral galaxy without a central bar' },
                { type: 'Barred Spiral', desc: 'Spiral galaxy with a prominent central bar' }
              ].map((galaxy) => (
                <li key={galaxy.type} className={`p-4 rounded-lg transition-colors duration-300 ${
                  isDark ? 'bg-black/30' : 'bg-white/50'
                }`}>
                  <h3 className="font-semibold mb-2">{galaxy.type}</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {galaxy.desc}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                to="/galaxy-classifier"
                className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 neon-button ${
                  isDark
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-purple-500 hover:bg-purple-600 text-white'
                }`}
              >
                Try the Classifier
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalaxyInfo;
