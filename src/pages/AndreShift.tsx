import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const AndreShift = () => {
  const [distance, setDistance] = useState('');
  const [velocity, setVelocity] = useState('');
  const [result, setResult] = useState<'approaching' | 'receding' | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const waveRef = useRef<HTMLDivElement>(null);

  const handlePredict = async () => {
    setIsPredicting(true);
    try {
      const payload = {
        distance: parseFloat(distance),
        velocity: parseFloat(velocity),
      };

      const response = await fetch('http://localhost:8000/predict_motion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (data.motion) {
        setResult(data.motion.toLowerCase() === 'approaching' ? 'approaching' : 'receding');
      } else {
        setResult(null);
      }
    } catch (error) {
      setResult(null);
    } finally {
      setIsPredicting(false);
    }
  };

  useEffect(() => {
    if (isPredicting && waveRef.current) {
      (waveRef.current as HTMLDivElement).classList.add('expanding-wave');
    } else if (waveRef.current) {
      (waveRef.current as HTMLDivElement).classList.remove('expanding-wave');
    }
  }, [isPredicting]);

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-600">
          AndreShift Calculator
        </h1>

        <div className="bg-black bg-opacity-50 rounded-xl p-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Distance from Andromeda (kpc)
              </label>
              <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-500 text-white holographic-input"
                placeholder="Enter distance..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Radial Velocity (km/sec)
              </label>
              <input
                type="number"
                value={velocity}
                onChange={(e) => setVelocity(e.target.value)}
                className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-500 text-white holographic-input"
                placeholder="Enter velocity..."
              />
            </div>
          </div>

          <button
            onClick={handlePredict}
            disabled={!distance || !velocity || isPredicting}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 neon-button relative overflow-hidden ${
              distance && velocity
                ? 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700'
                : 'bg-gray-600 cursor-not-allowed'
            }`}
          >
            {isPredicting ? 'Predicting...' : 'Calculate Movement'}
            <div className="absolute top-0 left-0 w-full h-full" ref={waveRef}></div>
          </button>

          {result && (
            <div className="mt-8">
              <div className="relative bg-black/40 rounded-lg p-6 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  result === 'approaching'
                    ? 'from-blue-600/20 to-transparent'
                    : 'from-red-600/20 to-transparent'
                }`}></div>
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    {result === 'approaching' ? (
                      <ArrowLeft className="w-12 h-12 text-blue-400 animate-pulse" />
                    ) : (
                      <ArrowRight className="w-12 h-12 text-red-400 animate-pulse" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">
                    Andromeda is {result}!
                  </h3>
                  <p className="text-gray-400 text-center">
                    Based on the radial velocity of {velocity} km/s at a distance of {distance} kpc,
                    Andromeda is {result === 'approaching' ? 'moving towards' : 'moving away from'} our galaxy.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AndreShift;
