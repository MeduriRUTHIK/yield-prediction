'use client';

import { useState } from 'react';
import { PredictForm } from '@/components/forms/PredictForm';
import { ResultCards, WeatherCard, SoilCard } from '@/components/results/ResultCards';
import { YieldComparisonChart, FeatureImportanceChart } from '@/components/results/Charts';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { PredictionResult } from '@/lib/types';
import { useLanguage } from '@/lib/contexts/LanguageContext';

export default function PredictPage() {
  const { t } = useLanguage();
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (predictionResult: PredictionResult) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate a brief loading state for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      setResult(predictionResult);
    } catch (err) {
      setError('An error occurred while processing your prediction');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleError = (err: unknown) => {
    setIsLoading(false);
    
    if (err instanceof Error) {
      // Handle specific error messages
      if (err.message.includes('401')) {
        setError('Authentication failed. Please try again.');
      } else if (err.message.includes('404')) {
        setError('The prediction service is unavailable. Please try again later.');
      } else if (err.message.includes('500')) {
        setError('Server error. Please try again later.');
      } else {
        setError(err.message || 'An error occurred. Please try again.');
      }
    } else {
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.predict.title}
          </h1>
          <p className="text-lg text-gray-600">
            {t.predict.form.submit}
          </p>
        </div>

        {/* Form Section */}
        <div className="mb-12">
          <PredictForm
            onSubmit={handleFormSubmit}
            isLoading={isLoading}
            error={error}
          />
        </div>

        {/* Results Section */}
        {isLoading ? (
          <LoadingSpinner />
        ) : result ? (
          <div className="space-y-8">
            {/* Location Info */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Crop</p>
                  <p className="text-lg font-semibold text-gray-900">{result.crop}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Season</p>
                  <p className="text-lg font-semibold text-gray-900">{result.season}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Year</p>
                  <p className="text-lg font-semibold text-gray-900">{result.year}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-lg font-semibold text-gray-900">
                    ({result.latitude.toFixed(2)}, {result.longitude.toFixed(2)})
                  </p>
                </div>
              </div>
            </div>

            {/* Result Cards */}
            <ResultCards result={result} />

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <YieldComparisonChart result={result} />
              <FeatureImportanceChart result={result} />
            </div>

            {/* Weather and Soil Cards */}
            <div className="space-y-8">
              <WeatherCard result={result} />
              <SoilCard result={result} />
            </div>

            {/* New Prediction Button */}
            <div className="text-center">
              <button
                onClick={() => {
                  setResult(null);
                  setError(null);
                }}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition shadow-lg"
              >
                Make Another Prediction
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
