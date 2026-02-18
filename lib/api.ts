import {
  CropsResponse,
  HistoryResponse,
  PredictionRequest,
  PredictionResult,
} from './types';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

/**
 * Fetch available crops from the backend
 */
export async function getCrops(): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/crops`);
    if (!response.ok) {
      throw new Error(`Failed to fetch crops: ${response.statusText}`);
    }
    const data: CropsResponse = await response.json();
    return data.crops;
  } catch (error) {
    console.error('Error fetching crops:', error);
    throw error;
  }
}

/**
 * Predict crop yield based on input parameters
 */
export async function predictYield(
  request: PredictionRequest
): Promise<PredictionResult> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.detail || `Prediction failed: ${response.statusText}`
      );
    }

    const data: PredictionResult = await response.json();
    return data;
  } catch (error) {
    console.error('Error predicting yield:', error);
    throw error;
  }
}

/**
 * Fetch prediction history from the backend
 */
export async function getHistory(): Promise<HistoryItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/history`);
    if (!response.ok) {
      throw new Error(`Failed to fetch history: ${response.statusText}`);
    }
    const data: HistoryResponse = await response.json();
    return data.history;
  } catch (error) {
    console.error('Error fetching history:', error);
    throw error;
  }
}

export { HistoryItem } from './types';
