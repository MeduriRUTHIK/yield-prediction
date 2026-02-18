'use client';

import { HistoryItem } from '@/lib/api';
import { Calendar, AlertCircle } from 'lucide-react';

interface PredictionsTableProps {
  predictions: HistoryItem[];
  isLoading: boolean;
  error: string | null;
}

export function PredictionsTable({
  predictions,
  isLoading,
  error,
}: PredictionsTableProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex gap-3">
        <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
        <div>
          <p className="font-semibold text-red-900">Error loading history</p>
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (predictions.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-12 text-center">
        <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-xl font-semibold text-gray-600 mb-2">No predictions yet</p>
        <p className="text-gray-500">
          Make your first crop yield prediction to see it appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Timestamp
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Crop
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Season
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Year
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Location
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Predicted Yield (kg/ha)
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Confidence
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {predictions.map((prediction, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 text-sm text-gray-900">
                  {new Date(prediction.timestamp).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {prediction.crop}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {prediction.season}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {prediction.year}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  ({prediction.latitude.toFixed(2)}, {prediction.longitude.toFixed(2)})
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-green-600">
                  {prediction.predicted_yield.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-6 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-green-500"
                        style={{
                          width: `${prediction.confidence}%`,
                        }}
                      ></div>
                    </div>
                    <span
                      className={`text-xs font-semibold ${
                        prediction.confidence >= 90
                          ? 'text-green-600'
                          : prediction.confidence >= 75
                            ? 'text-blue-600'
                            : 'text-orange-600'
                      }`}
                    >
                      {prediction.confidence.toFixed(1)}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
