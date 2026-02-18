'use client';

import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Loader2 className="w-12 h-12 text-green-600 animate-spin mb-4" />
      <p className="text-lg text-gray-600">Processing your prediction...</p>
      <p className="text-sm text-gray-500 mt-2">This may take a moment</p>
    </div>
  );
}
