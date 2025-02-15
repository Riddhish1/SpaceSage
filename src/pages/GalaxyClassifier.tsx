import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

const GalaxyClassifier = () => {
  const [image, setImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const scanLineRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePredict = async () => {
    if (!selectedFile) return;
    setIsPredicting(true);
    if (scanLineRef.current) {
      scanLineRef.current.classList.add('laser-scan');
    }

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('http://localhost:8000/predict_galaxy_shape', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.galaxy_shape) {
        setPrediction(data.galaxy_shape);
      } else {
        setPrediction("Error: " + data.error);
      }
    } catch (error) {
      setPrediction("Error during prediction");
    } finally {
      setIsPredicting(false);
      if (scanLineRef.current) {
        scanLineRef.current.classList.remove('laser-scan');
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
          Galaxy Classifier
        </h1>
        
        <div className="bg-black bg-opacity-50 rounded-xl p-8 border border-white/10">
          <div className="mb-8">
            <div className="flex items-center justify-center w-full">
              <label className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:border-blue-400 border-white/20 bg-black/20 transition-all duration-300 ${
                  image ? 'opacity-50 hover:opacity-50 cursor-default' : 'opacity-100'
                }`}>
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {image ? (
                    <img src={image} alt="Uploaded galaxy" className="max-h-48 object-contain" />
                  ) : (
                    <>
                      <Upload className="w-12 h-12 mb-4 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-400">PNG, JPG or WEBP (MAX. 800x400px)</p>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isPredicting}
                />
              </label>
            </div>
          </div>

          <button
            onClick={handlePredict}
            disabled={!image || isPredicting}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 neon-button relative overflow-hidden ${
              image
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                : 'bg-gray-600 cursor-not-allowed'
            }`}
          >
            {isPredicting ? 'Analyzing...' : 'Predict Galaxy Type'}
            <div ref={scanLineRef} className="absolute inset-0"></div>
          </button>

          {prediction && (
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Prediction Result</h3>
              <p className="text-xl text-blue-400">{prediction} Galaxy</p>
              <div className="mt-4 p-4 bg-black/40 rounded-lg">
                <p className="text-gray-400">
                  This galaxy appears to be a {prediction.toLowerCase()} type galaxy based on its morphological features.
                  {prediction === 'Spiral' && ' Notice the distinctive spiral arms and central bulge.'}
                  {prediction === 'Elliptical' && ' The smooth, elliptical shape is characteristic of this classification.'}
                  {prediction === 'Irregular' && ' The lack of regular structure suggests an irregular classification.'}
                  {prediction === 'Lenticular' && ' The presence of a disk without spiral arms is typical of lenticular galaxies.'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalaxyClassifier;
