import React, { useState, useRef, useEffect } from 'react';
import { Plane as Planet } from 'lucide-react';

interface PlanetaryParams {
  galaxyName: string;
  co2: string;
  o2: string;
  n2: string;
  h2o: string;
  pressure: string;
  albedo: string;
  temperature: string;
  greenhouse: string;
}

interface HabitabilityResult {
  habitable: boolean;
  reason: string;
  percentage: number;
}

const ExoHabit = () => {
  const [params, setParams] = useState<PlanetaryParams>({
    galaxyName: '',
    co2: '',
    o2: '',
    n2: '',
    h2o: '',
    pressure: '',
    albedo: '',
    temperature: '',
    greenhouse: ''
  });

  const [result, setResult] = useState<HabitabilityResult | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const planetRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePredict = async () => {
    setIsPredicting(true);
    try {
      const payload = {
        CO2: parseFloat(params.co2),
        O2: parseFloat(params.o2),
        N2: parseFloat(params.n2),
        H2O: parseFloat(params.h2o),
        Pressure: parseFloat(params.pressure),
        Albedo: parseFloat(params.albedo),
        Temperature: parseFloat(params.temperature),
        Greenhouse: parseFloat(params.greenhouse)
      };

      const response = await fetch('http://localhost:8000/predict_habitability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (data.habitability_score !== undefined) {
        const score = data.habitability_score;
        setResult({
          habitable: score > 0.5,
          reason: score > 0.5
            ? "Conditions are within acceptable ranges for potential life"
            : "Extreme conditions make life unlikely",
          percentage: score
        });
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
    if (result && planetRef.current) {
      // Basic hologram effect (you can enhance this with more sophisticated CSS)
      planetRef.current.style.animation = 'hologram-spin 5s linear infinite';
    } else if (planetRef.current) {
      planetRef.current.style.animation = '';
    }
  }, [result]);

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-600">
          ExoHabit Analysis
        </h1>

        <div className="bg-black bg-opacity-50 rounded-xl p-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Galaxy Name
              </label>
              <input
                type="text"
                name="galaxyName"
                value={params.galaxyName}
                onChange={handleInputChange}
                className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-500 text-white holographic-input"
                placeholder="Enter galaxy name..."
                disabled={isPredicting}
              />
            </div>
            
            {[
              { label: 'CO₂ Percentage', name: 'co2', unit: '%' },
              { label: 'O₂ Percentage', name: 'o2', unit: '%' },
              { label: 'N₂ Percentage', name: 'n2', unit: '%' },
              { label: 'H₂O Percentage', name: 'h2o', unit: '%' },
              { label: 'Atmospheric Pressure', name: 'pressure', unit: 'atm' },
              { label: 'Albedo', name: 'albedo', unit: '' },
              { label: 'Temperature', name: 'temperature', unit: 'K' },
              { label: 'Greenhouse Effect', name: 'greenhouse', unit: 'K' }
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {field.label} {field.unit && `(${field.unit})`}
                </label>
                <input
                  type="number"
                  name={field.name}
                  value={params[field.name as keyof PlanetaryParams]}
                  onChange={handleInputChange}
                  className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-500 text-white holographic-input"
                  placeholder={`Enter ${field.label.toLowerCase()}...`}
                  step="any"
                  disabled={isPredicting}
                />
              </div>
            ))}
          </div>

          <button
            onClick={handlePredict}
            disabled={!params.galaxyName || isPredicting}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 neon-button relative overflow-hidden ${
              params.galaxyName
                ? 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700'
                : 'bg-gray-600 cursor-not-allowed'
            }`}
          >
            {isPredicting ? 'Analyzing...' : 'Analyze Habitability'}
          </button>

          {result && (
            <div className="mt-8">
              <div className={`relative bg-black/40 rounded-lg p-6 overflow-hidden ${
                result.habitable ? 'border-green-500/30' : 'border-red-500/30'
              } border`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  result.habitable
                    ? 'from-green-600/20 to-transparent'
                    : 'from-red-600/20 to-transparent'
                }`}></div>
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div ref={planetRef}>
                      <Planet className={`w-12 h-12 ${
                        result.habitable ? 'text-green-400' : 'text-red-400'
                      } animate-pulse`} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">
                    {result.habitable ? 'Potentially Habitable!' : 'Not Habitable'}
                  </h3>
                  <p className="text-gray-400 text-center">{result.reason}</p>
                  <p className="text-gray-400 text-center mt-2">
                    Habitability: {(result.percentage).toFixed(2)}%
                  </p>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-black/30 p-3 rounded">
                      <span className="block text-gray-400">Temperature Range</span>
                      <span className="font-medium">
                        {params.temperature ? `${params.temperature}K` : 'N/A'} 
                        {params.greenhouse ? ` ± ${params.greenhouse}K` : ''}
                      </span>
                    </div>
                    <div className="bg-black/30 p-3 rounded">
                      <span className="block text-gray-400">Atmosphere</span>
                      <span className="font-medium">
                        {params.pressure ? `${params.pressure} atm` : 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExoHabit;
