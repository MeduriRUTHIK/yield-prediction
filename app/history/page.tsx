'use client';

import { useEffect, useState } from 'react';
import { getHistory, HistoryItem } from '@/lib/api';
import { PredictionsTable } from '@/components/history/PredictionsTable';

export default function HistoryPage() {
  const [predictions, setPredictions] = useState<HistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        setIsLoading(true);
        const data = await getHistory();
        setPredictions(data);
        setError(null);
      } catch (err) {
        console.error('Error loading history:', err);
        setError(
          err instanceof Error ? err.message : 'Failed to load prediction history'
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prediction History
          </h1>
          <p className="text-lg text-gray-600">
            View all crop yield predictions made across the platform
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <p className="text-sm text-gray-600">Total Predictions</p>
            <p className="text-3xl font-bold text-green-600">{predictions.length}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <p className="text-sm text-gray-600">Average Confidence</p>
            <p className="text-3xl font-bold text-blue-600">
              {predictions.length > 0
                ? (
                    predictions.reduce((sum, p) => sum + p.confidence, 0) /
                    predictions.length
                  ).toFixed(1)
                : '--'}
              %
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <p className="text-sm text-gray-600">Unique Crops</p>
            <p className="text-3xl font-bold text-orange-600">
              {new Set(predictions.map((p) => p.crop)).size}
            </p>
          </div>
        </div>

        {/* Table */}
        <PredictionsTable
          predictions={predictions}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
}
