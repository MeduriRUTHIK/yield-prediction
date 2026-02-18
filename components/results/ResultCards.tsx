'use client';

import { PredictionResult } from '@/lib/types';
import { Zap, Droplets, Thermometer, Leaf } from 'lucide-react';

interface ResultCardsProps {
  result: PredictionResult;
}

export function ResultCards({ result }: ResultCardsProps) {
  // Calculate confidence indicator
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600';
    if (confidence >= 75) return 'text-blue-600';
    if (confidence >= 60) return 'text-yellow-600';
    return 'text-orange-600';
  };

  // Format yield range
  const [minYield, maxYield] = result.yield_range;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Main Prediction Card */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-600 rounded-lg p-3">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-gray-900">Predicted Yield</h3>
        </div>
        <p className="text-4xl font-bold text-green-700 mb-2">
          {result.predicted_yield.toFixed(2)}
        </p>
        <p className="text-sm text-gray-600">kg/ha</p>
      </div>

      {/* Confidence Card */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-600 rounded-lg p-3">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-gray-900">Confidence</h3>
        </div>
        <p className={`text-4xl font-bold mb-2 ${getConfidenceColor(result.confidence)}`}>
          {result.confidence.toFixed(2)}%
        </p>
        <p className="text-sm text-gray-600">Model Accuracy</p>
      </div>

      {/* Historical Yield Card */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-orange-600 rounded-lg p-3">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-gray-900">Historical Avg</h3>
        </div>
        <p className="text-4xl font-bold text-orange-700 mb-2">
          {result.historical_yield.toFixed(2)}
        </p>
        <p className="text-sm text-gray-600">kg/ha</p>
      </div>

      {/* Yield Range Card */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-600 rounded-lg p-3">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-gray-900">Expected Range</h3>
        </div>
        <p className="text-sm text-gray-600 mb-2">Min - Max</p>
        <p className="text-2xl font-bold text-purple-700">
          {minYield.toFixed(0)} - {maxYield.toFixed(0)}
        </p>
      </div>
    </div>
  );
}

export function WeatherCard({ result }: ResultCardsProps) {
  const { weather_data } = result;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Thermometer className="w-6 h-6 text-blue-600" />
        Weather Conditions
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <p className="text-sm text-gray-600 mb-2">Average Temperature</p>
          <p className="text-3xl font-bold text-blue-600">
            {weather_data.avg_temperature.toFixed(1)}°C
          </p>
        </div>

        <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200">
          <p className="text-sm text-gray-600 mb-2">Average Rainfall</p>
          <p className="text-3xl font-bold text-cyan-600">
            {weather_data.avg_rainfall.toFixed(1)} mm
          </p>
        </div>

        <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
          <p className="text-sm text-gray-600 mb-2">Average Humidity</p>
          <p className="text-3xl font-bold text-emerald-600">
            {weather_data.avg_humidity.toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
}

export function SoilCard({ result }: ResultCardsProps) {
  const { soil_data } = result;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Droplets className="w-6 h-6 text-orange-600" />
        Soil Properties
      </h3>

      <div className="bg-orange-50 rounded-lg p-8 border border-orange-200 text-center">
        <p className="text-sm text-gray-600 mb-3">Soil pH Level</p>
        <p className="text-5xl font-bold text-orange-600 mb-3">
          {soil_data.soil_ph.toFixed(2)}
        </p>
        <p className="text-xs text-gray-600">
          {soil_data.soil_ph < 6.5
            ? 'Slightly acidic'
            : soil_data.soil_ph > 7.5
              ? 'Slightly alkaline'
              : 'Neutral'}
        </p>
      </div>
    </div>
  );
}
