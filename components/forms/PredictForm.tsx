'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getCrops, predictYield } from '@/lib/api';
import { PredictionRequest, PredictionResult } from '@/lib/types';
import { AlertCircle, Loader2 } from 'lucide-react';

interface PredictFormProps {
  onSubmit: (result: PredictionResult) => void;
  isLoading: boolean;
  error: string | null;
}

interface FormData {
  crop: string;
  season: string;
  latitude: string;
  longitude: string;
  year: string;
}

export function PredictForm({ onSubmit, isLoading, error }: PredictFormProps) {
  const [crops, setCrops] = useState<string[]>([]);
  const [cropsLoading, setCropsLoading] = useState(true);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    defaultValues: {
      crop: '',
      season: 'Kharif',
      latitude: '',
      longitude: '',
      year: String(new Date().getFullYear()),
    },
  });

  // Load crops on mount
  useEffect(() => {
    const loadCrops = async () => {
      try {
        console.log("[v0] Starting to load crops...");
        const cropList = await getCrops();
        console.log("[v0] Crops loaded in component:", cropList);
        setCrops(cropList);
      } catch (err) {
        console.error('[v0] Error loading crops:', err);
        setCrops([]);
      } finally {
        setCropsLoading(false);
      }
    };

    loadCrops();
  }, []);

  const onFormSubmit = async (data: FormData) => {
    try {
      const request: PredictionRequest = {
        crop: data.crop,
        season: data.season,
        latitude: parseFloat(data.latitude),
        longitude: parseFloat(data.longitude),
        year: parseInt(data.year),
        country: 'India',
      };

      const result = await predictYield(request);
      onSubmit(result);
    } catch (err) {
      console.error('Prediction error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Crop Yield Prediction Form</h2>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-800">{error}</p>
        </div>
      )}

      <div className="space-y-6">
        {/* Crop Dropdown */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Crop <span className="text-red-500">*</span>
          </label>
          <select
            {...register('crop', { required: 'Crop is required' })}
            disabled={cropsLoading || isLoading}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="">Select a crop...</option>
            {crops.map((crop) => (
              <option key={crop} value={crop}>
                {crop}
              </option>
            ))}
          </select>
          {errors.crop && (
            <p className="text-red-600 text-sm mt-1">{errors.crop.message}</p>
          )}
        </div>

        {/* Season Dropdown */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Season <span className="text-red-500">*</span>
          </label>
          <select
            {...register('season', { required: 'Season is required' })}
            disabled={isLoading}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="Kharif">Kharif (Monsoon)</option>
            <option value="Rabi">Rabi (Winter)</option>
          </select>
          {errors.season && (
            <p className="text-red-600 text-sm mt-1">{errors.season.message}</p>
          )}
        </div>

        {/* Latitude and Longitude */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Latitude <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              step="any"
              placeholder="e.g., 17.3850"
              {...register('latitude', {
                required: 'Latitude is required',
                pattern: {
                  value: /^-?[0-9]+\.?[0-9]*$/,
                  message: 'Invalid latitude',
                },
              })}
              disabled={isLoading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            {errors.latitude && (
              <p className="text-red-600 text-sm mt-1">{errors.latitude.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Longitude <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              step="any"
              placeholder="e.g., 78.4867"
              {...register('longitude', {
                required: 'Longitude is required',
                pattern: {
                  value: /^-?[0-9]+\.?[0-9]*$/,
                  message: 'Invalid longitude',
                },
              })}
              disabled={isLoading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            {errors.longitude && (
              <p className="text-red-600 text-sm mt-1">{errors.longitude.message}</p>
            )}
          </div>
        </div>

        {/* Year Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Year <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            min="2000"
            max="2100"
            {...register('year', {
              required: 'Year is required',
              pattern: {
                value: /^[0-9]{4}$/,
                message: 'Enter a valid year',
              },
            })}
            disabled={isLoading}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          {errors.year && (
            <p className="text-red-600 text-sm mt-1">{errors.year.message}</p>
          )}
        </div>

        {/* Country (Info only) */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Country
          </label>
          <input
            type="text"
            value="India"
            disabled
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
          />
          <p className="text-xs text-gray-500 mt-1">Currently supporting India</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || cropsLoading}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
        >
          {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
          {isLoading ? 'Predicting...' : 'Predict Yield'}
        </button>
      </div>
    </form>
  );
}
