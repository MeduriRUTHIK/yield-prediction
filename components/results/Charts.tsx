'use client';

import { PredictionResult } from '@/lib/types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface ChartsProps {
  result: PredictionResult;
}

export function YieldComparisonChart({ result }: ChartsProps) {
  const data = [
    {
      name: 'Yield',
      Predicted: result.predicted_yield,
      Historical: result.historical_yield,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Predicted vs Historical Yield
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Yield (kg/ha)', angle: -90, position: 'insideLeft' }} />
          <Tooltip
            formatter={(value) => `${(value as number).toFixed(2)} kg/ha`}
            contentStyle={{ borderRadius: '8px', border: 'none' }}
          />
          <Legend />
          <Bar dataKey="Predicted" fill="#10b981" radius={[8, 8, 0, 0]} />
          <Bar dataKey="Historical" fill="#f59e0b" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function FeatureImportanceChart({ result }: ChartsProps) {
  // Sort feature importance by value and get top 6
  const sortedFeatures = Object.entries(result.feature_importance)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, value]) => ({
      name: name.replace(/__/g, ' ').replace(/^num__/, '').replace(/_/g, ' '),
      importance: (value * 100).toFixed(2),
      importanceNum: value * 100,
    }));

  const data = sortedFeatures;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Feature Importance (Top Factors)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 250, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={240} />
          <Tooltip
            formatter={(value) => `${(value as number).toFixed(1)}%`}
            contentStyle={{ borderRadius: '8px', border: 'none' }}
          />
          <Bar dataKey="importanceNum" fill="#3b82f6" radius={[0, 8, 8, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
