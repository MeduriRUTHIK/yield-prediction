// API Response Types for Crop Yield Prediction System

export interface WeatherData {
  avg_temperature: number;
  avg_rainfall: number;
  avg_humidity: number;
}

export interface SoilData {
  soil_ph: number;
}

export interface FeatureImportance {
  [key: string]: number;
}

export interface PredictionRequest {
  latitude: number;
  longitude: number;
  crop: string;
  season: string;
  year: number;
  country: string;
}

export interface PredictionResult {
  country: string;
  crop: string;
  season: string;
  year: number;
  latitude: number;
  longitude: number;
  predicted_yield: number;
  confidence: number;
  yield_range: [number, number];
  historical_yield: number;
  weather_data: WeatherData;
  soil_data: SoilData;
  feature_importance: FeatureImportance;
}

export interface HistoryItem {
  timestamp: string;
  country: string;
  crop: string;
  season: string;
  year: number;
  latitude: number;
  longitude: number;
  predicted_yield: number;
  confidence: number;
}

export interface CropsResponse {
  crops: string[];
}

export interface HistoryResponse {
  history: HistoryItem[];
}
