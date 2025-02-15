import React, { useState } from 'react';
import { Satellite } from 'lucide-react';
import { motion } from 'framer-motion';

const Orbita = () => {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState<{ orbit_class: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePredict = async () => {
    setLoading(true);
    setError('');
    setResult(null);
    
    try {
      const response = await fetch('http://localhost:8000/predict_orbit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description })
      });
      
      if (!response.ok) {
        throw new Error('Failed to get a prediction');
      }

      const data = await response.json();
      setResult({ orbit_class: data.orbit_class });
    } catch (err) {
      setError('Error fetching prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600"
        >
          Orbita Analyzer
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-black bg-opacity-50 rounded-xl p-8 border border-white/10"
        >
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Satellite Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-32 bg-black/40 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500 text-white resize-none"
              placeholder="Enter satellite description, functionality, and requirements..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePredict}
            disabled={!description || loading}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
              description
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                : 'bg-gray-600 cursor-not-allowed'
            }`}
          >
            {loading ? 'Analyzing...' : 'Analyze Orbit'}
          </motion.button>

          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <div className="relative bg-black/40 rounded-lg p-6 overflow-hidden border border-indigo-500/30">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <Satellite className="w-12 h-12 text-indigo-400 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">
                    Predicted Orbit: {result.orbit_class}
                  </h3>
                  <p className="text-gray-400 text-center">Orbit classification based on description</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Orbita;