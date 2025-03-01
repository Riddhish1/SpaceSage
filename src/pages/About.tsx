import React, { useContext } from 'react';
import { Github, Star, Rocket } from 'lucide-react';
import { ThemeContext } from '../App';

const About = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          About SpaceSage
        </h1>

        <div className="grid gap-8">
          <div className="bg-black bg-opacity-50 rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Rocket className="w-6 h-6 mr-2 text-blue-400" />
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              SpaceSage combines cutting-edge machine learning with astronomical data to unlock the mysteries of the cosmos. 
              Our tools help researchers and space enthusiasts analyze galaxies, study celestial movements, and explore potential 
              habitable worlds across the universe.
            </p>
          </div>

          <div className="bg-black bg-opacity-50 rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Github className="w-6 h-6 mr-2 text-purple-400" />
              Open Source
            </h2>
            <p className="text-gray-300 mb-4">
              SpaceSage is proudly open source. We believe in the power of community collaboration to advance space exploration 
              and scientific discovery.
            </p>
            <a
              href="https://github.com/Riddhish1/SpaceSage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              <Github className="w-4 h-4 mr-2 floating" />
              View on GitHub
            </a>
          </div>

          <div className="bg-black bg-opacity-50 rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Star className="w-6 h-6 mr-2 text-yellow-400" />
              Future Improvements
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-400 mr-3"></div>
                <p className="text-gray-300">Enhanced ML models with improved accuracy and broader galaxy classification capabilities</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-purple-400 mr-3"></div>
                <p className="text-gray-300">Real-time collaboration features for researchers and astronomers</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-pink-400 mr-3"></div>
                <p className="text-gray-300">Integration with major telescope databases for live data analysis</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-green-400 mr-3"></div>
                <p className="text-gray-300">Advanced visualization tools for complex astronomical data</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
